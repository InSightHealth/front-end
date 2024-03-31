import { _ as _export_sfc, f as formatAppLog, r as resolveEasycom } from "../../_plugin-vue_export-helper.js";
import { openBlock, createElementBlock, normalizeStyle, createCommentVNode, Fragment, renderList, createElementVNode, toDisplayString, resolveDynamicComponent, createVNode } from "vue";
const _style_0$1 = { "chat-body": { "": { "display": "flex", "flexDirection": "column", "width": "750rpx", "height": "750rpx", "boxSizing": "content-box" } }, "self": { ".chat-body ": { "justifyContent": "flex-end" } }, "item": { ".chat-body ": { "width": "750rpx", "display": "flex", "paddingTop": "45rpx", "paddingRight": "30rpx", "paddingBottom": "45rpx", "paddingLeft": "30rpx" } }, "right": { ".chat-body .item ": { "backgroundColor": "#ACEC9C", "alignSelf": "flex-end" } }, "left": { ".chat-body .item ": { "backgroundColor": "#FFFFFF" } }, "poly-right": { ".chat-body .item ": { "position": "relative", "top": "-100rpx", "left": "-10rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-end" } }, "poly-left": { ".chat-body .item ": { "position": "relative", "top": "50rpx", "left": "10rpx", "height": "30rpx", "width": "30rpx", "alignSelf": "flex-start" } }, "content": { ".chat-body .item ": { "position": "relative", "wordWrap": "break-word", "paddingTop": "24rpx", "paddingRight": "24rpx", "paddingBottom": "24rpx", "paddingLeft": "24rpx", "marginTop": 0, "marginRight": "24rpx", "marginBottom": 0, "marginLeft": "24rpx", "borderRadius": "30rpx", "fontSize": "32rpx", "fontFamily": "PingFang SC", "fontWeight": "500", "color": "#333333", "lineHeight": "42rpx", "maxWidth": "380rpx" } }, "avatar": { ".chat-body .item ": { "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "115rpx", "height": "115rpx", "overflow": "hidden" } } };
const _sfc_main$1 = {
  name: "bot-chat",
  data() {
    return {
      userId: "",
      //发送的消息
      chatMsg: "",
      randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl",
      msgList: [
        {
          botContent: "hello，请问我有什么可以帮助你的吗？",
          recordId: 0,
          titleId: 0,
          userContent: "",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "你好呀我想问你一件事，可以吗？",
          userId: 0
        },
        {
          userContent: "",
          recordId: 0,
          titleId: 0,
          botContent: "当然可以!",
          userId: 0
        },
        {
          botContent: "",
          recordId: 0,
          titleId: 0,
          userContent: "我的问题是：blablabla...",
          userId: 0
        }
      ]
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "view",
    {
      id: "msglistview",
      class: "chat-body",
      style: normalizeStyle({ width: _ctx.windowWidth, height: _ctx.windowHeight }),
      renderWhole: true
    },
    [
      createCommentVNode(" 聊天记录 "),
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($data.msgList, (item, index) => {
          return openBlock(), createElementBlock(
            "view",
            {
              key: index,
              style: normalizeStyle({ width: _ctx.windowWidth })
            },
            [
              item.userContent != "" ? (openBlock(), createElementBlock("view", {
                key: 0,
                class: "item self"
              }, [
                createElementVNode("view", { class: "content right" }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.userContent),
                    1
                    /* TEXT */
                  )
                ]),
                createElementVNode("u-image", {
                  class: "poly-right",
                  src: "/static/travel/polygon-right.png"
                })
              ])) : createCommentVNode("v-if", true),
              item.botContent != "" ? (openBlock(), createElementBlock("view", {
                key: 1,
                class: "item Ai"
              }, [
                createElementVNode("u-image", {
                  class: "poly-left",
                  src: "/static/travel/polygon-left.png"
                }),
                createElementVNode("view", { class: "content left" }, [
                  createElementVNode(
                    "u-text",
                    null,
                    toDisplayString(item.botContent),
                    1
                    /* TEXT */
                  )
                ])
              ])) : createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      createCommentVNode(" 			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br> ")
    ],
    4
    /* STYLE */
  );
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "E:/fuchuang/learn/demo1/components/cover-chat/cover-chat.vue"]]);
const _style_0 = { "pengke-camera": { "": { "justifyContent": "center", "alignItems": "center" } }, "chat": { ".pengke-camera ": { "position": "absolute", "left": 0, "bottom": 0, "zIndex": 98, "alignItems": "center", "justifyContent": "center" } }, "coverchat": { ".pengke-camera .chat ": { "zIndex": 99 } }, "scroll-view": { ".pengke-camera .chat .coverchat ": { "height": 100, "width": "750rpx" } } };
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
      snapshotsrc: null,
      //快照
      randstr: "ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl"
    };
  },
  onLoad(e) {
    _this = this;
    this.initCamera();
  },
  onUnload() {
    uni.offKeyboardHeightChange();
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
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:79", _this.camerastate);
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
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:108", a);
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
      formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:125", e);
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
          formatAppLog("log", "at pages/test-camera/cover_nvue.nvue:144", "success");
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
  const _component_cover_chat = resolveEasycom(resolveDynamicComponent("cover-chat"), __easycom_0);
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
        createElementVNode(
          "view",
          {
            class: "chat",
            style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
          },
          [
            createElementVNode(
              "cover-view",
              {
                class: "coverchat",
                style: normalizeStyle({ width: $data.windowWidth, height: $data.windowHeight })
              },
              [
                createElementVNode("scroll-view", {
                  style: normalizeStyle({ height: `${$data.windowHeight * 0.8}px` }),
                  id: "scrollview",
                  scrollY: "true",
                  scrollTop: _ctx.scrollTop,
                  class: "scroll-view",
                  enableFlex: "true"
                }, [
                  createCommentVNode(" {{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n				{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n				{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n				{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>\r\n				{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br> "),
                  createVNode(_component_cover_chat)
                ], 12, ["scrollTop"])
              ],
              4
              /* STYLE */
            )
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    )
  ]);
}
const cover_nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "E:/fuchuang/learn/demo1/pages/test-camera/cover_nvue.nvue"]]);
export {
  cover_nvue as default
};
