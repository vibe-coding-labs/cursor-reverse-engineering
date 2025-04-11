This is a plan to implement initializing a user's new repo index by copying an existing similar index from the same "sharing
domain" as the user (either the user's team, or just the user themselves).

When implementing this plan, pause after each step and wait for a code review.  Once it is approved, commit it to git and check
off the step in this document.

1. [x] Extend the existing fastinithandshakev2 rpc in the repository proto file to allow sending a similarity metric to the server.
       Our first similarity metric should be a vector of float32s (known as a simhash), but we should futureproof the protocol by
       allowing different types of metrics in the future.

2. [x] When the client sends this handshake request, it should use the merkle tree simhash function to populate this
       similarity metric.  Note that this is a rust function that we will need to be calling from typescript code.

3. [x] When the server processes this handshake request and makes a brand new codebase, and stealing is enabled for the user,
       it should use the vector service to query the nearest neighbors of the given similarity metric (if provided).  Query
       a vector namespace combining the sharing domain of the user with the name of the similarity metric being used (e.g.,
       simhash), retrieving the vector ID for each result (in this case, the vector ID will be the existing codebase's UUID). If
       it gets at least one result with a distance metric lower than some threshold (this should be a new config.ts flag), log the
       codebase UUID of the result and increment a new metric to track how often we find a hit.  We should also track this entire
       operation in a span.

4. [x] Add a new copyFromCodebase operation to the server's vector service for sending a query vector upsert call for a given
       codebase UUID namespace, with a given existing codebase UUID as the `copy_from_namespace` parameter to the upsert call.
       This only needs to be implemented for turbopuffer; other vector service types can error.  This call should include metrics,
       spans and error handling like other vector service calls.

5. [x] Back in the handshake processing, the server should call this new copyFromCodebase operation if it found a result in
       step 3, to copy all the vectors from the existing similar codebase to the new one.

6. [x] After a successful vector copy, we next need to copy all data from the old codebase's "partial path" and "local file" DB
       entries for the new codebase.  We need metrics and spans for this.

7. [x] Next we add the similarity metric to the fast repo complete request as well.  The client should send this (along with type
       of metric) as part of the complete handshake.

8. [x] When the server receives a complete request including this metric, and stealing is enabled for the user, it upserts the
       vector into the similarity namespace for that sharing domain (the same namespace queried in step 3), using the codebase
       UUID as the vector ID.

9. [x] The client should look in `.cursor/keys` at the root of the workspace for a JSON formatted data structure, and see if it
       includes a "path_encryption_key" entry in the JSON dictionary with a string value.  If it exists, the client should use
       that key instead of the normal path encryption key for all repo operations. The client should also compute a hash of the
       key concatenated with a context string (like "_PATH_KEY_HASH_" + name of the hash algorithm), and include that hash in the
       handshake request along with an enum of the type of hash being used (add a new field in the request for it), and also in
       the completion request.

10. [x] The server should only search vectors for a candidate to copy if the user included the path key hash in their handshake
        request.  It should use a "path_key_hash"  and "path_key_hash_type" attribute filter on its query.  It should also include
        the key hash and hash type as attributes when processing the completion request.

Known inefficiencies:
* The similarity metric might be out of date by the time the client completes the repo sync, but this is fine.
  It should be close enough to work for nearest neighbor queries until it gets fixed up by a later sync.

Items to implement/consider at a later date:
* [ ] Take a read lock on the existing codebase during the copy operations, to prevent writes during the copy.  Maybe this is
  done with a DB codebase column for now, or possibly it's a redis thing.
* [ ] Consider edge cases like what happens with partial vector copies -- are these idempotent?
* [x] Clean up similarity vector on codebase deletion.
* [ ] Figure out a UX for creating/commiting path keys at the root of the workspace.
* [ ] Do not index `.cursor/keys`.
* [ ] See how long the copy process takes on big repos, and potentially make the copy asynchronous, with a way for the client
  to poll for status.
* [x] Make sure the regions used for the namespace and DB are the same between both codebases.
* [ ] Should we worry about aborts/crashes during the DB copy, or are we ok with a full copy on the second try or index delete?

