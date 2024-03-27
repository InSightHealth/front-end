import { _ as _export_sfc, f as formatAppLog } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, createElementVNode, normalizeStyle, createCommentVNode } from "vue";
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "menu": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "width": "750rpx", "height": "250rpx", "zIndex": 97, "backgroundColor": "#000000", "display": "flex", "alignItems": "center", "justifyContent": "space-around", "flexDirection": "row" } }, "menu-back": { ".pengke-camera .menu ": { "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } }, "menu-snapshot": { ".pengke-camera .menu ": { "width": "170rpx", "height": "170rpx", "zIndex": 99, "backgroundColor": "#FFFFFF", "borderRadius": 50, "display": "flex", "alignItems": "center", "justifyContent": "center" } }, "snapshot-button": { ".pengke-camera .menu .menu-snapshot ": { "zIndex": 100, "borderWidth": "4rpx", "borderStyle": "solid", "borderColor": "#000000", "backgroundColor": "#FFFFFF", "width": "138rpx", "height": "138rpx", "borderRadius": 50 } }, "menu-flip": { ".pengke-camera .menu ": { "width": "80rpx", "height": "80rpx", "zIndex": 99, "alignItems": "center", "justifyContent": "center" } } };
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
          formatAppLog("log", "at pages/photo-recog/photo_nvue.nvue:68", _this.camerastate);
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
          formatAppLog("log", "at pages/photo-recog/photo_nvue.nvue:97", a);
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
      formatAppLog("log", "at pages/photo-recog/photo_nvue.nvue:114", e);
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
          formatAppLog("log", "at pages/photo-recog/photo_nvue.nvue:133", "success");
        }
      });
      this.livePusher.snapshot({
        success: (e) => {
          _this.snapshotsrc = e.message.tempImagePath;
          uni.navigateTo({
            url: "/pages/photo-recog/photo-recog",
            success: function(res) {
              res.eventChannel.emit("recieveFile", { filepath: e.message.tempImagePath });
            },
            fail: (e2) => {
              formatAppLog("log", "at pages/photo-recog/photo_nvue.nvue:145", e2);
            }
          });
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
    createElementVNode(
      "view",
      {
        class: "pengke-camera",
        style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
      },
      [
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
        createElementVNode("cover-view", { class: "menu" }, [
          createCommentVNode("返回键"),
          createElementVNode("cover-image", {
            class: "menu-back",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.back && $options.back(...args)),
            src: "/static/camera/back.png"
          }),
          createCommentVNode("快门键"),
          createElementVNode("cover-view", {
            class: "menu-snapshot",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.snapshot && $options.snapshot(...args))
          }, [
            createElementVNode("cover-view", { class: "snapshot-button" })
          ]),
          createCommentVNode("反转键"),
          createElementVNode("cover-image", {
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
const photo_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/photo-recog/photo_nvue.nvue"]]);
export {
  photo_nvue as default
};
