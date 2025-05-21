function _createForOfIteratorHelper(r, e) {
  var t = ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length
            ? {
                done: !0,
              }
            : {
                done: !1,
                value: r[_n++],
              };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t['return'] || t['return']();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          ? _arrayLikeToArray(r, a)
          : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _regeneratorRuntime() {
  'use strict';

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return r;
  };
  var t,
    r = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    o = 'function' == typeof Symbol ? Symbol : {},
    i = o.iterator || '@@iterator',
    a = o.asyncIterator || '@@asyncIterator',
    u = o.toStringTag || '@@toStringTag';
  function c(t, r, e, n) {
    return Object.defineProperty(t, r, {
      value: e,
      enumerable: !n,
      configurable: !n,
      writable: !n,
    });
  }
  try {
    c({}, '');
  } catch (t) {
    c = function c(t, r, e) {
      return (t[r] = e);
    };
  }
  function h(r, e, n, o) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype);
    return (
      c(
        a,
        '_invoke',
        (function (r, e, n) {
          var o = 1;
          return function (i, a) {
            if (3 === o) throw Error('Generator is already running');
            if (4 === o) {
              if ('throw' === i) throw a;
              return {
                value: t,
                done: !0,
              };
            }
            for (n.method = i, n.arg = a; ; ) {
              var u = n.delegate;
              if (u) {
                var c = d(u, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (1 === o) throw ((o = 4), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = 3;
              var h = s(r, e, n);
              if ('normal' === h.type) {
                if (((o = n.done ? 4 : 2), h.arg === f)) continue;
                return {
                  value: h.arg,
                  done: n.done,
                };
              }
              'throw' === h.type && ((o = 4), (n.method = 'throw'), (n.arg = h.arg));
            }
          };
        })(r, n, new Context(o || [])),
        !0,
      ),
      a
    );
  }
  function s(t, r, e) {
    try {
      return {
        type: 'normal',
        arg: t.call(r, e),
      };
    } catch (t) {
      return {
        type: 'throw',
        arg: t,
      };
    }
  }
  r.wrap = h;
  var f = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var l = {};
  c(l, i, function () {
    return this;
  });
  var p = Object.getPrototypeOf,
    y = p && p(p(x([])));
  y && y !== e && n.call(y, i) && (l = y);
  var v = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l));
  function g(t) {
    ['next', 'throw', 'return'].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function AsyncIterator(t, r) {
    function e(o, i, a, u) {
      var c = s(t[o], t, i);
      if ('throw' !== c.type) {
        var h = c.arg,
          f = h.value;
        return f && 'object' == _typeof(f) && n.call(f, '__await')
          ? r.resolve(f.__await).then(
              function (t) {
                e('next', t, a, u);
              },
              function (t) {
                e('throw', t, a, u);
              },
            )
          : r.resolve(f).then(
              function (t) {
                (h.value = t), a(h);
              },
              function (t) {
                return e('throw', t, a, u);
              },
            );
      }
      u(c.arg);
    }
    var o;
    c(
      this,
      '_invoke',
      function (t, n) {
        function i() {
          return new r(function (r, o) {
            e(t, n, r, o);
          });
        }
        return (o = o ? o.then(i, i) : i());
      },
      !0,
    );
  }
  function d(r, e) {
    var n = e.method,
      o = r.i[n];
    if (o === t)
      return (
        (e.delegate = null),
        ('throw' === n &&
          r.i['return'] &&
          ((e.method = 'return'), (e.arg = t), d(r, e), 'throw' === e.method)) ||
          ('return' !== n &&
            ((e.method = 'throw'),
            (e.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        f
      );
    var i = s(o, r.i, e.arg);
    if ('throw' === i.type) return (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), f;
    var a = i.arg;
    return a
      ? a.done
        ? ((e[r.r] = a.value),
          (e.next = r.n),
          'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
          (e.delegate = null),
          f)
        : a
      : ((e.method = 'throw'),
        (e.arg = new TypeError('iterator result is not an object')),
        (e.delegate = null),
        f);
  }
  function w(t) {
    this.tryEntries.push(t);
  }
  function m(r) {
    var e = r[4] || {};
    (e.type = 'normal'), (e.arg = t), (r[4] = e);
  }
  function Context(t) {
    (this.tryEntries = [[-1]]), t.forEach(w, this), this.reset(!0);
  }
  function x(r) {
    if (null != r) {
      var e = r[i];
      if (e) return e.call(r);
      if ('function' == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1,
          a = function e() {
            for (; ++o < r.length; ) if (n.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
            return (e.value = t), (e.done = !0), e;
          };
        return (a.next = a);
      }
    }
    throw new TypeError(_typeof(r) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    c(v, 'constructor', GeneratorFunctionPrototype),
    c(GeneratorFunctionPrototype, 'constructor', GeneratorFunction),
    (GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
    (r.isGeneratorFunction = function (t) {
      var r = 'function' == typeof t && t.constructor;
      return !!r && (r === GeneratorFunction || 'GeneratorFunction' === (r.displayName || r.name));
    }),
    (r.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype), c(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(v)),
        t
      );
    }),
    (r.awrap = function (t) {
      return {
        __await: t,
      };
    }),
    g(AsyncIterator.prototype),
    c(AsyncIterator.prototype, a, function () {
      return this;
    }),
    (r.AsyncIterator = AsyncIterator),
    (r.async = function (t, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(h(t, e, n, o), i);
      return r.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    g(v),
    c(v, u, 'Generator'),
    c(v, i, function () {
      return this;
    }),
    c(v, 'toString', function () {
      return '[object Generator]';
    }),
    (r.keys = function (t) {
      var r = Object(t),
        e = [];
      for (var n in r) e.unshift(n);
      return function t() {
        for (; e.length; ) if ((n = e.pop()) in r) return (t.value = n), (t.done = !1), t;
        return (t.done = !0), t;
      };
    }),
    (r.values = x),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(r) {
        if (
          ((this.prev = this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(m),
          !r)
        )
          for (var e in this)
            't' === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0][4];
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(r) {
        if (this.done) throw r;
        var e = this;
        function n(t) {
          (a.type = 'throw'), (a.arg = r), (e.next = t);
        }
        for (var o = e.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i[4],
            u = this.prev,
            c = i[1],
            h = i[2];
          if (-1 === i[0]) return n('end'), !1;
          if (!c && !h) throw Error('try statement without catch or finally');
          if (null != i[0] && i[0] <= u) {
            if (u < c) return (this.method = 'next'), (this.arg = t), n(c), !0;
            if (u < h) return n(h), !1;
          }
        }
      },
      abrupt: function abrupt(t, r) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
            var o = n;
            break;
          }
        }
        o && ('break' === t || 'continue' === t) && o[0] <= r && r <= o[2] && (o = null);
        var i = o ? o[4] : {};
        return (
          (i.type = t),
          (i.arg = r),
          o ? ((this.method = 'next'), (this.next = o[2]), f) : this.complete(i)
        );
      },
      complete: function complete(t, r) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
              ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
              : 'normal' === t.type && r && (this.next = r),
          f
        );
      },
      finish: function finish(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
        }
      },
      catch: function _catch(t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var e = this.tryEntries[r];
          if (e[0] === t) {
            var n = e[4];
            if ('throw' === n.type) {
              var o = n.arg;
              m(e);
            }
            return o;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(r, e, n) {
        return (
          (this.delegate = {
            i: x(r),
            r: e,
            n: n,
          }),
          'next' === this.method && (this.arg = t),
          f
        );
      },
    }),
    r
  );
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'next', n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'throw', n);
      }
      _next(void 0);
    });
  };
}
function _typeof(o) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', {
      writable: !1,
    }),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = 'b77557e0-440c-5594-89ec-701b27ec04f9'));
  } catch (e) {}
})();
var sw = self,
  VERSION = 4,
  resourceCacheName = 'vscode-resource-cache-'.concat(VERSION),
  rootPath = sw.location.pathname.replace(/\/service-worker.js$/, ''),
  searchParams = new URL(location.toString()).searchParams,
  remoteAuthority = searchParams.get('remoteAuthority'),
  resourceBaseAuthority = searchParams.get('vscode-resource-base-authority'),
  resolveTimeout = 3e4;
