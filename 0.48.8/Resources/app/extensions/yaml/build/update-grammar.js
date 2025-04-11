/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

var updateGrammar = require('vscode-grammar-updater');

async function updateGrammars() {
	await updateGrammar.update('textmate/yaml.tmbundle', 'Syntaxes/YAML.tmLanguage', './syntaxes/yaml.tmLanguage.json',  undefined);
}

updateGrammars();
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="834f77fb-afc7-5085-a785-23e02b97c1f0")}catch(e){}}();
//# debugId=834f77fb-afc7-5085-a785-23e02b97c1f0
