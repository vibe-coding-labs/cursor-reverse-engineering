"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b17ac2c0-caac-5a94-9321-651f44907927")}catch(e){}}();
(function(){const{ipcRenderer:o,webFrame:n,contextBridge:s}=require("electron");function t(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}const i={ipcRenderer:{send(e,...r){t(e)&&o.send(e,...r)},invoke(e,...r){return t(e),o.invoke(e,...r)}},webFrame:{setZoomLevel(e){typeof e=="number"&&n.setZoomLevel(e)}}};try{s.exposeInMainWorld("vscode",i)}catch(e){console.error(e)}})();

//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/7801a556824585b7f2721900066bc87c4a09b740/core/vs/base/parts/sandbox/electron-sandbox/preload-aux.js.map

//# debugId=b17ac2c0-caac-5a94-9321-651f44907927