var RequestStore = /*#__PURE__*/ (function () {
  'use strict';

  function RequestStore() {
    _classCallCheck(this, RequestStore);
    (this.map = new Map()), (this.requestPool = 0);
  }
  return _createClass(RequestStore, [
    {
      key: 'create',
      value: function create() {
        var _this = this;
        var e = ++this.requestPool;
        var o;
        var s = new Promise(function (a) {
            return (o = a);
          }),
          r = {
            resolve: o,
            promise: s,
          };
        this.map.set(e, r);
        var l = setTimeout(function () {
          clearTimeout(l);
          var a = _this.map.get(e);
          if (a === r) {
            a.resolve({
              status: 'timeout',
            }),
              _this.map['delete'](e);
            return;
          }
        }, resolveTimeout);
        return {
          requestId: e,
          promise: s,
        };
      },
    },
    {
      key: 'resolve',
      value: function resolve(e, o) {
        var s = this.map.get(e);
        return s
          ? (s.resolve({
              status: 'ok',
              value: o,
            }),
            this.map['delete'](e),
            !0)
          : !1;
      },
    },
  ]);
})();
var resourceRequestStore = new RequestStore(),
  localhostRequestStore = new RequestStore(),
  unauthorized = function unauthorized() {
    return new Response('Unauthorized', {
      status: 401,
    });
  },
  notFound = function notFound() {
    return new Response('Not Found', {
      status: 404,
    });
  },
  methodNotAllowed = function methodNotAllowed() {
    return new Response('Method Not Allowed', {
      status: 405,
    });
  },
  requestTimeout = function requestTimeout() {
    return new Response('Request Timeout', {
      status: 408,
    });
  };
