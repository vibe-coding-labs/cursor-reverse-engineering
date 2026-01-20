/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "ae1b73cd-cbe2-5091-bf03-b5b51ddd6c66"));
  } catch (e) {}
})();
(function () {
  const f = window.vscode,
    y = f.process;
  async function b(s, e) {
    const t = await B();
    e?.beforeImport?.(t);
    const {
      enableDeveloperKeybindings: i,
      removeDeveloperKeybindingsAfterLoad: c,
      developerDeveloperKeybindingsDisposable: a,
      forceDisableShowDevtoolsOnError: d,
    } = S(t, e);
    l(t);
    const o = new URL(
      `${u(t.appRoot, { isWindows: y.platform === "win32", scheme: "vscode-file", fallbackAuthority: "vscode-app" })}/out/`,
    );
    (globalThis._VSCODE_FILE_ROOT = o.toString()), m(t, o);
    try {
      let n;
      return (
        (n = await import(new URL(`${s}.js`, o).href)),
        a && c && a(),
        { result: n, configuration: t }
      );
    } catch (n) {
      throw (p(n, i && !d), n);
    }
  }
  async function B() {
    const s = setTimeout(() => {
      console.error(
        "[resolve window config] Could not resolve window configuration within 10 seconds, but will continue to wait...",
      );
    }, 1e4);
    performance.mark("code/willWaitForWindowConfig");
    const e = await f.context.resolveConfiguration();
    return performance.mark("code/didWaitForWindowConfig"), clearTimeout(s), e;
  }
  function S(s, e) {
    const {
        forceEnableDeveloperKeybindings: t,
        disallowReloadKeybinding: i,
        removeDeveloperKeybindingsAfterLoad: c,
        forceDisableShowDevtoolsOnError: a,
      } = typeof e?.configureDeveloperSettings == "function"
        ? e.configureDeveloperSettings(s)
        : {
            forceEnableDeveloperKeybindings: !1,
            disallowReloadKeybinding: !1,
            removeDeveloperKeybindingsAfterLoad: !1,
            forceDisableShowDevtoolsOnError: !1,
          },
      o = !!(!!y.env.VSCODE_DEV || t);
    let n;
    return (
      o && (n = r(i)),
      {
        enableDeveloperKeybindings: o,
        removeDeveloperKeybindingsAfterLoad: c,
        developerDeveloperKeybindingsDisposable: n,
        forceDisableShowDevtoolsOnError: a,
      }
    );
  }
  function r(s) {
    const e = f.ipcRenderer,
      t = function (o) {
        return [
          o.ctrlKey ? "ctrl-" : "",
          o.metaKey ? "meta-" : "",
          o.altKey ? "alt-" : "",
          o.shiftKey ? "shift-" : "",
          o.keyCode,
        ].join("");
      },
      i = y.platform === "darwin" ? "meta-alt-73" : "ctrl-shift-73",
      c = "123",
      a = y.platform === "darwin" ? "meta-82" : "ctrl-82";
    let d = function (o) {
      const n = t(o);
      n === i || n === c
        ? e.send("vscode:toggleDevTools")
        : n === a && !s && e.send("vscode:reloadWindow");
    };
    return (
      window.addEventListener("keydown", d),
      function () {
        d && (window.removeEventListener("keydown", d), (d = void 0));
      }
    );
  }
  function l(s) {
    (globalThis._VSCODE_NLS_MESSAGES = s.nls.messages),
      (globalThis._VSCODE_NLS_LANGUAGE = s.nls.language);
    let e = s.nls.language || "en";
    e === "zh-tw" ? (e = "zh-Hant") : e === "zh-cn" && (e = "zh-Hans"),
      window.document.documentElement.setAttribute("lang", e);
  }
  function p(s, e) {
    e && f.ipcRenderer.send("vscode:openDevTools"),
      console.error(`[uncaught exception]: ${s}`),
      s && typeof s != "string" && s.stack && console.error(s.stack);
  }
  function u(s, e) {
    let t = s.replace(/\\/g, "/");
    t.length > 0 && t.charAt(0) !== "/" && (t = `/${t}`);
    let i;
    return (
      e.isWindows && t.startsWith("//")
        ? (i = encodeURI(`${e.scheme || "file"}:${t}`))
        : (i = encodeURI(
            `${e.scheme || "file"}://${e.fallbackAuthority || ""}${t}`,
          )),
      i.replace(/#/g, "%23")
    );
  }
  function m(s, e) {
    if (s.cssModules && s.cssModules.size > 0) {
      performance.mark("code/willAddCssLoader"),
        (globalThis._VSCODE_CSS_LOAD = function (h, g, k) {
          const v = document.createElement("link");
          (v.rel = "stylesheet"),
            (v.href = h + "?hash=" + k),
            (v.type = "text/css"),
            (v.media = "screen"),
            (v.id = g.replace(".css", "")),
            document.head.appendChild(v);
        });
      const t = { imports: {} };
      (t.imports["solid-refresh"] = new URL(
        "../node_modules/solid-refresh/dist/solid-refresh.mjs",
        e,
      ).href),
        (t.imports["@solid-devtools/overlay"] = new URL(
          "../node_modules/@solid-devtools/overlay/dist/index.js",
          e,
        ).href),
        (t.imports["@solid-devtools/debugger/setup"] = new URL(
          "../node_modules/@solid-devtools/debugger/dist/setup.js",
          e,
        ).href),
        (t.imports["@solid-devtools/debugger/bundled"] = new URL(
          "../node_modules/@solid-devtools/debugger/dist/bundled.js",
          e,
        ).href),
        (t.imports["@solid-devtools/shared/utils"] = new URL(
          "../node_modules/@solid-devtools/shared/dist/utils.js",
          e,
        ).href),
        (t.imports["@nothing-but/utils"] = new URL(
          "../node_modules/@nothing-but/utils/dist/index.js",
          e,
        ).href),
        (t.imports["@nothing-but/utils/num"] = new URL(
          "../node_modules/@nothing-but/utils/dist/num.js",
          e,
        ).href),
        (t.imports["solid-js"] = new URL("./external/solid/solid.js", e).href),
        (t.imports["solid-js/store"] = new URL(
          "./external/solid/store.js",
          e,
        ).href);
      const i = s.cssModules,
        c = new Map(
          Array.from(i, ([h, g]) => [h, { hash: g, url: new URL(h, e).href }]),
        ),
        a = `
				const cssMapping = ${JSON.stringify(Object.fromEntries(c))};
				const url = new URL(import.meta.url);
				const params = new URLSearchParams(url.hash.slice(1));
				const currentModule = params.get('module');
				const entry = cssMapping[currentModule];
				if (entry) {
					globalThis._VSCODE_CSS_LOAD(entry.url, currentModule, entry.hash);
				} else {
					console.log("[CSS_DEV] No cssModule found", currentModule)
				}
				export default {};
		`,
        d = new Blob([a], { type: "application/javascript" }),
        o = URL.createObjectURL(d);
      for (const [h, g] of s.cssModules) {
        const k = new URL(h, e).href;
        t.imports[k] = o + "#module=" + encodeURIComponent(h);
      }
      const n = window.trustedTypes?.createPolicy("vscode-bootstrapImportMap", {
          createScript(h) {
            return h;
          },
        }),
        D = JSON.stringify(t, void 0, 2),
        w = document.createElement("script");
      (w.type = "importmap"),
        w.setAttribute("nonce", "0c6a828f1297"),
        (w.textContent = n?.createScript(D) ?? D),
        document.head.appendChild(w),
        performance.mark("code/didAddCssLoader");
    }
  }
  globalThis.MonacoBootstrapWindow = { load: b };
})(),
  (async function () {
    performance.mark("code/didStartRenderer");
    const f = window.MonacoBootstrapWindow,
      y = window.vscode;
    function b(r) {
      performance.mark("code/willShowPartsSplash");
      let l = r.partsSplash;
      l &&
        (r.autoDetectHighContrast && r.colorScheme.highContrast
          ? ((r.colorScheme.dark && l.baseTheme !== "hc-black") ||
              (!r.colorScheme.dark && l.baseTheme !== "hc-light")) &&
            (l = void 0)
          : r.autoDetectColorScheme &&
            ((r.colorScheme.dark && l.baseTheme !== "vs-dark") ||
              (!r.colorScheme.dark && l.baseTheme !== "vs")) &&
            (l = void 0)),
        l && r.extensionDevelopmentPath && (l.layoutInfo = void 0);
      let p, u, m;
      l
        ? ((p = l.baseTheme),
          (u = l.colorInfo.editorBackground),
          (m = l.colorInfo.foreground))
        : r.autoDetectHighContrast && r.colorScheme.highContrast
          ? r.colorScheme.dark
            ? ((p = "hc-black"), (u = "#000000"), (m = "#FFFFFF"))
            : ((p = "hc-light"), (u = "#FFFFFF"), (m = "#000000"))
          : r.autoDetectColorScheme &&
            (r.colorScheme.dark
              ? ((p = "vs-dark"), (u = "#1E1E1E"), (m = "#CCCCCC"))
              : ((p = "vs"), (u = "#FFFFFF"), (m = "#000000")));
      const s = document.createElement("style");
      if (
        ((s.className = "initialShellColors"),
        window.document.head.appendChild(s),
        (s.textContent = `body {	background-color: ${u}; color: ${m}; margin: 0; padding: 0; }`),
        typeof l?.zoomLevel == "number" &&
          typeof y?.webFrame?.setZoomLevel == "function" &&
          y.webFrame.setZoomLevel(l.zoomLevel),
        l?.layoutInfo)
      ) {
        const { layoutInfo: e, colorInfo: t } = l,
          i = document.createElement("div");
        (i.id = "monaco-parts-splash"),
          (i.className = p ?? "vs-dark"),
          e.windowBorder &&
            t.windowBorder &&
            ((i.style.position = "relative"),
            (i.style.height = "calc(100vh - 2px)"),
            (i.style.width = "calc(100vw - 2px)"),
            (i.style.border = "1px solid var(--window-border-color)"),
            i.style.setProperty("--window-border-color", t.windowBorder),
            e.windowBorderRadius &&
              (i.style.borderRadius = e.windowBorderRadius)),
          (e.sideBarWidth = Math.min(
            e.sideBarWidth,
            window.innerWidth - (e.activityBarWidth + e.editorPartMinWidth),
          ));
        const c = document.createElement("div");
        if (
          ((c.style.position = "absolute"),
          (c.style.width = "100%"),
          (c.style.height = `${e.titleBarHeight}px`),
          (c.style.left = "0"),
          (c.style.top = "0"),
          (c.style.backgroundColor = `${t.titleBarBackground}`),
          (c.style["-webkit-app-region"] = "drag"),
          i.appendChild(c),
          t.titleBarBorder && e.titleBarHeight > 0)
        ) {
          const o = document.createElement("div");
          (o.style.position = "absolute"),
            (o.style.width = "100%"),
            (o.style.height = "1px"),
            (o.style.left = "0"),
            (o.style.bottom = "0"),
            (o.style.borderBottom = `1px solid ${t.titleBarBorder}`),
            c.appendChild(o);
        }
        const a = document.createElement("div");
        if (
          ((a.style.position = "absolute"),
          (a.style.width = `${e.activityBarWidth}px`),
          (a.style.height = `calc(100% - ${e.titleBarHeight + e.statusBarHeight}px)`),
          (a.style.top = `${e.titleBarHeight}px`),
          e.sideBarSide === "left"
            ? (a.style.left = "0")
            : (a.style.right = "0"),
          (a.style.backgroundColor = `${t.activityBarBackground}`),
          i.appendChild(a),
          t.activityBarBorder && e.activityBarWidth > 0)
        ) {
          const o = document.createElement("div");
          (o.style.position = "absolute"),
            (o.style.width = "1px"),
            (o.style.height = "100%"),
            (o.style.top = "0"),
            e.sideBarSide === "left"
              ? ((o.style.right = "0"),
                (o.style.borderRight = `1px solid ${t.activityBarBorder}`))
              : ((o.style.left = "0"),
                (o.style.borderLeft = `1px solid ${t.activityBarBorder}`)),
            a.appendChild(o);
        }
        if (r.workspace) {
          const o = document.createElement("div");
          if (
            ((o.style.position = "absolute"),
            (o.style.width = `${e.sideBarWidth}px`),
            (o.style.height = `calc(100% - ${e.titleBarHeight + e.statusBarHeight}px)`),
            (o.style.top = `${e.titleBarHeight}px`),
            e.sideBarSide === "left"
              ? (o.style.left = `${e.activityBarWidth}px`)
              : (o.style.right = `${e.activityBarWidth}px`),
            (o.style.backgroundColor = `${t.sideBarBackground}`),
            i.appendChild(o),
            t.sideBarBorder && e.sideBarWidth > 0)
          ) {
            const n = document.createElement("div");
            (n.style.position = "absolute"),
              (n.style.width = "1px"),
              (n.style.height = "100%"),
              (n.style.top = "0"),
              (n.style.right = "0"),
              e.sideBarSide === "left"
                ? (n.style.borderRight = `1px solid ${t.sideBarBorder}`)
                : ((n.style.left = "0"),
                  (n.style.borderLeft = `1px solid ${t.sideBarBorder}`)),
              o.appendChild(n);
          }
        }
        const d = document.createElement("div");
        if (
          ((d.style.position = "absolute"),
          (d.style.width = "100%"),
          (d.style.height = `${e.statusBarHeight}px`),
          (d.style.bottom = "0"),
          (d.style.left = "0"),
          r.workspace && t.statusBarBackground
            ? (d.style.backgroundColor = t.statusBarBackground)
            : !r.workspace &&
              t.statusBarNoFolderBackground &&
              (d.style.backgroundColor = t.statusBarNoFolderBackground),
          i.appendChild(d),
          t.statusBarBorder && e.statusBarHeight > 0)
        ) {
          const o = document.createElement("div");
          (o.style.position = "absolute"),
            (o.style.width = "100%"),
            (o.style.height = "1px"),
            (o.style.top = "0"),
            (o.style.borderTop = `1px solid ${t.statusBarBorder}`),
            d.appendChild(o);
        }
        window.document.body.appendChild(i);
      }
      performance.mark("code/didShowPartsSplash");
    }
    const { result: B, configuration: S } = await f.load(
      "vs/workbench/workbench.desktop.main",
      {
        configureDeveloperSettings: function (r) {
          return {
            forceDisableShowDevtoolsOnError:
              typeof r.extensionTestsPath == "string" ||
              r["enable-smoke-test-driver"] === !0,
            forceEnableDeveloperKeybindings:
              Array.isArray(r.extensionDevelopmentPath) &&
              r.extensionDevelopmentPath.length > 0,
            removeDeveloperKeybindingsAfterLoad: !0,
          };
        },
        beforeImport: function (r) {
          b(r),
            Object.defineProperty(window, "vscodeWindowId", {
              get: () => r.windowId,
            }),
            window.requestIdleCallback(
              () => {
                const l = document.createElement("canvas");
                l.getContext("2d")?.clearRect(0, 0, l.width, l.height),
                  l.remove();
              },
              { timeout: 50 },
            ),
            performance.mark("code/willLoadWorkbenchMain");
        },
      },
    );
    performance.mark("code/didLoadWorkbenchMain"), B.main(S);
  })();

//# sourceMappingURL=https://cursor-sourcemaps.s3.amazonaws.com/sourcemaps/7801a556824585b7f2721900066bc87c4a09b740/core/vs/code/electron-sandbox/workbench/workbench.js.map

//# debugId=ae1b73cd-cbe2-5091-bf03-b5b51ddd6c66
