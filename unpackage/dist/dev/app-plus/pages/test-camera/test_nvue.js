"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/_plugin-vue_export-helper.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/pages/test-camera/test_nvue.js
  var import_vue2 = __toESM(require_vue());
  var _sfc_main = {
    data() {
      return {
        ImgResponse: "Response"
      };
    },
    onReady() {
      this.context = uni.createLivePusherContext("livePusher", this);
    },
    methods: {
      statechange(e) {
        formatAppLog("log", "at pages/test-camera/test_nvue.nvue:34", "statechange:" + JSON.stringify(e));
      },
      netstatus(e) {
        formatAppLog("log", "at pages/test-camera/test_nvue.nvue:37", "netstatus:" + JSON.stringify(e));
      },
      error(e) {
        formatAppLog("log", "at pages/test-camera/test_nvue.nvue:40", "error:" + JSON.stringify(e));
      },
      start: function() {
        this.context.start({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:45", "livePusher.start:" + JSON.stringify(a));
          }
        });
      },
      close: function() {
        this.context.close({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:52", "livePusher.close:" + JSON.stringify(a));
          }
        });
      },
      snapshot: function() {
        this.context.snapshot({
          success: (e) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:59", JSON.stringify(e));
            this.ImgResponse = JSON.stringify(e);
          }
        });
      },
      resume: function() {
        this.context.resume({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:67", "livePusher.resume:" + JSON.stringify(a));
          }
        });
      },
      pause: function() {
        this.context.pause({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:74", "livePusher.pause:" + JSON.stringify(a));
          }
        });
      },
      stop: function() {
        this.context.stop({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:81", JSON.stringify(a));
          }
        });
      },
      switchCamera: function() {
        this.context.switchCamera({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:88", "livePusher.switchCamera:" + JSON.stringify(a));
          }
        });
      },
      startPreview: function() {
        this.context.startPreview({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:95", "livePusher.startPreview:" + JSON.stringify(a));
          }
        });
      },
      stopPreview: function() {
        this.context.stopPreview({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/test_nvue.nvue:102", "livePusher.stopPreview:" + JSON.stringify(a));
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_button = (0, import_vue2.resolveComponent)("button");
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", null, [
        (0, import_vue2.createElementVNode)("div", { style: { "width": "650rpx", "height": "650rpx", "border-radius": "650rpx", "overflow": "hidden", "background-color": "#CCCCCC" } }, [
          (0, import_vue2.createElementVNode)(
            "live-pusher",
            {
              id: "livePusher",
              ref: "livePusher",
              class: "livePusher",
              url: "",
              mode: "SD",
              muted: true,
              enableCamera: true,
              autoFocus: true,
              beauty: 1,
              whiteness: "2",
              aspect: "9:16",
              onStatechange: _cache[0] || (_cache[0] = (...args) => $options.statechange && $options.statechange(...args)),
              onNetstatus: _cache[1] || (_cache[1] = (...args) => $options.netstatus && $options.netstatus(...args)),
              onError: _cache[2] || (_cache[2] = (...args) => $options.error && $options.error(...args))
            },
            null,
            544
            /* HYDRATE_EVENTS, NEED_PATCH */
          )
        ]),
        (0, import_vue2.createElementVNode)(
          "u-text",
          null,
          (0, import_vue2.toDisplayString)($data.ImgResponse),
          1
          /* TEXT */
        ),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.start
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5F00\u59CB\u63A8\u6D41")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.pause
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u6682\u505C\u63A8\u6D41")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.resume
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("resume")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.stop
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u505C\u6B62\u63A8\u6D41")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.snapshot
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5FEB\u7167")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.startPreview
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5F00\u542F\u6444\u50CF\u5934\u9884\u89C8")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.stopPreview
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5173\u95ED\u6444\u50CF\u5934\u9884\u89C8")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"]),
        (0, import_vue2.createVNode)(_component_button, {
          class: "btn",
          onClick: $options.switchCamera
        }, {
          default: (0, import_vue2.withCtx)(() => [
            (0, import_vue2.createTextVNode)("\u5207\u6362\u6444\u50CF\u5934")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]);
  }
  var test_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/fuchuang/learn/demo1/pages/test-camera/test_nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/test-camera/test_nvue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    test_nvue.mpType = "page";
    const app = Vue.createPageApp(test_nvue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...test_nvue.styles || []]));
    app.mount("#root");
  }
})();