sw.addEventListener(
  'message',
  /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(t) {
        var e, _e, _e2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.t0 = t.data.channel;
                _context.next =
                  _context.t0 === 'version'
                    ? 3
                    : _context.t0 === 'did-load-resource'
                      ? 6
                      : _context.t0 === 'did-load-localhost'
                        ? 9
                        : 12;
                break;
              case 3:
                e = t.source;
                sw.clients.get(e.id).then(function (o) {
                  o &&
                    o.postMessage({
                      channel: 'version',
                      version: VERSION,
                    });
                });
                return _context.abrupt('return');
              case 6:
                _e = t.data.data;
                resourceRequestStore.resolve(_e.id, _e) ||
                  console.log('Could not resolve unknown resource', _e.path);
                return _context.abrupt('return');
              case 9:
                _e2 = t.data.data;
                localhostRequestStore.resolve(_e2.id, _e2.location) ||
                  console.log('Could not resolve unknown localhost', _e2.origin);
                return _context.abrupt('return');
              case 12:
                console.log('Unknown message');
                return _context.abrupt('return');
              case 14:
              case 'end':
                return _context.stop();
            }
        }, _callee);
      }),
    );
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  })(),
),
  sw.addEventListener('fetch', function (t) {
    var e = new URL(t.request.url);
    if (
      typeof resourceBaseAuthority == 'string' &&
      e.protocol === 'https:' &&
      e.hostname.endsWith('.' + resourceBaseAuthority)
    )
      switch (t.request.method) {
        case 'GET':
        case 'HEAD': {
          var o = e.hostname.slice(0, e.hostname.length - (resourceBaseAuthority.length + 1)),
            s = o.split('+', 1)[0],
            r = o.slice(s.length + 1);
          return t.respondWith(
            processResourceRequest(t, {
              scheme: s,
              authority: r,
              path: e.pathname,
              query: e.search.replace(/^\?/, ''),
            }),
          );
        }
        default:
          return t.respondWith(methodNotAllowed());
      }
    if (e.origin !== sw.origin && e.host === remoteAuthority)
      switch (t.request.method) {
        case 'GET':
        case 'HEAD':
          return t.respondWith(
            processResourceRequest(t, {
              path: e.pathname,
              scheme: e.protocol.slice(0, e.protocol.length - 1),
              authority: e.host,
              query: e.search.replace(/^\?/, ''),
            }),
          );
        default:
          return t.respondWith(methodNotAllowed());
      }
    if (e.origin !== sw.origin && e.host.match(/^(localhost|127.0.0.1|0.0.0.0):(\d+)$/))
      return t.respondWith(processLocalhostRequest(t, e));
  }),
  sw.addEventListener('install', function (t) {
    t.waitUntil(sw.skipWaiting());
  }),
  sw.addEventListener('activate', function (t) {
    t.waitUntil(sw.clients.claim());
  });
