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

  // E:/fuchuang/learn/demo1/unpackage/dist/dev/.nvue/pages/test-camera/camera_nvue.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "menu": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "width": "750rpx", "height": "180rpx", "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "menu-mask": { ".pengke-camera .menu ": { "position": "absolute", "left": 0, "bottom": 0, "width": "750rpx", "height": "180rpx", "zIndex": 98 } }, "menu-back": { ".pengke-camera .menu ": { "position": "absolute", "left": "30rpx", "bottom": "50rpx", "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } }, "menu-snapshot": { ".pengke-camera .menu ": { "width": "130rpx", "height": "130rpx", "zIndex": 99 } }, "menu-flip": { ".pengke-camera .menu ": { "position": "absolute", "right": "30rpx", "bottom": "50rpx", "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } } };
  var _this = null;
  var _sfc_main = {
    data() {
      return {
        poenCarmeInterval: null,
        //打开相机的轮询
        aspect: "2:3",
        //比例
        windowWidth: "",
        //屏幕可用宽度
        windowHeight: "",
        //屏幕可用高度
        camerastate: false,
        //相机准备好了
        livePusher: null,
        //流视频对象
        snapshotsrc: null
        //快照
      };
    },
    onLoad(e) {
      _this = this;
      this.initCamera();
    },
    onReady() {
      this.livePusher = uni.createLivePusherContext("livePusher", this);
      this.startPreview();
      this.poenCarme();
    },
    methods: {
      //轮询打开
      poenCarme() {
        if (plus.os.name == "Android") {
          this.poenCarmeInterval = setInterval(function() {
            formatAppLog("log", "at pages/test-camera/camera_nvue.nvue:69", _this.camerastate);
            if (!_this.camerastate)
              _this.startPreview();
          }, 2500);
        }
      },
      //初始化相机
      initCamera() {
        uni.getSystemInfo({
          success: function(res) {
            _this.windowWidth = res.windowWidth;
            _this.windowHeight = res.windowHeight;
            let zcs = _this.aliquot(_this.windowWidth, _this.windowHeight);
            _this.aspect = _this.windowWidth / zcs + ":" + _this.windowHeight / zcs;
          }
        });
      },
      //整除数计算
      aliquot(x, y) {
        if (x % y == 0)
          return y;
        return this.aliquot(y, x % y);
      },
      //开始预览
      startPreview() {
        this.livePusher.startPreview({
          success: (a) => {
            formatAppLog("log", "at pages/test-camera/camera_nvue.nvue:98", a);
          }
        });
      },
      //停止预览
      stopPreview() {
        this.livePusher.stopPreview({
          success: (a) => {
            _this.camerastate = false;
          }
        });
      },
      //状态
      statechange(e) {
        formatAppLog("log", "at pages/test-camera/camera_nvue.nvue:115", e);
        if (e.detail.code == 1007) {
          _this.camerastate = true;
        } else if (e.detail.code == -1301) {
          _this.camerastate = false;
        }
      },
      //返回
      back() {
        uni.navigateBack();
      },
      //抓拍
      snapshot() {
        uni.vibrateShort({
          success: function() {
            formatAppLog("log", "at pages/test-camera/camera_nvue.nvue:134", "success");
          }
        });
        this.livePusher.snapshot({
          success: (e) => {
            _this.snapshotsrc = e.message.tempImagePath;
            _this.stopPreview();
            _this.setImage();
            uni.navigateBack();
          }
        });
      },
      //反转
      flip() {
        this.livePusher.switchCamera();
      },
      //设置
      setImage() {
        let pages = getCurrentPages();
        let prevPage = pages[pages.length - 2];
        prevPage.$vm.setImage({ path: _this.snapshotsrc });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)(
        "view",
        {
          class: "pengke-camera",
          style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
        },
        [
          (0, import_vue2.createElementVNode)("live-pusher", {
            id: "livePusher",
            ref: "livePusher",
            class: "livePusher",
            mode: "FHD",
            beauty: "0",
            whiteness: "0",
            aspect: $data.aspect,
            minBitrate: "1000",
            audioQuality: "16KHz",
            devicePosition: "back",
            autoFocus: true,
            muted: true,
            enableCamera: true,
            enableMic: false,
            zoom: false,
            onStatechange: _cache[0] || (_cache[0] = (...args) => $options.statechange && $options.statechange(...args)),
            style: (0, import_vue2.normalizeStyle)({ width: $data.windowWidth, height: $data.windowHeight })
          }, null, 44, ["aspect"]),
          (0, import_vue2.createElementVNode)("view", { class: "menu" }, [
            (0, import_vue2.createCommentVNode)("\u5E95\u90E8\u83DC\u5355\u533A\u57DF\u80CC\u666F"),
            (0, import_vue2.createElementVNode)("cover-image", {
              class: "menu-mask",
              src: "/static/camera/bar.png"
            }),
            (0, import_vue2.createCommentVNode)("\u8FD4\u56DE\u952E"),
            (0, import_vue2.createElementVNode)("cover-image", {
              class: "menu-back",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.back && $options.back(...args)),
              src: "/static/camera/back.png"
            }),
            (0, import_vue2.createCommentVNode)("\u5FEB\u95E8\u952E"),
            (0, import_vue2.createElementVNode)("cover-image", {
              class: "menu-snapshot",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.snapshot && $options.snapshot(...args)),
              src: "/static/camera/shutter.png"
            }),
            (0, import_vue2.createCommentVNode)("\u53CD\u8F6C\u952E"),
            (0, import_vue2.createElementVNode)("cover-image", {
              class: "menu-flip",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.flip && $options.flip(...args)),
              src: "/static/camera/flip.png"
            })
          ])
        ],
        4
        /* STYLE */
      )
    ]);
  }
  var camera_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/test-camera/camera_nvue.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/test-camera/camera_nvue";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    camera_nvue.mpType = "page";
    const app = Vue.createPageApp(camera_nvue, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...camera_nvue.styles || []]));
    app.mount("#root");
  }
})();
