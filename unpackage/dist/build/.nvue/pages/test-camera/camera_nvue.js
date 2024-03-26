import { _ as _export_sfc, f as formatAppLog } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle } from "vue";
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "menu": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "width": "750rpx", "height": "180rpx", "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "menu-mask": { ".pengke-camera .menu ": { "position": "absolute", "left": 0, "bottom": 0, "width": "750rpx", "height": "180rpx", "zIndex": 98 } }, "menu-back": { ".pengke-camera .menu ": { "position": "absolute", "left": "30rpx", "bottom": "50rpx", "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } }, "menu-snapshot": { ".pengke-camera .menu ": { "width": "130rpx", "height": "130rpx", "zIndex": 99 } }, "menu-flip": { ".pengke-camera .menu ": { "position": "absolute", "right": "30rpx", "bottom": "50rpx", "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } } };
let _this = null;
const _sfc_main = {
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
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", {
      class: "pengke-camera",
      style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
    }, [
      createElementVNode("live-pusher", {
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
        style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
      }, null, 44, ["aspect"]),
      createElementVNode("view", { class: "menu" }, [
        createElementVNode("cover-image", {
          class: "menu-mask",
          src: "/static/camera/bar.png"
        }),
        createElementVNode("cover-image", {
          class: "menu-back",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.back && $options.back(...args)),
          src: "/static/camera/back.png"
        }),
        createElementVNode("cover-image", {
          class: "menu-snapshot",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.snapshot && $options.snapshot(...args)),
          src: "/static/camera/shutter.png"
        }),
        createElementVNode("cover-image", {
          class: "menu-flip",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.flip && $options.flip(...args)),
          src: "/static/camera/flip.png"
        })
      ])
    ], 4)
  ]);
}
const camera_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]]]);
export {
  camera_nvue as default
};