function processResourceRequest(_x2, _x3) {
  return _processResourceRequest.apply(this, arguments);
}
function _processResourceRequest() {
  _processResourceRequest = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(t, e) {
      var o, s, r, d, l, a, _resourceRequestStore, m, u, _iterator, _step, _a, i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch ((_context2.prev = _context2.next)) {
            case 0:
              _context2.next = 2;
              return sw.clients.get(t.clientId);
            case 2:
              o = _context2.sent;
              if (o) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt(
                'return',
                (console.error('Could not find inner client for request'), notFound()),
              );
            case 5:
              s = getWebviewIdForClient(o);
              if (s) {
                _context2.next = 8;
                break;
              }
              return _context2.abrupt(
                'return',
                (console.error('Could not resolve webview id'), notFound()),
              );
            case 8:
              r = t.request.method === 'GET';
              d = function d(i, g) {
                if (i.status === 'timeout') return requestTimeout();
                var n = i.value;
                if (n.status === 304) {
                  if (g) return g.clone();
                  throw new Error('No cache found');
                }
                if (n.status === 401) return unauthorized();
                if (n.status !== 200) return notFound();
                var f = {
                    'Access-Control-Allow-Origin': '*',
                  },
                  p = n.data.byteLength,
                  y = t.request.headers.get('range');
                if (y) {
                  var h = y.match(/^bytes\=(\d+)\-(\d+)?$/g);
                  if (h) {
                    var R = Number(h[1]),
                      C = Number(h[2]) || p - 1;
                    return new Response(n.data.slice(R, C + 1), {
                      status: 206,
                      headers: _objectSpread(
                        _objectSpread({}, f),
                        {},
                        {
                          'Content-range': 'bytes 0-'.concat(C, '/').concat(p),
                        },
                      ),
                    });
                  } else
                    return new Response(null, {
                      status: 416,
                      headers: _objectSpread(
                        _objectSpread({}, f),
                        {},
                        {
                          'Content-range': '*/'.concat(p),
                        },
                      ),
                    });
                }
                var c = _objectSpread(
                  _objectSpread({}, f),
                  {},
                  {
                    'Content-Type': n.mime,
                    'Content-Length': p.toString(),
                  },
                );
                n.etag && ((c.ETag = n.etag), (c['Cache-Control'] = 'no-cache')),
                  n.mtime && (c['Last-Modified'] = new Date(n.mtime).toUTCString());
                var w = new URL(t.request.url).searchParams.get('vscode-coi');
                w === '3'
                  ? ((c['Cross-Origin-Opener-Policy'] = 'same-origin'),
                    (c['Cross-Origin-Embedder-Policy'] = 'require-corp'))
                  : w === '2'
                    ? (c['Cross-Origin-Embedder-Policy'] = 'require-corp')
                    : w === '1' && (c['Cross-Origin-Opener-Policy'] = 'same-origin');
                var q = new Response(n.data, {
                  status: 200,
                  headers: c,
                });
                return (
                  r &&
                    n.etag &&
                    caches.open(resourceCacheName).then(function (h) {
                      return h.put(t.request, q);
                    }),
                  q.clone()
                );
              };
              _context2.next = 12;
              return getOuterIframeClient(s);
            case 12:
              l = _context2.sent;
              if (l.length) {
                _context2.next = 15;
                break;
              }
              return _context2.abrupt(
                'return',
                (console.log('Could not find parent client for request'), notFound()),
              );
            case 15:
              _context2.t0 = r;
              if (!_context2.t0) {
                _context2.next = 22;
                break;
              }
              _context2.next = 19;
              return caches.open(resourceCacheName);
            case 19:
              _context2.next = 21;
              return _context2.sent.match(t.request);
            case 21:
              a = _context2.sent;
            case 22:
              (_resourceRequestStore = resourceRequestStore.create()),
                (m = _resourceRequestStore.requestId),
                (u = _resourceRequestStore.promise);
              _iterator = _createForOfIteratorHelper(l);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  i = _step.value;
                  i.postMessage({
                    channel: 'load-resource',
                    id: m,
                    scheme: e.scheme,
                    authority: e.authority,
                    path: e.path,
                    query: e.query,
                    ifNoneMatch:
                      (_a = a) === null || _a === void 0 ? void 0 : _a.headers.get('ETag'),
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              return _context2.abrupt(
                'return',
                u.then(function (i) {
                  return d(i, a);
                }),
              );
            case 26:
            case 'end':
              return _context2.stop();
          }
      }, _callee2);
    }),
  );
  return _processResourceRequest.apply(this, arguments);
}
function processLocalhostRequest(_x4, _x5) {
  return _processLocalhostRequest.apply(this, arguments);
}
function _processLocalhostRequest() {
  _processLocalhostRequest = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(t, e) {
      var o, s, r, d, l, _localhostRequestStor, a, m, _iterator2, _step2, u;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1)
          switch ((_context4.prev = _context4.next)) {
            case 0:
              _context4.next = 2;
              return sw.clients.get(t.clientId);
            case 2:
              o = _context4.sent;
              if (o) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt('return', fetch(t.request));
            case 5:
              s = getWebviewIdForClient(o);
              if (s) {
                _context4.next = 8;
                break;
              }
              return _context4.abrupt(
                'return',
                (console.error('Could not resolve webview id'), fetch(t.request)),
              );
            case 8:
              r = e.origin;
              d = /*#__PURE__*/ (function () {
                var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(u) {
                    var i, g;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1)
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            if (!(u.status !== 'ok' || !u.value)) {
                              _context3.next = 2;
                              break;
                            }
                            return _context3.abrupt('return', fetch(t.request));
                          case 2:
                            (i = u.value),
                              (g = t.request.url.replace(
                                new RegExp('^'.concat(e.origin, '(/|$)')),
                                ''.concat(i, '$1'),
                              ));
                            return _context3.abrupt(
                              'return',
                              new Response(null, {
                                status: 302,
                                headers: {
                                  Location: g,
                                },
                              }),
                            );
                          case 4:
                          case 'end':
                            return _context3.stop();
                        }
                    }, _callee3);
                  }),
                );
                return function d(_x7) {
                  return _ref2.apply(this, arguments);
                };
              })();
              _context4.next = 12;
              return getOuterIframeClient(s);
            case 12:
              l = _context4.sent;
              if (l.length) {
                _context4.next = 15;
                break;
              }
              return _context4.abrupt(
                'return',
                (console.log('Could not find parent client for request'), notFound()),
              );
            case 15:
              (_localhostRequestStor = localhostRequestStore.create()),
                (a = _localhostRequestStor.requestId),
                (m = _localhostRequestStor.promise);
              _iterator2 = _createForOfIteratorHelper(l);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  u = _step2.value;
                  u.postMessage({
                    channel: 'load-localhost',
                    origin: r,
                    id: a,
                  });
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              return _context4.abrupt('return', m.then(d));
            case 19:
            case 'end':
              return _context4.stop();
          }
      }, _callee4);
    }),
  );
  return _processLocalhostRequest.apply(this, arguments);
}
function getWebviewIdForClient(t) {
  return new URL(t.url).searchParams.get('id');
}
function getOuterIframeClient(_x6) {
  return _getOuterIframeClient.apply(this, arguments);
} //# debugId=b77557e0-440c-5594-89ec-701b27ec04f9
function _getOuterIframeClient() {
  _getOuterIframeClient = _asyncToGenerator(
    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(t) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1)
          switch ((_context5.prev = _context5.next)) {
            case 0:
              _context5.next = 2;
              return sw.clients.matchAll({
                includeUncontrolled: !0,
              });
            case 2:
              return _context5.abrupt(
                'return',
                _context5.sent.filter(function (o) {
                  var s = new URL(o.url);
                  return (
                    (s.pathname === ''.concat(rootPath, '/') ||
                      s.pathname === ''.concat(rootPath, '/index.html') ||
                      s.pathname === ''.concat(rootPath, '/index-no-csp.html')) &&
                    s.searchParams.get('id') === t
                  );
                }),
              );
            case 3:
            case 'end':
              return _context5.stop();
          }
      }, _callee5);
    }),
  );
  return _getOuterIframeClient.apply(this, arguments);
}
