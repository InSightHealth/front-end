import { _ as _export_sfc, f as formatAppLog } from "../../_plugin-vue_export-helper.js";
import { resolveComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode, withCtx, createTextVNode } from "vue";
const _sfc_main = {
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
  const _component_button = resolveComponent("button");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", null, [
      createElementVNode("div", { style: { "width": "650rpx", "height": "650rpx", "border-radius": "650rpx", "overflow": "hidden", "background-color": "#CCCCCC" } }, [
        createElementVNode("live-pusher", {
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
        }, null, 544)
      ]),
      createElementVNode("u-text", null, toDisplayString($data.ImgResponse), 1),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.start
      }, {
        default: withCtx(() => [
          createTextVNode("开始推流")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.pause
      }, {
        default: withCtx(() => [
          createTextVNode("暂停推流")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.resume
      }, {
        default: withCtx(() => [
          createTextVNode("resume")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.stop
      }, {
        default: withCtx(() => [
          createTextVNode("停止推流")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.snapshot
      }, {
        default: withCtx(() => [
          createTextVNode("快照")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.startPreview
      }, {
        default: withCtx(() => [
          createTextVNode("开启摄像头预览")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.stopPreview
      }, {
        default: withCtx(() => [
          createTextVNode("关闭摄像头预览")
        ]),
        _: 1
      }, 8, ["onClick"]),
      createVNode(_component_button, {
        class: "btn",
        onClick: $options.switchCamera
      }, {
        default: withCtx(() => [
          createTextVNode("切换摄像头")
        ]),
        _: 1
      }, 8, ["onClick"])
    ])
  ]);
}
const test_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  test_nvue as default
};
