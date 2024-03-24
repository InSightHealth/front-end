if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {
    name: "homeHead",
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("div", { class: "phone-container" }, [
        vue.createElementVNode("div", { class: "header" }, [
          vue.createElementVNode("div", { class: "avatar" }),
          vue.createElementVNode("div", { class: "user-name" }, " 张三 ")
        ])
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-fe552612"], ["__file", "E:/fuchuang/learn/demo1/components/home-head/home-head.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _sfc_main$g = {
    name: "homeFoot",
    data() {
      return {};
    },
    methods: {
      TestPage() {
        const url = "/pages/test/test";
        uni.navigateTo({ url });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("footer", { class: "footer-container" }, [
        vue.createElementVNode("div", { class: "footer-parter" }, [
          vue.createCommentVNode(" Replace with your actual home icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/home-icon.png",
            class: "icon-footer",
            id: "icon home-icon"
          }),
          vue.createElementVNode("div", {
            class: "footer-words",
            style: { "color": "#08DF86" }
          }, " 首页 ")
        ]),
        vue.createElementVNode("div", { class: "footer-parter-center" }, [
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/segment.png",
            class: "icon-footer-center",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.TestPage())
          }),
          vue.createElementVNode("div", { class: "footer-words-center" }, " 测试音频 "),
          vue.createCommentVNode(' <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> ')
        ]),
        vue.createElementVNode("div", { class: "footer-parter" }, [
          vue.createCommentVNode(" Replace with your actual user profile icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/user.png",
            class: "icon-footer",
            id: "icon user-icon"
          }),
          vue.createElementVNode("div", { class: "footer-words" }, " 个人 ")
        ])
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-5c189880"], ["__file", "E:/fuchuang/learn/demo1/components/home-foot/home-foot.vue"]]);
  const _sfc_main$f = {};
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_head = resolveEasycom(vue.resolveDynamicComponent("home-head"), __easycom_0$1);
    const _component_home_foot = resolveEasycom(vue.resolveDynamicComponent("home-foot"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "main-container" }, [
      vue.createVNode(_component_home_head),
      vue.createElementVNode("div", { class: "content" }, [
        vue.createElementVNode("div", { class: "content-first-row" }, [
          vue.createElementVNode("navigator", {
            id: "link-to-smart-travel",
            url: "/pages/smart-travel/smart-travel"
          }, " 智能出行 "),
          vue.createElementVNode("a", { id: "link-to-snap-recognize" }, [
            vue.createElementVNode("img", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/snap-icon.png" }),
            vue.createTextVNode(" 拍照识图 ")
          ])
        ]),
        vue.createElementVNode("div", { class: "content-second-row" }, [
          vue.createElementVNode("a", { id: "link-to-health-assistant" }, [
            vue.createElementVNode("img", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/poe.png" }),
            vue.createTextVNode(" 智能健康助手 ")
          ])
        ])
      ]),
      vue.createVNode(_component_home_foot)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "E:/fuchuang/learn/demo1/pages/index/index.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        pathList: [
          {
            path: "/pages/recTest/my_test",
            lebal: "测试音频"
          },
          {
            path: "/pages/test-camera/test_nvue",
            lebal: "测试摄像头"
          },
          {
            path: "/pages/test_api/test_api",
            lebal: "测试API"
          }
        ]
      };
    },
    methods: {
      TestPage(url) {
        uni.navigateTo({
          url
        });
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("div", { class: "container" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.pathList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("button", {
              key: index,
              onClick: ($event) => $options.TestPage(item.path)
            }, vue.toDisplayString(item.lebal), 9, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/fuchuang/learn/demo1/pages/test/test.vue"]]);
  var RecordApp$2, $T$2;
  const _sfc_main$d = {
    data() {
      return {
        ...this.getTexts(),
        show: false,
        statusMsg: "",
        Class: ("a" + Math.random()).replace(".", ""),
        showControlUI: false,
        useNvuePlayer: false,
        playing: false,
        player_position: 0,
        player_currentTime: "00:00",
        player_duration: "00:00",
        player_durationNum: 0
      };
    },
    methods: {
      shareFile() {
        this.saveFileFn();
      },
      playStart() {
        this.playFn();
      },
      playStop() {
        this.stopFn && this.stopFn();
      },
      setPlayerPosition(e) {
        this.setPosFn(e);
      },
      getPage() {
        var p = this.$parent;
        while (p) {
          if (p.reclog)
            break;
          p = p.$parent;
        }
        return p;
      },
      reclog() {
        this.getPage().reclog.apply(this.$parent, arguments);
      },
      getTexts() {
        return {
          T_pause: $T$2 ? $T$2("oozQ::暂停播放", ":Pause") : "",
          T_play: $T$2 ? $T$2("PPxS::播放", ":Play") : "",
          T_download: $T$2 ? $T$2("jtJH::下载保存", ":Download and save") : ""
        };
      },
      status(msg) {
        msg = msg ? $T$2("w7J2::播放器创建中：", ":Player is being created: ") + msg : "";
        this.statusMsg = msg;
        if (msg)
          RecordApp$2.CLog(msg);
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      createAudio(type, aBuf0, mime0, aBuf, duration, mime) {
        this.show = false;
        this.status("");
        this.playing = false;
        this.player_durationNum = duration;
        this.player_duration = this.formatTime(duration);
        this.player_currentTime = "00:00";
        this.player_position = 0;
        var fileName = "recordapp-" + Date.now() + "." + type;
        var okEnd = () => {
          this.show = true;
          this.status("");
          RecordApp$2.CLog($T$2("GXCV::播放器创建完成，可以播放了", ":The player is created and can be played"));
        };
        if (this.useNvuePlayer) {
          this.showControlUI = true;
          var saveBuf = (tag, sPath, sBuffer, next) => {
            RecordApp$2.UniSaveLocalFile(sPath, sBuffer, (path2) => {
              this.reclog(tag + $T$2("FtgC::文件已保存在：", ":File has been saved at: ") + path2);
              next(path2);
            }, (err) => {
              this.status(tag + $T$2("9AGy::保存文件失败，将无法播放：", ":Failed to save the file and will not be able to play it: ") + err);
            });
          };
          this.status($T$2("4xcp::正在将数据保存成本地文件以供播放...", ":Saving data to local file for playback..."));
          var path = "", wavPath = "";
          var saveOk = () => {
            this.playUrl = path;
            this.playUrl_wav = wavPath;
            okEnd();
          };
          saveBuf("", fileName, aBuf0, (p) => {
            path = p;
            if (aBuf == aBuf0) {
              saveOk();
              return;
            }
            saveBuf($T$2("fU7N::[转码成wav播放]", ":[Transcode to wav for playback]"), fileName + ".wav", aBuf, (p2) => {
              wavPath = p2;
              saveOk();
            });
          });
          this.setPosFn = (e) => {
            var val = e.detail.value;
            if (!this.audio)
              this.playFn();
            var time = Math.round(this.player_durationNum * val / 100);
            this.audio.seek(time / 1e3);
            this.audio.play();
          };
          this.playFn = () => {
            var sid = this.playSid;
            if (this.audio) {
              if (this.audio.sid == sid) {
                if (this.audio.paused) {
                  this.audio.play();
                } else {
                  this.audio.pause();
                }
                return;
              }
              this.stopFn();
            }
            this.audio = uni.createInnerAudioContext();
            this.audio.src = this.playUrl_wav || this.playUrl;
            this.audio.sid = sid;
            this.audio.onError((res) => {
              this.reclog($T$2("JRu4::onError 播放错误：", ":onError Playback error: ") + res.errMsg, 1);
            });
            this.audio.timer = setInterval(() => {
              if (this.playSid != sid)
                return;
              if (!this.audio.duration)
                return;
              var dur = Math.round(this.audio.duration * 1e3);
              var cur = Math.round(this.audio.currentTime * 1e3);
              var pos = !dur ? 0 : Math.min(100, Math.round(cur / dur * 100));
              this.playing = !this.audio.paused;
              this.player_durationNum = dur;
              this.player_duration = this.formatTime(dur);
              this.player_currentTime = this.formatTime(cur);
              this.player_position = pos;
            }, 100);
            this.audio.seek(0);
            this.audio.play();
            if (this.playUrl_wav) {
              this.status($T$2("7ity::使用转码的wav播放", ":Play using transcoded wav"));
            }
          };
          this.stopFn = () => {
            if (this.audio) {
              clearInterval(this.audio.timer);
              try {
                this.audio.stop();
              } catch (e) {
              }
              this.audio.destroy();
            }
          };
          this.saveFileFn = () => {
            this.reclog($T$2("OAiD::{1}字节文件已保存在：", ":The {1} byte file has been saved at: ", 0, aBuf0.byteLength) + path, 2);
          };
          return;
        }
        RecordApp$2.UniWebViewVueCall(this.getPage(), `
				if(this.playUrl)URL.revokeObjectURL(this.playUrl);
				this.playUrl=URL.createObjectURL(new Blob([this.player_buffer],{type:"${mime}"}));
				document.querySelector(".${this.Class} .h5Audio").innerHTML='<audio style="width:100%" />';
				this.playEl=document.querySelector(".${this.Class} .h5Audio audio");
				this.playEl.controls=true;
				this.playEl.src=this.playUrl;
				this.playEl.onerror=function(e){ This.$ownerInstance.callMethod("status","${$T$2("8NWB::播放发生错误：", ":An error occurred during playback: ")}"+e.message); }
				this.playEl.onpause=function(){ This.$ownerInstance.callMethod("player_stopFn",""); }
			`);
        okEnd();
        this.playFn = () => {
          this.playing = true;
          RecordApp$2.UniWebViewVueCall(this.getPage(), `
					if(this.playEl.paused){
						this.playEl.play();
					}else{
						this.playEl.onpause();
					}
				`);
        };
        this.stopFn = () => {
          this.playing = false;
          RecordApp$2.UniWebViewVueCall(this.getPage(), `this.playEl.pause();`);
        };
        this.getPage().player_stopFn = this.stopFn;
        this.saveFileFn = () => {
          this.reclog($T$2("2Hr1::正在保存文件...", ":Saving file..."));
          RecordApp$2.UniSaveLocalFile(fileName, aBuf0, (path2) => {
            this.reclog($T$2("GW1Q::{1}字节文件已保存在：", ":The {1} byte file has been saved at: ", 0, aBuf0.byteLength) + path2, 2);
          }, (err) => {
            this.reclog(err);
          });
        };
        return;
      },
      setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder2) {
        this.show = false;
        this.playStop();
        this.playSid = (this.playSid || 0) + 1;
        this.status("");
        var aBuf0 = aBuf, mime0 = mime;
        if (!aBuf) {
          return;
        }
        RecordApp$2 = Recorder2.RecordApp;
        $T$2 = Recorder2.i18n.$T;
        var o = this.getTexts();
        for (var k in o) {
          this[k] = o[k];
        }
        var end = () => {
          this.createAudio(recSet.type, aBuf0, mime0, aBuf, duration, mime);
        };
        if (!RecordApp$2.UniIsApp() || RecordApp$2.UniWithoutAppRenderjs) {
          var wav = Recorder2[recSet.type + "2wav"], t1 = Date.now();
          if (!wav)
            return end();
          var wavData = aBuf;
          if (recSet.type == "pcm")
            wavData = { sampleRate: recSet.sampleRate, bitRate: recSet.bitRate, blob: aBuf };
          this.status($T$2("bHhO::正在转码成wav...", ":Converting to wav..."));
          wav(wavData, (wavBuf, dur, mie) => {
            aBuf = wavBuf;
            duration = dur;
            mime = mie;
            this.reclog($T$2("MhM5::已转码成wav以供播放，耗时{1}ms", ":Transcoded to wav for playback, takes {1}ms", 0, Date.now() - t1));
            end();
          }, (msg) => {
            this.reclog($T$2("oSeh::转码成wav失败：", ":Transcoding to wav failed: ") + msg, 1);
            end();
          });
        } else {
          var cb = RecordApp$2.UniMainCallBack((val) => {
            if (val.errMsg) {
              this.reclog($T$2("LU2T::转码成wav失败：", ":Transcoding to wav failed: ") + val.errMsg, 1);
              end();
              return;
            }
            if (val.ok == 2) {
              end();
              return;
            }
            this.reclog($T$2("65fk::已转码成wav以供播放，耗时{1}ms", ":Transcoded to wav for playback, takes {1}ms", 0, Date.now() - cbT1));
            aBuf = RecordApp$2.UniMainTakeBigBytes(val.dataId);
            duration = val.dur;
            mime = val.mie;
            end();
          });
          var bigBytes = null, bt1 = 0, cbT1 = Date.now();
          if (!aBuf_renderjs) {
            bigBytes = aBuf0;
            bt1 = Date.now();
            aBuf_renderjs = "BigBytes";
            RecordApp$2.CLog("[播放器]正在将" + aBuf0.byteLength + "字节音频数据发送到renderjs，因为可能需要转码成wav，可能会比较慢");
          }
          this.status($T$2("XkoT::正在调用renderjs处理音频数据，此格式如果提供了{1}2wav，将会转码成wav，会比较耗时...", ":Renderjs is being called to process audio data. If {1}2wav is provided in this format, it will be transcoded into wav, which will be more time-consuming...", 0, recSet.type));
          RecordApp$2.UniWebViewVueCall(this.getPage(), `
					if(${bt1})RecordApp.CLog("[播放器]完成传输${aBuf0.byteLength}字节的数据到renderjs，耗时"+(Date.now()-${bt1})+"ms");
					var recSet=${JSON.stringify(recSet)}, aBuf0=${aBuf_renderjs}, aBuf=aBuf0, duration, mime;
					var end=function(err){
						This.player_buffer=aBuf,t1=Date.now();
						if(err) return RecordApp.UniWebViewSendToMain({action:"${cb}",errMsg:err});
						if(aBuf==aBuf0) return RecordApp.UniWebViewSendToMain({action:"${cb}",ok:2});
						RecordApp.CLog("[播放器]开始传输"+aBuf.byteLength+"字节的数据回逻辑层，可能会比较慢");
						RecordApp.UniWebViewSendBigBytesToMain(aBuf,function(dataId){//数据可能很大
							RecordApp.CLog("[播放器]完成传输"+aBuf.byteLength+"字节的数据回逻辑层，耗时"+(Date.now()-t1)+"ms");
							RecordApp.UniWebViewSendToMain({action:"${cb}",ok:1,dataId:dataId,dur:duration,mie:mime});
						},end);
					};
					var wav=Recorder[recSet.type+"2wav"];
					if(!wav) return end();
					var wavData=aBuf;
					if(recSet.type=="pcm") wavData={ sampleRate:recSet.sampleRate,bitRate:recSet.bitRate,blob:aBuf };
					wav(wavData,function(wavBuf,dur,mie){
						aBuf=wavBuf; duration=dur; mime=mie;
						end();
					},function(msg){
						end("${$T$2("mzxq::转码成wav失败：", ":Transcoding to wav failed: ")}"+msg);
					});
				`, bigBytes);
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass($data.Class),
          style: vue.normalizeStyle({ display: $data.show ? "" : "none" })
        },
        [
          $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            style: { "padding": "0 10px", "display": "flex", "flex-direction": "row" }
          }, [
            vue.createElementVNode("view", null, [
              vue.createElementVNode(
                "button",
                {
                  size: "mini",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.playStart && $options.playStart(...args))
                },
                vue.toDisplayString($data.playing ? _ctx.T_pause : _ctx.T_play),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { style: { "flex": "1" } }),
            vue.createElementVNode("view", null, [
              vue.createElementVNode(
                "button",
                {
                  size: "mini",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.shareFile && $options.shareFile(...args))
                },
                vue.toDisplayString(_ctx.T_download),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "shareFileMsg" }),
          $data.show && $data.showControlUI ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
            vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
              vue.createElementVNode("slider", {
                value: $data.player_position,
                onChange: _cache[2] || (_cache[2] = (...args) => $options.setPlayerPosition && $options.setPlayerPosition(...args)),
                step: "1",
                max: "100",
                min: "0"
              }, null, 40, ["value"])
            ]),
            vue.createElementVNode("view", { style: { "padding": "0 10px", "display": "flex", "flex-direction": "row" } }, [
              vue.createElementVNode(
                "view",
                { style: { "flex": "1" } },
                vue.toDisplayString($data.player_currentTime),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { style: { "flex": "1", "text-align": "right" } },
                vue.toDisplayString($data.player_duration),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "h5Audio" })
        ],
        6
        /* CLASS, STYLE */
      ),
      vue.createElementVNode(
        "view",
        { style: { "color": "#f60" } },
        vue.toDisplayString($data.statusMsg),
        1
        /* TEXT */
      )
    ]);
  }
  const TestPlayer$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/test_player___.vue"]]);
  var recorderCoreExports = {};
  var recorderCore = {
    get exports() {
      return recorderCoreExports;
    },
    set exports(v) {
      recorderCoreExports = v;
    }
  };
  (function(module) {
    (function(factory) {
      var browser = typeof window == "object" && !!window.document;
      var win = browser ? window : Object;
      factory(win, browser);
      if (module.exports) {
        module.exports = win.Recorder;
      }
    })(function(Export, isBrowser) {
      var NOOP = function() {
      };
      var IsNum = function(v) {
        return typeof v == "number";
      };
      var Recorder2 = function(set) {
        return new initFn(set);
      };
      var LM = Recorder2.LM = "2023-12-24 18:09";
      var GitUrl = "https://github.com/xiangyuecn/Recorder";
      var RecTxt = "Recorder";
      var getUserMediaTxt = "getUserMedia";
      var srcSampleRateTxt = "srcSampleRate";
      var sampleRateTxt = "sampleRate";
      var bitRateTxt = "bitRate";
      var CatchTxt = "catch";
      var WRec2 = Export[RecTxt];
      if (WRec2 && WRec2.LM == LM) {
        WRec2.CLog(WRec2.i18n.$T("K8zP::重复导入{1}", 0, RecTxt), 3);
        return;
      }
      Recorder2.IsOpen = function() {
        var stream = Recorder2.Stream;
        if (stream) {
          var tracks = stream.getTracks && stream.getTracks() || stream.audioTracks || [];
          var track = tracks[0];
          if (track) {
            var state = track.readyState;
            return state == "live" || state == track.LIVE;
          }
        }
        return false;
      };
      Recorder2.BufferSize = 4096;
      Recorder2.Destroy = function() {
        CLog(RecTxt + " Destroy");
        Disconnect();
        for (var k in DestroyList) {
          DestroyList[k]();
        }
      };
      var DestroyList = {};
      Recorder2.BindDestroy = function(key, call) {
        DestroyList[key] = call;
      };
      Recorder2.Support = function() {
        if (!isBrowser)
          return false;
        var scope = navigator.mediaDevices || {};
        if (!scope[getUserMediaTxt]) {
          scope = navigator;
          scope[getUserMediaTxt] || (scope[getUserMediaTxt] = scope.webkitGetUserMedia || scope.mozGetUserMedia || scope.msGetUserMedia);
        }
        if (!scope[getUserMediaTxt]) {
          return false;
        }
        Recorder2.Scope = scope;
        if (!Recorder2.GetContext()) {
          return false;
        }
        return true;
      };
      Recorder2.GetContext = function(tryNew) {
        if (!isBrowser)
          return null;
        var AC = window.AudioContext;
        if (!AC) {
          AC = window.webkitAudioContext;
        }
        if (!AC) {
          return null;
        }
        var ctx = Recorder2.Ctx;
        if (!ctx || ctx.state == "closed") {
          ctx = Recorder2.Ctx = new AC();
          Recorder2.NewCtxs = Recorder2.NewCtxs || [];
          Recorder2.BindDestroy("Ctx", function() {
            var ctx2 = Recorder2.Ctx;
            if (ctx2 && ctx2.close) {
              ctx2.close();
              Recorder2.Ctx = 0;
            }
            var arr = Recorder2.NewCtxs;
            Recorder2.NewCtxs = [];
            for (var i = 0; i < arr.length; i++)
              arr[i].close();
          });
        }
        if (tryNew && ctx.close) {
          try {
            ctx = new AC();
            Recorder2.NewCtxs.push(ctx);
          } catch (e) {
            CLog("GetContext tryNew Error", 1, e);
          }
        }
        return ctx;
      };
      Recorder2.CloseNewCtx = function(ctx) {
        if (ctx && ctx != Recorder2.Ctx) {
          ctx.close && ctx.close();
          var arr = Recorder2.NewCtxs || [], L = arr.length;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == ctx) {
              arr.splice(i, 1);
              break;
            }
          }
          CLog($T2("mSxV::剩{1}个GetContext未close", 0, L + "-1=" + arr.length), arr.length ? 3 : 0);
        }
      };
      var CtxState = function(ctx) {
        var v = ctx.state, msg = "ctx.state=" + v;
        if (v == "suspended")
          msg += $T2("nMIy::（注意：ctx不是running状态，rec.open和start至少要有一个在用户操作(触摸、点击等)时进行调用，否则将在rec.start时尝试进行ctx.resume，可能会产生兼容性问题(仅iOS)，请参阅文档中runningContext配置）");
        return msg;
      };
      var ConnectEnableWebM = "ConnectEnableWebM";
      Recorder2[ConnectEnableWebM] = true;
      var ConnectEnableWorklet = "ConnectEnableWorklet";
      Recorder2[ConnectEnableWorklet] = false;
      var Connect = function(streamStore, isUserMedia) {
        var bufferSize = streamStore.BufferSize || Recorder2.BufferSize;
        var stream = streamStore.Stream;
        var ctx = stream._RC || stream._c || Recorder2.GetContext(true);
        stream._c = ctx;
        var mediaConn = function(node) {
          var media = stream._m = ctx.createMediaStreamSource(stream);
          var ctxDest = ctx.destination, cmsdTxt = "createMediaStreamDestination";
          if (ctx[cmsdTxt]) {
            ctxDest = stream._d = ctx[cmsdTxt]();
          }
          media.connect(node);
          node.connect(ctxDest);
        };
        var isWebM, isWorklet, badInt, webMTips = "";
        var calls = stream._call;
        var onReceive = function(float32Arr) {
          for (var k0 in calls) {
            var size = float32Arr.length;
            var pcm = new Int16Array(size);
            var sum = 0;
            for (var j = 0; j < size; j++) {
              var s = Math.max(-1, Math.min(1, float32Arr[j]));
              s = s < 0 ? s * 32768 : s * 32767;
              pcm[j] = s;
              sum += Math.abs(s);
            }
            for (var k in calls) {
              calls[k](pcm, sum);
            }
            return;
          }
        };
        var scriptProcessor = "ScriptProcessor";
        var audioWorklet = "audioWorklet";
        var recAudioWorklet = RecTxt + " " + audioWorklet;
        var RecProc = "RecProc";
        var MediaRecorderTxt = "MediaRecorder";
        var MRWebMPCM = MediaRecorderTxt + ".WebM.PCM";
        var oldFn = ctx.createScriptProcessor || ctx.createJavaScriptNode;
        var oldIsBest = $T2("ZGlf::。由于{1}内部1秒375次回调，在移动端可能会有性能问题导致回调丢失录音变短，PC端无影响，暂不建议开启{1}。", 0, audioWorklet);
        var oldScript = function() {
          isWorklet = stream.isWorklet = false;
          _Disconn_n(stream);
          CLog($T2("7TU0::Connect采用老的{1}，", 0, scriptProcessor) + i18n.get(
            Recorder2[ConnectEnableWorklet] ? $T2("JwCL::但已设置{1}尝试启用{2}", 2) : $T2("VGjB::可设置{1}尝试启用{2}", 2),
            [RecTxt + "." + ConnectEnableWorklet + "=true", audioWorklet]
          ) + webMTips + oldIsBest, 3);
          var process = stream._p = oldFn.call(ctx, bufferSize, 1, 1);
          mediaConn(process);
          process.onaudioprocess = function(e) {
            var arr = e.inputBuffer.getChannelData(0);
            onReceive(arr);
          };
        };
        var connWorklet = function() {
          isWebM = stream.isWebM = false;
          _Disconn_r(stream);
          isWorklet = stream.isWorklet = !oldFn || Recorder2[ConnectEnableWorklet];
          var AwNode = window.AudioWorkletNode;
          if (!(isWorklet && ctx[audioWorklet] && AwNode)) {
            oldScript();
            return;
          }
          var clazzUrl = function() {
            var xf = function(f) {
              return f.toString().replace(/^function|DEL_/g, "").replace(/\$RA/g, recAudioWorklet);
            };
            var clazz = "class " + RecProc + " extends AudioWorkletProcessor{";
            clazz += "constructor " + xf(function(option) {
              DEL_super(option);
              var This = this, bufferSize2 = option.processorOptions.bufferSize;
              This.bufferSize = bufferSize2;
              This.buffer = new Float32Array(bufferSize2 * 2);
              This.pos = 0;
              This.port.onmessage = function(e) {
                if (e.data.kill) {
                  This.kill = true;
                  $C.log("$RA kill call");
                }
              };
              $C.log("$RA .ctor call", option);
            });
            clazz += "process " + xf(function(input, b, c) {
              var This = this, bufferSize2 = This.bufferSize;
              var buffer = This.buffer, pos = This.pos;
              input = (input[0] || [])[0] || [];
              if (input.length) {
                buffer.set(input, pos);
                pos += input.length;
                var len = ~~(pos / bufferSize2) * bufferSize2;
                if (len) {
                  this.port.postMessage({ val: buffer.slice(0, len) });
                  var more = buffer.subarray(len, pos);
                  buffer = new Float32Array(bufferSize2 * 2);
                  buffer.set(more);
                  pos = more.length;
                  This.buffer = buffer;
                }
                This.pos = pos;
              }
              return !This.kill;
            });
            clazz += '}try{registerProcessor("' + RecProc + '", ' + RecProc + ')}catch(e){$C.error("' + recAudioWorklet + ' Reg Error",e)}';
            clazz = clazz.replace(/\$C\./g, "console.");
            return "data:text/javascript;base64," + btoa(unescape(encodeURIComponent(clazz)));
          };
          var awNext = function() {
            return isWorklet && stream._na;
          };
          var nodeAlive = stream._na = function() {
            if (badInt !== "") {
              clearTimeout(badInt);
              badInt = setTimeout(function() {
                badInt = 0;
                if (awNext()) {
                  CLog($T2("MxX1::{1}未返回任何音频，恢复使用{2}", 0, audioWorklet, scriptProcessor), 3);
                  oldFn && oldScript();
                }
              }, 500);
            }
          };
          var createNode = function() {
            if (!awNext())
              return;
            var node = stream._n = new AwNode(ctx, RecProc, {
              processorOptions: { bufferSize }
            });
            mediaConn(node);
            node.port.onmessage = function(e) {
              if (badInt) {
                clearTimeout(badInt);
                badInt = "";
              }
              if (awNext()) {
                onReceive(e.data.val);
              } else if (!isWorklet) {
                CLog($T2("XUap::{1}多余回调", 0, audioWorklet), 3);
              }
            };
            CLog($T2("yOta::Connect采用{1}，设置{2}可恢复老式{3}", 0, audioWorklet, RecTxt + "." + ConnectEnableWorklet + "=false", scriptProcessor) + webMTips + oldIsBest, 3);
          };
          ctx.resume()[calls && "finally"](function() {
            if (!awNext())
              return;
            if (ctx[RecProc]) {
              createNode();
              return;
            }
            var url = clazzUrl();
            ctx[audioWorklet].addModule(url).then(function(e) {
              if (!awNext())
                return;
              ctx[RecProc] = 1;
              createNode();
              if (badInt) {
                nodeAlive();
              }
            })[CatchTxt](function(e) {
              CLog(audioWorklet + ".addModule Error", 1, e);
              awNext() && oldScript();
            });
          });
        };
        var connWebM = function() {
          var MR = window[MediaRecorderTxt];
          var onData = "ondataavailable";
          var webmType = "audio/webm; codecs=pcm";
          isWebM = stream.isWebM = Recorder2[ConnectEnableWebM];
          var supportMR = MR && onData in MR.prototype && MR.isTypeSupported(webmType);
          webMTips = supportMR ? "" : $T2("VwPd::（此浏览器不支持{1}）", 0, MRWebMPCM);
          if (!isUserMedia || !isWebM || !supportMR) {
            connWorklet();
            return;
          }
          var mrNext = function() {
            return isWebM && stream._ra;
          };
          stream._ra = function() {
            if (badInt !== "") {
              clearTimeout(badInt);
              badInt = setTimeout(function() {
                if (mrNext()) {
                  CLog($T2("vHnb::{1}未返回任何音频，降级使用{2}", 0, MediaRecorderTxt, audioWorklet), 3);
                  connWorklet();
                }
              }, 500);
            }
          };
          var mrSet = Object.assign({ mimeType: webmType }, Recorder2.ConnectWebMOptions);
          var mr = stream._r = new MR(stream, mrSet);
          var webmData = stream._rd = { sampleRate: ctx[sampleRateTxt] };
          mr[onData] = function(e) {
            var reader = new FileReader();
            reader.onloadend = function() {
              if (mrNext()) {
                var f32arr = WebM_Extract(new Uint8Array(reader.result), webmData);
                if (!f32arr)
                  return;
                if (f32arr == -1) {
                  connWorklet();
                  return;
                }
                if (badInt) {
                  clearTimeout(badInt);
                  badInt = "";
                }
                onReceive(f32arr);
              } else if (!isWebM) {
                CLog($T2("O9P7::{1}多余回调", 0, MediaRecorderTxt), 3);
              }
            };
            reader.readAsArrayBuffer(e.data);
          };
          mr.start(~~(bufferSize / 48));
          CLog($T2("LMEm::Connect采用{1}，设置{2}可恢复使用{3}或老式{4}", 0, MRWebMPCM, RecTxt + "." + ConnectEnableWebM + "=false", audioWorklet, scriptProcessor));
        };
        connWebM();
      };
      var ConnAlive = function(stream) {
        if (stream._na)
          stream._na();
        if (stream._ra)
          stream._ra();
      };
      var _Disconn_n = function(stream) {
        stream._na = null;
        if (stream._n) {
          stream._n.port.postMessage({ kill: true });
          stream._n.disconnect();
          stream._n = null;
        }
      };
      var _Disconn_r = function(stream) {
        stream._ra = null;
        if (stream._r) {
          stream._r.stop();
          stream._r = null;
        }
      };
      var Disconnect = function(streamStore) {
        streamStore = streamStore || Recorder2;
        var isGlobal = streamStore == Recorder2;
        var stream = streamStore.Stream;
        if (stream) {
          if (stream._m) {
            stream._m.disconnect();
            stream._m = null;
          }
          if (!stream._RC && stream._c) {
            Recorder2.CloseNewCtx(stream._c);
          }
          stream._RC = null;
          stream._c = null;
          if (stream._d) {
            StopS_(stream._d.stream);
            stream._d = null;
          }
          if (stream._p) {
            stream._p.disconnect();
            stream._p.onaudioprocess = stream._p = null;
          }
          _Disconn_n(stream);
          _Disconn_r(stream);
          if (isGlobal) {
            StopS_(stream);
          }
        }
        streamStore.Stream = 0;
      };
      var StopS_ = Recorder2.StopS_ = function(stream) {
        var tracks = stream.getTracks && stream.getTracks() || stream.audioTracks || [];
        for (var i = 0; i < tracks.length; i++) {
          var track = tracks[i];
          track.stop && track.stop();
        }
        stream.stop && stream.stop();
      };
      Recorder2.SampleData = function(pcmDatas, pcmSampleRate, newSampleRate, prevChunkInfo, option) {
        var Txt = "SampleData";
        prevChunkInfo || (prevChunkInfo = {});
        var index = prevChunkInfo.index || 0;
        var offset = prevChunkInfo.offset || 0;
        var filter = prevChunkInfo.filter;
        if (filter && filter.fn && filter.sr != pcmSampleRate) {
          filter = null;
          CLog($T2("d48C::{1}的filter采样率变了，重设滤波", 0, Txt), 3);
        }
        if (!filter) {
          var freq = newSampleRate > pcmSampleRate * 3 / 4 ? 0 : newSampleRate / 2 * 3 / 4;
          filter = { fn: freq ? Recorder2.IIRFilter(true, pcmSampleRate, freq) : 0 };
        }
        filter.sr = pcmSampleRate;
        var filterFn = filter.fn;
        var frameNext = prevChunkInfo.frameNext || [];
        option || (option = {});
        var frameSize = option.frameSize || 1;
        if (option.frameType) {
          frameSize = option.frameType == "mp3" ? 1152 : 1;
        }
        var nLen = pcmDatas.length;
        if (index > nLen + 1) {
          CLog($T2("tlbC::{1}似乎传入了未重置chunk {2}", 0, Txt, index + ">" + nLen), 3);
        }
        var size = 0;
        for (var i = index; i < nLen; i++) {
          size += pcmDatas[i].length;
        }
        size = Math.max(0, size - Math.floor(offset));
        var step = pcmSampleRate / newSampleRate;
        if (step > 1) {
          size = Math.floor(size / step);
        } else {
          step = 1;
          newSampleRate = pcmSampleRate;
        }
        size += frameNext.length;
        var res = new Int16Array(size);
        var idx = 0;
        for (var i = 0; i < frameNext.length; i++) {
          res[idx] = frameNext[i];
          idx++;
        }
        for (; index < nLen; index++) {
          var o = pcmDatas[index];
          var i = offset, il = o.length;
          var F = filterFn && filterFn.Embed, F1 = 0, F2 = 0, Fx = 0, Fy = 0;
          for (var i0 = 0, i2 = 0; i0 < il; i0++, i2++) {
            if (i2 < il) {
              if (F) {
                Fx = o[i2];
                Fy = F.b0 * Fx + F.b1 * F.x1 + F.b0 * F.x2 - F.a1 * F.y1 - F.a2 * F.y2;
                F.x2 = F.x1;
                F.x1 = Fx;
                F.y2 = F.y1;
                F.y1 = Fy;
              } else {
                Fy = filterFn ? filterFn(o[i2]) : o[i2];
              }
            }
            F1 = F2;
            F2 = Fy;
            if (i2 == 0) {
              i0--;
              continue;
            }
            var before = Math.floor(i);
            if (i0 != before)
              continue;
            var after = Math.ceil(i);
            var atPoint = i - before;
            var beforeVal = F1;
            var afterVal = after < il ? F2 : beforeVal;
            var val = beforeVal + (afterVal - beforeVal) * atPoint;
            if (val > 32767)
              val = 32767;
            else if (val < -32768)
              val = -32768;
            res[idx] = val;
            idx++;
            i += step;
          }
          offset = Math.max(0, i - il);
        }
        frameNext = null;
        var frameNextSize = res.length % frameSize;
        if (frameNextSize > 0) {
          var u8Pos = (res.length - frameNextSize) * 2;
          frameNext = new Int16Array(res.buffer.slice(u8Pos));
          res = new Int16Array(res.buffer.slice(0, u8Pos));
        }
        return {
          index,
          offset,
          filter,
          frameNext,
          sampleRate: newSampleRate,
          data: res
        };
      };
      Recorder2.IIRFilter = function(useLowPass, sampleRate, freq) {
        var ov = 2 * Math.PI * freq / sampleRate;
        var sn = Math.sin(ov);
        var cs = Math.cos(ov);
        var alpha = sn / 2;
        var a0 = 1 + alpha;
        var a1 = -2 * cs / a0;
        var a2 = (1 - alpha) / a0;
        if (useLowPass) {
          var b0 = (1 - cs) / 2 / a0;
          var b1 = (1 - cs) / a0;
        } else {
          var b0 = (1 + cs) / 2 / a0;
          var b1 = -(1 + cs) / a0;
        }
        var x1 = 0, x2 = 0, y = 0, y1 = 0, y2 = 0;
        var fn = function(x) {
          y = b0 * x + b1 * x1 + b0 * x2 - a1 * y1 - a2 * y2;
          x2 = x1;
          x1 = x;
          y2 = y1;
          y1 = y;
          return y;
        };
        fn.Embed = { x1: 0, x2: 0, y1: 0, y2: 0, b0, b1, a1, a2 };
        return fn;
      };
      Recorder2.PowerLevel = function(pcmAbsSum, pcmLength) {
        var power = pcmAbsSum / pcmLength || 0;
        var level;
        if (power < 1251) {
          level = Math.round(power / 1250 * 10);
        } else {
          level = Math.round(Math.min(100, Math.max(0, (1 + Math.log(power / 1e4) / Math.log(10)) * 100)));
        }
        return level;
      };
      Recorder2.PowerDBFS = function(maxSample) {
        var val = Math.max(0.1, maxSample || 0), Pref = 32767;
        val = Math.min(val, Pref);
        val = 20 * Math.log(val / Pref) / Math.log(10);
        return Math.max(-100, Math.round(val));
      };
      Recorder2.CLog = function(msg, err) {
        if (typeof console != "object")
          return;
        var now = /* @__PURE__ */ new Date();
        var t = ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2) + "." + ("00" + now.getMilliseconds()).substr(-3);
        var recID = this && this.envIn && this.envCheck && this.id;
        var arr = ["[" + t + " " + RecTxt + (recID ? ":" + recID : "") + "]" + msg];
        var a = arguments, cwe = Recorder2.CLog;
        var i = 2, fn = cwe.log || console.log;
        if (IsNum(err)) {
          fn = err == 1 ? cwe.error || console.error : err == 3 ? cwe.warn || console.warn : fn;
        } else {
          i = 1;
        }
        for (; i < a.length; i++) {
          arr.push(a[i]);
        }
        if (IsLoser) {
          fn && fn("[IsLoser]" + arr[0], arr.length > 1 ? arr : "");
        } else {
          fn.apply(console, arr);
        }
      };
      var CLog = function() {
        Recorder2.CLog.apply(this, arguments);
      };
      var IsLoser = true;
      try {
        IsLoser = !console.log.apply;
      } catch (e) {
      }
      var ID = 0;
      function initFn(set) {
        var This = this;
        This.id = ++ID;
        Traffic();
        var o = {
          type: "mp3",
          onProcess: NOOP
          //fn(buffers,powerLevel,bufferDuration,bufferSampleRate,newBufferIdx,asyncEnd) buffers=[[Int16,...],...]：缓冲的PCM数据，为从开始录音到现在的所有pcm片段；powerLevel：当前缓冲的音量级别0-100，bufferDuration：已缓冲时长，bufferSampleRate：缓冲使用的采样率（当type支持边录边转码(Worker)时，此采样率和设置的采样率相同，否则不一定相同）；newBufferIdx:本次回调新增的buffer起始索引；asyncEnd:fn() 如果onProcess是异步的(返回值为true时)，处理完成时需要调用此回调，如果不是异步的请忽略此参数，此方法回调时必须是真异步（不能真异步时需用setTimeout包裹）。onProcess返回值：如果返回true代表开启异步模式，在某些大量运算的场合异步是必须的，必须在异步处理完成时调用asyncEnd(不能真异步时需用setTimeout包裹)，在onProcess执行后新增的buffer会全部替换成空数组，因此本回调开头应立即将newBufferIdx到本次回调结尾位置的buffer全部保存到另外一个数组内，处理完成后写回buffers中本次回调的结尾位置。
          //*******高级设置******
          //,sourceStream:MediaStream Object
          //可选直接提供一个媒体流，从这个流中录制、实时处理音频数据（当前Recorder实例独享此流）；不提供时为普通的麦克风录音，由getUserMedia提供音频流（所有Recorder实例共享同一个流）
          //比如：audio、video标签dom节点的captureStream方法（实验特性，不同浏览器支持程度不高）返回的流；WebRTC中的remote流；自己创建的流等
          //注意：流内必须至少存在一条音轨(Audio Track)，比如audio标签必须等待到可以开始播放后才会有音轨，否则open会失败
          //,runningContext:AudioContext
          //可选提供一个state为running状态的AudioContext对象(ctx)；默认会在rec.open时自动创建一个新的ctx，无用户操作（触摸、点击等）时调用rec.open的ctx.state可能为suspended，会在rec.start时尝试进行ctx.resume，如果也无用户操作ctx.resume可能不会恢复成running状态（目前仅iOS上有此兼容性问题），导致无法去读取媒体流，这时请提前在用户操作时调用Recorder.GetContext(true)来得到一个running状态AudioContext（用完需调用CloseNewCtx(ctx)关闭）
          //,audioTrackSet:{ deviceId:"",groupId:"", autoGainControl:true, echoCancellation:true, noiseSuppression:true }
          //普通麦克风录音时getUserMedia方法的audio配置参数，比如指定设备id，回声消除、降噪开关；注意：提供的任何配置值都不一定会生效
          //由于麦克风是全局共享的，所以新配置后需要close掉以前的再重新open
          //更多参考: https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
          //,disableEnvInFix:false 内部参数，禁用设备卡顿时音频输入丢失补偿功能
          //,takeoffEncodeChunk:NOOP //fn(chunkBytes) chunkBytes=[Uint8,...]：实时编码环境下接管编码器输出，当编码器实时编码出一块有效的二进制音频数据时实时回调此方法；参数为二进制的Uint8Array，就是编码出来的音频数据片段，所有的chunkBytes拼接在一起即为完整音频。本实现的想法最初由QQ2543775048提出
          //当提供此回调方法时，将接管编码器的数据输出，编码器内部将放弃存储生成的音频数据；如果当前编码器或环境不支持实时编码处理，将在open时直接走fail逻辑
          //因此提供此回调后调用stop方法将无法获得有效的音频数据，因为编码器内没有音频数据，因此stop时返回的blob将是一个字节长度为0的blob
          //大部分录音格式编码器都支持实时编码（边录边转码），比如mp3格式：会实时的将编码出来的mp3片段通过此方法回调，所有的chunkBytes拼接到一起即为完整的mp3，此种拼接的结果比mock方法实时生成的音质更加，因为天然避免了首尾的静默
          //不支持实时编码的录音格式不可以提供此回调（wav格式不支持，因为wav文件头中需要提供文件最终长度），提供了将在open时直接走fail逻辑
        };
        for (var k in set) {
          o[k] = set[k];
        }
        This.set = o;
        var vB = o[bitRateTxt], vS = o[sampleRateTxt];
        if (vB && !IsNum(vB) || vS && !IsNum(vS)) {
          This.CLog($T2.G("IllegalArgs-1", [$T2("VtS4::{1}和{2}必须是数值", 0, sampleRateTxt, bitRateTxt)]), 1, set);
        }
        o[bitRateTxt] = +vB || 16;
        o[sampleRateTxt] = +vS || 16e3;
        This.state = 0;
        This._S = 9;
        This.Sync = { O: 9, C: 9 };
      }
      Recorder2.Sync = {
        /*open*/
        O: 9,
        /*close*/
        C: 9
      };
      Recorder2.prototype = initFn.prototype = {
        CLog,
        _streamStore: function() {
          if (this.set.sourceStream) {
            return this;
          } else {
            return Recorder2;
          }
        },
        _streamCtx: function() {
          var m = this._streamStore().Stream;
          return m && m._c;
        },
        open: function(True, False) {
          var This = this, set = This.set, streamStore = This._streamStore(), newCtx = 0;
          True = True || NOOP;
          var failCall = function(errMsg, isUserNotAllow) {
            isUserNotAllow = !!isUserNotAllow;
            This.CLog($T2("5tWi::录音open失败：") + errMsg + ",isUserNotAllow:" + isUserNotAllow, 1);
            if (newCtx)
              Recorder2.CloseNewCtx(newCtx);
            False && False(errMsg, isUserNotAllow);
          };
          This._streamTag = getUserMediaTxt;
          var ok = function() {
            This.CLog("open ok, id:" + This.id + " stream:" + This._streamTag);
            True();
            This._SO = 0;
          };
          var Lock = streamStore.Sync;
          var lockOpen = ++Lock.O, lockClose = Lock.C;
          This._O = This._O_ = lockOpen;
          This._SO = This._S;
          var lockFail = function() {
            if (lockClose != Lock.C || !This._O) {
              var err = $T2("dFm8::open被取消");
              if (lockOpen == Lock.O) {
                This.close();
              } else {
                err = $T2("VtJO::open被中断");
              }
              failCall(err);
              return true;
            }
          };
          if (!isBrowser) {
            failCall($T2.G("NonBrowser-1", ["open"]) + $T2("EMJq::，可尝试使用RecordApp解决方案") + "(" + GitUrl + "/tree/master/app-support-sample)");
            return;
          }
          var checkMsg = This.envCheck({ envName: "H5", canProcess: true });
          if (checkMsg) {
            failCall($T2("A5bm::不能录音：") + checkMsg);
            return;
          }
          if (set.sourceStream) {
            This._streamTag = "set.sourceStream";
            if (!Recorder2.GetContext()) {
              failCall($T2("1iU7::不支持此浏览器从流中获取录音"));
              return;
            }
            Disconnect(streamStore);
            var stream = This.Stream = set.sourceStream;
            stream._RC = set.runningContext;
            stream._call = {};
            try {
              Connect(streamStore);
            } catch (e) {
              Disconnect(streamStore);
              failCall($T2("BTW2::从流中打开录音失败：") + e.message);
              return;
            }
            ok();
            return;
          }
          var codeFail = function(code, msg) {
            try {
              window.top.a;
            } catch (e) {
              failCall($T2("Nclz::无权录音(跨域，请尝试给iframe添加麦克风访问策略，如{1})", 0, 'allow="camera;microphone"'));
              return;
            }
            if (/Permission|Allow/i.test(code)) {
              failCall($T2("gyO5::用户拒绝了录音权限"), true);
            } else if (window.isSecureContext === false) {
              failCall($T2("oWNo::浏览器禁止不安全页面录音，可开启https解决"));
            } else if (/Found/i.test(code)) {
              failCall(msg + $T2("jBa9::，无可用麦克风"));
            } else {
              failCall(msg);
            }
          };
          if (Recorder2.IsOpen()) {
            ok();
            return;
          }
          if (!Recorder2.Support()) {
            codeFail("", $T2("COxc::此浏览器不支持录音"));
            return;
          }
          var ctx = set.runningContext;
          if (!ctx)
            ctx = newCtx = Recorder2.GetContext(true);
          var f1 = function(stream2) {
            setTimeout(function() {
              stream2._call = {};
              var oldStream = Recorder2.Stream;
              if (oldStream) {
                Disconnect();
                stream2._call = oldStream._call;
              }
              Recorder2.Stream = stream2;
              stream2._c = ctx;
              stream2._RC = set.runningContext;
              if (lockFail())
                return;
              if (Recorder2.IsOpen()) {
                if (oldStream)
                  This.CLog($T2("upb8::发现同时多次调用open"), 1);
                Connect(streamStore, 1);
                ok();
              } else {
                failCall($T2("Q1GA::录音功能无效：无音频流"));
              }
            }, 100);
          };
          var f2 = function(e) {
            var code = e.name || e.message || e.code + ":" + e;
            This.CLog($T2("xEQR::请求录音权限错误"), 1, e);
            codeFail(code, $T2("bDOG::无法录音：") + code);
          };
          var trackSet = set.audioTrackSet || {};
          trackSet[sampleRateTxt] = ctx[sampleRateTxt];
          var mSet = { audio: trackSet };
          try {
            var pro = Recorder2.Scope[getUserMediaTxt](mSet, f1, f2);
          } catch (e) {
            This.CLog(getUserMediaTxt, 3, e);
            mSet = { audio: true };
            pro = Recorder2.Scope[getUserMediaTxt](mSet, f1, f2);
          }
          This.CLog(getUserMediaTxt + "(" + JSON.stringify(mSet) + ") " + CtxState(ctx) + $T2("RiWe::，未配置noiseSuppression和echoCancellation时浏览器可能会自动打开降噪和回声消除，移动端可能会降低系统播放音量（关闭录音后可恢复），请参阅文档中audioTrackSet配置") + "(" + GitUrl + ") LM:" + LM + " UA:" + navigator.userAgent);
          if (pro && pro.then) {
            pro.then(f1)[CatchTxt](f2);
          }
        },
        close: function(call) {
          call = call || NOOP;
          var This = this, streamStore = This._streamStore();
          This._stop();
          var sTag = " stream:" + This._streamTag;
          var Lock = streamStore.Sync;
          This._O = 0;
          if (This._O_ != Lock.O) {
            This.CLog($T2("hWVz::close被忽略（因为同时open了多个rec，只有最后一个会真正close）") + sTag, 3);
            call();
            return;
          }
          Lock.C++;
          Disconnect(streamStore);
          This.CLog("close," + sTag);
          call();
        },
        mock: function(pcmData, pcmSampleRate) {
          var This = this;
          This._stop();
          This.isMock = 1;
          This.mockEnvInfo = null;
          This.buffers = [pcmData];
          This.recSize = pcmData.length;
          This._setSrcSR(pcmSampleRate);
          This._streamTag = "mock";
          return This;
        },
        _setSrcSR: function(sampleRate) {
          var This = this, set = This.set;
          var setSr = set[sampleRateTxt];
          if (setSr > sampleRate) {
            set[sampleRateTxt] = sampleRate;
          } else {
            setSr = 0;
          }
          This[srcSampleRateTxt] = sampleRate;
          This.CLog(srcSampleRateTxt + ": " + sampleRate + " set." + sampleRateTxt + ": " + set[sampleRateTxt] + (setSr ? " " + $T2("UHvm::忽略") + ": " + setSr : ""), setSr ? 3 : 0);
        },
        envCheck: function(envInfo) {
          var errMsg, This = this, set = This.set;
          var tag = "CPU_BE";
          if (!errMsg && !Recorder2[tag] && typeof Int8Array == "function" && !new Int8Array(new Int32Array([1]).buffer)[0]) {
            Traffic(tag);
            errMsg = $T2("Essp::不支持{1}架构", 0, tag);
          }
          if (!errMsg) {
            var type = set.type, hasFn = This[type + "_envCheck"];
            if (set.takeoffEncodeChunk) {
              if (!hasFn) {
                errMsg = $T2("2XBl::{1}类型不支持设置takeoffEncodeChunk", 0, type) + (This[type] ? "" : $T2("LG7e::(未加载编码器)"));
              } else if (!envInfo.canProcess) {
                errMsg = $T2("7uMV::{1}环境不支持实时处理", 0, envInfo.envName);
              }
            }
            if (!errMsg && hasFn) {
              errMsg = This[type + "_envCheck"](envInfo, set);
            }
          }
          return errMsg || "";
        },
        envStart: function(mockEnvInfo, sampleRate) {
          var This = this, set = This.set;
          This.isMock = mockEnvInfo ? 1 : 0;
          This.mockEnvInfo = mockEnvInfo;
          This.buffers = [];
          This.recSize = 0;
          if (mockEnvInfo) {
            This._streamTag = "env$" + mockEnvInfo.envName;
          }
          This.state = 1;
          This.envInLast = 0;
          This.envInFirst = 0;
          This.envInFix = 0;
          This.envInFixTs = [];
          This._setSrcSR(sampleRate);
          This.engineCtx = 0;
          if (This[set.type + "_start"]) {
            var engineCtx = This.engineCtx = This[set.type + "_start"](set);
            if (engineCtx) {
              engineCtx.pcmDatas = [];
              engineCtx.pcmSize = 0;
            }
          }
        },
        envResume: function() {
          this.envInFixTs = [];
        },
        envIn: function(pcm, sum) {
          var This = this, set = This.set, engineCtx = This.engineCtx;
          if (This.state != 1) {
            if (!This.state)
              This.CLog("envIn at state=0", 3);
            return;
          }
          var bufferSampleRate = This[srcSampleRateTxt];
          var size = pcm.length;
          var powerLevel = Recorder2.PowerLevel(sum, size);
          var buffers = This.buffers;
          var bufferFirstIdx = buffers.length;
          buffers.push(pcm);
          var buffersThis = buffers;
          var bufferFirstIdxThis = bufferFirstIdx;
          var now = Date.now();
          var pcmTime = Math.round(size / bufferSampleRate * 1e3);
          This.envInLast = now;
          if (This.buffers.length == 1) {
            This.envInFirst = now - pcmTime;
          }
          var envInFixTs = This.envInFixTs;
          envInFixTs.splice(0, 0, { t: now, d: pcmTime });
          var tsInStart = now, tsPcm = 0;
          for (var i = 0; i < envInFixTs.length; i++) {
            var o = envInFixTs[i];
            if (now - o.t > 3e3) {
              envInFixTs.length = i;
              break;
            }
            tsInStart = o.t;
            tsPcm += o.d;
          }
          var tsInPrev = envInFixTs[1];
          var tsIn = now - tsInStart;
          var lost = tsIn - tsPcm;
          if (lost > tsIn / 3 && (tsInPrev && tsIn > 1e3 || envInFixTs.length >= 6)) {
            var addTime = now - tsInPrev.t - pcmTime;
            if (addTime > pcmTime / 5) {
              var fixOpen = !set.disableEnvInFix;
              This.CLog("[" + now + "]" + i18n.get(fixOpen ? $T2("4Kfd::补偿{1}ms", 1) : $T2("bM5i::未补偿{1}ms", 1), [addTime]), 3);
              This.envInFix += addTime;
              if (fixOpen) {
                var addPcm = new Int16Array(addTime * bufferSampleRate / 1e3);
                size += addPcm.length;
                buffers.push(addPcm);
              }
            }
          }
          var sizeOld = This.recSize, addSize = size;
          var bufferSize = sizeOld + addSize;
          This.recSize = bufferSize;
          if (engineCtx) {
            var chunkInfo = Recorder2.SampleData(buffers, bufferSampleRate, set[sampleRateTxt], engineCtx.chunkInfo);
            engineCtx.chunkInfo = chunkInfo;
            sizeOld = engineCtx.pcmSize;
            addSize = chunkInfo.data.length;
            bufferSize = sizeOld + addSize;
            engineCtx.pcmSize = bufferSize;
            buffers = engineCtx.pcmDatas;
            bufferFirstIdx = buffers.length;
            buffers.push(chunkInfo.data);
            bufferSampleRate = chunkInfo[sampleRateTxt];
          }
          var duration = Math.round(bufferSize / bufferSampleRate * 1e3);
          var bufferNextIdx = buffers.length;
          var bufferNextIdxThis = buffersThis.length;
          var asyncEnd = function() {
            var num = asyncBegin ? 0 : -addSize;
            var hasClear2 = buffers[0] == null;
            for (var i2 = bufferFirstIdx; i2 < bufferNextIdx; i2++) {
              var buffer = buffers[i2];
              if (buffer == null) {
                hasClear2 = 1;
              } else {
                num += buffer.length;
                if (engineCtx && buffer.length) {
                  This[set.type + "_encode"](engineCtx, buffer);
                }
              }
            }
            if (hasClear2 && engineCtx) {
              var i2 = bufferFirstIdxThis;
              if (buffersThis[0]) {
                i2 = 0;
              }
              for (; i2 < bufferNextIdxThis; i2++) {
                buffersThis[i2] = null;
              }
            }
            if (hasClear2) {
              num = asyncBegin ? addSize : 0;
              buffers[0] = null;
            }
            if (engineCtx) {
              engineCtx.pcmSize += num;
            } else {
              This.recSize += num;
            }
          };
          var asyncBegin = 0, procTxt = "rec.set.onProcess";
          try {
            asyncBegin = set.onProcess(buffers, powerLevel, duration, bufferSampleRate, bufferFirstIdx, asyncEnd);
          } catch (e) {
            formatAppLog("error", "at node_modules/recorder-core/src/recorder-core.js:1197", procTxt + $T2("gFUF::回调出错是不允许的，需保证不会抛异常"), e);
          }
          var slowT = Date.now() - now;
          if (slowT > 10 && This.envInFirst - now > 1e3) {
            This.CLog(procTxt + $T2("2ghS::低性能，耗时{1}ms", 0, slowT), 3);
          }
          if (asyncBegin === true) {
            var hasClear = 0;
            for (var i = bufferFirstIdx; i < bufferNextIdx; i++) {
              if (buffers[i] == null) {
                hasClear = 1;
              } else {
                buffers[i] = new Int16Array(0);
              }
            }
            if (hasClear) {
              This.CLog($T2("ufqH::未进入异步前不能清除buffers"), 3);
            } else {
              if (engineCtx) {
                engineCtx.pcmSize -= addSize;
              } else {
                This.recSize -= addSize;
              }
            }
          } else {
            asyncEnd();
          }
        },
        start: function() {
          var This = this;
          var isOpen = 1;
          if (This.set.sourceStream) {
            if (!This.Stream) {
              isOpen = 0;
            }
          } else if (!Recorder2.IsOpen()) {
            isOpen = 0;
          }
          if (!isOpen) {
            This.CLog($T2("6WmN::start失败：未open"), 1);
            return;
          }
          var ctx = This._streamCtx();
          This.CLog($T2("kLDN::start 开始录音，") + CtxState(ctx) + " stream:" + This._streamTag);
          This._stop();
          This.envStart(null, ctx[sampleRateTxt]);
          This.state = 3;
          if (This._SO && This._SO + 1 != This._S) {
            This.CLog($T2("Bp2y::start被中断"), 3);
            return;
          }
          This._SO = 0;
          var end = function() {
            if (This.state == 3) {
              This.state = 1;
              This.resume();
            }
          };
          if (ctx.state == "suspended") {
            var tag = "AudioContext resume: ";
            This.CLog(tag + "wait...");
            ctx.resume().then(function() {
              This.CLog(tag + ctx.state);
              end();
            })[CatchTxt](function(e) {
              This.CLog(tag + ctx.state + $T2("upkE::，可能无法录音：") + e.message, 1, e);
              end();
            });
          } else {
            end();
          }
        },
        pause: function() {
          var This = this, stream = This._streamStore().Stream;
          if (This.state) {
            This.state = 2;
            This.CLog("pause");
            if (stream)
              delete stream._call[This.id];
          }
        },
        resume: function() {
          var This = this, stream = This._streamStore().Stream;
          if (This.state) {
            This.state = 1;
            This.CLog("resume");
            This.envResume();
            if (stream) {
              stream._call[This.id] = function(pcm, sum) {
                if (This.state == 1) {
                  This.envIn(pcm, sum);
                }
              };
              ConnAlive(stream);
            }
          }
        },
        _stop: function(keepEngine) {
          var This = this, set = This.set;
          if (!This.isMock) {
            This._S++;
          }
          if (This.state) {
            This.pause();
            This.state = 0;
          }
          if (!keepEngine && This[set.type + "_stop"]) {
            This[set.type + "_stop"](This.engineCtx);
            This.engineCtx = 0;
          }
        },
        stop: function(True, False, autoClose) {
          var This = this, set = This.set, t1;
          var envInMS = This.envInLast - This.envInFirst, envInLen = envInMS && This.buffers.length;
          This.CLog($T2("Xq4s::stop 和start时差:") + (envInMS ? envInMS + "ms " + $T2("3CQP::补偿:") + This.envInFix + "ms envIn:" + envInLen + " fps:" + (envInLen / envInMS * 1e3).toFixed(1) : "-") + " stream:" + This._streamTag + " (" + GitUrl + ") LM:" + LM);
          var end = function() {
            This._stop();
            if (autoClose) {
              This.close();
            }
          };
          var err = function(msg) {
            This.CLog($T2("u8JG::结束录音失败：") + msg, 1);
            False && False(msg);
            end();
          };
          var ok = function(blob, mime, duration2) {
            var tBlob = "blob", tABuf = "arraybuffer", tDT = "dataType", tDDT = "DefaultDataType";
            var dType = This[tDT] || Recorder2[tDDT] || tBlob, dTag = tDT + "=" + dType;
            var isAB = blob instanceof ArrayBuffer, dErr = 0;
            var dLen = isAB ? blob.byteLength : blob.size;
            if (dType == tABuf) {
              if (!isAB)
                dErr = 1;
            } else if (dType == tBlob) {
              if (typeof Blob != "function") {
                dErr = $T2.G("NonBrowser-1", [dTag]) + $T2("1skY::，请设置{1}", 0, RecTxt + "." + tDDT + '="' + tABuf + '"');
              } else {
                if (isAB)
                  blob = new Blob([blob], { type: mime });
                if (!(blob instanceof Blob))
                  dErr = 1;
                mime = blob.type || mime;
              }
            } else {
              dErr = $T2.G("NotSupport-1", [dTag]);
            }
            This.CLog($T2("Wv7l::结束录音 编码花{1}ms 音频时长{2}ms 文件大小{3}b", 0, Date.now() - t1, duration2, dLen) + " " + dTag + "," + mime);
            if (dErr) {
              err(dErr != 1 ? dErr : $T2("Vkbd::{1}编码器返回的不是{2}", 0, set.type, dType) + ", " + dTag);
              return;
            }
            if (set.takeoffEncodeChunk) {
              This.CLog($T2("QWnr::启用takeoffEncodeChunk后stop返回的blob长度为0不提供音频数据"), 3);
            } else if (dLen < Math.max(50, duration2 / 5)) {
              err($T2("Sz2H::生成的{1}无效", 0, set.type));
              return;
            }
            True && True(blob, duration2, mime);
            end();
          };
          if (!This.isMock) {
            var isCtxWait = This.state == 3;
            if (!This.state || isCtxWait) {
              err($T2("wf9t::未开始录音") + (isCtxWait ? $T2("Dl2c::，开始录音前无用户交互导致AudioContext未运行") : ""));
              return;
            }
          }
          This._stop(true);
          var size = This.recSize;
          if (!size) {
            err($T2("Ltz3::未采集到录音"));
            return;
          }
          if (!This[set.type]) {
            err($T2("xGuI::未加载{1}编码器，请尝试到{2}的src/engine内找到{1}的编码器并加载", 0, set.type, RecTxt));
            return;
          }
          if (This.isMock) {
            var checkMsg = This.envCheck(This.mockEnvInfo || { envName: "mock", canProcess: false });
            if (checkMsg) {
              err($T2("AxOH::录音错误：") + checkMsg);
              return;
            }
          }
          var engineCtx = This.engineCtx;
          if (This[set.type + "_complete"] && engineCtx) {
            var duration = Math.round(engineCtx.pcmSize / set[sampleRateTxt] * 1e3);
            t1 = Date.now();
            This[set.type + "_complete"](engineCtx, function(blob, mime) {
              ok(blob, mime, duration);
            }, err);
            return;
          }
          t1 = Date.now();
          if (!This.buffers[0]) {
            err($T2("xkKd::音频buffers被释放"));
            return;
          }
          var chunk = Recorder2.SampleData(This.buffers, This[srcSampleRateTxt], set[sampleRateTxt]);
          set[sampleRateTxt] = chunk[sampleRateTxt];
          var res = chunk.data;
          var duration = Math.round(res.length / set[sampleRateTxt] * 1e3);
          This.CLog($T2("CxeT::采样:{1} 花:{2}ms", 0, size + "->" + res.length, Date.now() - t1));
          setTimeout(function() {
            t1 = Date.now();
            This[set.type](res, function(blob, mime) {
              ok(blob, mime, duration);
            }, function(msg) {
              err(msg);
            });
          });
        }
      };
      var WebM_Extract = function(inBytes, scope) {
        if (!scope.pos) {
          scope.pos = [0];
          scope.tracks = {};
          scope.bytes = [];
        }
        var tracks = scope.tracks, position = [scope.pos[0]];
        var endPos = function() {
          scope.pos[0] = position[0];
        };
        var sBL = scope.bytes.length;
        var bytes = new Uint8Array(sBL + inBytes.length);
        bytes.set(scope.bytes);
        bytes.set(inBytes, sBL);
        scope.bytes = bytes;
        if (!scope._ht) {
          readMatroskaVInt(bytes, position);
          readMatroskaBlock(bytes, position);
          if (!BytesEq(readMatroskaVInt(bytes, position), [24, 83, 128, 103])) {
            return;
          }
          readMatroskaVInt(bytes, position);
          while (position[0] < bytes.length) {
            var eid0 = readMatroskaVInt(bytes, position);
            var bytes0 = readMatroskaBlock(bytes, position);
            var pos0 = [0], audioIdx = 0;
            if (!bytes0)
              return;
            if (BytesEq(eid0, [22, 84, 174, 107])) {
              while (pos0[0] < bytes0.length) {
                var eid1 = readMatroskaVInt(bytes0, pos0);
                var bytes1 = readMatroskaBlock(bytes0, pos0);
                var pos1 = [0], track = { channels: 0, sampleRate: 0 };
                if (BytesEq(eid1, [174])) {
                  while (pos1[0] < bytes1.length) {
                    var eid2 = readMatroskaVInt(bytes1, pos1);
                    var bytes2 = readMatroskaBlock(bytes1, pos1);
                    var pos2 = [0];
                    if (BytesEq(eid2, [215])) {
                      var val = BytesInt(bytes2);
                      track.number = val;
                      tracks[val] = track;
                    } else if (BytesEq(eid2, [131])) {
                      var val = BytesInt(bytes2);
                      if (val == 1)
                        track.type = "video";
                      else if (val == 2) {
                        track.type = "audio";
                        if (!audioIdx)
                          scope.track0 = track;
                        track.idx = audioIdx++;
                      } else
                        track.type = "Type-" + val;
                    } else if (BytesEq(eid2, [134])) {
                      var str = "";
                      for (var i = 0; i < bytes2.length; i++) {
                        str += String.fromCharCode(bytes2[i]);
                      }
                      track.codec = str;
                    } else if (BytesEq(eid2, [225])) {
                      while (pos2[0] < bytes2.length) {
                        var eid3 = readMatroskaVInt(bytes2, pos2);
                        var bytes3 = readMatroskaBlock(bytes2, pos2);
                        if (BytesEq(eid3, [181])) {
                          var val = 0, arr = new Uint8Array(bytes3.reverse()).buffer;
                          if (bytes3.length == 4)
                            val = new Float32Array(arr)[0];
                          else if (bytes3.length == 8)
                            val = new Float64Array(arr)[0];
                          else
                            CLog("WebM Track !Float", 1, bytes3);
                          track[sampleRateTxt] = Math.round(val);
                        } else if (BytesEq(eid3, [98, 100]))
                          track.bitDepth = BytesInt(bytes3);
                        else if (BytesEq(eid3, [159]))
                          track.channels = BytesInt(bytes3);
                      }
                    }
                  }
                }
              }
              scope._ht = 1;
              CLog("WebM Tracks", tracks);
              endPos();
              break;
            }
          }
        }
        var track0 = scope.track0;
        if (!track0)
          return;
        if (track0.bitDepth == 16 && /FLOAT/i.test(track0.codec)) {
          track0.bitDepth = 32;
          CLog("WebM 16->32 bit", 3);
        }
        if (track0[sampleRateTxt] != scope[sampleRateTxt] || track0.bitDepth != 32 || track0.channels < 1 || !/(\b|_)PCM\b/i.test(track0.codec)) {
          scope.bytes = [];
          if (!scope.bad)
            CLog("WebM Track Unexpected", 3, scope);
          scope.bad = 1;
          return -1;
        }
        var datas = [], dataLen = 0;
        while (position[0] < bytes.length) {
          var eid1 = readMatroskaVInt(bytes, position);
          var bytes1 = readMatroskaBlock(bytes, position);
          if (!bytes1)
            break;
          if (BytesEq(eid1, [163])) {
            var trackNo = bytes1[0] & 15;
            var track = tracks[trackNo];
            if (!track) {
              CLog("WebM !Track" + trackNo, 1, tracks);
            } else if (track.idx === 0) {
              var u8arr = new Uint8Array(bytes1.length - 4);
              for (var i = 4; i < bytes1.length; i++) {
                u8arr[i - 4] = bytes1[i];
              }
              datas.push(u8arr);
              dataLen += u8arr.length;
            }
          }
          endPos();
        }
        if (dataLen) {
          var more = new Uint8Array(bytes.length - scope.pos[0]);
          more.set(bytes.subarray(scope.pos[0]));
          scope.bytes = more;
          scope.pos[0] = 0;
          var u8arr = new Uint8Array(dataLen);
          for (var i = 0, i2 = 0; i < datas.length; i++) {
            u8arr.set(datas[i], i2);
            i2 += datas[i].length;
          }
          var arr = new Float32Array(u8arr.buffer);
          if (track0.channels > 1) {
            var arr2 = [];
            for (var i = 0; i < arr.length; ) {
              arr2.push(arr[i]);
              i += track0.channels;
            }
            arr = new Float32Array(arr2);
          }
          return arr;
        }
      };
      var BytesEq = function(bytes1, bytes2) {
        if (!bytes1 || bytes1.length != bytes2.length)
          return false;
        if (bytes1.length == 1)
          return bytes1[0] == bytes2[0];
        for (var i = 0; i < bytes1.length; i++) {
          if (bytes1[i] != bytes2[i])
            return false;
        }
        return true;
      };
      var BytesInt = function(bytes) {
        var s = "";
        for (var i = 0; i < bytes.length; i++) {
          var n = bytes[i];
          s += (n < 16 ? "0" : "") + n.toString(16);
        }
        return parseInt(s, 16) || 0;
      };
      var readMatroskaVInt = function(arr, pos, trim) {
        var i = pos[0];
        if (i >= arr.length)
          return;
        var b0 = arr[i], b2 = ("0000000" + b0.toString(2)).substr(-8);
        var m = /^(0*1)(\d*)$/.exec(b2);
        if (!m)
          return;
        var len = m[1].length, val = [];
        if (i + len > arr.length)
          return;
        for (var i2 = 0; i2 < len; i2++) {
          val[i2] = arr[i];
          i++;
        }
        if (trim)
          val[0] = parseInt(m[2] || "0", 2);
        pos[0] = i;
        return val;
      };
      var readMatroskaBlock = function(arr, pos) {
        var lenVal = readMatroskaVInt(arr, pos, 1);
        if (!lenVal)
          return;
        var len = BytesInt(lenVal);
        var i = pos[0], val = [];
        if (len < 2147483647) {
          if (i + len > arr.length)
            return;
          for (var i2 = 0; i2 < len; i2++) {
            val[i2] = arr[i];
            i++;
          }
        }
        pos[0] = i;
        return val;
      };
      var i18n = Recorder2.i18n = {
        lang: "zh-CN",
        alias: { "zh-CN": "zh", "en-US": "en" },
        locales: {},
        data: {},
        put: function(set, texts) {
          var tag = RecTxt + ".i18n.put: ";
          var overwrite = set.overwrite;
          overwrite = overwrite == null || overwrite;
          var lang = set.lang;
          lang = i18n.alias[lang] || lang;
          if (!lang)
            throw new Error(tag + "set.lang?");
          var locale = i18n.locales[lang];
          if (!locale) {
            locale = {};
            i18n.locales[lang] = locale;
          }
          var exp = /^([\w\-]+):/, m;
          for (var i = 0; i < texts.length; i++) {
            var v = texts[i];
            m = exp.exec(v);
            if (!m) {
              CLog(tag + "'key:'? " + v, 3, set);
              continue;
            }
            var key = m[1], v = v.substr(key.length + 1);
            if (!overwrite && locale[key])
              continue;
            locale[key] = v;
          }
        },
        get: function() {
          return i18n.v_G.apply(null, arguments);
        },
        v_G: function(key, args, lang) {
          args = args || [];
          lang = lang || i18n.lang;
          lang = i18n.alias[lang] || lang;
          var locale = i18n.locales[lang];
          var val = locale && locale[key] || "";
          if (!val && lang != "zh") {
            if (lang == "en")
              return i18n.v_G(key, args, "zh");
            return i18n.v_G(key, args, "en");
          }
          i18n.lastLang = lang;
          if (val == "=Empty")
            return "";
          return val.replace(/\{(\d+)(\!?)\}/g, function(v, a, b) {
            a = +a || 0;
            v = args[a - 1];
            if (a < 1 || a > args.length) {
              v = "{?}";
              CLog("i18n[" + key + "] no {" + a + "}: " + val, 3);
            }
            return b ? "" : v;
          });
        },
        $T: function() {
          return i18n.v_T.apply(null, arguments);
        },
        v_T: function() {
          var a = arguments, key = "", args = [], isArgs = 0, tag = RecTxt + ".i18n.$T:";
          var exp = /^([\w\-]*):/, m;
          for (var i = 0; i < a.length; i++) {
            var v = a[i];
            if (i == 0) {
              m = exp.exec(v);
              key = m && m[1];
              if (!key)
                throw new Error(tag + "0 'key:'?");
              v = v.substr(key.length + 1);
            }
            if (isArgs === -1)
              args.push(v);
            else if (isArgs)
              throw new Error(tag + " bad args");
            else if (v === 0)
              isArgs = -1;
            else if (IsNum(v)) {
              if (v < 1)
                throw new Error(tag + " bad args");
              isArgs = v;
            } else {
              var lang = i == 1 ? "en" : i ? "" : "zh";
              m = exp.exec(v);
              if (m) {
                lang = m[1] || lang;
                v = v.substr(m[1].length + 1);
              }
              if (!m || !lang)
                throw new Error(tag + i + " 'lang:'?");
              i18n.put({ lang, overwrite: false }, [key + ":" + v]);
            }
          }
          if (!key)
            return "";
          if (isArgs > 0)
            return key;
          return i18n.v_G(key, args);
        }
      };
      var $T2 = i18n.$T;
      $T2.G = i18n.get;
      $T2("NonBrowser-1::非浏览器环境，不支持{1}", 1);
      $T2("IllegalArgs-1::参数错误：{1}", 1);
      $T2("NeedImport-2::调用{1}需要先导入{2}", 2);
      $T2("NotSupport-1::不支持：{1}", 1);
      Recorder2.TrafficImgUrl = "//ia.51.la/go1?id=20469973&pvFlag=1";
      var Traffic = Recorder2.Traffic = function(report) {
        if (!isBrowser)
          return;
        report = report ? "/" + RecTxt + "/Report/" + report : "";
        var imgUrl = Recorder2.TrafficImgUrl;
        if (imgUrl) {
          var data = Recorder2.Traffic;
          var m = /^(https?:..[^\/#]*\/?)[^#]*/i.exec(location.href) || [];
          var host = m[1] || "http://file/";
          var idf = (m[0] || host) + report;
          if (imgUrl.indexOf("//") == 0) {
            if (/^https:/i.test(idf)) {
              imgUrl = "https:" + imgUrl;
            } else {
              imgUrl = "http:" + imgUrl;
            }
          }
          if (report) {
            imgUrl = imgUrl + "&cu=" + encodeURIComponent(host + report);
          }
          if (!data[idf]) {
            data[idf] = 1;
            var img = new Image();
            img.src = imgUrl;
            CLog("Traffic Analysis Image: " + (report || RecTxt + ".TrafficImgUrl=" + Recorder2.TrafficImgUrl));
          }
        }
      };
      if (WRec2) {
        CLog($T2("8HO5::覆盖导入{1}", 0, RecTxt), 1);
        WRec2.Destroy();
      }
      Export[RecTxt] = Recorder2;
    });
  })(recorderCore);
  const Recorder = recorderCoreExports;
  var appExports = {};
  var app = {
    get exports() {
      return appExports;
    },
    set exports(v) {
      appExports = v;
    }
  };
  (function(module) {
    (function(factory) {
      var browser = typeof window == "object" && !!window.document;
      var win = browser ? window : Object;
      var rec = win.Recorder, ni = rec.i18n;
      factory(win, rec, ni, ni.$T, browser);
      if (module.exports) {
        module.exports = win.RecordApp;
      }
    })(function(Export, Recorder2, i18n, $T2, isBrowser) {
      var App2 = {
        LM: "2023-12-01 20:18",
        Current: 0,
        Platforms: {}
      };
      var Platforms = App2.Platforms;
      var AppTxt = "RecordApp";
      var ReqTxt = "RequestPermission";
      var RegTxt = "RegisterPlatform";
      var WApp2 = Export[AppTxt];
      if (WApp2 && WApp2.LM == App2.LM) {
        WApp2.CLog($T2("uXtA::重复导入{1}", 0, AppTxt), 3);
        return;
      }
      Export[AppTxt] = App2;
      Recorder2[AppTxt] = App2;
      App2.__SID_ = 0;
      var SID = App2.__SID = function() {
        return ++App2.__SID_;
      };
      var Sync = App2.__Sync = function(sid, tag, err) {
        if (App2.__SID_ != sid) {
          if (tag) {
            CLog($T2("kIBu::同时多次调用：{1}，旧的回调被丢弃", 0, tag) + (err ? ", error: " + err : ""), 3);
          }
          return false;
        }
        return true;
      };
      var CLog = function() {
        var v = arguments;
        v[0] = "[" + (CLog.Tag || AppTxt) + "][" + (App2.Current && App2.Current.Key || "?") + "]" + v[0];
        Recorder2.CLog.apply(null, v);
      };
      App2.CLog = CLog;
      App2[RegTxt] = function(key, config) {
        config.Key = key;
        if (Platforms[key]) {
          CLog($T2("ha2K::重复注册{1}", 0, key), 3);
        }
        Platforms[key] = config;
      };
      App2.__StopOnlyClearMsg = function() {
        return $T2("wpTL::仅清理资源");
      };
      var KeyH5 = "Default-H5";
      (function() {
        var impl = {
          Support: function(call) {
            call(true);
          },
          CanProcess: function() {
            return true;
          }
        };
        App2[RegTxt](KeyH5, impl);
        impl[ReqTxt] = function(sid, success, fail) {
          var old = App2.__Rec;
          if (old) {
            old.close();
            App2.__Rec = null;
          }
          var rec = Recorder2();
          rec.open(function() {
            success();
          }, fail);
        };
        impl.Start = function(sid, set, success, fail) {
          var appRec = App2.__Rec;
          if (appRec != null) {
            appRec.stop();
          }
          App2.__Rec = appRec = Recorder2(set);
          appRec.appSet = set;
          appRec.dataType = "arraybuffer";
          appRec.open(function() {
            if (Sync(sid)) {
              appRec.start();
            }
            success();
          }, fail);
        };
        impl.Stop = function(sid, success, fail) {
          var appRec = App2.__Rec;
          var clearMsg = success ? "" : App2.__StopOnlyClearMsg();
          if (!appRec) {
            if (Recorder2.IsOpen()) {
              appRec = Recorder2();
              appRec.open();
              appRec.close();
            }
            fail($T2("bpvP::未开始录音") + (clearMsg ? " (" + clearMsg + ")" : ""));
            return;
          }
          var end = function() {
            if (Sync(sid)) {
              appRec.close();
              for (var k in appRec.set) {
                appRec.appSet[k] = appRec.set[k];
              }
            }
          };
          var stopFail = function(msg) {
            end();
            fail(msg);
          };
          if (!success) {
            stopFail(clearMsg);
            return;
          }
          appRec.stop(function(arrBuf, duration, mime) {
            end();
            success(arrBuf, duration, mime);
          }, stopFail);
        };
      })();
      App2.GetCurrentRecOrNull = function() {
        return App2.__Rec || null;
      };
      App2.Pause = function() {
        var cur = App2.Current, key = "Pause";
        if (cur && cur[key]) {
          if (cur[key]() !== false)
            return;
        }
        var rec = App2.__Rec;
        if (rec && canProc(key)) {
          rec.pause();
        }
      };
      App2.Resume = function() {
        var cur = App2.Current, key = "Resume";
        if (cur && cur[key]) {
          if (cur[key]() !== false)
            return;
        }
        var rec = App2.__Rec;
        if (rec && canProc(key)) {
          rec.resume();
        }
      };
      var canProc = function(tag) {
        var cur = App2.Current;
        if (cur && cur.CanProcess())
          return 1;
        CLog($T2("fLJD::当前环境不支持实时回调，无法进行{1}", 0, tag), 3);
      };
      App2.Install = function(success, fail) {
        var cur = App2.Current;
        if (cur) {
          success && success();
          return;
        }
        var reqs = App2.__reqs || (App2.__reqs = []);
        reqs.push({ s: success, f: fail });
        success = function() {
          call("s", arguments);
        };
        fail = function() {
          call("f", arguments);
        };
        var call = function(fn, args) {
          var arr = [].concat(reqs);
          reqs.length = 0;
          for (var i = 0; i < arr.length; i++) {
            var f = arr[i][fn];
            f && f.apply(null, args);
          }
        };
        if (reqs.length > 1)
          return;
        var keys = [KeyH5], key;
        for (var k in Platforms) {
          if (k != KeyH5)
            keys.push(k);
        }
        keys.reverse();
        var initCur = function(idx) {
          key = keys[idx];
          cur = Platforms[key];
          cur.Support(function(canUse) {
            if (!canUse) {
              return initCur(idx + 1);
            }
            if (cur.Install) {
              cur.Install(initOk, fail);
            } else {
              initOk();
            }
          });
        };
        var initOk = function() {
          App2.Current = cur;
          CLog("Install platform: " + key);
          success();
        };
        initCur(0);
      };
      App2[ReqTxt] = function(success, fail) {
        var sid = SID(), tag = AppTxt + "." + ReqTxt;
        var failCall = function(errMsg, isUserNotAllow) {
          isUserNotAllow = !!isUserNotAllow;
          var msg = errMsg + ", isUserNotAllow:" + isUserNotAllow;
          if (!Sync(sid, tag, msg))
            return;
          CLog($T2("YnzX::录音权限请求失败：") + msg, 1);
          fail && fail(errMsg, isUserNotAllow);
        };
        CLog(ReqTxt + "...");
        App2.Install(function() {
          if (!Sync(sid, tag))
            return;
          var checkMsg = CheckH5();
          if (checkMsg) {
            failCall(checkMsg);
            return;
          }
          App2.Current[ReqTxt](sid, function() {
            if (!Sync(sid, tag))
              return;
            CLog(ReqTxt + " Success");
            success && success();
          }, failCall);
        }, failCall);
      };
      var NeedReqMsg = function() {
        return $T2("nwKR::需先调用{1}", 0, ReqTxt);
      };
      var CheckH5 = function() {
        var msg = "";
        if (App2.Current.Key == KeyH5 && !isBrowser) {
          msg = $T2("citA::当前不是浏览器环境，需引入针对此平台的支持文件（{1}），或调用{2}自行实现接入", 0, "src/app-support/app-xxx-support.js", AppTxt + "." + RegTxt);
        }
        return msg;
      };
      App2.Start = function(set, success, fail) {
        var sid = SID(), tag = AppTxt + ".Start";
        var failCall = function(msg) {
          if (!Sync(sid, tag, msg))
            return;
          CLog($T2("ecp9::开始录音失败：") + msg, 1);
          fail && fail(msg);
        };
        CLog("Start...");
        var cur = App2.Current;
        if (!cur) {
          failCall(NeedReqMsg());
          return;
        }
        set || (set = {});
        var obj = {
          type: "mp3",
          sampleRate: 16e3,
          bitRate: 16,
          onProcess: function() {
          }
        };
        for (var k in obj) {
          set[k] || (set[k] = obj[k]);
        }
        for (var k in Platforms) {
          var pf = Platforms[k];
          if (pf.AllStart_Clean) {
            pf.AllStart_Clean(set);
          }
        }
        var checkMsg = false;
        if (cur.Start_Check) {
          checkMsg = cur.Start_Check(set);
        }
        if (checkMsg === false) {
          var checkRec = Recorder2(set);
          checkMsg = checkRec.envCheck({ envName: cur.Key, canProcess: cur.CanProcess() });
          if (!checkMsg)
            checkMsg = CheckH5();
        }
        if (checkMsg) {
          failCall($T2("EKmS::不能录音：") + checkMsg);
          return;
        }
        App2._SRec = 0;
        cur.Start(sid, set, function() {
          if (!Sync(sid, tag))
            return;
          CLog($T2("k7Qo::已开始录音"), set);
          App2._STime = Date.now();
          success && success();
        }, failCall);
      };
      App2.Stop = function(success, fail) {
        var sid = SID(), tag = AppTxt + ".Stop";
        var failCall = function(msg) {
          if (!Sync(sid, tag, msg))
            return;
          CLog($T2("Douz::结束录音失败：") + msg, success ? 1 : 0);
          try {
            fail && fail(msg);
          } finally {
            clear();
          }
        };
        var clear = function() {
          App2._SRec = App2.__Rec;
          App2.__Rec = null;
        };
        CLog("Stop... " + $T2("wqSH::和Start时差：{1}ms", 0, App2._STime ? Date.now() - App2._STime : -1) + " Recorder.LM:" + Recorder2.LM + " " + AppTxt + ".LM:" + App2.LM);
        var t1 = Date.now();
        var cur = App2.Current;
        if (!cur) {
          failCall(NeedReqMsg());
          return;
        }
        cur.Stop(sid, !success ? null : function(arrayBuffer, duration, mime) {
          if (!Sync(sid, tag))
            return;
          CLog($T2("g3VX::结束录音 耗时{1}ms 音频时长{2}ms 文件大小{3}b {4}", 0, Date.now() - t1, duration, arrayBuffer.byteLength, mime));
          try {
            success(arrayBuffer, duration, mime);
          } finally {
            clear();
          }
        }, failCall);
      };
    });
  })(app);
  const RecordApp$1 = appExports;
  !function(e) {
    var n = "object" == typeof window && !!window.document, t = n ? window : Object, i = "https://github.com/xiangyuecn/Recorder/tree/master/app-support-sample/demo_UniApp";
    if (t.RecordApp) {
      var r = t.Recorder, a = r.i18n;
      !function(m, g, e2, b, S) {
        var y = g.RecordApp, C = y.CLog, W = function() {
        };
        y.UniSupportLM = "2023-12-08 20:55";
        var h = "app-uni-support.js", P = false, B = false, V = false;
        (function() {
          if (S) {
            P = true;
            var e3 = navigator.userAgent.replace(/[_\d]/g, " ");
            B = !/\bandroid\b/i.test(e3) && /\bios\b|\biphone\b/i.test(e3);
          } else
            "object" == typeof plus && ("Android" == plus.os.name ? P = true : "iOS" == plus.os.name && (B = P = true)), (V = P) || C("App !plus", 1);
        })();
        y.UniIsApp = function() {
          return P ? B ? 2 : 1 : 0;
        };
        var M = y.UniBtoa = function(e3) {
          if ("object" == typeof uni && uni.arrayBufferToBase64)
            return uni.arrayBufferToBase64(e3);
          for (var n2 = new Uint8Array(e3), t2 = "", i2 = 0, r2 = n2.length; i2 < r2; i2++)
            t2 += String.fromCharCode(n2[i2]);
          return btoa(t2);
        }, N = y.UniAtob = function(e3) {
          if ("object" == typeof uni && uni.base64ToArrayBuffer)
            return uni.base64ToArrayBuffer(e3);
          for (var n2 = atob(e3), t2 = new Uint8Array(n2.length), i2 = 0, r2 = n2.length; i2 < r2; i2++)
            t2[i2] = n2.charCodeAt(i2);
          return t2.buffer;
        };
        y.UniB64Enc = function(e3) {
          if ("object" == typeof uni && uni.arrayBufferToBase64) {
            var n2 = y.UniStr2Buf(e3);
            return uni.arrayBufferToBase64(n2);
          }
          return btoa(unescape(encodeURIComponent(e3)));
        }, y.UniB64Dec = function(e3) {
          if ("object" == typeof uni && uni.base64ToArrayBuffer) {
            var n2 = uni.base64ToArrayBuffer(e3);
            return y.UniBuf2Str(n2);
          }
          return decodeURIComponent(escape(atob(e3)));
        }, y.UniStr2Buf = function(e3) {
          for (var n2 = unescape(encodeURIComponent(e3)), t2 = new Uint8Array(n2.length), i2 = 0, r2 = n2.length; i2 < r2; i2++)
            t2[i2] = n2.charCodeAt(i2);
          return t2.buffer;
        }, y.UniBuf2Str = function(e3) {
          for (var n2 = new Uint8Array(e3), t2 = "", i2 = 0, r2 = n2.length; i2 < r2; i2++)
            t2 += String.fromCharCode(n2[i2]);
          return decodeURIComponent(escape(t2));
        };
        var k = y.UniJsSource = { IsSource: false, pcm_sum: function(e3) {
          for (var n2 = 0, t2 = 0; t2 < e3.length; t2++)
            n2 += Math.abs(e3[t2]);
          return n2;
        } };
        (function(initMemory) {
          !function() {
            var l = A;
            !function(e4, t2) {
              for (var n2 = A, r3 = a2(); ; )
                try {
                  if (440219 === parseInt(n2(649)) / 1 * (parseInt(n2(699)) / 2) + -parseInt(n2(407)) / 3 * (parseInt(n2(560)) / 4) + parseInt(n2(574)) / 5 * (parseInt(n2(689)) / 6) + parseInt(n2(501)) / 7 + -parseInt(n2(468)) / 8 + parseInt(n2(662)) / 9 + -parseInt(n2(548)) / 10 * (-parseInt(n2(654)) / 11))
                    break;
                  r3.push(r3.shift());
                } catch (e5) {
                  r3.push(r3.shift());
                }
            }();
            var o = { Support: function(e4) {
              var t2 = A;
              return P ? void (!S || y[t2(339)] ? e4(true) : e4(false)) : (C(b(t2(406)), 3), void e4(false));
            }, CanProcess: function() {
              return true;
            } };
            y[l(461)](S ? l(421) : l(653), o), P && (C[l(432)] = S ? l(335) : l(587)), y[l(674)] || (y[l(674)] = { id: 0, pageShow: {} });
            var v = function() {
              return P && !S && !y[l(349)];
            };
            function A(e4, t2) {
              var n2 = a2();
              return (A = function(e5, t3) {
                return n2[e5 -= 335];
              })(e4, t2);
            }
            y[l(470)] = function(e4) {
              var t2 = l, n2 = y[t2(674)][t2(555)] = {};
              if (v()) {
                n2[t2(563)] = d(e4);
                var r3 = y[t2(583)];
                if (r3) {
                  for (var i3 = getCurrentPages(), a3 = true, o2 = 0, s2 = i3[t2(344)]; o2 < s2; o2++)
                    if (i3[o2][t2(672)].id == r3) {
                      a3 = false;
                      break;
                    }
                  a3 && (y[t2(371)] = null, y[t2(583)] = null, y[t2(361)] = null);
                }
              }
            }, y[l(631)] = function(e4) {
              var t2 = l;
              if (v()) {
                y[t2(341)] = true, y[t2(414)] = 1, setTimeout(function() {
                  y[t2(414)] = 0;
                });
                var n2 = e4[t2(609)];
                if (n2 && n2[t2(602)] && n2[t2(602)][t2(346)]) {
                  var r3 = e4[t2(352)] || e4.$ && e4.$[t2(455)], i3 = s(e4);
                  i3 && r3 ? (r3 == y[t2(371)] && i3 == y[t2(583)] || C(b(t2(585)) + t2(399) + i3 + t2(438) + r3), y[t2(371)] = r3, y[t2(583)] != i3 && (y[t2(583)] = i3, y[t2(361)] = n2[t2(602)][t2(346)]())) : C(b(t2(666)) + t2(378), 1);
                } else
                  C(b(t2(620)), 1);
              }
            }, y[l(497)] = function(e4) {
              var t2 = l;
              if (P && S) {
                if (e4[t2(482)])
                  var n2 = window[t2(518)], r3 = e4[t2(352)] || e4[t2(482)][t2(424)][t2(663)], i3 = e4[t2(482)][t2(351)];
                if (i3)
                  if (i3[t2(394)] = e4, n2 && r3) {
                    var a3 = t2(517) + n2 + t2(438) + r3;
                    y[t2(681)] = a3, i3[t2(465)](t2(525), a3), y[t2(674)][a3] ? C(b(t2(507)) + t2(474) + a3, 3) : (y[t2(674)][a3] = 1, C(b(t2(388)) + t2(512) + a3));
                  } else
                    C(b(t2(664)) + t2(378), 1);
                else
                  C(b(t2(423)), 1);
              }
            };
            var d = function(e4, t2, n2) {
              var r3 = l;
              if (e4) {
                if (e4[r3(669)])
                  return e4[r3(669)];
                var i3 = s(e4), a3 = e4[r3(352)] || e4.$ && e4.$[r3(455)];
              }
              if (t2)
                if (n2 || R(), r3(453) == t2)
                  i3 = y[r3(484)], a3 = y[r3(594)];
                else
                  i3 = y[r3(583)], a3 = y[r3(371)];
              return i3 && a3 ? r3(517) + i3 + r3(438) + a3 : "";
            }, f = function(e4) {
              var t2 = l;
              return t2(679) === e4 || t2(453) === e4 ? { Rec_WvCid: d(null, e4) } : { Rec_WvCid: e4 || "?" };
            }, s = function(e4) {
              var t2 = l, n2 = e4[t2(609)];
              return (n2 = n2 && n2[t2(672)]) && n2.id || 0;
            }, R = function(e4) {
              var t2 = l;
              if (!y[t2(361)])
                return b(t2(644));
              var n2 = d(null, 1, 1), r3 = y[t2(674)][t2(555)][t2(563)];
              if (e4) {
                if (!y[t2(484)])
                  return b(t2(337));
                if (d(null, t2(453), 1) != n2)
                  return b(t2(687));
              }
              return r3 && r3 != n2 && C(b(t2(483), 0, r3, n2), 3), "";
            };
            y[l(554)] = function(e4, i3, a3) {
              var c2 = l, t2 = "";
              t2 || V || (t2 = b(c2(538)));
              var o2 = !t2 && function(e5, t3) {
                var n3 = c2;
                if (e5 && e5[n3(669)])
                  var r3 = /^wv_(\d+)_/[n3(637)](e5[n3(669)]), i4 = r3 && r3[1];
                else {
                  var a4 = e5 && e5[n3(609)], o3 = a4 && a4[n3(602)];
                  i4 = (a4 = a4 && a4[n3(672)]) && a4.id;
                }
                if (i4) {
                  if (i4 == y[n3(583)])
                    return y[n3(361)];
                  if (o3)
                    return o3[n3(346)]();
                  var s3 = plus[n3(374)][n3(600)](i4);
                  if (s3)
                    return s3;
                }
                return t3 ? (R(), y[n3(361)]) : null;
              }(e4, null == e4);
              if (t2 || o2 || (t2 = b(c2(null == e4 ? 363 : 513))), t2)
                return t2 += b(c2(387)), C(t2 + c2(401) + i3[c2(439)](0, 200), 1), t2;
              var n2 = y[c2(674)][c2(555)];
              if (n2[c2(505)] || (n2[c2(505)] = 1, r2()), a3) {
                var s2 = ("a" + Math[c2(413)]())[c2(514)](".", ""), u2 = 0, p2 = function() {
                  var e5 = c2;
                  if (0 != u2 && u2 >= a3[e5(457)])
                    o2[e5(364)](e5(586) + s2 + e5(528) + s2 + e5(469) + i3 + e5(422));
                  else {
                    var t3 = y[e5(597)](p2), n3 = u2;
                    u2 += 524288;
                    var r3 = a3[e5(701)](n3, u2);
                    o2[e5(364)](e5(530) + s2 + e5(541) + s2 + e5(578) + a3[e5(457)] + e5(622) + M(r3) + e5(418) + t3 + e5(491));
                  }
                };
                p2();
              } else
                o2[c2(364)](i3);
            }, y[l(441)] = function(e4, t2, n2) {
              var r3 = l, i3 = "";
              i3 || V || (i3 = b(r3(633)));
              var a3 = !i3 && d(e4, null == e4);
              if (i3 || a3 || (i3 = b(r3(null == e4 ? 381 : 375))), i3)
                return i3 += b(r3(366)), C(i3 + r3(401) + t2[r3(439)](0, 200), 1), i3;
              y[r3(554)](e4, r3(539) + a3 + r3(702) + t2 + r3(389), n2);
            };
            var u = l(584), r2 = function() {
              var i3 = l;
              if (V && i3(542) != typeof UniServiceJSBridge) {
                var e4 = y[i3(499)];
                if (e4) {
                  var t2 = "";
                  try {
                    t2 = uni[i3(458)](u);
                  } catch (e5) {
                  }
                  if (e4 == t2)
                    return;
                  C(b(i3(504)), 3);
                }
                e4 = "r" + Math[i3(413)]();
                try {
                  uni[i3(608)](u, e4);
                } catch (e5) {
                }
                y[i3(499)] = e4, UniServiceJSBridge[i3(340)](u), UniServiceJSBridge[i3(638)](u, function(e5) {
                  var t3 = i3, n2 = e5[t3(579)] || "";
                  if (t3(355) != n2)
                    if (t3(629) != n2)
                      if (-1 == n2[t3(566)](t3(520)))
                        -1 == n2[t3(566)](t3(480)) ? C(b(t3(383)) + JSON[t3(405)](e5), 1) : y[t3(591)](e5);
                      else {
                        var r3 = y[t3(674)][n2];
                        r3 && r3(e5);
                      }
                    else
                      T(e5);
                  else
                    O(e5);
                });
              }
            };
            y[l(597)] = function(t2) {
              var e4 = l, n2 = y[e4(674)], r3 = ++n2.id, i3 = e4(520) + r3;
              return n2[i3] = function(e5) {
                delete n2[i3], t2(e5);
              }, i3;
            }, y[l(359)] = function(e4) {
              UniViewJSBridge[l(444)](u, e4);
            }, y[l(498)] = function(r3, i3, e4) {
              var a3 = l;
              if (S && P) {
                var o2 = y[a3(681)];
                if (o2) {
                  var s2 = y[a3(674)], c2 = 0, u2 = ++s2.id;
                  s2[a3(480) + u2] = function(e5) {
                    c2 = e5, t2();
                  };
                  var p2 = 0, t2 = function() {
                    var e5 = a3;
                    if (0 != p2 && p2 >= r3[e5(457)])
                      return delete s2[e5(480) + u2], void i3(c2);
                    var t3 = p2;
                    p2 += 524288;
                    var n2 = r3[e5(701)](t3, p2);
                    y[e5(359)]({ action: e5(t3 ? 577 : 643), wvCid: o2, wvID: u2, mainID: c2, b64: M(n2) });
                  };
                  t2();
                } else
                  e4(b(a3(547)));
              } else
                e4(b(a3(695)));
            }, y[l(591)] = function(e4) {
              var t2 = l, n2 = e4[t2(657)], r3 = y[t2(674)], i3 = t2(480);
              t2(643) == e4[t2(579)] && (n2 = ++r3.id, r3[i3 + n2] = { memory: new Uint8Array(2097152), mOffset: 0 });
              var a3 = r3[i3 + n2];
              if (a3) {
                var o2 = new Uint8Array(N(e4[t2(570)])), s2 = o2[t2(344)];
                if (a3[t2(417)] + s2 > a3[t2(336)][t2(344)]) {
                  var c2 = new Uint8Array(a3[t2(336)][t2(344)] + Math[t2(677)](2097152, s2));
                  c2[t2(440)](a3[t2(336)][t2(626)](0, a3[t2(417)])), a3[t2(336)] = c2;
                }
                a3[t2(336)][t2(440)](o2, a3[t2(417)]), a3[t2(417)] += s2, y[t2(554)](f(e4[t2(671)]), t2(427) + i3 + e4[t2(408)] + t2(519) + n2 + t2(627));
              } else
                C(b(t2(403)), 3);
            }, y[l(571)] = function(e4) {
              var t2 = l;
              if (!V)
                return null;
              var n2 = y[t2(674)], r3 = n2[t2(480) + e4];
              return delete n2[t2(480) + e4], r3 ? r3[t2(336)][t2(599)][t2(701)](0, r3[t2(417)]) : null;
            }, y[l(661)] = function(n2, i3, a3, r3) {
              var o2 = l;
              if (a3 = a3 || W, r3 = r3 || W, P) {
                var s2 = function(e4) {
                  var t2 = A;
                  r3(b(t2(356), 0, n2) + e4[t2(445)]);
                };
                plus.io[o2(464)](plus.io[o2(593)], function(e4) {
                  var t2 = o2;
                  e4[t2(428)][t2(385)](n2, { create: true }, function(n3) {
                    var r4 = t2;
                    n3[r4(354)](function(e5) {
                      var t3 = r4;
                      e5[t3(595)] = function() {
                        a3(n3[t3(556)]);
                      }, e5[t3(565)] = s2;
                      try {
                        e5[t3(348)](M(i3));
                      } catch (e6) {
                        s2(e6);
                      }
                    }, s2);
                  }, s2);
                }, s2);
              } else
                r3(b(o2(489)));
            };
            var i2 = function(e4) {
              var t2 = l;
              if (y[t2(531)]) {
                var n2 = "";
                !n2 && S && (n2 = b(t2(426))), !n2 && y[t2(531)][t2(619)] ? (c(), y[t2(612)] || (n2 = b(t2(393), 0, p))) : n2 || y[t2(531)][t2(462)] || (n2 = b(t2(601))), n2 && (y[t2(531)] = null, C(n2, 1)), y[t2(494)] = n2;
              }
              if (V) {
                var r3 = b(t2(419), 0, m), i3 = y[t2(531)];
                i3 && (!e4 && y[t2(459)] || (y[t2(459)] = 1, i3[t2(619)] ? C(b(t2(588)) + r3) : C(b(t2(524)) + r3))), y[t2(349)] ? i3 ? !e4 && y[t2(590)] || (y[t2(590)] = 1, C(b(t2(544)) + r3)) : C(b(t2(437)) + r3, 1) : y[t2(341)] && (y[t2(361)] ? !e4 && y[t2(429)] || (y[t2(429)] = 1, C(b(t2(367)) + r3)) : C(b(t2(365)) + r3, 1));
              }
            };
            function a2() {
              var e4 = initMemory;
              return (a2 = function() {
                return e4;
              })();
            }
            y[l(605)] = function(e4, t2, n2, i3) {
              var r3 = l;
              {
                var s2, c2;
                {
                  if (V) {
                    var f2 = [];
                    for (s2 = 0, c2 = t2[r3(344)]; s2 < c2; s2++)
                      f2[r3(493)](r3(562) + t2[s2] + r3(396) + (s2 + 1) + r3(676));
                    return f2[r3(493)](n2), void y[r3(441)](e4, f2[r3(404)]("\n"));
                  }
                  C(b(r3(376)), 1);
                }
              }
            };
            var c = function() {
              var e4 = l;
              if (!y[e4(612)]) {
                p = y[e4(531)][e4(515)] || e4(545);
                try {
                  y[e4(612)] = uni[e4(628)](p);
                } catch (e5) {
                }
              }
            }, p = "*", w = function() {
              var n2 = l, e4 = y[n2(531)], r3 = e4 && e4[n2(619)] ? p : n2(618);
              _(n2(635), {}, null, null, function(e5) {
                var t2 = n2;
                t2(415) == e5[t2(579)] ? e5[t2(490)] ? C("[" + r3 + "][" + e5[t2(416)] + "]" + e5[t2(445)], 1) : C("[" + r3 + "][" + e5[t2(416)] + "]" + e5[t2(445)]) : t2(425) == e5[t2(579)] ? y[t2(398)](e5[t2(442)], e5[t2(684)]) : C(b(t2(495), 0, r3) + t2(345) + e5[t2(579)], 3);
              });
            }, _ = function(e4, t2, n2, r3, i3) {
              var a3 = l, o2 = y[a3(531)];
              if (o2) {
                var s2 = { action: e4, args: t2 || {} };
                i3 || (i3 = function(e5) {
                  var t3 = a3;
                  t3(395) == e5[t3(559)] ? n2 && n2(e5[t3(557)], e5) : r3 && r3(e5[t3(445)]);
                }), o2[a3(619)] ? y[a3(612)][a3(462)](s2, i3) : o2[a3(462)](s2, i3);
              } else {
                var c2 = y[a3(494)] || b(a3(400));
                r3 && r3(c2);
              }
            };
            o[l(443)] = function(e4, t2) {
              i2(), e4();
            }, o[l(693)] = function() {
              return e3(l(693));
            }, o[l(362)] = function() {
              return e3(l(362));
            };
            var e3 = function(e4) {
              var t2 = l;
              if (!v())
                return false;
              var n2 = q[t2(673)];
              if (n2) {
                var r3 = R(1);
                r3 ? C(r3, 1) : y[t2(554)](f(n2[t2(463)]), t2(543) + e4 + "()");
              } else
                C(b(t2(648), 0, e4), 3);
            };
            o[l(481)] = function(e4, t2, n2) {
              var s2 = l, r3 = q[s2(673)];
              q[s2(673)] = null, r3 && v() && y[s2(554)](f(r3[s2(463)]), s2(473)), !v() || y[s2(414)] ? (y[s2(484)] = y[s2(583)], y[s2(594)] = y[s2(371)], i2(true), function(r4) {
                var i3 = s2;
                if (!V)
                  return r4();
                var e5 = y[i3(553)] = y[i3(553)] || {}, n3 = function(e6, t4, n4) {
                  C(b(i3(511), 0, h) + e6, t4 || 0), n4 || r4();
                }, t3 = y[i3(531)];
                if (t3 || e5[i3(696)])
                  return e5[i3(696)] = e5[i3(696)] || (t3[i3(619)] ? 2 : 1), 2 == e5[i3(696)] ? n3(b(i3(487))) : n3(b(i3(436)));
                var a3 = i3(460) + (e5[i3(516)] = e5[i3(516)] || uni[i3(615)]()[i3(516)] || "0") + i3(642);
                if (y[i3(510)]) {
                  if (y[i3(510)] == a3)
                    return n3(a3);
                  C(b(i3(472), 0, a3), 3);
                }
                var o2 = function(e6) {
                  var t4 = i3;
                  n3(t4(430) + h + t4(373) + a3 + t4(537) + m + " ", 3, e6);
                };
                if (e5[i3(670)])
                  return o2();
                o2(1), e5[i3(670)] = 1, uni[i3(338)]({ title: i3(533), content: "文件" + h + i3(675), showCancel: false, confirmText: i3(485), complete: function() {
                  r4();
                } });
              }(function() {
                U(e4, t2, n2);
              })) : n2(b(s2(452)));
            };
            var U = function(r3, i3, o2) {
              var s2 = l;
              if (S)
                return y[s2(339)] ? void i3() : void o2(b(s2(454)));
              var e4 = function(r4) {
                var i4 = s2;
                if (B) {
                  C(b(i4(343)));
                  var a4 = function() {
                    var e5 = i4;
                    if (y[e5(446)])
                      r4();
                    else {
                      var t3 = plus[e5(529)][e5(357)](e5(625))[e5(698)](), n3 = t3[e5(360)]();
                      1970168948 == n3 ? t3[e5(678)](a4) : 1735552628 == n3 ? (C(b(e5(552))), r4()) : (C(b(e5(450)) + e5(658) + n3, 1), o2(b(e5(368)), true)), plus[e5(529)][e5(667)](t3);
                    }
                  };
                  a4();
                } else
                  C(b(i4(447))), plus[i4(561)][i4(692)]([i4(567)], function(e5) {
                    var t3 = i4;
                    0 < e5[t3(700)][t3(344)] ? (C(b(t3(496)) + JSON[t3(405)](e5)), r4()) : (C(b(t3(656)), 1, e5), o2(b(t3(690)), true));
                  }, function(e5) {
                    var t3 = i4;
                    C(b(t3(580)) + e5[t3(445)], 1, e5), o2(b(t3(435)) + e5[t3(445)]);
                  });
              }, t2 = function(e5) {
                var t3 = s2;
                w(), _(t3(360), {}, e5, o2);
              };
              if (y[s2(349)])
                e4(function() {
                  t2(i3);
                });
              else {
                var a3 = f(s2(453)), n2 = function(n3) {
                  var r4 = s2, e5 = R(1);
                  if (e5)
                    o2(b(r4(668)) + e5);
                  else {
                    var t3 = y[r4(597)](function(e6) {
                      var t4 = r4;
                      e6.ok ? n3() : o2(e6[t4(527)]);
                    });
                    y[r4(554)](a3, r4(551) + t3 + r4(660) + JSON[r4(405)](b(r4(502))) + r4(467) + JSON[r4(405)](b(r4(410), 0, r4(603) + h + '"')) + r4(683) + u + r4(522));
                  }
                }, c2 = function(e5) {
                  var n3 = s2;
                  if (y[n3(686)](r3)) {
                    var t3 = y[n3(597)](function(e6) {
                      var t4 = n3;
                      e6.ok ? i3() : o2(e6[t4(527)], e6[t4(358)]);
                    });
                    y[n3(554)](a3, n3(370) + !!e5 + n3(572) + t3 + n3(521) + t3 + n3(492));
                  } else
                    o2(n3(372));
                };
                y[s2(531)] ? n2(function() {
                  e4(function() {
                    t2(function() {
                      c2(true);
                    });
                  });
                }) : n2(function() {
                  e4(function() {
                    c2();
                  });
                });
              }
            };
            o[l(694)] = function(t2, o2, n2, s2) {
              var c2 = l, e4 = q[c2(673)];
              if (q[c2(673)] = null, e4 && v() && y[c2(554)](f(e4[c2(463)]), c2(473)), !v() || y[c2(414)]) {
                q[c2(449)] = o2;
                var u2 = g(o2);
                if (u2[c2(440)][c2(582)] = true, u2[c2(535)] = c2(596), q[c2(697)] = false, q[c2(673)] = u2, y[c2(630)] = u2, S)
                  return y[c2(339)] ? void n2() : void s2(b(c2(379)));
                var r3 = function(t3) {
                  var n3 = c2, e5 = JSON[n3(433)](JSON[n3(405)](p2));
                  e5[n3(569)] = e5[n3(569)] || 48e3, e5[n3(581)] = e5[n3(684)], e5[n3(684)] = e5[n3(569)], B || null != e5[n3(380)] || (e5[n3(380)] = y[n3(477)] || "1"), w(), _(n3(624), e5, function() {
                    var e6 = n3;
                    y[e6(665)] = setInterval(function() {
                      _(e6(451), {}, function() {
                      });
                    }, 5e3), t3();
                  }, s2);
                };
                clearInterval(y[c2(665)]);
                var p2 = {};
                for (var i3 in o2)
                  /_renderjs$/[c2(691)](i3) || (p2[i3] = o2[i3]);
                if (p2 = JSON[c2(433)](JSON[c2(405)](p2)), y[c2(349)])
                  r3(n2);
                else {
                  u2[c2(440)][c2(386)] = c2(655);
                  var a3 = function(n3, e5) {
                    var r4 = c2, t3 = R(1);
                    if (t3)
                      s2(b(r4(607)) + t3);
                    else {
                      u2[r4(463)] = d(null, r4(453)), q[r4(697)] = e5;
                      var i4 = [r4(617) + JSON[r4(405)](p2) + ";"];
                      i4[r4(493)](r4(486) + (o2[r4(592)] || 0) + r4(647) + (o2[r4(598)] || 0) + r4(409)), (o2[r4(650)] || o2[r4(471)]) && i4[r4(493)](r4(478) + (o2[r4(471)] || 0) + r4(456));
                      var a4 = y[r4(597)](function(e6) {
                        var t4 = r4;
                        e6.ok ? n3() : s2(e6[t4(527)]);
                      });
                      i4[r4(493)](r4(546) + a4 + r4(391) + a4 + r4(575)), y[r4(441)](f(u2[r4(463)]), i4[r4(404)]("\n"));
                    }
                  };
                  y[c2(531)] ? a3(function() {
                    var e5 = c2;
                    y[e5(686)](t2) ? r3(n2) : s2(e5(372));
                  }, true) : a3(n2);
                }
              } else
                s2(b(c2(688)));
            }, o[l(509)] = function(e4) {
              return !!v() && "";
            }, o[l(606)] = function(e4) {
              var t2 = l;
              if (!v())
                for (var n2 in e4)
                  /_renderjs$/[t2(691)](n2) && delete e4[n2];
            };
            var O = function(e4) {
              var t2 = l, n2 = q[t2(673)];
              n2 && (n2[t2(440)][t2(684)] = e4[t2(347)], n2[t2(440)][t2(488)] = e4[t2(646)]);
              for (var r3 = e4[t2(540)], i3 = 0, a3 = r3[t2(344)]; i3 < a3; i3++)
                q(r3[i3], e4[t2(684)]);
            }, T = function(e4) {
              var t2 = l, n2 = q[t2(673)];
              if (n2) {
                var r3 = new Uint8Array(N(e4[t2(534)]));
                n2[t2(440)][t2(650)] && n2[t2(440)][t2(650)](r3);
              } else
                C(b(t2(549)), 3);
            }, q = function(e4, t2) {
              var n2 = l, r3 = q[n2(673)];
              if (r3) {
                if (r3[n2(589)] || r3[n2(479)]({ envName: o[n2(382)], canProcess: o[n2(573)]() }, t2), r3[n2(589)] = 1, e4 instanceof Int16Array)
                  var i3 = new Int16Array(e4);
                else
                  i3 = new Int16Array(N(e4));
                var a3 = k[n2(342)](i3);
                r3[n2(500)](i3, a3);
              } else
                C(b(n2(639)), 3);
            };
            y[l(398)] = function(e4, t2) {
              var n2 = l;
              if (q[n2(697)]) {
                var r3 = q[n2(673)];
                return r3 ? void y[n2(554)](f(r3[n2(463)]), n2(651) + e4 + '",' + t2 + ")") : void C(b(n2(621)), 3);
              }
              q(e4, t2);
            }, o[l(390)] = function(n2, a3, r3) {
              var o2 = l, s2 = function(e5) {
                var t3 = A;
                y[t3(686)](n2) && (q[t3(673)] = null, c2 && u2 && v() && y[t3(554)](f(c2[t3(463)]), t3(473))), r3(e5);
              }, c2 = q[o2(673)], u2 = true, p2 = a3 ? "" : y[o2(550)](), e4 = function() {
                var e5 = o2;
                if (y[e5(686)](n2))
                  if (q[e5(673)] = null, c2) {
                    if (C(e5(434) + c2[e5(523)] + e5(420) + c2[e5(634)] + e5(402) + JSON[e5(405)](q[e5(449)])), !a3)
                      return d2(), void s2(p2);
                    c2[e5(350)](function(e6, t3, n3) {
                      d2(), a3(e6, t3, n3);
                    }, function(e6) {
                      d2(), s2(e6);
                    });
                  } else
                    s2(b(e5(369)) + (p2 ? " (" + p2 + ")" : ""));
                else
                  s2(e5(372));
              }, d2 = function() {
                var e5 = o2;
                if (y[e5(686)](n2))
                  for (var t3 in q[e5(673)] = null, c2[e5(440)])
                    q[e5(449)][t3] = c2[e5(440)][t3];
              };
              if (S)
                return y[o2(339)] ? void e4() : void s2(b(o2(645)));
              var t2 = function(e5) {
                _(o2(448), {}, e5, s2);
              };
              if (clearInterval(y[o2(665)]), y[o2(349)])
                t2(e4);
              else {
                var i3 = function(e5) {
                  var r4 = o2;
                  if (c2) {
                    var t3 = R(1);
                    if (t3)
                      s2(b(r4(568)) + t3);
                    else {
                      var n3 = y[r4(597)](function(e6) {
                        var t4 = r4;
                        if (u2 = false, e6.ok) {
                          c2[t4(440)][t4(386)] = q[t4(449)][t4(386)], c2[t4(440)][t4(684)] = e6[t4(347)], c2[t4(440)][t4(488)] = e6[t4(646)], d2();
                          var n4 = y[t4(571)](e6[t4(652)]);
                          n4 ? a3(n4, e6[t4(475)], e6[t4(506)]) : s2(b(t4(682)));
                        } else
                          s2(e6[t4(527)]);
                      }), i4 = r4(616) + (a3 && q[r4(449)][r4(641)] || 0) + r4(680) + !a3 + r4(564) + n3 + r4(353) + n3 + r4(685);
                      y[r4(441)](f(c2[r4(463)]), i4);
                    }
                  } else
                    s2(b(r4(532)) + (p2 ? " (" + p2 + ")" : ""));
                };
                y[o2(531)] ? t2(function() {
                  var e5 = o2;
                  y[e5(686)](n2) ? i3() : s2(e5(372));
                }) : i3();
              }
            };
          }();
        })(["UniNativeRecordReceivePCM", " WvCid=wv_", "H753::未配置RecordApp.UniNativeUtsPlugin原生录音插件", "   jsCode=", " set:", "CjMb::无效的BigBytes回传数据", "join", "stringify", "4ATo::Recorder-UniCore目前只支持：H5、APP(Android iOS)、MP-WEIXIN，其他平台环境需要自行编写适配文件实现接入", "441rSzzgB", "wvID", ';\n		set.onProcess=function(buffers,power,duration,sampleRate,newIdx){\n			var newBuffers=[],recSet=RecordApp.__Rec.set;\n			for(var i=newIdx;i<buffers.length;i++)newBuffers.push(RecordApp.UniBtoa(buffers[i].buffer));//@@Fast\n			RecordApp.UniWebViewSendToMain({action:"recProcess",recSet_sr:recSet.sampleRate,recSet_bit:recSet.bitRate,sampleRate:sampleRate,newBuffers:newBuffers});\n			procFn&&procFn.apply(This,arguments);\n		};', "AN0e::需在renderjs中import {1}", "apply", "width", "random", "__callWvActivate", "onLog", "tag", "mOffset", '"));\n			cur.memory.set(buf,cur.mOffset);\n			cur.mOffset+=buf.byteLength;\n			RecordApp.UniWebViewSendToMain({action:"', "1f2V:: | RecordApp的uni-app支持文档和示例：{1} ", " srcSR:", "UniApp-Renderjs", "\n			})()", "4jKV::RecordApp.UniRenderjsRegister 需在renderjs中调用并且传入当前模块的this", "$vm", "onRecord", "l6sY::renderjs中不支持设置RecordApp.UniNativeUtsPlugin", '(function(){\n		var fn=RecordApp.__UniData["', "root", "__0hyi", "当前未获得授权许可。文件", "querySelectorAll", "Tag", "parse", "rec encode: pcm:", "Mvl7::调用plus的权限请求出错：", "e71S::已购买uts插件，获得授权许可", "fqhr::当前已配置RecordApp.UniWithoutAppRenderjs，必须提供原生录音插件或uts插件才能录音，请参考RecordApp.UniNativeUtsPlugin配置", "_cid_", "substr", "set", "UniWebViewVueCall", "pcmDataBase64", "Install", "publishHandler", "message", "DisableIOSPlusReqPermission", "7Noe::正在调用plus.android.requestPermissions请求Android原生录音权限", "recordStop", "param", "iKhe::plus.ios请求录音权限，状态值: ", "recordAlive", "PkQ2::需先调用RecordApp.UniWebViewActivate，然后才可以调用RequestPermission", "@req", "Jk72::不应当出现的非H5权限请求", "uid", ';\n			set.takeoffEncodeChunk=function(bytes){\n				RecordApp.UniWebViewSendToMain({action:"recEncodeChunk",bytes:RecordApp.UniBtoa(bytes.buffer)});\n				takeFn&&takeFn.apply(This,arguments);\n			};', "byteLength", "getStorageSync", "__nnM6", "我已获得UniAppID=", "RegisterPlatform", "request", "__wvCid", "requestFileSystem", "setAttribute", "100%", ';\n			}\n			if(!err && !RecordApp.Platforms["UniApp-Renderjs"]){\n				err=', "6246736XWmZWR", ";\n				", "UniPageOnShow", "takeoffEncodeChunk_renderjs", "aPoj::UniAppUseLicense填写无效，如果已获取到了商用授权，请填写：{1}，否则请使用空字符串", "RecordApp.Stop()", " wvCid=", "duration", "MiniProgramWx_onShow", "Default_Android_AudioSource", "var takeFn=", "envStart", "bigBytes_", "RequestPermission", "$ownerInstance", "SWsy::检测到有其他页面或组件调用了RecordApp.UniPageOnShow（WvCid={1}），但未调用过RecordApp.UniWebViewActivate（当前WvCid={2}），部分功能会继续使用之前Activate的WebView和组件，请确保这是符合你的业务逻辑，不是因为忘记了调用UniWebViewActivate", "__uniAppReqWebViewId", "我知道啦", "var procFn=", "w37G::已购买原生录音插件，获得授权许可", "bitRate", "kxOd::非App环境，不支持保存本地文件", "isError", '"});\n		})()', '",errMsg:errMsg,isUserNotAllow:isUserNotAllow});\n			});\n		})()', "push", "__uniNupErr", "dl4f::{1}回传了未知内容，", "Bgls::已获得Android原生录音权限：", "UniRenderjsRegister", "UniWebViewSendBigBytesToMain", "__uniAppMainReceiveBind", "envIn", "1152655uPwqVo", "TSmQ::需要在页面中提供一个renderjs，在里面import导入RecordApp、录音格式编码器、可视化插件等", "canvas", "vEgr::不应该出现的MainReceiveBind重复绑定", "mrBind", "mime", "mzKj::RecordApp.UniRenderjsRegister 重复注册当前页面renderjs模块，一个组件内只允许一个renderjs模块进行注册", "import 'recorder-core/src/app-support/app-miniProgram-wx-support.js'", "Start_Check", "UniAppUseLicense", "FabE::【在App内使用{1}的授权许可】", " WvCid=", "qDo1::未找到此页面renderjs所在的WebView", "replace", "nativePluginName", "appId", "wv_", "__WebVieW_Id__", '"];\n		if(fn)fn(', "mainCb_", '",ok:1});\n			},function(errMsg,isUserNotAllow){\n				RecordApp.UniWebViewSendToMain({action:"', '",val);\n		})()', "recSize", "nnM6::当前录音由uts插件提供支持", "rec_wv_cid_key", "k7im::未找到Canvas：{1}，请确保此DOM已挂载（可尝试用$nextTick等待DOM更新）", "errMsg", ".memory.buffer; delete window.", "ios", "(function(){\n			var cur=window.", "UniNativeUtsPlugin", "pP4O::未开始录音", "未获得商用授权时，App上仅供测试哈", "bytes", "dataType", " canvas", "' ，就不会弹提示框了；或者购买了配套的原生录音插件或uts插件，设置RecordApp.UniNativeUtsPlugin参数后，也不会弹提示框。【获取授权方式一】联系作者加入VIP支持QQ群，入群后即获得授权，在群文件中可下载此js文件最新源码；【获取授权方式二】联系作者或到DCloud插件市场购买配套的原生录音插件或uts插件，购买后即获得授权（其中uts插件还在开发中不可购买）；购买后可联系作者拉你进入VIP支持QQ群。客服联系方式：QQ 1251654593 ，或者直接联系作者QQ 753610399 （回复可能没有客服及时）。详细请参考文档: ", "TfJX::当前不是App逻辑层", '(function(){\n		if(!window.RecordApp){ window["console"].error("renderjs中未import导入RecordApp"); return; }\n		var wvCid="', "newBuffers", "=window.", "undefined", "RecordApp.", "xYRb::当前RecordApp运行在逻辑层中（性能会略低一些，可视化等插件不可用）", "RecorderNativePlugin", 'RecordApp.Start(set,function(){\n			startFn&&startFn.call(This);\n			RecordApp.UniWebViewSendToMain({action:"', "kE91::renderjs中的mounted内需要调用RecordApp.UniRenderjsRegister才能调用RecordApp.UniWebViewSendBigBytesToMain", "9183050kYRtQd", "MTdp::未开始录音，但收到renderjs回传的onRecEncodeChunk", "__StopOnlyClearMsg", '(function(){\n			var err="",val={action:"', "j15C::已获得iOS原生录音权限", "__FabE", "UniWebViewEval", "pageShow", "fullPath", "value", "Platforms", "status", "6276tIOEaT", "android", '\n				var cls="', "sWvCid", ';\n			var errFn=function(errMsg){\n				RecordApp.UniWebViewSendToMain({action:"', "onerror", "indexOf", "android.permission.RECORD_AUDIO", "H6cq::无法调用Stop：", "nativeSampleRateTarget", "b64", "UniMainTakeBigBytes", ';\r\n			RecordApp.Current=null; //需先重置，不然native变化后install不一致\n			RecordApp.RequestPermission(function(){\n				RecordApp.UniWebViewSendToMain({action:"', "CanProcess", "2060fqGwsm", '",errMsg:errMsg});\n		});', "fields", "bigBytes_chunk", "||{memory:new Uint8Array(", "action", "0JQw::plus.android请求录音权限出错：", "nativeSampleRateRecSet", "disableEnvInFix", "__uniAppWebViewId", "RecordApp__uniAppMainReceive", "WpKg::RecordApp.UniWebViewActivate 已切换当前页面或组件的renderjs所在的WebView", "(function(){\n				var BigBytes=window.", "RecApp Main", "XSYY::当前录音由原生录音插件提供支持", "_appStart", "__xYRb", "__UniMainReceiveBigBytes", "onProcess_renderjs", "PUBLIC_DOWNLOADS", "__uniAppReqComponentId", "onwrite", "arraybuffer", "UniMainCallBack", "start_renderjs", "buffer", "getWebviewById", "TGMm::提供的RecordApp.UniNativeUtsPlugin值不是RecordApp的uts原生录音插件", "$scope", '"@/uni_modules/Recorder-UniCore/', "parentNode", "UniFindCanvas", "AllStart_Clean", "Bjx9::无法调用Start：", "setStorageSync", "$root", "appendChild", "height", "__uniNP", "style", "miniProgram-wx", "getSystemInfoSync", "(function(){\n			var stopFn=", "var set=", "RecorderUtsPlugin", "nativePlugin", "GwCz::RecordApp.UniWebViewActivate 需要传入当前页面或组件的this对象作为参数", "byzO::未开始录音，但收到UniNativeUtsPlugin PCM数据", '),mOffset:0};\n			var buf=new Uint8Array(RecordApp.UniAtob("', "select", "recordStart", "AVAudioSession", "subarray", ");\n	})()", "requireNativePlugin", "recEncodeChunk", "__Rec", "UniWebViewActivate", "el2", "lU1W::当前不是App逻辑层", "srcSampleRate", "jsCall", "getAttribute", "exec", "subscribe", "BjGP::未开始录音，但收到Uni Native PCM数据", "createSelectorQuery", "stop_renderjs", "的商用授权", "bigBytes_start", "AGd7::需要先调用RecordApp.UniWebViewActivate方法", "TPhg::不应当出现的非H5录音Stop", "recSet_bit", ";\n		var startFn=", "0FGq::未开始录音，不可以调用{1}", "118731lqCFoi", "takeoffEncodeChunk", 'RecordApp.UniNativeRecordReceivePCM("', "dataId", "UniApp-Main", "11RvLazV", "unknown", "Ruxl::plus.android请求录音权限：无权限", "mainID", "denied ", "node", '",ok:1};\n			if(!err && !window.RecordApp){\n				err=', "UniSaveLocalFile", "2079459LTrVAx", "ownerId", "Uc9E::RecordApp.UniRenderjsRegister 发生不应该出现的错误（可能需要升级插件代码）：", "_X3Ij_alive", "ipB3::RecordApp.UniWebViewActivate 发生不应该出现的错误（可能需要升级插件代码）：", "deleteObject", "ksoA::无法调用RequestPermission：", "Rec_WvCid", "show", "wvCid", "$page", "rec", "__UniData", "在uni-app中编译到App平台时仅供测试用，不可用于正式发布或商用，正式发布或商用需先联系作者获得授权许可（编译到其他平台时无此授权限制，比如：H5、小程序，均为免费授权）。本对话框仅在第一次请求录音权限时会弹出一次，如何去除本弹框、如何获取商用授权、更多信息请看控制台日志", "=el2;\n			", "max", "requestRecordPermission", "@act", ";\n			var clear=", "__UniWvCid", "gomD::不应该出现的renderjs发回的文件数据丢失", ';\n			}\n			if(err){\n				val.ok=0; val.errMsg=err;\n			}\n			UniViewJSBridge.publishHandler("', "sampleRate", '",ok:1,recSet_sr:recSet.sampleRate,recSet_bit:recSet.bitRate,dataId:dataId,duration:duration,mime:mime});\n				},errFn);\n			},errFn);\n		})()', "__Sync", "VsdN::需重新调用RecordApp.RequestPermission方法", "XCMU::需先调用RecordApp.UniWebViewActivate，然后才可以调用Start", "276ZePydw", "l7WP::用户拒绝了录音权限", "test", "requestPermissions", "Pause", "Start", "MujG::只允许在renderjs中调用RecordApp.UniWebViewSendBigBytesToMain", "uts", "nativeToRjs", "sharedInstance", "2nlUyJq", "granted", "slice", `",vm=RecordApp.__uniWvCallVm;
		if(!vm || RecordApp.__uniWvCallWvCid!=wvCid){
			if(!RecordApp.__UniData[wvCid]){ RecordApp.CLog("renderjs中的mounted内需要调用RecordApp.UniRenderjsRegister",1); return; }
			var el=document.querySelector("[rec_wv_cid_key='"+wvCid+"']");
			vm=el&&el.__rModule;
			if(!vm){ RecordApp.CLog("没有找到组件的renderjs模块 WvCid="+wvCid,1); return; }
			RecordApp.__uniWvCallVm=vm;
			RecordApp.__uniWvCallWvCid=wvCid;
		}; (function(){ var This=this;
			`, "RecApp Renderjs", "memory", "7ot0::需先调用RecordApp.RequestPermission方法", "showModal", "UniAppUseNative", "unsubscribe", "__hasWvActivate", "pcm_sum", "Y3rC::正在调用plus.ios@AVAudioSession请求iOS原生录音权限", "length", "action=", "$getAppWebview", "recSet_sr", "writeAsBinary", "UniWithoutAppRenderjs", "stop", "$el", "_$id", '",errMsg:errMsg});\n			};\n			RecordApp.Stop(clear?null:function(arrBuf,duration,mime){\n				stopFn&&stopFn.apply(This,arguments);\n				var recSet=RecordApp.__Rec.set,t1=Date.now();\n				RecordApp.CLog("开始传输"+arrBuf.byteLength+"字节的数据回逻辑层，可能会比较慢，推荐使用takeoffEncodeChunk实时获取音频文件数据可避免Stop时产生超大数据回传");\n				RecordApp.UniWebViewSendBigBytesToMain(arrBuf,function(dataId){//数据可能很大\n					RecordApp.CLog("完成传输"+arrBuf.byteLength+"字节的数据回逻辑层，耗时"+(Date.now()-t1)+"ms");\n					RecordApp.UniWebViewSendToMain({action:"', "createWriter", "recProcess", "UqfI::保存文件{1}失败：", "importClass", "isUserNotAllow", "UniWebViewSendToMain", "recordPermission", "__uniAppWebView", "Resume", "peIm::当前还未调用过RecordApp.UniWebViewActivate", "evalJS", "S3eF::未找到当前页面renderjs所在的WebView，如果确实没有renderjs，请设置RecordApp.UniWithoutAppRenderjs=true", "TtoS::，不可以调用RecordApp.UniWebViewVueCall", "0hyi::当前RecordApp运行在renderjs所在的WebView中（逻辑层中只能做有限的实时处理，可视化等插件均需要在renderjs中进行调用）", "0caE::用户拒绝了录音权限", "YP4V::未开始录音", "(function(){\n			RecordApp.UniAppUseNative=", "__uniAppComponentId", "Incorrect sync status", "在uni-app中编译到App平台时仅供测试用（App平台包括：Android App、iOS App），不可用于正式发布或商用，正式发布或商用需先联系作者获取到商用授权许可（编译到其他平台时无此授权限制，比如：H5、小程序，均为免费授权）。未获得授权时，在App打开后第一次调用RecordApp.RequestPermission请求录音权限时，会先弹出商用授权提示框；获取到授权许可后，请在调用RequestPermission前设置 RecordApp.UniAppUseLicense='", "webview", "6Iql::未找到此页面renderjs所在的WebView Cid", "yI24::RecordApp.UniFindCanvas未适配当前环境", "RXs7::微信小程序中需要：{1}", "!id || !cid", "rSLO::不应当出现的非H5录音Start", "android_audioSource", "mSbR::当前还未调用过RecordApp.UniWebViewActivate", "Key", "ZHwv::[MainReceive]从renderjs发回未知数据：", "none", "getFile", "type", "igw2::，不可以调用RecordApp.UniWebViewEval", "7kJS::RecordApp.UniRenderjsRegister 已注册当前页面renderjs模块", "\n		}).call(vm);\n	})()", "Stop", '",ok:1});\n		},function(errMsg){\n			RecordApp.UniWebViewSendToMain({action:"', "display", "SCW9::配置了RecordApp.UniNativeUtsPlugin，但当前App未打包进原生录音插件[{1}]", "__rModule", "success", '";\n				var els=this.$ownerInstance.$el.querySelectorAll(cls+" canvas"),el=els[0],el2=els[1];\n				if(!el){\n					RecordApp.CLog(Recorder.i18n.$T("dzX0::未找到Canvas：{1}，请确保此DOM已挂载（可尝试用$nextTick等待DOM更新）",0,cls),1);\n				}else if(!el2){\n					el.style.display="none";\n					el2=document.createElement("canvas");\n					el2.setAttribute("el2","1"); el2.style.width=el2.style.height="100%";\n					el.parentNode.appendChild(el2);\n				}else if(!el2.getAttribute("el2")){\n					el2=el;\n				}\n				var canvas', "createElement"]);
      }(i, r, 0, a.$T, n);
    } else
      formatAppLog("error", "at uni_modules/Recorder-UniCore/app-uni-support.js:36", "需要先引入RecordApp，请按下面代码引入：\n1. 项目根目录 npm install recorder-core\n2. 页面中按顺序import\nimport Recorder from 'recorder-core'\nimport RecordApp from 'recorder-core/src/app-support/app.js'\nimport 你需要的音频格式编码器、可视化插件\n参考文档：" + i);
  }();
  const block0$7 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testMainVue");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testMainVue"] = "3bcf15e4";
  };
  var disableOgg$2 = false;
  var RecUtsPlugin$2 = null;
  const _sfc_main$c = {
    components: { TestPlayer: TestPlayer$1 },
    data() {
      return {
        recType: "mp3",
        recSampleRate: 16e3,
        recBitRate: 16,
        takeoffEncodeChunkSet: false,
        takeoffEncodeChunkMsg: "",
        appUseH5Rec: false,
        recwaveChoiceKey: "WaveView",
        recpowerx: 0,
        recpowert: "",
        pageDeep: 0,
        pageNewPath: "main_recTest",
        disableOgg: disableOgg$2,
        evalExecCode: "",
        reclogs: []
      };
    },
    mounted() {
      var vueVer = [];
      var vv = typeof Vue != "undefined" && Vue && Vue.version;
      if (vv)
        vueVer.push("Vue.version:" + vv);
      var v3 = (((this.$ || {}).appContext || {}).app || {}).version;
      if (v3)
        vueVer.push("appContext.app.version:" + v3);
      var v2 = (((this.$root || {}).constructor || {}).super || {}).version;
      if (v2)
        vueVer.push("constructor.super:" + v2);
      this.reclog("页面mounted(" + getCurrentPages().length + "层)，Vue=" + vueVer.join("/") + "，WebViewId=" + (this.$root.$page && this.$root.$page.id || "?") + "，ComponentId=_$id:" + (this._$id || "?") + "/$.uid:" + (this.$ && this.$.uid || "?") + "，Recorder.LM=" + Recorder.LM + "，RecordApp.LM=" + RecordApp$1.LM + "，UniSupportLM=" + RecordApp$1.UniSupportLM + "，UniJsSource=" + RecordApp$1.UniJsSource.IsSource);
      this.pageDeep = getCurrentPages().length;
      this.pageNewPath = /main_recTest/.test(this.getRouteStr()) ? "page_index2" : "main_recTest";
      this.isMounted = true;
      this.uniPage__onShow();
      this.reclog("正在执行Install，请勿操作...", "#f60");
      RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin$2;
      RecordApp$1.Install(() => {
        this.reclog("Install成功，环境：" + this.currentKeyTag(), 2);
        this.reclog("请先请求录音权限，然后再开始录音");
      }, (err) => {
        this.reclog("RecordApp.Install出错：" + err, 1);
      });
    },
    unmounted() {
      RecordApp$1.Stop();
    },
    onShow() {
      if (this.isMounted)
        this.uniPage__onShow();
    },
    methods: {
      uniPage__onShow() {
        RecordApp$1.UniPageOnShow(this);
      },
      currentKeyTag() {
        if (!RecordApp$1.Current)
          return "[?]";
        var tag2 = "Renderjs+H5";
        if (RecordApp$1.UniNativeUtsPlugin) {
          tag2 = RecordApp$1.UniNativeUtsPlugin.nativePlugin ? "NativePlugin" : "UtsPlugin";
        }
        return RecordApp$1.Current.Key + "(" + tag2 + ")";
      },
      recReq() {
        RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin$2;
        if (this.appUseH5Rec) {
          RecordApp$1.UniNativeUtsPlugin = null;
        }
        if (RecordApp$1.UniIsApp() && !RecordApp$1.UniNativeUtsPlugin) {
          this.reclog("当前是在App的renderjs中使用H5进行录音，iOS上只支持14.3以上版本，且iOS上每次进入页面后第一次请求录音权限时、或长时间无操作再请求录音权限时WebView均会弹出录音权限对话框，不同旧iOS版本（低于iOS17）下H5录音可能存在的问题在App中同样会存在；使用配套的原生录音插件或uts插件时无以上问题和版本限制，Android也无以上问题", "#f60");
        }
        this.reclog("正在请求录音权限...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          this.reclog(this.currentKeyTag() + " 已获得录音权限，可以开始录音了", 2);
        }, (msg, isUserNotAllow) => {
          this.reclog(this.currentKeyTag() + " " + (isUserNotAllow ? "isUserNotAllow," : "") + "请求录音权限失败：" + msg, 1);
        });
      },
      recStart() {
        this.$refs.player.setPlayBytes(null);
        this.takeoffEncodeChunkMsg = "";
        var takeEcCount = 0, takeEcSize = 0;
        this.takeEcChunks = this.takeoffEncodeChunkSet ? [] : null;
        this.reclog(this.currentKeyTag() + " 正在打开...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start({
          type: this.recType,
          sampleRate: this.recSampleRate,
          bitRate: this.recBitRate,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
            this.recpowerx = powerLevel;
            this.recpowert = this.formatTime(duration, 1) + " / " + powerLevel;
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
					//App中在这里修改buffers才会改变生成的音频文件
					//App中是在renderjs中进行的可视化图形绘制，因此需要写在这里，this是renderjs模块的this（也可以用This变量）；如果代码比较复杂，请直接在renderjs的methods里面放个方法xxxFunc，这里直接使用this.xxxFunc(args)进行调用
					var wave=this.waveStore&&this.waveStore[this.recwaveChoiceKey];
					if(wave){
						wave.input(buffers[buffers.length-1],powerLevel,sampleRate);
					}
				}`,
          takeoffEncodeChunk: !this.takeoffEncodeChunkSet ? null : (chunkBytes) => {
            takeEcCount++;
            takeEcSize += chunkBytes.byteLength;
            this.takeoffEncodeChunkMsg = "已接收到" + takeEcCount + "块，共" + takeEcSize + "字节";
            this.takeEcChunks.push(chunkBytes);
          },
          takeoffEncodeChunk_renderjs: !this.takeoffEncodeChunkSet ? null : `function(chunkBytes){
					//App中这里可以做一些仅在renderjs中才生效的事情，不提供也行，this是renderjs模块的this（也可以用This变量）
				}`,
          start_renderjs: `function(){
					//App中可以放一个函数，在Start成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					//放一些仅在renderjs中才生效的事情，比如初始化，不提供也行
				}`,
          stop_renderjs: `function(aBuf,duration,mime){
					//App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					this.audioData=aBuf; //留着给Stop时进行转码成wav播放
				}`
        }, () => {
          this.reclog(this.currentKeyTag() + " 录制中：" + this.recType + " " + this.recSampleRate + " " + this.recBitRate + "kbps" + (this.takeoffEncodeChunkSet ? " takeoffEncodeChunk" : "") + (this.appUseH5Rec ? " appUseH5Rec" : ""), 2);
          this.initWaveStore();
        }, (msg) => {
          this.reclog(this.currentKeyTag() + " 开始录音失败：" + msg, 1);
        });
      },
      recPause() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Pause();
          this.reclog("已暂停");
        }
      },
      recResume() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Resume();
          this.reclog("继续录音中...");
        }
      },
      recStopX() {
        RecordApp$1.Stop(
          null,
          (msg) => {
            this.reclog("已清理，错误信息：" + msg);
          }
        );
      },
      recStop() {
        this.reclog("正在结束录音...");
        RecordApp$1.Stop((aBuf, duration, mime) => {
          var recSet = (RecordApp$1.GetCurrentRecOrNull() || { set: { type: this.recType } }).set;
          this.reclog("已录制[" + mime + "]：" + this.formatTime(duration, 1) + " " + aBuf.byteLength + "字节 " + recSet.sampleRate + "hz " + recSet.bitRate + "kbps", 2);
          var aBuf_renderjs = "this.audioData";
          if (this.takeEcChunks) {
            aBuf_renderjs = "";
            this.reclog("启用takeoffEncodeChunk后Stop返回的blob长度为0不提供音频数据");
            var len = 0;
            for (var i = 0; i < this.takeEcChunks.length; i++)
              len += this.takeEcChunks[i].length;
            var chunkData = new Uint8Array(len);
            for (var i = 0, idx = 0; i < this.takeEcChunks.length; i++) {
              var itm = this.takeEcChunks[i];
              chunkData.set(itm, idx);
              idx += itm.length;
            }
            aBuf = chunkData.buffer;
            this.reclog("takeoffEncodeChunk接收到的音频片段，已合并成一个音频文件 " + aBuf.byteLength + "字节");
          }
          this.$refs.player.setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder);
        }, (msg) => {
          this.reclog("结束录音失败：" + msg, 1);
        });
      },
      reclog(msg, color) {
        var now = /* @__PURE__ */ new Date();
        var t = ("0" + now.getHours()).substr(-2) + ":" + ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2);
        var txt = "[" + t + "]" + msg;
        formatAppLog("log", "at pages/recTest/main_recTest.vue:471", txt);
        this.reclogs.splice(0, 0, { txt, color });
      },
      recTypeClick(e) {
        var type = e.target.dataset.type;
        if (type) {
          this.recType = type;
        }
      },
      appUseH5RecClick() {
        this.appUseH5Rec = !this.appUseH5Rec;
        RecordApp$1.Current = null;
        this.reclog("切换了appUseH5Rec=" + this.appUseH5Rec + "，重新请求录音权限后生效", "#f60");
      },
      initWaveStore() {
        if (this.waveStore)
          return;
        var store = this.waveStore = this.waveStore || {};
        var webStore = `var store=this.waveStore=this.waveStore||{};`;
        webStore += `this.recwaveChoiceKey="${this.recwaveChoiceKey}";`;
        RecordApp$1.UniFindCanvas(this, [".recwave-WaveView"], `${webStore}
				store.WaveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
			`, (canvas1) => {
          store.WaveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-SurferView", ".recwave-SurferView-2x"], `${webStore}
				store.SurferView=Recorder.WaveSurferView({compatibleCanvas:canvas1,compatibleCanvas_2x:canvas2, width:300, height:100});
			`, (canvas1, canvas2) => {
          store.SurferView = Recorder.WaveSurferView({ compatibleCanvas: canvas1, compatibleCanvas_2x: canvas2, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram1"], `${webStore}
				store.Histogram1=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100});
			`, (canvas1) => {
          store.Histogram1 = Recorder.FrequencyHistogramView({ compatibleCanvas: canvas1, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram2"], `${webStore}
				store.Histogram2=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100
					,lineCount:200,widthRatio:1,position:0,minHeight:1
					,fallDuration:600,stripeEnable:false,mirrorEnable:true});
			`, (canvas1) => {
          store.Histogram2 = Recorder.FrequencyHistogramView({
            compatibleCanvas: canvas1,
            width: 300,
            height: 100,
            lineCount: 200,
            widthRatio: 1,
            position: 0,
            minHeight: 1,
            fallDuration: 600,
            stripeEnable: false,
            mirrorEnable: true
          });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram3"], `${webStore}
				store.Histogram3=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100
					,lineCount:20,position:0,minHeight:1,fallDuration:400,stripeEnable:false,mirrorEnable:true
					,linear:[0,"#0ac",1,"#0ac"]});
			`, (canvas1) => {
          store.Histogram3 = Recorder.FrequencyHistogramView({
            compatibleCanvas: canvas1,
            width: 300,
            height: 100,
            lineCount: 20,
            position: 0,
            minHeight: 1,
            fallDuration: 400,
            stripeEnable: false,
            mirrorEnable: true,
            linear: [0, "#0ac", 1, "#0ac"]
          });
        });
      },
      recwaveChoice(e) {
        var key = e.target.dataset.key;
        if (key) {
          if (key != this.recwaveChoiceKey) {
            this.reclog("已切换波形显示为：" + key);
          }
          this.recwaveChoiceKey = key;
          if (RecordApp$1.UniIsApp()) {
            RecordApp$1.UniWebViewVueCall(this, 'this.recwaveChoiceKey="' + key + '"');
          }
        }
      },
      recEnvIn60() {
        var rec = RecordApp$1.GetCurrentRecOrNull();
        if (!rec) {
          this.reclog("未开始录音，无法注入", 1);
          return;
        }
        if (RecordApp$1.UniIsApp()) {
          RecordApp$1.UniWebViewVueCall(this, `
					var rec=RecordApp.GetCurrentRecOrNull();
					var sampleRate=rec.srcSampleRate,t1=Date.now();
					var canon=Recorder.NMN2PCM.GetExamples().Canon.get(sampleRate).pcm;
					var len=sampleRate*60,offset=0;
					while(offset<len){
						rec.envIn(canon.subarray(0,Math.min(canon.length,len-offset)),0);
						offset+=canon.length;
					}
					this.$ownerInstance.callMethod("reclog","已注入60秒Canon简谱生成的音乐，耗时"+(Date.now()-t1)+"ms");
				`);
          return;
        }
        var sampleRate = rec.srcSampleRate, t1 = Date.now();
        var canon = Recorder.NMN2PCM.GetExamples().Canon.get(sampleRate).pcm;
        var len = sampleRate * 60, offset = 0;
        while (offset < len) {
          rec.envIn(canon.subarray(0, Math.min(canon.length, len - offset)), 0);
          offset += canon.length;
        }
        this.reclog("已注入60秒Canon简谱生成的音乐，耗时" + (Date.now() - t1) + "ms");
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      getRouteStr() {
        var url = this.$page && this.$page.route || this.$root.route;
        if (!url && this.$root.$scope) {
          url = this.$root.$scope.route;
        }
        return "/" + url;
      },
      reloadPage() {
        var url = this.getRouteStr();
        formatAppLog("log", "at pages/recTest/main_recTest.vue:602", "刷新页面 url=" + url);
        if (getCurrentPages().length == 1) {
          uni.reLaunch({ url });
        } else {
          uni.navigateBack({ animationDuration: 0, success: () => {
            setTimeout(() => {
              uni.navigateTo({ url });
            }, 300);
          } });
        }
      },
      evalExecClick() {
        if (!this.evalExecCode) {
          this.reclog("请填写要执行的代码", 1);
          return;
        }
        try {
          new Function("Recorder,RecordApp", this.evalExecCode).call(this, Recorder, RecordApp$1);
          this.reclog("代码已执行", 2);
        } catch (e) {
          this.reclog("代码执行异常：" + e.message, 1);
        }
      },
      loadVConsole() {
        var isApp2 = false, isH52 = false;
        isApp2 = true;
        var jsCode = `(function(){
				var isApp=${isApp2}, isH5=${isH52};
				var ok=function(){
					if(isApp){
						This.$ownerInstance.callMethod("reclog","vConsole已加载");
					}else{
						This.reclog("vConsole已加载");
					}
				}
				if(window.VConsole)return ok();
				var elem=document.createElement("script");
				elem.setAttribute("type","text/javascript");
				elem.setAttribute("src","https://xiangyuecn.gitee.io/recorder/assets/ztest-vconsole.js");
				document.body.appendChild(elem);
				elem.onload=function(){
					new VConsole(); ok()
				};
			})()`;
        this.reclog("正在renderjs中加载vConsole...");
        if (isApp2) {
          RecordApp$1.UniWebViewVueCall(this, jsCode);
        } else {
          this.reclog("非app环境，不加载vConsole", 1);
        }
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TestPlayer = vue.resolveComponent("TestPlayer");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { style: { "padding": "5px 10px 0" } }, [
        vue.createElementVNode("text", { style: { "vertical-align": "top" } }),
        vue.createElementVNode("navigator", {
          url: $data.pageNewPath,
          style: { "display": "inline" }
        }, [
          vue.createElementVNode(
            "button",
            {
              size: "mini",
              type: "default"
            },
            "新开页面(" + vue.toDisplayString($data.pageDeep) + ")",
            1
            /* TEXT */
          )
        ], 8, ["url"]),
        vue.createElementVNode("navigator", {
          url: "page_i18n",
          style: { "display": "inline" }
        }, [
          vue.createElementVNode("button", {
            size: "mini",
            type: "default"
          }, "国际化多语言")
        ]),
        vue.createElementVNode("navigator", {
          url: "page_asr",
          style: { "display": "inline" }
        }, [
          vue.createElementVNode("button", {
            size: "mini",
            type: "default"
          }, "asr语音识别")
        ]),
        vue.createElementVNode("navigator", {
          url: "page_nvue",
          style: { "display": "inline" }
        }, [
          vue.createElementVNode("button", {
            size: "mini",
            type: "default"
          }, "nvue原生页面")
        ]),
        vue.createElementVNode("navigator", {
          url: "page_renderjsOnly",
          style: { "display": "inline" }
        }, [
          vue.createElementVNode("button", {
            size: "mini",
            type: "default"
          }, "纯renderjs调用")
        ]),
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.reloadPage && $options.reloadPage(...args))
        }, "刷新当前页")
      ]),
      vue.createElementVNode("view", { style: { "margin-top": "5px", "height": "10px", "background": "#eee" } }),
      vue.createCommentVNode(" 录音格式选择 "),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createTextVNode(" 类型： "),
        vue.createElementVNode("checkbox", {
          onClick: _cache[1] || (_cache[1] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "mp3",
          "data-type": "mp3"
        }, "mp3", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[2] || (_cache[2] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "wav",
          "data-type": "wav"
        }, "wav", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "pcm",
          "data-type": "pcm"
        }, "pcm", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[4] || (_cache[4] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "amr",
          "data-type": "amr"
        }, "amr", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[5] || (_cache[5] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "g711a",
          "data-type": "g711a"
        }, "g711a", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[6] || (_cache[6] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "g711u",
          "data-type": "g711u"
        }, "g711u", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[7] || (_cache[7] = (...args) => $options.recTypeClick && $options.recTypeClick(...args)),
          checked: $data.recType == "ogg",
          "data-type": "ogg",
          disabled: $data.disableOgg
        }, "ogg" + vue.toDisplayString($data.disableOgg ? "(js太大)" : ""), 9, ["checked", "disabled"])
      ]),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createTextVNode(" 采样率："),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "number",
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.recSampleRate = $event),
            style: { "width": "60px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [
            vue.vModelText,
            $data.recSampleRate,
            void 0,
            { number: true }
          ]
        ]),
        vue.createTextVNode("hz 比特率："),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "number",
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.recBitRate = $event),
            style: { "width": "60px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [
            vue.vModelText,
            $data.recBitRate,
            void 0,
            { number: true }
          ]
        ]),
        vue.createTextVNode("kbps ")
      ]),
      vue.createCommentVNode(" 控制按钮 "),
      vue.createElementVNode("view", { style: { "display": "flex", "padding-top": "10px" } }, [
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode("button", {
            type: "warn",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.recReq && $options.recReq(...args)),
            style: { "font-size": "16px", "padding": "0" }
          }, "请求录音权限")
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.recStart && $options.recStart(...args)),
            style: { "font-size": "16px", "padding": "0" }
          }, "开始录音")
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode("button", {
            onClick: _cache[12] || (_cache[12] = (...args) => $options.recStop && $options.recStop(...args)),
            style: { "font-size": "16px", "padding": "0" }
          }, "停止录音")
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } })
      ]),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[13] || (_cache[13] = (...args) => $options.recPause && $options.recPause(...args))
        }, "暂停"),
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[14] || (_cache[14] = (...args) => $options.recResume && $options.recResume(...args))
        }, "继续"),
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[15] || (_cache[15] = (...args) => $options.recStopX && $options.recStopX(...args)),
          style: { "padding": "0 5px", "margin-left": "10px" }
        }, "停止(仅清理)"),
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[16] || (_cache[16] = (...args) => $options.recEnvIn60 && $options.recEnvIn60(...args)),
          style: { "padding": "0 5px" }
        }, "注入60秒数据")
      ]),
      vue.createCommentVNode(" 可视化绘制 "),
      vue.createElementVNode("view", { style: { "padding": "5px 0 0 10px" } }, [
        vue.createElementVNode("view", { style: { "height": "40px", "width": "300px", "background": "#999", "position": "relative" } }, [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle([{ "height": "40px", "background": "#0B1", "position": "absolute" }, { width: $data.recpowerx + "%" }])
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            { style: { "padding-left": "50px", "line-height": "40px", "position": "relative" } },
            vue.toDisplayString($data.recpowert),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 不同的波形样式，只需创建需要用到的canvas就行，canvas需要指定宽高（下面style里指定了300*100） "),
        vue.createElementVNode("view", { style: { "padding-top": "5px" } }),
        vue.createElementVNode("view", null, [
          vue.createElementVNode(
            "view",
            {
              class: "recwave",
              style: vue.normalizeStyle({ display: $data.recwaveChoiceKey != "WaveView" ? "none" : "" })
            },
            [
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-WaveView"
              })
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "recwave",
              style: vue.normalizeStyle({ display: $data.recwaveChoiceKey != "SurferView" ? "none" : "" })
            },
            [
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-SurferView"
              }),
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-SurferView-2x",
                style: { "width": "600px", "display": "none" }
              })
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "recwave",
              style: vue.normalizeStyle({ display: $data.recwaveChoiceKey != "Histogram1" ? "none" : "" })
            },
            [
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-Histogram1"
              })
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "recwave",
              style: vue.normalizeStyle({ display: $data.recwaveChoiceKey != "Histogram2" ? "none" : "" })
            },
            [
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-Histogram2"
              })
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "recwave",
              style: vue.normalizeStyle({ display: $data.recwaveChoiceKey != "Histogram3" ? "none" : "" })
            },
            [
              vue.createElementVNode("canvas", {
                type: "2d",
                class: "recwave-Histogram3"
              })
            ],
            4
            /* STYLE */
          )
        ]),
        vue.createElementVNode("view", {
          style: { "padding-top": "5px" },
          onClick: _cache[17] || (_cache[17] = (...args) => $options.recwaveChoice && $options.recwaveChoice(...args))
        }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["recwaveChoice", $data.recwaveChoiceKey == "WaveView" ? "slc" : ""]),
              "data-key": "WaveView"
            },
            "WaveView",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["recwaveChoice", $data.recwaveChoiceKey == "SurferView" ? "slc" : ""]),
              "data-key": "SurferView"
            },
            "SurferView",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["recwaveChoice", $data.recwaveChoiceKey == "Histogram1" ? "slc" : ""]),
              "data-key": "Histogram1"
            },
            "Histogram1",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["recwaveChoice", $data.recwaveChoiceKey == "Histogram2" ? "slc" : ""]),
              "data-key": "Histogram2"
            },
            "H...2",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["recwaveChoice", $data.recwaveChoiceKey == "Histogram3" ? "slc" : ""]),
              "data-key": "Histogram3"
            },
            "H...3",
            2
            /* CLASS */
          )
        ])
      ]),
      vue.createElementVNode("view", { style: { "padding": "5px 10px 0" } }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("checkbox", {
            checked: $data.takeoffEncodeChunkSet,
            onClick: _cache[18] || (_cache[18] = ($event) => $data.takeoffEncodeChunkSet = !$data.takeoffEncodeChunkSet)
          }, "接管编码器输出（takeoffEncodeChunk，App端推荐开启）", 8, ["checked"]),
          vue.createTextVNode(
            " " + vue.toDisplayString($data.takeoffEncodeChunkMsg),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("checkbox", {
            checked: $data.appUseH5Rec,
            onClick: _cache[19] || (_cache[19] = (...args) => $options.appUseH5RecClick && $options.appUseH5RecClick(...args))
          }, "App里面总是使用Recorder H5录音（勾选后不启用原生录音插件和uts插件）", 8, ["checked"])
        ])
      ]),
      vue.createCommentVNode(" 手撸播放器 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        vue.createVNode(
          _component_TestPlayer,
          { ref: "player" },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      vue.createCommentVNode(" 日志输出 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.reclogs, (obj) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: obj.idx,
              style: { "border-bottom": "1px dashed #666", "padding": "5px 0" }
            }, [
              vue.createElementVNode(
                "view",
                {
                  style: vue.normalizeStyle({ color: obj.color == 1 ? "red" : obj.color == 2 ? "green" : obj.color })
                },
                vue.toDisplayString(obj.txt),
                5
                /* TEXT, STYLE */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { style: { "padding-top": "80px" } }),
      vue.createCommentVNode(" 更多功能按钮 "),
      vue.createElementVNode("view", { style: { "padding": "10px 10px" } }, [
        vue.createElementVNode("button", {
          size: "mini",
          type: "default",
          onClick: _cache[20] || (_cache[20] = (...args) => $options.loadVConsole && $options.loadVConsole(...args))
        }, "显示vConsole")
      ]),
      vue.createCommentVNode(" 文档地址提示 "),
      vue.createElementVNode("view", { style: { "height": "10px", "background": "#eee" } }),
      vue.createElementVNode("view", { style: { "padding": "10px 10px" } }, [
        vue.createElementVNode("view", { style: { "padding-bottom": "10px", "color": "#02a2ff", "word-break": "break-all" } }, [
          vue.createElementVNode("view", { style: { "padding-bottom": "10px" } }, "DCloud 插件市场下载本组件: https://ext.dcloud.net.cn/plugin?name=Recorder-UniCore"),
          vue.createElementVNode("view", null, "RecordApp的uni-app支持文档和示例: https://github.com/xiangyuecn/Recorder/tree/master/app-support-sample/demo_UniApp (github可以换成gitee)")
        ]),
        vue.createElementVNode("view", { style: { "color": "#0ab", "font-size": "22px", "font-weight": "bold" } }, " 如需录音功能定制开发，网站、App、小程序、前端后端开发等需求，请加QQ群：①群 781036591、②群 748359095，口令recorder，联系群主（即作者），谢谢~ ")
      ]),
      vue.createCommentVNode(" 组件说明 "),
      vue.createElementVNode("view", { style: { "margin-bottom": "5px", "height": "10px", "background": "#eee" } }),
      vue.createElementVNode("view", { style: { "padding": "0 10px" } }, [
        vue.createElementVNode("view", { style: { "font-size": "17px", "font-weight": "bold", "color": "#f60" } }, "关于Recorder-UniCore组件中的 app-uni-support.js 支持文件"),
        vue.createElementVNode("view", { style: { "font-size": "14px", "padding-top": "10px" } }, [
          vue.createElementVNode("view", null, "Recorder-UniCore组件中给RecordApp提供uni-app适配的代码在app-uni-support.js文件内，此文件为压缩版（功能和源码版一致），如果已获得商用授权、或者付费购买了配套的原生录音插件或uts插件后，可在VIP支持QQ群的群文件中下载到此js文件最新源码。"),
          vue.createElementVNode("view", { style: { "color": "#f60" } }, [
            vue.createTextVNode("app-uni-support.js文件在uni-app中编译到App平台时仅供测试用（App平台包括：Android App、iOS App），"),
            vue.createElementVNode("text", { style: { "font-weight": "bold" } }, "不可用于正式发布或商用，正式发布或商用需先联系作者获得授权许可"),
            vue.createTextVNode("（如何获取授权请阅读Recorder-UniCore组件文档）。")
          ]),
          vue.createElementVNode("view", { style: { "color": "#0b0" } }, "编译到其他平台时无此授权限制，比如：H5、小程序，均为免费授权。")
        ])
      ]),
      vue.createCommentVNode(" Eval执行代码，方便调试 "),
      vue.createElementVNode("view", { style: { "padding-top": "80px" } }),
      vue.createElementVNode("view", { style: { "height": "10px", "background": "#eee" } }),
      vue.createElementVNode("view", { style: { "padding": "10px 10px" } }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("text", { style: { "font-size": "17px", "font-weight": "bold", "color": "#f60" } }, "在逻辑层中执行代码"),
          vue.createElementVNode("button", {
            size: "mini",
            type: "default",
            onClick: _cache[21] || (_cache[21] = (...args) => $options.evalExecClick && $options.evalExecClick(...args))
          }, "执行")
        ]),
        vue.withDirectives(vue.createElementVNode(
          "textarea",
          {
            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => $data.evalExecCode = $event),
            maxlength: "-1",
            style: { "display": "block", "border": "1px solid #ddd", "box-sizing": "border-box", "width": "100%" },
            placeholder: "this为当前页面或组件的this"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.evalExecCode]
        ])
      ])
    ]);
  }
  if (typeof block0$7 === "function")
    block0$7(_sfc_main$c);
  const PagesRecTestMain_recTest = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/main_recTest.vue"]]);
  const block0$6 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testPerfRJs");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testPerfRJs"] = "876c306c";
  };
  const _sfc_main$b = {
    data() {
      return {
        canTest,
        dataSizeKB: 10,
        clickCount: 0,
        evalRJs0: "",
        evalRJs1: "",
        evalRJs2: "",
        evalRJs3: "",
        evalRJs4: "",
        evalRJs5: "",
        evalRJs6: "",
        evalRJs7: "",
        evalRJs8: "",
        evalRJs9: ""
      };
    },
    mounted() {
      if (!canTest)
        return;
      CallWebView('testPerfRJsLog("逻辑层btoa: ' + (btoa("ABÎ¦CD") == "QULOpkNE" ? "OK" : "Fail") + '")');
      this.callVue("callTestVue(-1," + Date.now() + ',"")');
      CallWebView("callTestWebView(-1," + Date.now() + ',"")');
    },
    methods: {
      setDataSize10KB() {
        this.dataSizeKB = 10;
      },
      setDataSize1MB() {
        this.dataSizeKB = 1024;
      },
      setDataSize5MB() {
        this.dataSizeKB = 5 * 1024;
      },
      clickXXX() {
        this.clickCount++;
      },
      traceThis() {
        var vals = ["逻辑层可用：<pre style='white-space:pre-wrap'>"];
        var trace = (val) => {
          if (/func/i.test(typeof val))
            val = "[Func]";
          try {
            val = "" + val;
          } catch (e) {
            val = "[?" + typeof val + "]";
          }
          return '<span style="color:#bbb">=' + val.substr(0, 50) + "</span>";
        };
        for (var k in globalThis) {
        }
        for (var k in this) {
          vals.push("this." + k + trace(this[k]));
        }
        for (var k in this.$) {
          vals.push("this.$." + k + trace(this.$[k]));
        }
        for (var k in this.$root) {
          vals.push("this.$root." + k + trace(this.$root[k]));
        }
        for (var k in this.$root.$vm) {
          vals.push("this.$root.$vm." + k + trace(this.$root.$vm[k]));
        }
        if (this.$root.$scope) {
          for (var k in this.$root.$scope) {
            vals.push("this.$root.$scope." + k + trace(this.$root.$scope[k]));
          }
          for (var k in this.$root.$scope.$page) {
            vals.push("this.$root.$scope.$page." + k + trace(this.$root.$scope.$page[k]));
          }
        }
        for (var k in this.$root.$page) {
          vals.push("this.$root.$page." + k + trace(this.$root.$page[k]));
        }
        vals.push("</pre>");
        CallWebView("renderjsTraceThis(); testPerfRJsLog(`" + vals.join("\n	") + "`)");
      },
      callVue(code) {
        this.evalRJsIdx = (this.evalRJsIdx || 0) + 1;
        var idx = this.evalRJsIdx % 10;
        this["evalRJs" + idx] = code;
      },
      testRenderJSOnMsg(o) {
        testRenderJSOnMsgFn(o);
      },
      testRenderJS_Descriptor() {
        this.clickCount++;
        this.testStopRenderJS_Descriptor();
        CallWebView("testRenderJSStart(false," + this.dataSizeKB + ")");
        this.testStart("testRenderJS_Descriptor");
      },
      testStopRenderJS_Descriptor() {
        this.clickCount++;
        clearInterval(this["testRenderJS_DescriptorInt"]);
      },
      testRenderJS_Bridge() {
        this.clickCount++;
        this.testStopRenderJS_Bridge();
        CallWebView("testRenderJSStart(true," + this.dataSizeKB + ")");
        this.testStart("testRenderJS_Bridge");
      },
      testStopRenderJS_Bridge() {
        this.clickCount++;
        clearInterval(this["testRenderJS_BridgeInt"]);
      },
      testVue() {
        this.clickCount++;
        this.testStopVue();
        this.testStart("callTestVue");
      },
      testStopVue() {
        this.clickCount++;
        clearInterval(this["callTestVueInt"]);
      },
      testWebView() {
        this.clickCount++;
        this.testStopWebView();
        this.testStart("callTestWebView");
      },
      testStopWebView() {
        this.clickCount++;
        clearInterval(this["callTestWebViewInt"]);
      },
      testStart(fn) {
        var txt = new Array(1024 + 1).join("*");
        while (txt.length < this.dataSizeKB * 1024) {
          txt = txt + txt;
        }
        txt = txt.substr(0, this.dataSizeKB * 1024);
        var sid = 0, lastTime = 0;
        this[fn + "Int"] = setInterval(() => {
          if (Date.now() - lastTime < 19)
            return;
          lastTime = Date.now();
          sid++;
          if (fn.indexOf("testRenderJS") + 1) {
            CallWebView(fn + "__setInterval()");
          } else if (fn == "callTestVue") {
            this.callVue(fn + "(" + sid + "," + Date.now() + ',"' + txt + '")');
          } else {
            CallWebView(fn + "(" + sid + "," + Date.now() + ',"' + txt + '")');
          }
        }, 1);
      }
    }
  };
  var isApp = false, isH5 = false;
  isApp = true;
  var canTest = isApp || isH5;
  if (canTest) {
    var testRenderJSOnMsgFn = function(o) {
      CallWebView("testRenderJSOnMsgOK(" + o.useBridge + "," + o.sid + "," + o.t1 + "," + Date.now() + "," + o.txt.length + ")");
    };
    UniServiceJSBridge.subscribe("testRenderJSOnMsg", function(val) {
      testRenderJSOnMsgFn(val);
    });
    UniServiceJSBridge.subscribe("testMainOnMsg", function(val) {
      CallWebView("testPerfRJsLog('UniServiceJSBridge.subscribe: " + JSON.stringify(val) + "')");
    });
  }
  var CallWebView = function(code) {
    var obj = getWebView();
    if (!obj)
      throw new Error("不是App环境不可调用Webview执行js");
    obj.evalJS(code);
  };
  var getWebView = function() {
    if (!isApp)
      return null;
    var pages = getCurrentPages();
    var webview = pages[pages.length - 1].$getAppWebview();
    return webview;
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "padding": "0 5px" } }, [
      vue.createElementVNode("view", {
        evalrjs0: vue.wp($data.evalRJs0),
        "change:evalrjs0": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs0", "change:evalrjs0"]),
      vue.createElementVNode("view", {
        evalrjs1: vue.wp($data.evalRJs1),
        "change:evalrjs1": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs1", "change:evalrjs1"]),
      vue.createElementVNode("view", {
        evalrjs2: vue.wp($data.evalRJs2),
        "change:evalrjs2": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs2", "change:evalrjs2"]),
      vue.createElementVNode("view", {
        evalrjs3: vue.wp($data.evalRJs3),
        "change:evalrjs3": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs3", "change:evalrjs3"]),
      vue.createElementVNode("view", {
        evalrjs4: vue.wp($data.evalRJs4),
        "change:evalrjs4": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs4", "change:evalrjs4"]),
      vue.createElementVNode("view", {
        evalrjs5: vue.wp($data.evalRJs5),
        "change:evalrjs5": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs5", "change:evalrjs5"]),
      vue.createElementVNode("view", {
        evalrjs6: vue.wp($data.evalRJs6),
        "change:evalrjs6": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs6", "change:evalrjs6"]),
      vue.createElementVNode("view", {
        evalrjs7: vue.wp($data.evalRJs7),
        "change:evalrjs7": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs7", "change:evalrjs7"]),
      vue.createElementVNode("view", {
        evalrjs8: vue.wp($data.evalRJs8),
        "change:evalrjs8": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs8", "change:evalrjs8"]),
      vue.createElementVNode("view", {
        evalrjs9: vue.wp($data.evalRJs9),
        "change:evalrjs9": _ctx.testPerfRJs.evalRJs
      }, null, 8, ["evalrjs9", "change:evalrjs9"]),
      vue.createElementVNode("view", { style: { "padding-top": "5px", "font-size": "17px", "font-weight": "bold", "color": "#f60" } }, "App逻辑层与renderjs数据交互性能测试"),
      vue.createElementVNode("view", { style: { "padding-bottom": "5px", "font-size": "12px" } }, "多种情况下不停测试：静止不动、胡乱操作、退到后台、锁屏"),
      vue.createElementVNode("view", null, [
        vue.createTextVNode(
          " 点击:" + vue.toDisplayString($data.clickCount) + " ",
          1
          /* TEXT */
        ),
        vue.createElementVNode("button", {
          size: "mini",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickXXX && $options.clickXXX(...args))
        }, "随便点击"),
        vue.createElementVNode("button", {
          size: "mini",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.traceThis && $options.traceThis(...args))
        }, "显示this可用属性")
      ]),
      vue.createElementVNode("view", null, [
        vue.createTextVNode(" 数据大小 "),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dataSizeKB = $event),
            style: { "width": "60px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.dataSizeKB]
        ]),
        vue.createTextVNode("KB "),
        vue.createElementVNode("button", {
          size: "mini",
          onClick: _cache[3] || (_cache[3] = (...args) => $options.setDataSize10KB && $options.setDataSize10KB(...args))
        }, "10KB"),
        vue.createElementVNode("button", {
          size: "mini",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.setDataSize1MB && $options.setDataSize1MB(...args))
        }, "1MB"),
        vue.createElementVNode("button", {
          size: "mini",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.setDataSize5MB && $options.setDataSize5MB(...args))
        }, "5MB")
      ]),
      !$data.canTest ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, " 非App或H5，不测试 ")) : (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.testVue && $options.testVue(...args))
          }, "逻辑层默认vue方式发送(不可靠)"),
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.testStopVue && $options.testStopVue(...args))
          }, "结束")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.testWebView && $options.testWebView(...args))
          }, "逻辑层给WebView直接发送"),
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.testStopWebView && $options.testStopWebView(...args))
          }, "结束")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.testRenderJS_Descriptor && $options.testRenderJS_Descriptor(...args))
          }, "renderjs ComponentDescriptor发送给 逻辑层 "),
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.testStopRenderJS_Descriptor && $options.testStopRenderJS_Descriptor(...args))
          }, "结束")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.testRenderJS_Bridge && $options.testRenderJS_Bridge(...args))
          }, "renderjs UniViewJSBridge发送给 逻辑层 "),
          vue.createElementVNode("button", {
            size: "mini",
            onClick: _cache[13] || (_cache[13] = (...args) => $options.testStopRenderJS_Bridge && $options.testStopRenderJS_Bridge(...args))
          }, "结束")
        ]),
        vue.createElementVNode("view", { class: "testPerfRJsLogs" })
      ]))
    ]);
  }
  if (typeof block0$6 === "function")
    block0$6(_sfc_main$b);
  const testPerfRenderjs = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/test_perf_renderjs___.vue"]]);
  const _sfc_main$a = {
    components: {
      testMain: PagesRecTestMain_recTest,
      testPerfRenderjs
    },
    mounted() {
      this.$refs.testMain.uniPage__onShow();
    },
    onShow() {
      if (this.$refs.testMain) {
        this.$refs.testMain.uniPage__onShow();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_testMain = vue.resolveComponent("testMain");
    const _component_testPerfRenderjs = vue.resolveComponent("testPerfRenderjs");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { style: { "padding": "5px 10px 0" } }, [
        vue.createElementVNode("view", { style: { "font-size": "24px", "color": "#f60" } }, "Recorder App uni-app测试"),
        vue.createElementVNode("view", { style: { "font-size": "13px" } }, "本测试项目支持打包成：H5网页、Android App、iOS App、微信小程序，支持Vue2、Vue3")
      ]),
      vue.createVNode(
        _component_testMain,
        { ref: "testMain" },
        null,
        512
        /* NEED_PATCH */
      ),
      vue.createElementVNode("view", { style: { "margin-top": "80px", "height": "10px", "background": "#eee" } }),
      vue.createVNode(_component_testPerfRenderjs),
      vue.createElementVNode("view", { style: { "padding-top": "80px" } })
    ]);
  }
  const PagesRecTestPage_index = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/page_index.vue"]]);
  const _sfc_main$9 = {
    components: {
      testMain: PagesRecTestMain_recTest,
      testPerfRenderjs
    },
    mounted() {
      this.$refs.testMain.uniPage__onShow();
    },
    onShow() {
      if (this.$refs.testMain) {
        this.$refs.testMain.uniPage__onShow();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_testMain = vue.resolveComponent("testMain");
    const _component_testPerfRenderjs = vue.resolveComponent("testPerfRenderjs");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(
        _component_testMain,
        { ref: "testMain" },
        null,
        512
        /* NEED_PATCH */
      ),
      vue.createElementVNode("view", { style: { "margin-top": "80px", "height": "10px", "background": "#eee" } }),
      vue.createVNode(_component_testPerfRenderjs),
      vue.createElementVNode("view", { style: { "padding-top": "80px" } })
    ]);
  }
  const PagesRecTestPage_index2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/page_index2.vue"]]);
  (function(factory) {
    var browser = typeof window == "object" && !!window.document;
    var win = browser ? window : Object;
    var rec = win.Recorder, ni = rec.i18n;
    factory(rec, ni, ni.$T, browser);
  })(function(Recorder2, i18n, $T2, isBrowser) {
    var ASR_Aliyun_Short = function(set) {
      return new fn(set);
    };
    var ASR_Aliyun_ShortTxt = "ASR_Aliyun_Short";
    var fn = function(set) {
      var This = this;
      var o = {
        tokenApi: "",
        apiArgs: {
          //请求tokenApi时要传的参数
          action: "token",
          lang: "普通话"
          //语言模型设置（具体取值取决于tokenApi支持了哪些语言）
        },
        apiRequest: null,
        compatibleWebSocket: null,
        log: NOOP,
        fileSpeed: 6
        //单个文件识别发送速度控制，取值1-n；1：为按播放速率发送，最慢，识别精度完美；6：按六倍播放速度发送，花10秒识别60秒文件比较快，精度还行；再快测试发现似乎会缺失内容，可能是发送太快底层识别不过来导致返回的结果缺失。
      };
      for (var k in set) {
        o[k] = set[k];
      }
      This.set = set = o;
      This.state = 0;
      This.started = 0;
      This.sampleRate = 16e3;
      This.pcmBuffers = [];
      This.pcmTotal = 0;
      This.pcmOffset = 0;
      This.pcmSend = 0;
      This.joinBuffers = [];
      This.joinSize = 0;
      This.joinSend = 0;
      This.joinOffset = -1;
      This.joinIsOpen = 0;
      This.joinSendTotal = 0;
      This.sendCurSize = 0;
      This.sendTotal = 0;
      This.resTxts = [];
      if (!set.asrProcess) {
        This.log("未绑定asrProcess回调无法感知到abort事件", 3);
      }
    };
    var CLog = function() {
      var v = arguments;
      v[0] = "[" + ASR_Aliyun_ShortTxt + "]" + v[0];
      Recorder2.CLog.apply(null, v);
    };
    fn.prototype = ASR_Aliyun_Short.prototype = {
      log: function(msg, color) {
        CLog(msg, typeof color == "number" ? color : 0);
        this.set.log("[" + ASR_Aliyun_ShortTxt + "]" + msg, color == 3 ? "#f60" : color);
      },
      inputDuration: function() {
        return Math.round(this.pcmTotal / this.sampleRate * 1e3);
      },
      sendDuration: function(add) {
        var size = this.sendTotal;
        size += add || 0;
        return Math.round(size / this.sampleRate * 1e3);
      },
      asrDuration: function() {
        return this.sendDuration(-this.joinSendTotal);
      },
      audioToText: function(blob, success, fail) {
        var This = this;
        var failCall = function(err) {
          This.log(err, 1);
          fail && fail(err);
        };
        if (!Recorder2.GetContext()) {
          failCall("浏览器不支持音频解码");
          return;
        }
        var reader = new FileReader();
        reader.onloadend = function() {
          var ctx = Recorder2.Ctx;
          ctx.decodeAudioData(reader.result, function(raw) {
            var src = raw.getChannelData(0);
            var sampleRate = raw.sampleRate;
            var pcm = new Int16Array(src.length);
            for (var i = 0; i < src.length; i++) {
              var s = Math.max(-1, Math.min(1, src[i]));
              s = s < 0 ? s * 32768 : s * 32767;
              pcm[i] = s;
            }
            This.pcmToText(pcm, sampleRate, success, fail);
          }, function(e) {
            failCall("音频解码失败[" + blob.type + "]:" + e.message);
          });
        };
        reader.readAsArrayBuffer(blob);
      },
      pcmToText: function(buffer, sampleRate, success, fail) {
        var This = this;
        This.start(function() {
          This.log("单个文件" + Math.round(buffer.length / sampleRate * 1e3) + "ms转文字");
          This.sendSpeed = This.set.fileSpeed;
          This.input([buffer], sampleRate);
          This.stop(success, fail);
        }, fail);
      },
      start: function(success, fail) {
        var This = this, set = This.set;
        var failCall = function(err) {
          This.sendAbortMsg = err;
          fail && fail(err);
        };
        if (!set.compatibleWebSocket) {
          if (!isBrowser) {
            failCall("非浏览器环境，请提供compatibleWebSocket配置来返回一个兼容的WebSocket");
            return;
          }
        }
        if (This.state != 0) {
          failCall("ASR对象不可重复start");
          return;
        }
        This.state = 1;
        var stopCancel = function() {
          This.log("ASR start被stop中断", 1);
          This._send();
        };
        This._token(function() {
          if (This.state != 1) {
            stopCancel();
          } else {
            This.log("OK start", 2);
            This.started = 1;
            success && success();
            This._send();
          }
        }, function(err) {
          err = "语音识别token接口出错：" + err;
          This.log(err, 1);
          if (This.state != 1) {
            stopCancel();
          } else {
            failCall(err);
            This._send();
          }
        });
      },
      stop: function(success, fail) {
        success = success || NOOP;
        fail = fail || NOOP;
        var This = this;
        var failCall = function(err) {
          err = "语音识别stop出错：" + err;
          This.log(err, 1);
          fail(err);
        };
        if (This.state == 2) {
          failCall("ASR对象不可重复stop");
          return;
        }
        This.state = 2;
        This.stopWait = function() {
          This.stopWait = null;
          if (!This.started) {
            fail(This.sendAbortMsg || "未开始语音识别");
            return;
          }
          var txt = This.getText();
          if (!txt && This.sendAbortMsg) {
            fail(This.sendAbortMsg);
          } else {
            success(txt, This.sendAbortMsg || "");
          }
        };
        This._send();
      },
      input: function(buffers, sampleRate, buffersOffset) {
        var This = this;
        if (This.state == 2) {
          This._send();
          return;
        }
        var msg = "input输入的采样率低于" + This.sampleRate;
        if (sampleRate < This.sampleRate) {
          CLog(msg + "，数据已丢弃", 3);
          if (!This.pcmTotal) {
            This.sendAbortMsg = msg;
          }
          This._send();
          return;
        }
        if (This.sendAbortMsg == msg) {
          This.sendAbortMsg = "";
        }
        if (buffersOffset) {
          var newBuffers = [];
          for (var idx = buffersOffset; idx < buffers.length; idx++) {
            newBuffers.push(buffers[idx]);
          }
          buffers = newBuffers;
        }
        var pcm = Recorder2.SampleData(buffers, sampleRate, This.sampleRate).data;
        This.pcmTotal += pcm.length;
        This.pcmBuffers.push(pcm);
        This._send();
      },
      _send: function() {
        var This = this, set = This.set;
        if (This.sendWait) {
          return;
        }
        var tryStopEnd = function() {
          This.stopWait && This.stopWait();
        };
        if (This.state == 2 && (!This.started || !This.stopWait)) {
          tryStopEnd();
          return;
        }
        if (This.sendAbort) {
          tryStopEnd();
          return;
        }
        var abort = function(err) {
          if (!This.sendAbort) {
            This.sendAbort = 1;
            This.sendAbortMsg = err || "-";
            processCall(0, 1);
          }
          This._send();
        };
        var processCall = function(addSize, abortLast) {
          if (!abortLast && This.sendAbort) {
            return false;
          }
          addSize = addSize || 0;
          if (!set.asrProcess) {
            return This.sendTotal + addSize <= size60s;
          }
          var val = set.asrProcess(
            This.getText(),
            This.sendDuration(addSize),
            This.sendAbort ? This.sendAbortMsg : ""
          );
          if (!This._prsw && typeof val != "boolean") {
            CLog("asrProcess返回值必须是boolean类型，true才能继续识别，否则立即超时", 1);
          }
          This._prsw = 1;
          return val;
        };
        var size5s = This.sampleRate * 5;
        var size60s = This.sampleRate * 60;
        var ws = This.wsCur;
        if (!ws) {
          if (This.started) {
            var resTxt = {};
            This.resTxts.push(resTxt);
            ws = This.wsCur = This._wsNew(
              This.tokenData,
              "ws:" + This.resTxts.length,
              resTxt,
              function() {
                processCall();
              },
              function() {
                This._send();
              },
              function(err) {
                if (ws == This.wsCur) {
                  abort(err);
                }
              }
            );
          }
          return;
        }
        if (This.wsLock) {
          return;
        }
        if (ws._s != 2 || ws.isStop) {
          return;
        }
        if (This.pcmSend >= This.pcmTotal) {
          if (This.state == 1) {
            return;
          }
          ws.stopWs(function() {
            tryStopEnd();
          }, function(err) {
            abort(err);
          });
          return;
        }
        var minSize = This.sampleRate / 1e3 * 50;
        var maxSize = This.sampleRate;
        if ((ws.bufferedAmount || 0) / 2 > maxSize * 3) {
          This.sendWait = setTimeout(function() {
            This.sendWait = 0;
            This._send();
          }, 100);
          return;
        }
        if (This.sendSpeed) {
          var spMaxMs = (Date.now() - ws.okTime) * This.sendSpeed;
          var nextMs = (This.sendCurSize + maxSize / 3) / This.sampleRate * 1e3;
          var delay = Math.floor((nextMs - spMaxMs) / This.sendSpeed);
          if (delay > 0) {
            CLog("[ASR]延迟" + delay + "ms发送");
            This.sendWait = setTimeout(function() {
              This.sendWait = 0;
              This._send();
            }, delay);
            return;
          }
        }
        var needSend = 1;
        var copyBuffers = function(offset, buffers, dist) {
          var size2 = dist.length;
          for (var i2 = 0, idx = 0; idx < size2 && i2 < buffers.length; ) {
            var pcm = buffers[i2];
            if (pcm.length - offset <= size2 - idx) {
              dist.set(offset == 0 ? pcm : pcm.subarray(offset), idx);
              idx += pcm.length - offset;
              offset = 0;
              buffers.splice(i2, 1);
            } else {
              dist.set(pcm.subarray(offset, offset + (size2 - idx)), idx);
              offset += size2 - idx;
              break;
            }
          }
          return offset;
        };
        if (This.joinIsOpen) {
          if (This.joinOffset == -1) {
            This.joinSend = 0;
            This.joinOffset = 0;
            This.log("发送上1分钟结尾5秒数据...");
            var total = 0;
            for (var i = This.joinBuffers.length - 1; i >= 0; i--) {
              total += This.joinBuffers[i].length;
              if (total >= size5s) {
                This.joinBuffers.splice(0, i);
                This.joinSize = total;
                This.joinOffset = total - size5s;
                break;
              }
            }
          }
          var buffersSize = This.joinSize - This.joinOffset;
          var size = Math.min(maxSize, buffersSize);
          if (size <= 0) {
            This.log("发送新1分钟数据(重叠" + Math.round(This.joinSend / This.sampleRate * 1e3) + "ms)...");
            This.joinBuffers = [];
            This.joinSize = 0;
            This.joinOffset = -1;
            This.joinIsOpen = 0;
            This._send();
            return;
          }
          var chunk = new Int16Array(size);
          This.joinSend += size;
          This.joinSendTotal += size;
          This.joinOffset = copyBuffers(This.joinOffset, This.joinBuffers, chunk);
          This.joinSize = 0;
          for (var i = 0; i < This.joinBuffers.length; i++) {
            This.joinSize += This.joinBuffers[i].length;
          }
        } else {
          var buffersSize = This.pcmTotal - This.pcmSend;
          var buffersDur = Math.round(buffersSize / This.sampleRate * 1e3);
          var curHasSize = size60s - This.sendCurSize;
          var sizeNext = Math.min(maxSize, buffersSize);
          var size = Math.min(sizeNext, curHasSize);
          if (This.state == 1 && size < Math.min(minSize, curHasSize)) {
            return;
          }
          var needNew = 0;
          if (curHasSize <= 0) {
            if (This.state == 2 && buffersSize < This.sampleRate * 1.2) {
              size = buffersSize;
              This.log("丢弃结尾" + buffersDur + "ms数据", "#999");
              needSend = 0;
            } else {
              needNew = true;
            }
          }
          if (needSend && !processCall(sizeNext)) {
            var durS = Math.round(This.asrDuration() / 1e3);
            This.log("已主动超时，共识别" + durS + "秒，丢弃缓冲" + buffersDur + "ms，正在终止...");
            This.wsLock = 1;
            ws.stopWs(function() {
              abort("已主动超时，共识别" + durS + "秒，终止识别");
            }, function(err) {
              abort(err);
            });
            return;
          }
          if (needNew) {
            CLog("[ASR]新1分钟接续，当前缓冲" + buffersDur + "ms...");
            This.wsLock = 1;
            ws.stopWs(function() {
              This._token(function() {
                This.log("新1分钟接续OK，当前缓冲" + buffersDur + "ms", 2);
                This.wsLock = 0;
                This.wsCur = 0;
                This.sendCurSize = 0;
                This.joinIsOpen = 1;
                This.joinOffset = -1;
                This._send();
              }, function(err) {
                abort("语音识别新1分钟token接口出错：" + err);
              });
            }, function(err) {
              abort(err);
            });
            return;
          }
          var chunk = new Int16Array(size);
          This.pcmOffset = copyBuffers(This.pcmOffset, This.pcmBuffers, chunk);
          This.pcmSend += size;
          This.joinBuffers.push(chunk);
          This.joinSize += size;
        }
        This.sendCurSize += chunk.length;
        This.sendTotal += chunk.length;
        if (needSend) {
          try {
            ws.send(chunk.buffer);
          } catch (e) {
            CLog("ws.send", 1, e);
          }
        }
        This.sendWait = setTimeout(function() {
          This.sendWait = 0;
          This._send();
        });
      },
      getText: function() {
        var arr = this.resTxts;
        var txt = "";
        for (var i = 0; i < arr.length; i++) {
          var obj = arr[i];
          if (obj.fullTxt) {
            txt = obj.fullTxt;
          } else {
            var tmp = obj.tempTxt || "";
            if (obj.okTxt) {
              tmp = obj.okTxt;
            }
            if (!txt) {
              txt = tmp;
            } else {
              var left = txt.substr(-20);
              var finds = [];
              for (var x = 0, max = Math.min(17, tmp.length - 3); x <= max; x++) {
                for (var i0 = 0; i0 < 17; i0++) {
                  if (left[i0] == tmp[x]) {
                    var n = 1;
                    for (; n < 17; n++) {
                      if (left[i0 + n] != tmp[x + n]) {
                        break;
                      }
                    }
                    if (n >= 3) {
                      finds.push({ x, i0, n });
                    }
                  }
                }
              }
              finds.sort(function(a, b) {
                var v = b.n - a.n;
                return v != 0 ? v : b.i0 - a.i0;
              });
              var f0 = finds[0];
              if (f0) {
                txt = txt.substr(0, txt.length - left.length + f0.i0);
                txt += tmp.substr(f0.x);
              } else {
                txt += tmp;
              }
            }
            if (obj.okTxt != null && tmp == obj.okTxt) {
              obj.fullTxt = txt;
            }
          }
        }
        return txt;
      },
      _wsNew: function(sData, id, resTxt, process, connOk, connFail) {
        var uuid = function() {
          var s = [];
          for (var i = 0, r; i < 32; i++) {
            r = Math.floor(Math.random() * 16);
            s.push(String.fromCharCode(r < 10 ? r + 48 : r - 10 + 97));
          }
          return s.join("");
        };
        var This = this, set = This.set;
        CLog("[ASR " + id + "]正在连接...");
        var url = "wss://nls-gateway.cn-shanghai.aliyuncs.com/ws/v1?token=" + sData.token;
        if (set.compatibleWebSocket) {
          var ws = set.compatibleWebSocket(url);
        } else {
          var ws = new WebSocket(url);
        }
        ws.onclose = function() {
          var isFail = ws._s != 4;
          ws._s = -1;
          This.log("[" + id + "]close");
          isFail && connFail(ws._err || "连接" + id + "已关闭");
        };
        ws.onopen = function() {
          ws._s = 1;
          CLog("[ASR " + id + "]open");
          ws._task = uuid();
          ws.send(JSON.stringify({
            header: {
              message_id: uuid(),
              task_id: ws._task,
              appkey: sData.appkey,
              namespace: "SpeechRecognizer",
              name: "StartRecognition"
            },
            payload: {
              format: "pcm",
              sample_rate: This.sampleRate,
              enable_intermediate_result: true,
              enable_punctuation_prediction: true,
              enable_inverse_text_normalization: true
              //后处理中将数值处理
            },
            context: {}
          }));
        };
        ws.onerror = function(e) {
          This.log("[" + id + "]连接出错", 1);
        };
        ws.onmessage = function(e) {
          var data = e.data;
          var logMsg = true;
          if (typeof data == "string" && data[0] == "{") {
            data = JSON.parse(data);
            var header = data.header || {};
            var payload = data.payload || {};
            var name = header.name || "";
            var status = header.status || 0;
            var isFail = name == "TaskFailed";
            var errMsg = "";
            if (ws._s == 1 && (name == "RecognitionStarted" || isFail)) {
              if (isFail) {
                errMsg = "连接" + id + "失败[" + status + "]" + header.status_text;
              } else {
                ws._s = 2;
                This.log("[" + id + "]连接OK");
                ws.okTime = Date.now();
                connOk();
              }
            }
            if (ws._s == 2 && (name == "RecognitionResultChanged" || isFail)) {
              if (isFail) {
                errMsg = "识别出现错误[" + status + "]" + header.status_text;
              } else {
                logMsg = !ws._clmsg;
                ws._clmsg = 1;
                resTxt.tempTxt = payload.result || "";
                process();
              }
            }
            if (ws._s == 3 && (name == "RecognitionCompleted" || isFail)) {
              var txt = "";
              if (isFail) {
                errMsg = "停止识别出现错误[" + status + "]" + header.status_text;
              } else {
                txt = payload.result || "";
                This.log("[" + id + "]最终识别结果：" + txt);
              }
              ws.stopCall && ws.stopCall(txt, errMsg);
            }
            if (errMsg) {
              This.log("[" + id + "]" + errMsg, 1);
              ws._err || (ws._err = errMsg);
            }
          }
          if (logMsg) {
            CLog("[ASR " + id + "]msg", data);
          }
        };
        ws.stopWs = function(True, False) {
          if (ws._s != 2) {
            False(id + "状态不正确[" + ws._s + "]");
            return;
          }
          ws._s = 3;
          ws.isStop = 1;
          ws.stopCall = function(txt, err) {
            clearTimeout(ws.stopInt);
            ws.stopCall = 0;
            ws._s = 4;
            ws.close();
            resTxt.okTxt = txt;
            process();
            if (err) {
              False(err);
            } else {
              True();
            }
          };
          ws.stopInt = setTimeout(function() {
            ws.stopCall && ws.stopCall("", "停止识别返回结果超时");
          }, 1e4);
          CLog("[ASR " + id + "]send stop");
          ws.send(JSON.stringify({
            header: {
              message_id: uuid(),
              task_id: ws._task,
              appkey: sData.appkey,
              namespace: "SpeechRecognizer",
              name: "StopRecognition"
            }
          }));
        };
        if (ws.connect)
          ws.connect();
        return ws;
      },
      _token: function(True, False) {
        var This = this, set = This.set;
        if (!set.tokenApi) {
          False("未配置tokenApi");
          return;
        }
        (set.apiRequest || DefaultPost)(set.tokenApi, set.apiArgs || {}, function(data) {
          if (!data || !data.appkey || !data.token) {
            False("apiRequest回调的数据格式不正确");
            return;
          }
          This.tokenData = data;
          True();
        }, False);
      }
    };
    function DefaultPost(url, args, success, fail) {
      var xhr = new XMLHttpRequest();
      xhr.timeout = 2e4;
      xhr.open("POST", url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            try {
              var o = JSON.parse(xhr.responseText);
            } catch (e) {
            }
            if (o.c !== 0 || !o.v) {
              fail(o.m || "接口返回非预定义json数据");
              return;
            }
            success(o.v);
          } else {
            fail("请求失败[" + xhr.status + "]");
          }
        }
      };
      var arr = [];
      for (var k in args) {
        arr.push(k + "=" + encodeURIComponent(args[k]));
      }
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send(arr.join("&"));
    }
    function NOOP() {
    }
    Recorder2[ASR_Aliyun_ShortTxt] = ASR_Aliyun_Short;
  });
  const block0$5 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testMainVue");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testMainVue"] = "14839750";
  };
  const _sfc_main$8 = {
    components: { TestPlayer: TestPlayer$1 },
    data() {
      return {
        asrTokenApi: "",
        asrLang: "普通话",
        asrTime: "",
        asrTxt: "",
        SyncID: 0,
        recpowerx: 0,
        recpowert: "",
        reclogs: []
      };
    },
    mounted() {
      this.isMounted = true;
      RecordApp$1.UniPageOnShow(this);
      this.reclog("本测试页面只提供阿里云版的语音识别（Recorder插件：/src/extensions/asr.aliyun.short.js），如果需要腾讯云一句话语音识别（不支持实时特性），前端基本上没有什么需要做的，仅需让后端提供一个录音文件上传接口（很容易，H5也能用），前端将录制好1分钟内的语音文件直接上传给服务器，由后端调用腾讯云语一句话音识别接口，然后返回结果即可，或者App里面直接前端调用腾讯云语音识别接口。其他厂家的语音识别接口请自行参考对接，如需定制开发请联系作者。");
      var defaultApi = "http://你电脑局域网ip:9527/token";
      this.asrTokenApi = uni.getStorageSync("page_asr_asrTokenApi") || defaultApi;
    },
    unmounted() {
      RecordApp$1.Stop();
    },
    onShow() {
      if (this.isMounted)
        RecordApp$1.UniPageOnShow(this);
    },
    methods: {
      currentKeyTag() {
        if (!RecordApp$1.Current)
          return "[?]";
        var tag2 = "Renderjs+H5";
        if (RecordApp$1.UniNativeUtsPlugin) {
          tag2 = RecordApp$1.UniNativeUtsPlugin.nativePlugin ? "NativePlugin" : "UtsPlugin";
        }
        return RecordApp$1.Current.Key + "(" + tag2 + ")";
      },
      recStart() {
        var sid = ++this.SyncID;
        if (!this.asrTokenApi) {
          this.reclog("需要提供TokenApi", 1);
          return;
        }
        if (this.asr) {
          this.reclog("上次asr未关闭", 1);
          return;
        }
        this.reclog("正在请求录音权限...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          this.reclog(this.currentKeyTag() + " 已获得录音权限", 2);
          this.recStart__asrStart(sid);
        }, (msg, isUserNotAllow) => {
          this.reclog(this.currentKeyTag() + " " + (isUserNotAllow ? "isUserNotAllow," : "") + "请求录音权限失败：" + msg, 1);
        });
      },
      recStart__2(sid) {
        if (sid != this.SyncID) {
          this.reclog("sync cancel recStart__2", "#f60");
          return;
        }
        this.reclog(this.currentKeyTag() + " 正在打开录音...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start({
          type: "wav",
          bitRate: 16,
          sampleRate: 16e3,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
            if (sid != this.SyncID)
              return;
            if (this.asr) {
              this.asr.input(buffers, sampleRate, newBufferIdx);
            }
            this.recpowerx = powerLevel;
            this.recpowert = this.formatTime(duration, 1) + " / " + powerLevel;
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
					//App中是在renderjs中进行的可视化图形绘制
					if(this.waveView){
						this.waveView.input(buffers[buffers.length-1],powerLevel,sampleRate);
					}
				}`,
          stop_renderjs: `function(aBuf,duration,mime){
					//App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					this.audioData=aBuf; //留着给Stop时进行转码成wav播放
				}`
        }, () => {
          this.reclog(this.currentKeyTag() + " 已开始录音，请讲话（asrProcess中已限制最多识别60*2-5*(2-1)=115秒）...", 2);
          RecordApp$1.UniFindCanvas(this, [".recwave-WaveView"], `
					this.waveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
				`, (canvas1) => {
            this.waveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
          });
        }, (msg) => {
          this.reclog(this.currentKeyTag() + " 开始录音失败：" + msg, 1);
          this.recCancel("开始录音失败");
        });
      },
      recStart__asrStart(sid) {
        if (sid != this.SyncID) {
          this.reclog("sync cancel recStart__asrStart", "#f60");
          return;
        }
        var asr = this.asr = Recorder.ASR_Aliyun_Short({
          tokenApi: this.asrTokenApi,
          apiArgs: {
            lang: this.asrLang
          },
          apiRequest: uni_ApiRequest,
          compatibleWebSocket: uni_WebSocket,
          asrProcess: (text, nextDuration, abortMsg) => {
            if (abortMsg) {
              this.reclog("[asrProcess回调]被终止：" + abortMsg, 1);
              this.recCancel("语音识别出错");
              return false;
            }
            this.asrTxt = text;
            this.asrTime = "识别时长: " + this.formatTime(asr.asrDuration()) + " 已发送数据时长: " + this.formatTime(asr.sendDuration());
            return nextDuration <= 2 * 60 * 1e3;
          },
          log: (msg, color) => {
            this.reclog(msg, color == 1 ? "#faa" : "#aaa");
          }
        });
        this.reclog("语言：" + asr.set.apiArgs.lang + "，tokenApi：" + asr.set.tokenApi + "，正在打开语音识别...");
        asr.start(() => {
          this.reclog("已开始语音识别", 2);
          this.recStart__2(sid);
        }, (errMsg) => {
          this.reclog("语音识别开始失败，请重试：" + errMsg, 1);
          this.recCancel("语音识别开始失败");
        });
      },
      recStop() {
        ++this.SyncID;
        this.recCancel();
      },
      recCancel(cancelMsg) {
        this.reclog("正在停止...");
        var asr2 = this.asr;
        this.asr = null;
        if (!asr2) {
          this.reclog("未开始识别", 1);
        } else {
          asr2.stop((text, abortMsg) => {
            if (abortMsg) {
              abortMsg = "发现识别中途被终止(一般无需特别处理)：" + abortMsg;
            }
            this.reclog("语音识别完成" + (abortMsg ? "，" + abortMsg : ""), abortMsg ? "#f60" : 2);
            this.reclog("识别最终结果：" + text, 2);
          }, (errMsg) => {
            this.reclog("语音识别" + (cancelMsg ? "被取消" : "结束失败") + "：" + errMsg, 1);
          });
        }
        RecordApp$1.Stop((aBuf, duration, mime) => {
          var recSet = (RecordApp$1.GetCurrentRecOrNull() || { set: { type: "wav" } }).set;
          this.reclog("已录制[" + mime + "]：" + this.formatTime(duration, 1) + " " + aBuf.byteLength + "字节 " + recSet.sampleRate + "hz " + recSet.bitRate + "kbps", 2);
          var aBuf_renderjs = "this.audioData";
          this.$refs.player.setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder);
        }, (msg) => {
          this.reclog("结束录音失败：" + msg, 1);
        });
      },
      reclog(msg, color) {
        var now = /* @__PURE__ */ new Date();
        var t = ("0" + now.getHours()).substr(-2) + ":" + ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2);
        var txt = "[" + t + "]" + msg;
        formatAppLog("log", "at pages/recTest/page_asr.vue:314", txt);
        this.reclogs.splice(0, 0, { txt, color });
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      }
    }
  };
  var uni_ApiRequest = function(url, args, success, fail) {
    uni.setStorageSync("page_asr_asrTokenApi", url);
    uni.request({
      url,
      data: args,
      method: "POST",
      dataType: "text",
      header: { "content-type": "application/x-www-form-urlencoded" },
      success: (e) => {
        if (e.statusCode != 200) {
          fail("请求出错[" + e.statusCode + "]");
          return;
        }
        try {
          var data = JSON.parse(e.data);
        } catch (e2) {
          fail("请求结果不是json格式：" + e2.data);
          return;
        }
        if (data.c !== 0) {
          fail("接口调用错误：" + data.m);
          return;
        }
        data = data.v;
        success({ appkey: data.appkey, token: data.token });
      },
      fail: (e) => {
        fail(e.errMsg || "请求出错");
      }
    });
  };
  var uni_WebSocket = function(url) {
    var ws = {
      onopen: () => {
      },
      onerror: (event) => {
      },
      onclose: (event) => {
      },
      onmessage: (event) => {
      }
    };
    var store = ws.storeData = {};
    ws.send = (data) => {
      store.wsTask.send({ data });
    };
    ws.connect = () => {
      var wsTask = store.wsTask = uni.connectSocket({
        url,
        success: () => {
        },
        fail: (res) => {
          if (store.isError)
            return;
          store.isError = 1;
          ws.onerror({ message: "创建连接出现错误：" + res.errMsg });
        }
      });
      wsTask.onOpen(() => {
        if (store.isOpen)
          return;
        store.isOpen = 1;
        ws.onopen();
      });
      wsTask.onClose((e) => {
        if (store.isClose)
          return;
        store.isClose = 1;
        ws.onclose({ code: e.code || -1, reason: e.reason || "" });
      });
      wsTask.onError((e) => {
        if (store.isError)
          return;
        store.isError = 1;
        ws.onerror({ message: e.errMsg || "未知错误" });
      });
      wsTask.onMessage((e) => {
        ws.onmessage({ data: e.data });
      });
    };
    ws.close = (code, reason) => {
      var obj = {};
      if (code != null)
        obj.code = code;
      if (reason != null)
        obj.reason = reason;
      store.wsTask.close(obj);
    };
    return ws;
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TestPlayer = vue.resolveComponent("TestPlayer");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { style: { "color": "#f60", "font-weight": "bold", "padding": "10px" } }, "实时语音识别 [阿里云版] - /src/extensions/asr.aliyun.short.js"),
      vue.createElementVNode("view", { style: { "padding": "0 10px" } }, [
        vue.createElementVNode("text", null, "识别语言模型："),
        vue.createElementVNode("checkbox", {
          onClick: _cache[0] || (_cache[0] = ($event) => $data.asrLang = "普通话"),
          checked: $data.asrLang == "普通话"
        }, "普通话", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[1] || (_cache[1] = ($event) => $data.asrLang = "粤语"),
          checked: $data.asrLang == "粤语"
        }, "粤语", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[2] || (_cache[2] = ($event) => $data.asrLang = "英语"),
          checked: $data.asrLang == "英语"
        }, "英语", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          onClick: _cache[3] || (_cache[3] = ($event) => $data.asrLang = "日语"),
          checked: $data.asrLang == "日语"
        }, "日语", 8, ["checked"])
      ]),
      vue.createElementVNode("view", { style: { "padding": "0px 10px 0" } }, [
        vue.createElementVNode("text", null, "Token Api："),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.asrTokenApi = $event),
            style: { "width": "200px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.asrTokenApi]
        ]),
        vue.createElementVNode("view", { style: { "font-size": "13px", "color": "#999" } }, "你可以在电脑上运行Recorder仓库/assets/demo-asr内的nodejs服务器端脚本，然后填写你电脑局域网ip即可测试（H5时用127.0.0.1）"),
        vue.createElementVNode("view", { style: { "font-size": "13px", "color": "#fa0" } }, "如果你要在小程序中使用，需要将阿里云的ws地址也加入白名单")
      ]),
      vue.createCommentVNode(" 控制按钮 "),
      vue.createElementVNode("view", { style: { "display": "flex", "padding-top": "10px" } }, [
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode("button", {
            type: "primary",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.recStart && $options.recStart(...args)),
            style: { "font-size": "16px", "padding": "0" }
          }, "开始录音+语音识别")
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "width": "120px" } }, [
          vue.createElementVNode("button", {
            type: "warn",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.recStop && $options.recStop(...args)),
            style: { "font-size": "16px", "padding": "0" }
          }, "停止")
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } })
      ]),
      vue.createCommentVNode(" 可视化绘制 "),
      vue.createElementVNode("view", { style: { "padding": "5px 0 0 10px" } }, [
        vue.createElementVNode("view", { style: { "height": "40px", "width": "300px", "background": "#999", "position": "relative" } }, [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle([{ "height": "40px", "background": "#0B1", "position": "absolute" }, { width: $data.recpowerx + "%" }])
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            { style: { "padding-left": "50px", "line-height": "40px", "position": "relative" } },
            vue.toDisplayString($data.recpowert),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 可视化波形，只需创建需要用到的canvas就行，canvas需要指定宽高（下面style里指定了300*100） "),
        vue.createElementVNode("view", { style: { "padding-top": "5px" } }),
        vue.createElementVNode("view", { class: "recwave" }, [
          vue.createElementVNode("canvas", {
            type: "2d",
            class: "recwave-WaveView"
          })
        ])
      ]),
      vue.createCommentVNode(" 显示语音识别结果 "),
      vue.createElementVNode("view", { style: { "padding": "10px" } }, [
        vue.createElementVNode(
          "view",
          { style: { "margin": "0 0 6px", "font-size": "12px" } },
          "实时识别结果: " + vue.toDisplayString($data.asrTime),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "view",
          { style: { "padding": "15px 10px", "min-height": "50px", "border": "3px dashed #a2a1a1" } },
          vue.toDisplayString($data.asrTxt),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 手撸播放器 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        vue.createVNode(
          _component_TestPlayer,
          { ref: "player" },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      vue.createCommentVNode(" 日志输出 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.reclogs, (obj) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: obj.idx,
              style: { "border-bottom": "1px dashed #666", "padding": "5px 0" }
            }, [
              vue.createElementVNode(
                "view",
                {
                  style: vue.normalizeStyle({ color: obj.color == 1 ? "red" : obj.color == 2 ? "green" : obj.color })
                },
                vue.toDisplayString(obj.txt),
                5
                /* TEXT, STYLE */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  if (typeof block0$5 === "function")
    block0$5(_sfc_main$8);
  const PagesRecTestPage_asr = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/page_asr.vue"]]);
  (function(factory) {
    var browser = typeof window == "object" && !!window.document;
    var win = browser ? window : Object;
    factory(win.Recorder, browser);
  })(function(Recorder2, isBrowser) {
    var i18n = Recorder2.i18n;
    Recorder2.CLog('Import Recorder i18n lang="en-US"');
    i18n.alias["en-US"] = "en";
    var putSet = { lang: "en" };
    i18n.data["rtl$en"] = false;
    i18n.data["desc$en"] = "English, 英语。This translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。";
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="重复导入{1}"
        //@@Put0
        "K8zP:Duplicate import {1}",
        "mSxV:There are {1} GetContext unclosed",
        "nMIy: (Note: ctx is not in the running state. At least one of rec.open and start must be called during user operations (touch, click, etc.), otherwise ctx.resume will be attempted during rec.start, which may cause compatibility issues (iOS only), please refer to the runningContext configuration in the documentation) ",
        "ZGlf:. Due to 375 callbacks in 1 second in {1}, there may be performance problems on the mobile side, which may cause the callback to be lost and the recording to be shortened, but it will not affect the PC side. It is not recommended to enable {1} for now.",
        "7TU0:Connect uses the old {1}, ",
        "JwCL:But {1} is set trying to enable {2}",
        "VGjB:Can set {1} try to enable {2}",
        "MxX1:{1} did not return any audio, reverting to {2}",
        "XUap:{1} redundant callback",
        "yOta:Connect uses {1}, set {2} to restore old-fashioned {3}",
        "VwPd: (This browser does not support {1}) ",
        "vHnb:{1} did not return any audio, downgrade to {2}",
        "O9P7:{1} redundant callback",
        "LMEm:Connect uses {1}, set {2} to restore to using {3} or old-fashioned {4}",
        "d48C:The filter sampleRate of {1} has changed, reset the filter",
        "tlbC:{1} seems to have passed in an unreset chunk {2}",
        "VtS4:{1} and {2} must be number",
        "5tWi:Recording open failed: ",
        "dFm8:open cancelled",
        "VtJO:open interrupted",
        "EMJq:, you can try to use the RecordApp solution ",
        "A5bm:Cannot record: ",
        "1iU7:This browser does not support obtaining recordings from stream",
        "BTW2:Failed to open recording from stream: ",
        "Nclz:No permission to record (cross domain, please try adding microphone access policy to iframe, such as: {1})",
        "gyO5:User denied recording permission",
        "oWNo:Browser prohibits recording of unsafe pages, which can be resolved by enabling HTTPS",
        "jBa9:, no microphone available",
        "COxc:This browser does not support recording",
        "upb8:It was found that open was called multiple times at the same time",
        "Q1GA:Invalid recording: no audio stream",
        "xEQR:Error requesting recording permission",
        "bDOG:Unable to record: ",
        "RiWe:, when noiseSuppression and echoCancellation are not configured, the browser may automatically enable noise suppression and echo cancellation, and the mobile terminal may reduce the system playback volume (recovery after the recording is closed), please refer to the audioTrackSet configuration in the document.",
        "hWVz:close is ignored (because multiple recs are open at the same time, only the last one will actually close)",
        "UHvm:ignore",
        "Essp:{1} architecture not supported",
        "2XBl:{1} type does not support setting takeoffEncodeChunk",
        "LG7e:(Encoder not loaded)",
        "7uMV:{1} environment does not support real-time processing",
        "4Kfd:Compensation {1}ms",
        "bM5i:Uncompensated {1}ms",
        "gFUF:Callback error is not allowed, you need to ensure that no exception will be thrown",
        "2ghS:Low performance, took {1}ms",
        "ufqH:Buffers cannot be cleared before entering async",
        "6WmN:start failed: not open",
        "kLDN:start recording, ",
        "Bp2y:start was interrupted",
        "upkE:, may fail to record: ",
        "Xq4s:Stop and start time difference: ",
        "3CQP:compensate: ",
        "u8JG:Failed to stop recording: ",
        "1skY:, please set {1}",
        "Wv7l:Stop recording, encoding takes {1}ms, audio duration {2}ms, file size {3}b",
        "Vkbd:{1} encoder returned not {2}",
        "QWnr:After enabling takeoffEncodeChunk, the length of the blob returned by stop is 0 and no audio data is provided",
        "Sz2H:Invalid generated {1}",
        "wf9t:Recording not started",
        "Dl2c:, No user interaction before starting recording, resulting in AudioContext not running",
        "Ltz3:Recording not captured",
        "xGuI:The {1} encoder is not loaded. Please try to find the {1} encoder in the src/engine directory of the {2} and load it",
        "AxOH:Recording error: ",
        "xkKd:Audio buffers are released",
        "CxeT:Sampled: {1}, took: {2}ms",
        "NonBrowser-1:Non-browser environment, does not support {1}",
        "IllegalArgs-1:Illegal argument: {1}",
        "NeedImport-2:Calling {1} needs to import {2} first",
        "NotSupport-1:Not support: {1}",
        "8HO5:Override import {1}"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="AMR-NB(NarrowBand)，采样率设置无效（只提供8000hz），比特率范围：{1}（默认12.2kbps），一帧20ms、{2}字节；浏览器一般不支持播放amr格式，可用Recorder.amr2wav()转码成wav播放"
        //@@Put0
        "b2mN:AMR-NB (NarrowBand), sampleRate setting is invalid (only 8000hz is provided), bitRate range: {1} (default 12.2kbps), one frame 20ms, {2} bytes; browsers generally do not support playing amr format, available Recorder.amr2wav() transcoding into wav playback",
        "tQBv:AMR Info: does not match the set {1}, has been updated to {2}",
        "q12D:Data sampleRate lower than {1}",
        "TxjV:The current browser version is too low to process in real time",
        "Q7p7:takeoffEncodeChunk takes over the binary data output by the AMR encoder, and only the first callback data (the first frame) contains the AMR header; when merging into an AMR file, if the first frame data is not included, the AMR header must be added at the beginning of the file: Recorder.AMR.AMR_HEADER (converted to binary), otherwise it cannot be played",
        "6o9Z:The current environment does not support Web Worker, and the amr real-time encoder runs in the main thread",
        "yYWs:amr worker left {1} unstopped",
        "jOi8:amr encoder not started"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="Ogg Vorbis，比特率取值16-100kbps，采样率取值无限制"
        //@@Put0
        "O8Gn:Ogg Vorbis, bitRate 16-100kbps, sampleRate unlimited",
        "5si6:The current browser version is too low to process in real time",
        "R8yz:takeoffEncodeChunk takes over the binary data output by the OggVorbis encoder. Ogg is composed of data pages. One page contains multiple frames of audio data (including a few seconds of audio, and one page of data cannot be decoded and played alone). This encoder outputs a complete page of data each time, so the real-time performance will be relatively low; when merging into a complete ogg file, all the output data must be merged together, otherwise it may not be able to play, and it does not support intercepting the middle part to decode and play separately",
        "hB9D:The current environment does not support Web Worker, and the OggVorbis real-time encoder runs in the main thread",
        "oTiy:There are {1} unstopped ogg workers",
        "dIpw:ogg encoder not started"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="此浏览器不支持进行webm编码，未实现MediaRecorder"
        //@@Put0
        "L49q:This browser does not support webm encoding, MediaRecorder is not implemented",
        "tsTW:Only newer browsers support it, and the compression rate is similar to mp3. Since there is no way to quickly encode the existing pcm data, the data can only be imported into MediaRecorder in a similar manner while playing and listening, and it takes a few seconds to wait for a few seconds. Although the output audio can control the file size through the bitRate, the bitRate in the audio file is not the set bitRate. Since the sampleRate is sampled by ourselves, we can do whatever we want with this encoder.",
        "aG4z:This browser does not support converting recordings to webm format",
        "PIX0:Error encoding webm: {1}"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="{1}；{2}音频文件无法直接播放，可用Recorder.{2}2wav()转码成wav播放；采样率比特率设置无效，固定为8000hz采样率、16位，每个采样压缩成8位存储，音频文件大小为8000字节/秒；如需任意采样率支持，请使用Recorder.{2}_encode()方法"
        //@@Put0
        "d8YX:{1}; {2} audio files cannot be played directly, and can be transcoded into wav by Recorder.{2}2wav(); the sampleRate bitRate setting is invalid, fixed at 8000hz sampleRate, 16 bits, each sample is compressed into 8 bits for storage, and the audio file size is 8000 bytes/second; if you need any sampleRate support, please use Recorder.{2}_encode() Method",
        "29UK:Data sampleRate lower than {1}",
        "quVJ:{1} encoder not started"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="采样率范围：{1}；比特率范围：{2}（不同比特率支持的采样率范围不同，小于32kbps时采样率需小于32000）"
        //@@Put0
        "Zm7L:sampleRate range: {1}; bitRate range: {2} (the sampleRate range supported by different bitRate is different, when the bitRate is less than 32kbps, the sampleRate must be less than 32000)",
        "eGB9:{1} is not in the value range supported by mp3: {2}",
        "zLTa:sampleRate has been updated to {1}, because {2} is not in the value range supported by mp3: {3}",
        "yhUs:The current browser version is too low to process in real time",
        "k9PT:The current environment does not support Web Worker, and the mp3 real-time encoder runs in the main thread",
        "fT6M:There are {1} unstopped mp3 workers left",
        "mPxH:mp3 encoder not started",
        "uY9i:Does not match the set {1}, has been updated to {2}",
        "iMSm:Fix remove {1} frame",
        "b9zm:Remove too many frames"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="pcm为未封装的原始音频数据，pcm音频文件无法直接播放，可用Recorder.pcm2wav()转码成wav播放；支持位数8位、16位（填在比特率里面），采样率取值无限制"
        //@@Put0
        "fWsN:pcm is unencapsulated original audio data, pcm audio files cannot be played directly, and can be transcoded into wav by Recorder.pcm2wav(); it supports 8-bit and 16-bit bits (fill in the bitRate), and the sampleRate is unlimited",
        "uMUJ:PCM Info: {1} bit is not supported, has been updated to {2} bit",
        "KmRz:pcm2wav must provide sampleRate and bitRate",
        "sDkA:pcm encoder not started"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="支持位数8位、16位（填在比特率里面），采样率取值无限制；此编码器仅在pcm数据前加了一个44字节的wav头，编码出来的16位wav文件去掉开头的44字节即可得到pcm（注：其他wav编码器可能不是44字节）"
        //@@Put0
        "gPSE:Supports 8-bit and 16-bit bits (fill in the bitRate), and the sampleRate is unlimited; this encoder only adds a 44-byte wav header before the pcm data, and the encoded 16-bit wav file removes the beginning 44 bytes to get pcm (note: other wav encoders may not be 44 bytes)",
        "wyw9:WAV Info: {1} bit is not supported, has been updated to {2} bit"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="getAudioSrc方法已过时：请直接使用getMediaStream然后赋值给audio.srcObject，仅允许在不支持srcObject的浏览器中调用本方法赋值给audio.src以做兼容"
        //@@Put0
        "0XYC:The getAudioSrc method is obsolete: please use getMediaStream directly and then assign it to audio.srcObject, it is only allowed to call this method in browsers that do not support srcObject and assign it to audio.src for compatibility",
        "I4h4:{1} repeat start",
        "P6Gs:The browser does not support opening {1}",
        "JwDm: (Note: ctx is not in the running state, start needs to be called when the user operates (touch, click, etc.), otherwise it will try to perform ctx.resume, which may cause compatibility issues (only iOS), please refer to the runningContext configuration in the document) ",
        "6DDt:start is terminated by stop",
        "qx6X:The AudioBuffer implementation of this browser does not support dynamic features, use compatibility mode",
        "cdOx:Environment detection timeout",
        "S2Bu:Could not play: {1}",
        "ZfGG:input call failed: non-pcm[Int16,...] input must be decoded or converted using transform",
        "N4ke:input call failed: sampleRate not provided",
        "IHZd:input call failed: sampleRate={1} of data is different from previous={2}",
        "TZPq:{1} did not call the start method",
        "iCFC:Browser does not support audio decoding",
        "wE2k:Audio decoding data must be ArrayBuffer",
        "mOaT:Audio decoding failed: {1}"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="符号[{1}]无效：{2}"
        //@@Put0
        "3RBa:Invalid symbol [{1}]: {2}",
        "U212:Invalid note [{1}]: {2}",
        "7qAD:Multiple tones must be aligned, with a difference of {1}ms",
        "QGsW:Happy Birthday to You",
        "emJR:For Elise",
        "GsYy:Canon - Right Hand Notation",
        "bSFZ:Canon"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="当前环境不支持Web Worker，不支持调用Sonic.Async"
        //@@Put0
        "Ikdz:The current environment does not support Web Worker and does not support calling Sonic.Async",
        "IC5Y:There are {1} unflushed sonic workers left"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="{1}中的{2}方法未实现，请在{3}文件中或配置文件中实现此方法"
        //@@Put0
        "WWoj:The {2} method in {1} is not implemented, please implement this method in the {3} file or configuration file",
        "rCAM:Recording does not start, but Native PCM data is received",
        "t2OF:A cross-domain iframe is detected. NativeRecordReceivePCM cannot be injected into the top layer. It has listened to postMessage to be compatible with data transmission. Please implement it by yourself to forward the data received by the top layer to this iframe (no limit on layer), otherwise the recording data cannot be received.",
        "Z2y2:Recording not started"
      ]
    );
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="重复导入{1}"
        //@@Put0
        "uXtA:Duplicate import {1}",
        "kIBu:Called multiple times at the same time: {1}, old callbacks are discarded",
        "ha2K:Duplicate registration {1}",
        "wpTL:Clean resources only",
        "bpvP:Recording not started",
        "fLJD:The current environment does not support real-time callback and cannot be performed {1}",
        "YnzX:Recording permission request failed: ",
        "nwKR:Need to call {1} first",
        "citA:This is not a browser environment. You need to import support files for this platform ({1}), or call {2} to implement the access yourself.",
        "ecp9:Failed to start recording: ",
        "EKmS:Cannot record: ",
        "k7Qo:Recording started",
        "Douz:Failed to stop recording: ",
        "wqSH:Time difference from Start: {1}ms",
        "g3VX:Stop recording, takes {1}ms, audio duration {2}ms, file size {3}b, {4}"
      ]
    );
  });
  (function(factory) {
    var browser = typeof window == "object" && !!window.document;
    var win = browser ? window : Object;
    factory(win.Recorder, browser);
  })(function(Recorder2, isBrowser) {
    var i18n = Recorder2.i18n;
    Recorder2.CLog('Import Page[Recorder_UniCore] lang="en-US"');
    var putSet = { lang: "en" };
    i18n.data["desc-page-Recorder_UniCore$en"] = "English, 英语。This translation mainly comes from: google translation + Baidu translation, translated from Chinese to English. 此翻译主要来自：google翻译+百度翻译，由中文翻译成英文。";
    i18n.put(
      putSet,
      [
        //@@PutList 
        //@@zh="微信小程序中需要：{1}"
        //@@Put0
        "RXs7:WeChat miniProgram requires: {1}",
        "4ATo:Recorder-UniCore currently only supports: H5, APP (Android iOS), MP-WEIXIN, other platform environments need to write their own adaptation files to achieve access",
        "GwCz:RecordApp.UniWebViewActivate needs to pass in the this object of the current page or component as a parameter",
        "ipB3:An error occurred in RecordApp.UniWebViewActivate that should not occur (the plug-in code may need to be upgraded): ",
        "WpKg:RecordApp.UniWebViewActivate has switched the WebView where the renderjs of the current page or component is located",
        "4jKV:RecordApp.UniRenderjsRegister needs to be called in renderjs and pass in this of the current module",
        "Uc9E:An error occurred in RecordApp.UniRenderjsRegister that should not occur (the plugin code may need to be upgraded): ",
        "mzKj:RecordApp.UniRenderjsRegister repeatedly registers the renderjs module of the current page. Only one renderjs module is allowed to be registered in a component",
        "7kJS:RecordApp.UniRenderjsRegister has registered the renderjs module of the current page",
        "AGd7:You need to call the RecordApp.UniWebViewActivate method first",
        "7ot0:You need to call the RecordApp.RequestPermission method first",
        "VsdN:The RecordApp.RequestPermission method needs to be called again",
        "SWsy:It is detected that another page or component has called RecordApp.UniPageOnShow (WvCid={1}), but RecordApp.UniWebViewActivate (current WvCid={2}) has not been called. Some functions will continue to use the previously Activated WebView and components. Please make sure This is in line with your business logic, not because you forgot to call UniWebViewActivate",
        "TfJX:Currently it is not the App logic layer",
        "peIm:RecordApp.UniWebViewActivate has not been called yet",
        "qDo1:The WebView where renderjs for this page is not found",
        "igw2:, RecordApp.UniWebViewEval cannot be called",
        "lU1W:Currently it is not the App logic layer",
        "mSbR:RecordApp.UniWebViewActivate has not been called yet",
        "6Iql:The WebView Cid where renderjs for this page is not found",
        "TtoS:, RecordApp.UniWebViewVueCall cannot be called",
        "vEgr:MainReceiveBind duplicate binding that should not occur",
        "ZHwv:[MainReceive] Unknown data sent back from renderjs: ",
        "MujG:Only allowed to call RecordApp.UniWebViewSendBigBytesToMain in renderjs",
        "kE91:RecordApp.UniRenderjsRegister needs to be called in mounted in renderjs to call RecordApp.UniWebViewSendBigBytesToMain",
        "CjMb:Invalid BigBytes return data",
        "kxOd:Non-App environment does not support saving local files",
        "UqfI:Failed to save file {1}: ",
        "l6sY:Setting RecordApp.UniNativeUtsPlugin is not supported in renderjs",
        "SCW9:RecordApp.UniNativeUtsPlugin is configured, but the current App is not packaged with the native recording plug-in [{1}]",
        "TGMm:The provided RecordApp.UniNativeUtsPlugin value is not RecordApp’s uts native recording plug-in",
        "1f2V: | RecordApp’s uni-app support documentation and examples: {1}",
        "XSYY:Current recording is powered by native recording plug-in",
        "nnM6:Current recording is powered by uts plugin",
        "fqhr:RecordApp.UniWithoutAppRenderjs is currently configured. A native recording plug-in or uts plug-in must be provided to record. Please refer to the RecordApp.UniNativeUtsPlugin configuration",
        "xYRb:Currently RecordApp runs in the logical layer (performance will be slightly lower, and plug-ins such as visualization are not available) ",
        "S3eF:The WebView where the renderjs of the current page is located has not been found. If there is indeed no renderjs, please set RecordApp.UniWithoutAppRenderjs=true",
        "0hyi:The current RecordApp runs in the WebView where renderjs is located (only limited real-time processing can be done in the logic layer, and visualization and other plug-ins need to be called in renderjs) ",
        "FabE:[License for use of {1} within the App] ",
        "w37G:Purchased the native recording plug-in and obtained the license",
        "e71S:Purchased uts plug-in and obtained license",
        "aPoj:UniAppUseLicense is invalid. If you have obtained a commercial license, please fill in: {1}, otherwise please use an empty string",
        "k7im:Canvas not found: {1}, please make sure this DOM is mounted (try $nextTick to wait for DOM update) ",
        "dzX0:Canvas not found: {1}, please make sure this DOM is mounted (try $nextTick to wait for DOM update) ",
        "yI24:RecordApp.UniFindCanvas does not adapt to the current environment",
        "dl4f:{1} returned unknown content, ",
        "H753:RecordApp.UniNativeUtsPlugin native recording plug-in is not configured",
        "0FGq:Recording has not started and {1} cannot be called",
        "PkQ2:RecordApp.UniWebViewActivate needs to be called first, and then RequestPermission can be called",
        "Jk72:Non-H5 permission requests that should not appear",
        "Y3rC:Calling plus.ios@AVAudioSession to request iOS native recording permissions",
        "j15C:Obtained iOS native recording permissions",
        "iKhe:plus.ios requests recording permission, status value: ",
        "0caE:User denied recording permission",
        "7Noe:Calling plus.android.requestPermissions to request Android native recording permissions",
        "Bgls:Obtained Android native recording permission: ",
        "Ruxl:plus.android requests recording permission: No permission",
        "l7WP:User denied recording permission",
        "0JQw:plus.android error in requesting recording permission: ",
        "Mvl7:An error occurred in the permission request to call plus: ",
        "ksoA:Unable to call RequestPermission: ",
        "TSmQ:You need to provide a renderjs in the page, and import RecordApp, recording format encoder, visualization plug-in, etc.",
        "AN0e:Need to import {1} in renderjs",
        "XCMU:RecordApp.UniWebViewActivate needs to be called first, and then Start can be called",
        "rSLO:Start of non-H5 recordings that should not appear",
        "Bjx9:Unable to call Start: ",
        "MTdp:Recording did not start, but onRecEncodeChunk returned by renderjs was received",
        "BjGP:Recording did not start, but Uni Native PCM data was received",
        "byzO:Recording did not start, but UniNativeUtsPlugin PCM data was received",
        "YP4V:Recording not started",
        "TPhg:Stop non-H5 recordings that should not appear",
        "pP4O:Recording not started",
        "H6cq:Unable to call Stop: ",
        "gomD:The file data sent back by renderjs should not be lost"
      ]
    );
  });
  const block0$4 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testMainVue");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testMainVue"] = "698ca624";
  };
  var $T$1 = Recorder.i18n.$T;
  const _sfc_main$7 = {
    components: { TestPlayer: TestPlayer$1 },
    data() {
      return {
        ...this.getTexts(),
        lang: "",
        recType: "mp3",
        recSampleRate: 16e3,
        recBitRate: 16,
        recpowerx: 0,
        recpowert: "",
        reclogs: []
      };
    },
    mounted() {
      try {
        var lang = uni.getStorageSync("test_page_lang");
      } catch (e) {
      }
      lang = lang || (/\b(zh|cn)\b/i.test(uni.getLocale().replace(/_/g, " ")) ? "zh-CN" : "en-US");
      this.setLang(lang);
      this.reclog($T$1("I2MO::页面mounted", ":Page mounted ") + "(" + $T$1("t795::{1}层", ":{1} pages", 0, getCurrentPages().length) + ")，Recorder.LM=" + Recorder.LM + "，RecordApp.LM=" + RecordApp$1.LM + "，UniSupportLM=" + RecordApp$1.UniSupportLM + "，UniJsSource=" + RecordApp$1.UniJsSource.IsSource);
      this.isMounted = true;
      this.uniPage__onShow();
      this.reclog($T$1("ry5v::正在执行Install，请勿操作...", ":Install is in progress, please do not operate..."), "#f60");
      RecordApp$1.Install(() => {
        this.reclog($T$1("Cix5::Install成功，环境：", ":Install successfully, environment: ") + this.currentKeyTag(), 2);
        this.reclog($T$1("K0HW::请先请求录音权限，然后再开始录音", ":Please request recording permission before starting recording"));
      }, (err) => {
        this.reclog("RecordApp.Install" + $T$1("qrjB::出错：", ": error: ") + err, 1);
      });
    },
    unmounted() {
      RecordApp$1.Stop();
      Recorder.i18n.lang = "zh-CN";
    },
    onShow() {
      if (this.isMounted)
        this.uniPage__onShow();
    },
    methods: {
      uniPage__onShow() {
        RecordApp$1.UniPageOnShow(this);
      },
      currentKeyTag() {
        if (!RecordApp$1.Current)
          return "[?]";
        var tag2 = "Renderjs+H5";
        if (RecordApp$1.UniNativeUtsPlugin) {
          tag2 = RecordApp$1.UniNativeUtsPlugin.nativePlugin ? "NativePlugin" : "UtsPlugin";
        }
        return RecordApp$1.Current.Key + "(" + tag2 + ")";
      },
      recReq() {
        this.reclog($T$1("k6jG::正在请求录音权限...", ":Requesting recording permission..."));
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          this.reclog(this.currentKeyTag() + " " + $T$1("ueCL::已获得录音权限，可以开始录音了", ":The recording permission has been obtained and you can start recording."), 2);
        }, (msg, isUserNotAllow) => {
          this.reclog(this.currentKeyTag() + " " + (isUserNotAllow ? "isUserNotAllow," : "") + $T$1("cZuo::请求录音权限失败：", ":Requesting recording permission failed: ") + msg, 1);
        });
      },
      recStart() {
        this.$refs.player.setPlayBytes(null);
        this.reclog(this.currentKeyTag() + " " + $T$1("HbiG::正在打开...", ":Starting..."));
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start({
          type: this.recType,
          sampleRate: this.recSampleRate,
          bitRate: this.recBitRate,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
            this.recpowerx = powerLevel;
            this.recpowert = this.formatTime(duration, 1) + " / " + powerLevel;
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
					//App中在这里修改buffers才会改变生成的音频文件
					//App中是在renderjs中进行的可视化图形绘制，因此需要写在这里，this是renderjs模块的this（也可以用This变量）；如果代码比较复杂，请直接在renderjs的methods里面放个方法xxxFunc，这里直接使用this.xxxFunc(args)进行调用
					if(this.waveView){
						this.waveView.input(buffers[buffers.length-1],powerLevel,sampleRate);
					}
				}`,
          takeoffEncodeChunk: !this.takeoffEncodeChunkSet ? null : (chunkBytes) => {
          },
          takeoffEncodeChunk_renderjs: !this.takeoffEncodeChunkSet ? null : `function(chunkBytes){
					//App中这里可以做一些仅在renderjs中才生效的事情，不提供也行，this是renderjs模块的this（也可以用This变量）
				}`,
          start_renderjs: `function(){
					//App中可以放一个函数，在Start成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					//放一些仅在renderjs中才生效的事情，比如初始化，不提供也行
				}`,
          stop_renderjs: `function(aBuf,duration,mime){
					//App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					this.audioData=aBuf; //留着给Stop时进行转码成wav播放
				}`
        }, () => {
          this.reclog(this.currentKeyTag() + " " + $T$1("jCWZ::录制中：", ":Recording: ") + this.recType + " " + this.recSampleRate + " " + this.recBitRate + "kbps", 2);
          RecordApp$1.UniFindCanvas(this, [".recwave-WaveView"], `
					this.waveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
				`, (canvas1) => {
            this.waveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
          });
        }, (msg) => {
          this.reclog(this.currentKeyTag() + " " + $T$1("hgDD::开始录音失败：", ":Failed to start recording: ") + msg, 1);
        });
      },
      recPause() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Pause();
          this.reclog($T$1("BuDV::已暂停", ":Paused"));
        }
      },
      recResume() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Resume();
          this.reclog($T$1("eWM8::继续录音中...", ":Resumed"));
        }
      },
      recStop() {
        this.reclog($T$1("xmjS::正在结束录音...", ":Stopping recording..."));
        RecordApp$1.Stop((aBuf, duration, mime) => {
          var recSet = (RecordApp$1.GetCurrentRecOrNull() || { set: { type: this.recType } }).set;
          this.reclog($T$1("nIyX::已录制[{1}]：{2} {3}字节", ":Recorded [{1}]: {2} {3}bytes", 0, mime, this.formatTime(duration, 1), aBuf.byteLength) + " " + recSet.sampleRate + "hz " + recSet.bitRate + "kbps", 2);
          var aBuf_renderjs = "this.audioData";
          this.$refs.player.setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder);
        }, (msg) => {
          this.reclog($T$1("5VqK::结束录音失败：", ":Failed to end recording:") + msg, 1);
        });
      },
      reclog(msg, color) {
        var now = /* @__PURE__ */ new Date();
        var t = ("0" + now.getHours()).substr(-2) + ":" + ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2);
        var txt = "[" + t + "]" + msg;
        formatAppLog("log", "at pages/recTest/page_i18n.vue:292", txt);
        this.reclogs.splice(0, 0, { txt, color });
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      getTexts() {
        uni.setNavigationBarTitle({
          title: $T$1("IkUi::RecordApp国际化多语言", ":RecordApp internationalization in multiple languages") + " - uni-app"
        });
        return {
          moreLangs: $T$1("hAh0::其他语言支持办法：复制Recorder和插件的i18n目录内的Template.js文件，改个文件名，然后翻译成对应的语言，然后在页面中引入此文件即可", ":Other language support methods: Copy the Template.js file in the i18n directory of the Recorder and plug-in, change the file name, then translate it into the corresponding language, and then import this file into the page."),
          T_Type: $T$1("hLSC::类型", ":Type"),
          T_SampleRate: $T$1("3EHL::采样率", ":SampleRate"),
          T_BitRate: $T$1("L2Co::比特率", ":BitRate"),
          T_req: $T$1("9bU5::请求录音权限", ":Request recording permission"),
          T_start: $T$1("JUOj::开始录音", ":Start recording"),
          T_stop: $T$1("aod9::停止录音", ":Stop recording"),
          T_pause: $T$1("J45w::暂停", ":Pause"),
          T_resume: $T$1("npYY::继续", ":Resume")
        };
      },
      langClick(e) {
        var val = e.target.dataset.lang;
        if (val) {
          var old = this.lang;
          this.setLang(val);
          if (val != old) {
            this.reclog($T$1("7nbd::已切换语言为：", ":The language has been switched to: ") + val);
          }
        }
      },
      setLang(val) {
        uni.setStorageSync("test_page_lang", val);
        Recorder.i18n.lang = val;
        if (RecordApp$1.UniIsApp()) {
          RecordApp$1.UniWebViewEval(this, 'Recorder.i18n.lang="' + val + '"');
        }
        this.lang = val;
        var o = this.getTexts();
        for (var k in o) {
          this[k] = o[k];
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TestPlayer = vue.resolveComponent("TestPlayer");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" 语言选择 "),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createTextVNode(" Language: "),
        vue.createElementVNode("checkbox", {
          checked: $data.lang == "zh-CN",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.langClick && $options.langClick(...args)),
          "data-lang": "zh-CN"
        }, "简体中文", 8, ["checked"]),
        vue.createElementVNode("checkbox", {
          checked: $data.lang == "en-US",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.langClick && $options.langClick(...args)),
          "data-lang": "en-US"
        }, "English", 8, ["checked"]),
        vue.createElementVNode(
          "text",
          { style: { "font-size": "12px", "color": "#999" } },
          vue.toDisplayString(_ctx.moreLangs),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 录音格式选择 "),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createTextVNode(
          vue.toDisplayString(_ctx.T_Type) + ": " + vue.toDisplayString($data.recType) + " " + vue.toDisplayString(_ctx.T_SampleRate) + ": ",
          1
          /* TEXT */
        ),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "number",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.recSampleRate = $event),
            style: { "width": "60px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [
            vue.vModelText,
            $data.recSampleRate,
            void 0,
            { number: true }
          ]
        ]),
        vue.createTextVNode(
          "hz " + vue.toDisplayString(_ctx.T_BitRate) + "：",
          1
          /* TEXT */
        ),
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "number",
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.recBitRate = $event),
            style: { "width": "60px", "display": "inline-block", "border": "1px solid #ddd" }
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [
            vue.vModelText,
            $data.recBitRate,
            void 0,
            { number: true }
          ]
        ]),
        vue.createTextVNode("kbps ")
      ]),
      vue.createCommentVNode(" 控制按钮 "),
      vue.createElementVNode("view", { style: { "display": "flex", "padding-top": "10px" } }, [
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "warn",
              onClick: _cache[4] || (_cache[4] = (...args) => $options.recReq && $options.recReq(...args)),
              style: vue.normalizeStyle([{ "font-size": "16px", "line-height": "1.2", "padding": "10px 15px" }, { padding: _ctx.T_req.length > 10 ? "0 15px" : "" }])
            },
            vue.toDisplayString(_ctx.T_req),
            5
            /* TEXT, STYLE */
          )
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode(
            "button",
            {
              type: "primary",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.recStart && $options.recStart(...args)),
              style: { "font-size": "16px", "line-height": "1.2", "padding": "10px 15px" }
            },
            vue.toDisplayString(_ctx.T_start),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } }),
        vue.createElementVNode("view", { style: { "flex": "1" } }, [
          vue.createElementVNode(
            "button",
            {
              onClick: _cache[6] || (_cache[6] = (...args) => $options.recStop && $options.recStop(...args)),
              style: { "font-size": "16px", "line-height": "1.2", "padding": "10px 15px" }
            },
            vue.toDisplayString(_ctx.T_stop),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { style: { "width": "10px" } })
      ]),
      vue.createElementVNode("view", { style: { "padding": "10px 10px 0" } }, [
        vue.createElementVNode(
          "button",
          {
            size: "mini",
            type: "default",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.recPause && $options.recPause(...args))
          },
          vue.toDisplayString(_ctx.T_pause),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "button",
          {
            size: "mini",
            type: "default",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.recResume && $options.recResume(...args))
          },
          vue.toDisplayString(_ctx.T_resume),
          1
          /* TEXT */
        )
      ]),
      vue.createCommentVNode(" 可视化绘制 "),
      vue.createElementVNode("view", { style: { "padding": "5px 0 0 10px" } }, [
        vue.createElementVNode("view", { style: { "height": "40px", "width": "300px", "background": "#999", "position": "relative" } }, [
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle([{ "height": "40px", "background": "#0B1", "position": "absolute" }, { width: $data.recpowerx + "%" }])
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            { style: { "padding-left": "50px", "line-height": "40px", "position": "relative" } },
            vue.toDisplayString($data.recpowert),
            1
            /* TEXT */
          )
        ]),
        vue.createCommentVNode(" 可视化波形，只需创建需要用到的canvas就行，canvas需要指定宽高（下面style里指定了300*100） "),
        vue.createElementVNode("view", { style: { "padding-top": "5px" } }),
        vue.createElementVNode("view", { class: "recwave" }, [
          vue.createElementVNode("canvas", {
            type: "2d",
            class: "recwave-WaveView"
          })
        ])
      ]),
      vue.createCommentVNode(" 手撸播放器 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        vue.createVNode(
          _component_TestPlayer,
          { ref: "player" },
          null,
          512
          /* NEED_PATCH */
        )
      ]),
      vue.createCommentVNode(" 日志输出 "),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.reclogs, (obj) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: obj.idx,
              style: { "border-bottom": "1px dashed #666", "padding": "5px 0" }
            }, [
              vue.createElementVNode(
                "view",
                {
                  style: vue.normalizeStyle({ color: obj.color == 1 ? "red" : obj.color == 2 ? "green" : obj.color })
                },
                vue.toDisplayString(obj.txt),
                5
                /* TEXT, STYLE */
              )
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  if (typeof block0$4 === "function")
    block0$4(_sfc_main$7);
  const PagesRecTestPage_i18n = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/page_i18n.vue"]]);
  const block0$3 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("test_1");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["test_1"] = "39e68e20";
  };
  const _sfc_main$6 = {
    methods: {
      renderjsCallThis(data) {
        var aBuf = uni.base64ToArrayBuffer(data.base64), duration = data.duration, mime = data.mime;
        formatAppLog("log", "at pages/recTest/page_renderjsOnly.vue:11", "renderjsCallThis: " + aBuf.byteLength + "字节 " + duration + "ms " + mime);
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainView" });
  }
  if (typeof block0$3 === "function")
    block0$3(_sfc_main$6);
  const PagesRecTestPage_renderjsOnly = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/page_renderjsOnly.vue"]]);
  const block0$2 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testMainVue");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testMainVue"] = "21815b52";
  };
  var disableOgg$1 = false;
  var RecUtsPlugin$1 = null;
  const _sfc_main$5 = {
    components: { TestPlayer: TestPlayer$1 },
    data() {
      return {
        recType: "mp3",
        recSampleRate: 16e3,
        recBitRate: 16,
        takeoffEncodeChunkSet: false,
        takeoffEncodeChunkMsg: "",
        appUseH5Rec: false,
        recwaveChoiceKey: "WaveView",
        recpowerx: 0,
        recpowert: "",
        pageDeep: 0,
        pageNewPath: "main_recTest",
        disableOgg: disableOgg$1,
        evalExecCode: "",
        reclogs: [],
        recogText: "recogText"
      };
    },
    mounted() {
      var vueVer = [];
      var vv = typeof Vue != "undefined" && Vue && Vue.version;
      if (vv)
        vueVer.push("Vue.version:" + vv);
      var v3 = (((this.$ || {}).appContext || {}).app || {}).version;
      if (v3)
        vueVer.push("appContext.app.version:" + v3);
      var v2 = (((this.$root || {}).constructor || {}).super || {}).version;
      if (v2)
        vueVer.push("constructor.super:" + v2);
      this.reclog("页面mounted(" + getCurrentPages().length + "层)，Vue=" + vueVer.join("/") + "，WebViewId=" + (this.$root.$page && this.$root.$page.id || "?") + "，ComponentId=_$id:" + (this._$id || "?") + "/$.uid:" + (this.$ && this.$.uid || "?") + "，Recorder.LM=" + Recorder.LM + "，RecordApp.LM=" + RecordApp$1.LM + "，UniSupportLM=" + RecordApp$1.UniSupportLM + "，UniJsSource=" + RecordApp$1.UniJsSource.IsSource);
      this.pageDeep = getCurrentPages().length;
      this.pageNewPath = /main_recTest/.test(this.getRouteStr()) ? "page_index2" : "main_recTest";
      this.isMounted = true;
      this.uniPage__onShow();
      this.reclog("正在执行Install，请勿操作...", "#f60");
      RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin$1;
      RecordApp$1.Install(() => {
        this.reclog("Install成功，环境：" + this.currentKeyTag(), 2);
        this.reclog("请先请求录音权限，然后再开始录音");
      }, (err) => {
        this.reclog("RecordApp.Install出错：" + err, 1);
      });
    },
    unmounted() {
      RecordApp$1.Stop();
    },
    onShow() {
      if (this.isMounted)
        this.uniPage__onShow();
    },
    methods: {
      uniPage__onShow() {
        RecordApp$1.UniPageOnShow(this);
      },
      currentKeyTag() {
        if (!RecordApp$1.Current)
          return "[?]";
        var tag2 = "Renderjs+H5";
        if (RecordApp$1.UniNativeUtsPlugin) {
          tag2 = RecordApp$1.UniNativeUtsPlugin.nativePlugin ? "NativePlugin" : "UtsPlugin";
        }
        return RecordApp$1.Current.Key + "(" + tag2 + ")";
      },
      recReq() {
        RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin$1;
        if (this.appUseH5Rec) {
          RecordApp$1.UniNativeUtsPlugin = null;
        }
        if (RecordApp$1.UniIsApp() && !RecordApp$1.UniNativeUtsPlugin) {
          this.reclog("当前是在App的renderjs中使用H5进行录音，iOS上只支持14.3以上版本，且iOS上每次进入页面后第一次请求录音权限时、或长时间无操作再请求录音权限时WebView均会弹出录音权限对话框，不同旧iOS版本（低于iOS17）下H5录音可能存在的问题在App中同样会存在；使用配套的原生录音插件或uts插件时无以上问题和版本限制，Android也无以上问题", "#f60");
        }
        this.reclog("正在请求录音权限...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          this.reclog(this.currentKeyTag() + " 已获得录音权限，可以开始录音了", 2);
        }, (msg, isUserNotAllow) => {
          this.reclog(this.currentKeyTag() + " " + (isUserNotAllow ? "isUserNotAllow," : "") + "请求录音权限失败：" + msg, 1);
        });
      },
      recStart() {
        this.$refs.player.setPlayBytes(null);
        this.takeoffEncodeChunkMsg = "";
        var takeEcCount = 0, takeEcSize = 0;
        this.takeEcChunks = this.takeoffEncodeChunkSet ? [] : null;
        this.reclog(this.currentKeyTag() + " 正在打开...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start({
          type: this.recType,
          sampleRate: this.recSampleRate,
          bitRate: this.recBitRate,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
            this.recpowerx = powerLevel;
            this.recpowert = this.formatTime(duration, 1) + " / " + powerLevel;
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
					//App中在这里修改buffers才会改变生成的音频文件
					//App中是在renderjs中进行的可视化图形绘制，因此需要写在这里，this是renderjs模块的this（也可以用This变量）；如果代码比较复杂，请直接在renderjs的methods里面放个方法xxxFunc，这里直接使用this.xxxFunc(args)进行调用
					var wave=this.waveStore&&this.waveStore[this.recwaveChoiceKey];
					if(wave){
						wave.input(buffers[buffers.length-1],powerLevel,sampleRate);
					}
				}`,
          takeoffEncodeChunk: !this.takeoffEncodeChunkSet ? null : (chunkBytes) => {
            takeEcCount++;
            takeEcSize += chunkBytes.byteLength;
            this.takeoffEncodeChunkMsg = "已接收到" + takeEcCount + "块，共" + takeEcSize + "字节";
            this.takeEcChunks.push(chunkBytes);
          },
          takeoffEncodeChunk_renderjs: !this.takeoffEncodeChunkSet ? null : `function(chunkBytes){
					//App中这里可以做一些仅在renderjs中才生效的事情，不提供也行，this是renderjs模块的this（也可以用This变量）
				}`,
          start_renderjs: `function(){
					//App中可以放一个函数，在Start成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					//放一些仅在renderjs中才生效的事情，比如初始化，不提供也行
				}`,
          stop_renderjs: `function(aBuf,duration,mime){
					//App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					this.audioData=aBuf; //留着给Stop时进行转码成wav播放
				}`
        }, () => {
          this.reclog(this.currentKeyTag() + " 录制中：" + this.recType + " " + this.recSampleRate + " " + this.recBitRate + "kbps" + (this.takeoffEncodeChunkSet ? " takeoffEncodeChunk" : "") + (this.appUseH5Rec ? " appUseH5Rec" : ""), 2);
          this.initWaveStore();
        }, (msg) => {
          this.reclog(this.currentKeyTag() + " 开始录音失败：" + msg, 1);
        });
      },
      recPause() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Pause();
          this.reclog("已暂停");
        }
      },
      recResume() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Resume();
          this.reclog("继续录音中...");
        }
      },
      recStopX() {
        RecordApp$1.Stop(
          null,
          (msg) => {
            this.reclog("已清理，错误信息：" + msg);
          }
        );
      },
      recStop() {
        this.reclog("正在结束录音...");
        RecordApp$1.Stop((aBuf, duration, mime) => {
          var recSet = (RecordApp$1.GetCurrentRecOrNull() || { set: { type: this.recType } }).set;
          this.reclog("已录制[" + mime + "]：" + this.formatTime(duration, 1) + " " + aBuf.byteLength + "字节 " + recSet.sampleRate + "hz " + recSet.bitRate + "kbps", 2);
          var aBuf_renderjs = "this.audioData";
          if (this.takeEcChunks) {
            aBuf_renderjs = "";
            this.reclog("启用takeoffEncodeChunk后Stop返回的blob长度为0不提供音频数据");
            var len = 0;
            for (var i = 0; i < this.takeEcChunks.length; i++)
              len += this.takeEcChunks[i].length;
            var chunkData = new Uint8Array(len);
            for (var i = 0, idx = 0; i < this.takeEcChunks.length; i++) {
              var itm = this.takeEcChunks[i];
              chunkData.set(itm, idx);
              idx += itm.length;
            }
            aBuf = chunkData.buffer;
            this.reclog("takeoffEncodeChunk接收到的音频片段，已合并成一个音频文件 " + aBuf.byteLength + "字节");
          }
          this.$refs.player.setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder);
          RecordApp$1.UniSaveLocalFile("recorder.mp3", aBuf, (savePath) => {
            uni.uploadFile({
              url: "http://127.0.0.1:8000/speechtotext",
              filePath: savePath,
              name: "mp3",
              formData: {},
              success: (res) => {
                formatAppLog("log", "at pages/recTest/my_test.vue:317", "上传成功：" + res.data);
                this.StopHandler();
              },
              fail: (err) => {
                formatAppLog("error", "at pages/recTest/my_test.vue:320", "上传录音失败：" + err);
              }
            });
          }, (err) => {
            formatAppLog("error", "at pages/recTest/my_test.vue:322", "保存录音失败：" + err);
          });
        }, (msg) => {
          this.reclog("结束录音失败：" + msg, 1);
        });
      },
      reclog(msg, color) {
        var now = /* @__PURE__ */ new Date();
        var t = ("0" + now.getHours()).substr(-2) + ":" + ("0" + now.getMinutes()).substr(-2) + ":" + ("0" + now.getSeconds()).substr(-2);
        var txt = "[" + t + "]" + msg;
        formatAppLog("log", "at pages/recTest/my_test.vue:335", txt);
        this.reclogs.splice(0, 0, { txt, color });
      },
      recTypeClick(e) {
        var type = e.target.dataset.type;
        if (type) {
          this.recType = type;
        }
      },
      appUseH5RecClick() {
        this.appUseH5Rec = !this.appUseH5Rec;
        RecordApp$1.Current = null;
        this.reclog("切换了appUseH5Rec=" + this.appUseH5Rec + "，重新请求录音权限后生效", "#f60");
      },
      initWaveStore() {
        if (this.waveStore)
          return;
        var store = this.waveStore = this.waveStore || {};
        var webStore = `var store=this.waveStore=this.waveStore||{};`;
        webStore += `this.recwaveChoiceKey="${this.recwaveChoiceKey}";`;
        RecordApp$1.UniFindCanvas(this, [".recwave-WaveView"], `${webStore}
				store.WaveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
			`, (canvas1) => {
          store.WaveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-SurferView", ".recwave-SurferView-2x"], `${webStore}
				store.SurferView=Recorder.WaveSurferView({compatibleCanvas:canvas1,compatibleCanvas_2x:canvas2, width:300, height:100});
			`, (canvas1, canvas2) => {
          store.SurferView = Recorder.WaveSurferView({ compatibleCanvas: canvas1, compatibleCanvas_2x: canvas2, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram1"], `${webStore}
				store.Histogram1=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100});
			`, (canvas1) => {
          store.Histogram1 = Recorder.FrequencyHistogramView({ compatibleCanvas: canvas1, width: 300, height: 100 });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram2"], `${webStore}
				store.Histogram2=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100
					,lineCount:200,widthRatio:1,position:0,minHeight:1
					,fallDuration:600,stripeEnable:false,mirrorEnable:true});
			`, (canvas1) => {
          store.Histogram2 = Recorder.FrequencyHistogramView({
            compatibleCanvas: canvas1,
            width: 300,
            height: 100,
            lineCount: 200,
            widthRatio: 1,
            position: 0,
            minHeight: 1,
            fallDuration: 600,
            stripeEnable: false,
            mirrorEnable: true
          });
        });
        RecordApp$1.UniFindCanvas(this, [".recwave-Histogram3"], `${webStore}
				store.Histogram3=Recorder.FrequencyHistogramView({compatibleCanvas:canvas1, width:300, height:100
					,lineCount:20,position:0,minHeight:1,fallDuration:400,stripeEnable:false,mirrorEnable:true
					,linear:[0,"#0ac",1,"#0ac"]});
			`, (canvas1) => {
          store.Histogram3 = Recorder.FrequencyHistogramView({
            compatibleCanvas: canvas1,
            width: 300,
            height: 100,
            lineCount: 20,
            position: 0,
            minHeight: 1,
            fallDuration: 400,
            stripeEnable: false,
            mirrorEnable: true,
            linear: [0, "#0ac", 1, "#0ac"]
          });
        });
      },
      recwaveChoice(e) {
        var key = e.target.dataset.key;
        if (key) {
          if (key != this.recwaveChoiceKey) {
            this.reclog("已切换波形显示为：" + key);
          }
          this.recwaveChoiceKey = key;
          if (RecordApp$1.UniIsApp()) {
            RecordApp$1.UniWebViewVueCall(this, 'this.recwaveChoiceKey="' + key + '"');
          }
        }
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      getRouteStr() {
        var url = this.$page && this.$page.route || this.$root.route;
        if (!url && this.$root.$scope) {
          url = this.$root.$scope.route;
        }
        return "/" + url;
      },
      reloadPage() {
        var url = this.getRouteStr();
        formatAppLog("log", "at pages/recTest/my_test.vue:434", "刷新页面 url=" + url);
        if (getCurrentPages().length == 1) {
          uni.reLaunch({ url });
        } else {
          uni.navigateBack({ animationDuration: 0, success: () => {
            setTimeout(() => {
              uni.navigateTo({ url });
            }, 300);
          } });
        }
      },
      evalExecClick() {
        if (!this.evalExecCode) {
          this.reclog("请填写要执行的代码", 1);
          return;
        }
        try {
          new Function("Recorder,RecordApp", this.evalExecCode).call(this, Recorder, RecordApp$1);
          this.reclog("代码已执行", 2);
        } catch (e) {
          this.reclog("代码执行异常：" + e.message, 1);
        }
      },
      loadVConsole() {
        var isApp2 = false, isH52 = false;
        isApp2 = true;
        var jsCode = `(function(){
				var isApp=${isApp2}, isH5=${isH52};
				var ok=function(){
					if(isApp){
						This.$ownerInstance.callMethod("reclog","vConsole已加载");
					}else{
						This.reclog("vConsole已加载");
					}
				}
				if(window.VConsole)return ok();
				var elem=document.createElement("script");
				elem.setAttribute("type","text/javascript");
				elem.setAttribute("src","https://xiangyuecn.gitee.io/recorder/assets/ztest-vconsole.js");
				document.body.appendChild(elem);
				elem.onload=function(){
					new VConsole(); ok()
				};
			})()`;
        this.reclog("正在renderjs中加载vConsole...");
        if (isApp2) {
          RecordApp$1.UniWebViewVueCall(this, jsCode);
        } else {
          this.reclog("非app环境，不加载vConsole", 1);
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TestPlayer = vue.resolveComponent("TestPlayer");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.recReq && $options.recReq(...args))
      }, "请求权限"),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.recStart && $options.recStart(...args))
      }, "开始录音"),
      vue.createElementVNode("button", {
        onClick: _cache[2] || (_cache[2] = (...args) => $options.recStop && $options.recStop(...args))
      }, "结束录音"),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        vue.createVNode(
          _component_TestPlayer,
          { ref: "player" },
          null,
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  if (typeof block0$2 === "function")
    block0$2(_sfc_main$5);
  const PagesRecTestMy_test = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/my_test.vue"]]);
  const block0$1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("yourModuleName");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["yourModuleName"] = "425f6c57";
  };
  const _sfc_main$4 = {
    data() {
      return {};
    },
    mounted() {
      this.isMounted = true;
      RecordApp$1.UniPageOnShow(this);
    },
    onShow() {
      if (this.isMounted)
        RecordApp$1.UniPageOnShow(this);
    },
    methods: {
      //请求录音权限
      recReq() {
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          formatAppLog("log", "at pages/test_api/test_api.vue:60", "已获得录音权限，可以开始录音了");
        }, (msg, isUserNotAllow) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:65", "请求录音权限失败：" + msg);
        });
      },
      recStart() {
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          formatAppLog("log", "at pages/test_api/test_api.vue:74", "已获得录音权限，可以开始录音了");
        }, (msg, isUserNotAllow) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:79", "请求录音权限失败：" + msg);
        });
        var set = {
          type: "mp3",
          sampleRate: 16e3,
          bitRate: 16,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
	                //App中在这里修改buffers才会改变生成的音频文件
	                //App中是在renderjs中进行的可视化图形绘制，因此需要写在这里，this是renderjs模块的this（也可以用This变量）；如果代码比较复杂，请直接在renderjs的methods里面放个方法xxxFunc，这里直接使用this.xxxFunc(args)进行调用
	                if(this.waveView) this.waveView.input(buffers[buffers.length-1],powerLevel,sampleRate);
	            }`,
          takeoffEncodeChunk: null,
          takeoffEncodeChunk_renderjs: null,
          start_renderjs: `function(){
	                //App中可以放一个函数，在Start成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
	                //放一些仅在renderjs中才生效的事情，比如初始化，不提供也行
	            }`,
          stop_renderjs: `function(arrayBuffer,duration,mime){
	                //App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
	                //放一些仅在renderjs中才生效的事情，不提供也行
	            }`
        };
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start(set, () => {
          formatAppLog("log", "at pages/test_api/test_api.vue:120", "已开始录音");
          RecordApp$1.UniFindCanvas(this, [".recwave-WaveView"], `
	                this.waveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
	            `, (canvas1) => {
            this.waveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
          });
        }, (msg) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:131", "开始录音失败：" + msg);
        });
      },
      recPause() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Pause();
          formatAppLog("log", "at pages/test_api/test_api.vue:139", "已暂停");
        }
      },
      recResume() {
        if (RecordApp$1.GetCurrentRecOrNull()) {
          RecordApp$1.Resume();
          formatAppLog("log", "at pages/test_api/test_api.vue:146", "继续录音中...");
        }
      },
      recStop() {
        RecordApp$1.Stop((arrayBuffer, duration, mime) => {
          if (typeof Blob != "undefined" && typeof window == "object") {
            new Blob([arrayBuffer], { type: mime });
          }
          uni.uploadFile({
            url: "http://127.0.0.1:8000/speechtotext",
            file: new File([arrayBuffer], "recorder.mp3"),
            name: "mp3",
            formData: {},
            success: (res) => {
              formatAppLog("log", "at pages/test_api/test_api.vue:168", "上传成功：" + res.data);
            },
            fail: (err) => {
              formatAppLog("error", "at pages/test_api/test_api.vue:169", "上传录音失败：" + err);
            }
          });
        }, (msg) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:172", "结束录音失败：" + msg);
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.recReq && $options.recReq(...args))
      }, "请求录音"),
      vue.createCommentVNode(' <button @click="recStart">开始录音</button> '),
      vue.createCommentVNode(' <button @click="recStop">停止录音</button> '),
      vue.createElementVNode(
        "button",
        {
          onMousedown: _cache[1] || (_cache[1] = (...args) => $options.recStart && $options.recStart(...args)),
          onMouseup: _cache[2] || (_cache[2] = (...args) => $options.recStop && $options.recStop(...args))
        },
        "按住录音",
        32
        /* HYDRATE_EVENTS */
      ),
      vue.createElementVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.recognize && _ctx.recognize(...args))
      }, "语音识别")
    ]);
  }
  if (typeof block0$1 === "function")
    block0$1(_sfc_main$4);
  const PagesTest_apiTest_api = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/fuchuang/learn/demo1/pages/test_api/test_api.vue"]]);
  var RecordApp, $T;
  const _sfc_main$3 = {
    data() {
      return {
        ...this.getTexts(),
        show: false,
        statusMsg: "",
        Class: ("a" + Math.random()).replace(".", ""),
        showControlUI: false,
        useNvuePlayer: false,
        playing: false,
        player_position: 0,
        player_currentTime: "00:00",
        player_duration: "00:00",
        player_durationNum: 0
      };
    },
    methods: {
      shareFile() {
        this.saveFileFn();
      },
      playStart() {
        this.playFn();
      },
      playStop() {
        this.stopFn && this.stopFn();
      },
      setPlayerPosition(e) {
        this.setPosFn(e);
      },
      getPage() {
        var p = this.$parent;
        while (p) {
          if (p.reclog)
            break;
          p = p.$parent;
        }
        return p;
      },
      reclog() {
        this.getPage().reclog.apply(this.$parent, arguments);
      },
      getTexts() {
        return {
          T_pause: $T ? $T("oozQ::暂停播放", ":Pause") : "",
          T_play: $T ? $T("PPxS::播放", ":Play") : "",
          T_download: $T ? $T("jtJH::下载保存", ":Download and save") : ""
        };
      },
      status(msg) {
        msg = msg ? $T("w7J2::播放器创建中：", ":Player is being created: ") + msg : "";
        this.statusMsg = msg;
        if (msg)
          RecordApp.CLog(msg);
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      createAudio(type, aBuf0, mime0, aBuf, duration, mime) {
        this.show = false;
        this.status("");
        this.playing = false;
        this.player_durationNum = duration;
        this.player_duration = this.formatTime(duration);
        this.player_currentTime = "00:00";
        this.player_position = 0;
        var fileName = "recordapp-" + Date.now() + "." + type;
        var okEnd = () => {
          this.show = true;
          this.status("");
          RecordApp.CLog($T("GXCV::播放器创建完成，可以播放了", ":The player is created and can be played"));
        };
        if (this.useNvuePlayer) {
          this.showControlUI = true;
          var saveBuf = (tag, sPath, sBuffer, next) => {
            RecordApp.UniSaveLocalFile(sPath, sBuffer, (path2) => {
              this.reclog(tag + $T("FtgC::文件已保存在：", ":File has been saved at: ") + path2);
              next(path2);
            }, (err) => {
              this.status(tag + $T("9AGy::保存文件失败，将无法播放：", ":Failed to save the file and will not be able to play it: ") + err);
            });
          };
          this.status($T("4xcp::正在将数据保存成本地文件以供播放...", ":Saving data to local file for playback..."));
          var path = "", wavPath = "";
          var saveOk = () => {
            this.playUrl = path;
            this.playUrl_wav = wavPath;
            okEnd();
          };
          saveBuf("", fileName, aBuf0, (p) => {
            path = p;
            if (aBuf == aBuf0) {
              saveOk();
              return;
            }
            saveBuf($T("fU7N::[转码成wav播放]", ":[Transcode to wav for playback]"), fileName + ".wav", aBuf, (p2) => {
              wavPath = p2;
              saveOk();
            });
          });
          this.setPosFn = (e) => {
            var val = e.detail.value;
            if (!this.audio)
              this.playFn();
            var time = Math.round(this.player_durationNum * val / 100);
            this.audio.seek(time / 1e3);
            this.audio.play();
          };
          this.playFn = () => {
            var sid = this.playSid;
            if (this.audio) {
              if (this.audio.sid == sid) {
                if (this.audio.paused) {
                  this.audio.play();
                } else {
                  this.audio.pause();
                }
                return;
              }
              this.stopFn();
            }
            this.audio = uni.createInnerAudioContext();
            this.audio.src = this.playUrl_wav || this.playUrl;
            this.audio.sid = sid;
            this.audio.onError((res) => {
              this.reclog($T("JRu4::onError 播放错误：", ":onError Playback error: ") + res.errMsg, 1);
            });
            this.audio.timer = setInterval(() => {
              if (this.playSid != sid)
                return;
              if (!this.audio.duration)
                return;
              var dur = Math.round(this.audio.duration * 1e3);
              var cur = Math.round(this.audio.currentTime * 1e3);
              var pos = !dur ? 0 : Math.min(100, Math.round(cur / dur * 100));
              this.playing = !this.audio.paused;
              this.player_durationNum = dur;
              this.player_duration = this.formatTime(dur);
              this.player_currentTime = this.formatTime(cur);
              this.player_position = pos;
            }, 100);
            this.audio.seek(0);
            this.audio.play();
            if (this.playUrl_wav) {
              this.status($T("7ity::使用转码的wav播放", ":Play using transcoded wav"));
            }
          };
          this.stopFn = () => {
            if (this.audio) {
              clearInterval(this.audio.timer);
              try {
                this.audio.stop();
              } catch (e) {
              }
              this.audio.destroy();
            }
          };
          this.saveFileFn = () => {
            this.reclog($T("OAiD::{1}字节文件已保存在：", ":The {1} byte file has been saved at: ", 0, aBuf0.byteLength) + path, 2);
          };
          return;
        }
        RecordApp.UniWebViewVueCall(this.getPage(), `
				if(this.playUrl)URL.revokeObjectURL(this.playUrl);
				this.playUrl=URL.createObjectURL(new Blob([this.player_buffer],{type:"${mime}"}));
				document.querySelector(".${this.Class} .h5Audio").innerHTML='<audio style="width:100%" />';
				this.playEl=document.querySelector(".${this.Class} .h5Audio audio");
				this.playEl.controls=true;
				this.playEl.src=this.playUrl;
				this.playEl.onerror=function(e){ This.$ownerInstance.callMethod("status","${$T("8NWB::播放发生错误：", ":An error occurred during playback: ")}"+e.message); }
				this.playEl.onpause=function(){ This.$ownerInstance.callMethod("player_stopFn",""); }
			`);
        okEnd();
        this.playFn = () => {
          this.playing = true;
          RecordApp.UniWebViewVueCall(this.getPage(), `
					if(this.playEl.paused){
						this.playEl.play();
					}else{
						this.playEl.onpause();
					}
				`);
        };
        this.stopFn = () => {
          this.playing = false;
          RecordApp.UniWebViewVueCall(this.getPage(), `this.playEl.pause();`);
        };
        this.getPage().player_stopFn = this.stopFn;
        this.saveFileFn = () => {
          this.reclog($T("2Hr1::正在保存文件...", ":Saving file..."));
          RecordApp.UniSaveLocalFile(fileName, aBuf0, (path2) => {
            this.reclog($T("GW1Q::{1}字节文件已保存在：", ":The {1} byte file has been saved at: ", 0, aBuf0.byteLength) + path2, 2);
          }, (err) => {
            this.reclog(err);
          });
        };
        return;
      },
      setPlayBytes(aBuf, aBuf_renderjs, duration, mime, recSet, Recorder2) {
        this.show = false;
        this.playStop();
        this.playSid = (this.playSid || 0) + 1;
        this.status("");
        var aBuf0 = aBuf, mime0 = mime;
        if (!aBuf) {
          return;
        }
        RecordApp = Recorder2.RecordApp;
        $T = Recorder2.i18n.$T;
        var o = this.getTexts();
        for (var k in o) {
          this[k] = o[k];
        }
        var end = () => {
          this.createAudio(recSet.type, aBuf0, mime0, aBuf, duration, mime);
        };
        if (!RecordApp.UniIsApp() || RecordApp.UniWithoutAppRenderjs) {
          var wav = Recorder2[recSet.type + "2wav"], t1 = Date.now();
          if (!wav)
            return end();
          var wavData = aBuf;
          if (recSet.type == "pcm")
            wavData = { sampleRate: recSet.sampleRate, bitRate: recSet.bitRate, blob: aBuf };
          this.status($T("bHhO::正在转码成wav...", ":Converting to wav..."));
          wav(wavData, (wavBuf, dur, mie) => {
            aBuf = wavBuf;
            duration = dur;
            mime = mie;
            this.reclog($T("MhM5::已转码成wav以供播放，耗时{1}ms", ":Transcoded to wav for playback, takes {1}ms", 0, Date.now() - t1));
            end();
          }, (msg) => {
            this.reclog($T("oSeh::转码成wav失败：", ":Transcoding to wav failed: ") + msg, 1);
            end();
          });
        } else {
          var cb = RecordApp.UniMainCallBack((val) => {
            if (val.errMsg) {
              this.reclog($T("LU2T::转码成wav失败：", ":Transcoding to wav failed: ") + val.errMsg, 1);
              end();
              return;
            }
            if (val.ok == 2) {
              end();
              return;
            }
            this.reclog($T("65fk::已转码成wav以供播放，耗时{1}ms", ":Transcoded to wav for playback, takes {1}ms", 0, Date.now() - cbT1));
            aBuf = RecordApp.UniMainTakeBigBytes(val.dataId);
            duration = val.dur;
            mime = val.mie;
            end();
          });
          var bigBytes = null, bt1 = 0, cbT1 = Date.now();
          if (!aBuf_renderjs) {
            bigBytes = aBuf0;
            bt1 = Date.now();
            aBuf_renderjs = "BigBytes";
            RecordApp.CLog("[播放器]正在将" + aBuf0.byteLength + "字节音频数据发送到renderjs，因为可能需要转码成wav，可能会比较慢");
          }
          this.status($T("XkoT::正在调用renderjs处理音频数据，此格式如果提供了{1}2wav，将会转码成wav，会比较耗时...", ":Renderjs is being called to process audio data. If {1}2wav is provided in this format, it will be transcoded into wav, which will be more time-consuming...", 0, recSet.type));
          RecordApp.UniWebViewVueCall(this.getPage(), `
					if(${bt1})RecordApp.CLog("[播放器]完成传输${aBuf0.byteLength}字节的数据到renderjs，耗时"+(Date.now()-${bt1})+"ms");
					var recSet=${JSON.stringify(recSet)}, aBuf0=${aBuf_renderjs}, aBuf=aBuf0, duration, mime;
					var end=function(err){
						This.player_buffer=aBuf,t1=Date.now();
						if(err) return RecordApp.UniWebViewSendToMain({action:"${cb}",errMsg:err});
						if(aBuf==aBuf0) return RecordApp.UniWebViewSendToMain({action:"${cb}",ok:2});
						RecordApp.CLog("[播放器]开始传输"+aBuf.byteLength+"字节的数据回逻辑层，可能会比较慢");
						RecordApp.UniWebViewSendBigBytesToMain(aBuf,function(dataId){//数据可能很大
							RecordApp.CLog("[播放器]完成传输"+aBuf.byteLength+"字节的数据回逻辑层，耗时"+(Date.now()-t1)+"ms");
							RecordApp.UniWebViewSendToMain({action:"${cb}",ok:1,dataId:dataId,dur:duration,mie:mime});
						},end);
					};
					var wav=Recorder[recSet.type+"2wav"];
					if(!wav) return end();
					var wavData=aBuf;
					if(recSet.type=="pcm") wavData={ sampleRate:recSet.sampleRate,bitRate:recSet.bitRate,blob:aBuf };
					wav(wavData,function(wavBuf,dur,mie){
						aBuf=wavBuf; duration=dur; mime=mie;
						end();
					},function(msg){
						end("${$T("mzxq::转码成wav失败：", ":Transcoding to wav failed: ")}"+msg);
					});
				`, bigBytes);
        }
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.createCommentVNode(`<view>\r
<view :class="Class" :style="{display:show?'':'none'}">\r
 	<view v-if="show" style="padding:0 10px;display:flex;flex-direction:row;">\r
		<view>\r
			<button size="mini" @click="playStart">{{playing?T_pause:T_play}}</button>\r
		</view>\r
		<view style="flex:1"></view>\r
		<view>\r
			<button size="mini" @click="shareFile">{{T_download}}</button>\r
		</view>\r
	</view>\r
	<view class="shareFileMsg"></view>\r
	\r
	<view v-if="show && showControlUI">\r
		<view style="padding-top:10px">\r
			<slider :value="player_position" @change="setPlayerPosition" step="1" max="100" min="0"></slider>\r
		</view>\r
		<view style="padding:0 10px;display:flex;flex-direction:row;">\r
			<view style="flex:1">{{player_currentTime}}</view>\r
			<view style="flex:1;text-align: right;">{{player_duration}}</view>\r
		</view>\r
	</view>\r
	\r
	<view class="h5Audio"></view>\r
</view>\r
<view style="color:#f60">{{statusMsg}}</view>\r
</view> `);
  }
  const TestPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/fuchuang/learn/demo1/components/micphone/test_player___.vue"]]);
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("testMainVue");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["testMainVue"] = "5d771a22";
  };
  var disableOgg = false;
  var RecUtsPlugin = null;
  const _sfc_main$2 = {
    components: { TestPlayer },
    props: {
      // 检测类型 + 其他验证
      StopHandler: {
        type: Function,
        default: function(value) {
          formatAppLog("log", "at components/micphone/micphone.vue:88", "default handler");
        },
        required: true
      }
    },
    data() {
      return {
        recType: "mp3",
        recSampleRate: 16e3,
        recBitRate: 16,
        takeoffEncodeChunkSet: false,
        takeoffEncodeChunkMsg: "",
        appUseH5Rec: false,
        recwaveChoiceKey: "WaveView",
        recpowerx: 0,
        recpowert: "",
        pageDeep: 0,
        pageNewPath: "main_recTest",
        disableOgg,
        evalExecCode: "",
        reclogs: [],
        recogText: "recogText"
      };
    },
    mounted() {
      var vueVer = [];
      var vv = typeof Vue != "undefined" && Vue && Vue.version;
      if (vv)
        vueVer.push("Vue.version:" + vv);
      var v3 = (((this.$ || {}).appContext || {}).app || {}).version;
      if (v3)
        vueVer.push("appContext.app.version:" + v3);
      var v2 = (((this.$root || {}).constructor || {}).super || {}).version;
      if (v2)
        vueVer.push("constructor.super:" + v2);
      formatAppLog("log", "at components/micphone/micphone.vue:119", "页面mounted(" + getCurrentPages().length + "层)，Vue=" + vueVer.join("/") + "，WebViewId=" + (this.$root.$page && this.$root.$page.id || "?") + "，ComponentId=_$id:" + (this._$id || "?") + "/$.uid:" + (this.$ && this.$.uid || "?") + "，Recorder.LM=" + Recorder.LM + "，RecordApp.LM=" + RecordApp$1.LM + "，UniSupportLM=" + RecordApp$1.UniSupportLM + "，UniJsSource=" + RecordApp$1.UniJsSource.IsSource);
      this.pageDeep = getCurrentPages().length;
      this.pageNewPath = /main_recTest/.test(this.getRouteStr()) ? "page_index2" : "main_recTest";
      this.isMounted = true;
      this.uniPage__onShow();
      formatAppLog("log", "at components/micphone/micphone.vue:133", "正在执行Install，请勿操作...", "#f60");
      RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin;
      RecordApp$1.Install(() => {
        formatAppLog("log", "at components/micphone/micphone.vue:136", "Install成功，环境：" + this.currentKeyTag(), 2);
        formatAppLog("log", "at components/micphone/micphone.vue:137", "请先请求录音权限，然后再开始录音");
        this.recReq();
      }, (err) => {
        formatAppLog("log", "at components/micphone/micphone.vue:140", "RecordApp.Install出错：" + err, 1);
      });
    },
    unmounted() {
      RecordApp$1.Stop();
    },
    onShow() {
      if (this.isMounted)
        this.uniPage__onShow();
    },
    methods: {
      uniPage__onShow() {
        RecordApp$1.UniPageOnShow(this);
      },
      currentKeyTag() {
        if (!RecordApp$1.Current)
          return "[?]";
        var tag2 = "Renderjs+H5";
        if (RecordApp$1.UniNativeUtsPlugin) {
          tag2 = RecordApp$1.UniNativeUtsPlugin.nativePlugin ? "NativePlugin" : "UtsPlugin";
        }
        return RecordApp$1.Current.Key + "(" + tag2 + ")";
      },
      recReq() {
        RecordApp$1.UniNativeUtsPlugin = RecUtsPlugin;
        if (this.appUseH5Rec) {
          RecordApp$1.UniNativeUtsPlugin = null;
        }
        if (RecordApp$1.UniIsApp() && !RecordApp$1.UniNativeUtsPlugin) {
          formatAppLog("log", "at components/micphone/micphone.vue:180", "当前是在App的renderjs中使用H5进行录音，iOS上只支持14.3以上版本，且iOS上每次进入页面后第一次请求录音权限时、或长时间无操作再请求录音权限时WebView均会弹出录音权限对话框，不同旧iOS版本（低于iOS17）下H5录音可能存在的问题在App中同样会存在；使用配套的原生录音插件或uts插件时无以上问题和版本限制，Android也无以上问题", "#f60");
        }
        formatAppLog("log", "at components/micphone/micphone.vue:183", "正在请求录音权限...");
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.RequestPermission(() => {
          formatAppLog("log", "at components/micphone/micphone.vue:186", this.currentKeyTag() + " 已获得录音权限，可以开始录音了", 2);
        }, (msg, isUserNotAllow) => {
          formatAppLog("log", "at components/micphone/micphone.vue:191", this.currentKeyTag() + " " + (isUserNotAllow ? "isUserNotAllow," : "") + "请求录音权限失败：" + msg, 1);
        });
      },
      recStart() {
        this.$refs.player.setPlayBytes(null);
        this.takeoffEncodeChunkMsg = "";
        var takeEcCount = 0, takeEcSize = 0;
        this.takeEcChunks = this.takeoffEncodeChunkSet ? [] : null;
        RecordApp$1.UniWebViewActivate(this);
        RecordApp$1.Start({
          type: this.recType,
          sampleRate: this.recSampleRate,
          bitRate: this.recBitRate,
          onProcess: (buffers, powerLevel, duration, sampleRate, newBufferIdx, asyncEnd) => {
            this.recpowerx = powerLevel;
            this.recpowert = this.formatTime(duration, 1) + " / " + powerLevel;
          },
          onProcess_renderjs: `function(buffers,powerLevel,duration,sampleRate,newBufferIdx,asyncEnd){
					//App中在这里修改buffers才会改变生成的音频文件
					//App中是在renderjs中进行的可视化图形绘制，因此需要写在这里，this是renderjs模块的this（也可以用This变量）；如果代码比较复杂，请直接在renderjs的methods里面放个方法xxxFunc，这里直接使用this.xxxFunc(args)进行调用
					var wave=this.waveStore&&this.waveStore[this.recwaveChoiceKey];
					if(wave){
						wave.input(buffers[buffers.length-1],powerLevel,sampleRate);
					}
				}`,
          takeoffEncodeChunk: !this.takeoffEncodeChunkSet ? null : (chunkBytes) => {
            takeEcCount++;
            takeEcSize += chunkBytes.byteLength;
            this.takeoffEncodeChunkMsg = "已接收到" + takeEcCount + "块，共" + takeEcSize + "字节";
            this.takeEcChunks.push(chunkBytes);
          },
          takeoffEncodeChunk_renderjs: !this.takeoffEncodeChunkSet ? null : `function(chunkBytes){
					//App中这里可以做一些仅在renderjs中才生效的事情，不提供也行，this是renderjs模块的this（也可以用This变量）
				}`,
          start_renderjs: `function(){
					//App中可以放一个函数，在Start成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					//放一些仅在renderjs中才生效的事情，比如初始化，不提供也行
				}`,
          stop_renderjs: `function(aBuf,duration,mime){
					//App中可以放一个函数，在Stop成功时renderjs中会先调用这里的代码，this是renderjs模块的this（也可以用This变量）
					this.audioData=aBuf; //留着给Stop时进行转码成wav播放
				}`
        }, () => {
          formatAppLog("log", "at components/micphone/micphone.vue:254", this.currentKeyTag() + " 录制中：" + this.recType + " " + this.recSampleRate + " " + this.recBitRate + "kbps" + (this.takeoffEncodeChunkSet ? " takeoffEncodeChunk" : "") + (this.appUseH5Rec ? " appUseH5Rec" : ""));
        }, (msg) => {
          formatAppLog("log", "at components/micphone/micphone.vue:261", this.currentKeyTag() + " 开始录音失败：" + msg);
        });
      },
      recStop() {
        formatAppLog("log", "at components/micphone/micphone.vue:265", "正在结束录音...");
        RecordApp$1.Stop((aBuf, duration, mime) => {
          var recSet = (RecordApp$1.GetCurrentRecOrNull() || { set: { type: this.recType } }).set;
          formatAppLog("log", "at components/micphone/micphone.vue:271", "已录制[" + mime + "]：" + this.formatTime(duration, 1) + " " + aBuf.byteLength + "字节 " + recSet.sampleRate + "hz " + recSet.bitRate + "kbps", 2);
          if (this.takeEcChunks) {
            formatAppLog("log", "at components/micphone/micphone.vue:277", "启用takeoffEncodeChunk后Stop返回的blob长度为0不提供音频数据");
            var len = 0;
            for (var i = 0; i < this.takeEcChunks.length; i++)
              len += this.takeEcChunks[i].length;
            var chunkData = new Uint8Array(len);
            for (var i = 0, idx = 0; i < this.takeEcChunks.length; i++) {
              var itm = this.takeEcChunks[i];
              chunkData.set(itm, idx);
              idx += itm.length;
            }
            aBuf = chunkData.buffer;
            formatAppLog("log", "at components/micphone/micphone.vue:286", "takeoffEncodeChunk接收到的音频片段，已合并成一个音频文件 " + aBuf.byteLength + "字节");
          }
          RecordApp$1.UniSaveLocalFile("recorder.mp3", aBuf, (savePath) => {
            uni.uploadFile({
              url: "http://127.0.0.1:8000/speechtotext",
              filePath: savePath,
              name: "mp3",
              formData: {},
              success: (res) => {
                formatAppLog("log", "at components/micphone/micphone.vue:314", "上传成功：" + res.data);
                this.StopHandler();
              },
              fail: (err) => {
                formatAppLog("error", "at components/micphone/micphone.vue:317", "上传录音失败：" + err);
              }
            });
          }, (err) => {
            formatAppLog("error", "at components/micphone/micphone.vue:319", "保存录音失败：" + err);
          });
        }, (msg) => {
          formatAppLog("log", "at components/micphone/micphone.vue:322", "结束录音失败：" + msg, 1);
        });
      },
      recTypeClick(e) {
        var type = e.target.dataset.type;
        if (type) {
          this.recType = type;
        }
      },
      appUseH5RecClick() {
        this.appUseH5Rec = !this.appUseH5Rec;
        RecordApp$1.Current = null;
        formatAppLog("log", "at components/micphone/micphone.vue:344", "切换了appUseH5Rec=" + this.appUseH5Rec + "，重新请求录音权限后生效", "#f60");
      },
      formatTime(ms, showSS) {
        var ss = ms % 1e3;
        ms = (ms - ss) / 1e3;
        var s = ms % 60;
        ms = (ms - s) / 60;
        var m = ms % 60;
        ms = (ms - m) / 60;
        var h = ms, v = "";
        if (h > 0)
          v += (h < 10 ? "0" : "") + h + ":";
        v += (m < 10 ? "0" : "") + m + ":";
        v += (s < 10 ? "0" : "") + s;
        if (showSS)
          v += "″" + ("00" + ss).substr(-3);
        return v;
      },
      getRouteStr() {
        var url = this.$page && this.$page.route || this.$root.route;
        if (!url && this.$root.$scope) {
          url = this.$root.$scope.route;
        }
        return "/" + url;
      }
      // ,reloadPage(){
      // 	var url=this.getRouteStr();
      // 	__f__('log','at components/micphone/micphone.vue:431',"刷新页面 url="+url);
      // 	if(getCurrentPages().length==1){
      // 		uni.reLaunch({ url:url })
      // 	}else{
      // 		uni.navigateBack({animationDuration:0,success:()=>{ setTimeout(()=>{
      // 			uni.navigateTo({url:url})
      // 		},300); }});
      // 	}
      // }
      // ,evalExecClick(){
      // 	if(!this.evalExecCode){
      // 		__f__('log','at components/micphone/micphone.vue:442',"请填写要执行的代码",1);
      // 		return;
      // 	}
      //
      // 	try{
      // 		new Function("Recorder,RecordApp",this.evalExecCode).call(this,Recorder,RecordApp);
      // 		__f__('log','at components/micphone/micphone.vue:448',"代码已执行",2);
      // 	}catch(e){
      // 		__f__('log','at components/micphone/micphone.vue:450',"代码执行异常："+e.message,1);
      // 	}
      //
      // }
      // ,loadVConsole(){
      // 	var isApp=false, isH5=false;
      // isApp=true;
      //
      // 	var jsCode=`(function(){
      // 		var isApp=${isApp}, isH5=${isH5};
      // 		var ok=function(){
      // 			if(isApp){
      // 				This.$ownerInstance.callMethod("reclog","vConsole已加载");
      // 			}else{
      // 				__f__('log','at components/micphone/micphone.vue:464',"vConsole已加载");
      // 			}
      // 		}
      // 		if(window.VConsole)return ok();
      // 		var elem=document.createElement("script");
      // 		elem.setAttribute("type","text/javascript");
      // 		elem.setAttribute("src","https://xiangyuecn.gitee.io/recorder/assets/ztest-vconsole.js");
      // 		document.body.appendChild(elem);
      // 		elem.onload=function(){
      // 			new VConsole(); ok()
      // 		};
      // 	})()`;
      // 	__f__('log','at components/micphone/micphone.vue:476',"正在renderjs中加载vConsole...");
      // 	if(isApp){
      // 		RecordApp.UniWebViewVueCall(this,jsCode);
      // 	}else if(isH5){
      // 	}else{
      // 		__f__('log','at components/micphone/micphone.vue:482',"非app环境，不加载vConsole",1)
      // 	}
      // }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TestPlayer = vue.resolveComponent("TestPlayer");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "img",
        {
          src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png",
          onTouchstart: _cache[0] || (_cache[0] = (...args) => $options.recStart && $options.recStart(...args)),
          onTouchend: _cache[1] || (_cache[1] = (...args) => $options.recStop && $options.recStop(...args)),
          class: "micphone"
        },
        null,
        32
        /* HYDRATE_EVENTS */
      ),
      vue.createElementVNode("view", { style: { "padding-top": "10px" } }, [
        vue.createVNode(
          _component_TestPlayer,
          { ref: "player" },
          null,
          512
          /* NEED_PATCH */
        )
      ])
    ]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$2);
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-609587ba"], ["__file", "E:/fuchuang/learn/demo1/components/micphone/micphone.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        //键盘高度
        keyboardHeight: 0,
        //底部消息发送高度
        bottomHeight: 0,
        //滚动距离
        scrollTop: 0,
        userId: "",
        //发送的消息
        chatMsg: "",
        msgList: [
          {
            botContent: "按住屏幕下方按钮讲话",
            recordId: 0,
            titleId: 0,
            userContent: "",
            userId: 0
          },
          {
            botContent: "",
            recordId: 0,
            titleId: 0,
            userContent: "我的前面有什么？",
            userId: 0
          },
          {
            userContent: "",
            recordId: 0,
            titleId: 0,
            botContent: "您的正前方有一个指示牌，请注意安全",
            userId: 0
          }
        ]
      };
    },
    updated() {
      this.scrollToBottom();
    },
    computed: {
      windowHeight() {
        return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
      },
      // 键盘弹起来的高度+发送框高度
      inputHeight() {
        return this.bottomHeight + this.keyboardHeight;
      }
    },
    onLoad() {
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      focus() {
        this.scrollToBottom();
      },
      blur() {
        this.scrollToBottom();
      },
      // px转换成rpx
      rpxTopx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      // 监视聊天发送栏高度
      sendHeight() {
        setTimeout(() => {
          let query = uni.createSelectorQuery();
          query.select(".send-msg").boundingClientRect();
          query.exec((res) => {
            this.bottomHeight = this.rpxTopx(res[0].height);
          });
        }, 10);
      },
      // 滚动至聊天底部
      scrollToBottom(e) {
        setTimeout(() => {
          let query = uni.createSelectorQuery().in(this);
          query.select("#scrollview").boundingClientRect();
          query.select("#msglistview").boundingClientRect();
          query.exec((res) => {
            if (res[1].height > res[0].height) {
              this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
            }
          });
        }, 15);
      },
      // 发送消息
      handleSend() {
        formatAppLog("log", "at pages/smart-travel/smart-travel.vue:155", "Here");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_micphone = resolveEasycom(vue.resolveDynamicComponent("micphone"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat" }, [
      vue.createElementVNode("scroll-view", {
        style: vue.normalizeStyle({ height: `${$options.windowHeight - $options.inputHeight}rpx` }),
        id: "scrollview",
        "scroll-y": "true",
        "scroll-top": $data.scrollTop,
        class: "scroll-view"
      }, [
        vue.createCommentVNode(" 聊天主体 "),
        vue.createElementVNode("view", {
          id: "msglistview",
          class: "chat-body"
        }, [
          vue.createCommentVNode(" 聊天记录 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.msgList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createCommentVNode(" 自己发的消息 "),
                item.userContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "item self"
                }, [
                  vue.createCommentVNode(" 文字内容 "),
                  vue.createElementVNode(
                    "view",
                    { class: "content right" },
                    vue.toDisplayString(item.userContent),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" 机器人发的消息 "),
                item.botContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "item Ai"
                }, [
                  vue.createCommentVNode(" 文字内容 "),
                  vue.createElementVNode(
                    "view",
                    { class: "content left" },
                    vue.toDisplayString(item.botContent),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ], 12, ["scroll-top"]),
      vue.createCommentVNode(" 底部消息发送栏 "),
      vue.createCommentVNode(" 用来占位，防止聊天消息被发送框遮挡 "),
      vue.createElementVNode("view", { class: "chat-bottom" }, [
        vue.createVNode(_component_micphone, { StopHandler: $options.handleSend }, null, 8, ["StopHandler"])
      ])
    ]);
  }
  const PagesSmartTravelSmartTravel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-94ba6231"], ["__file", "E:/fuchuang/learn/demo1/pages/smart-travel/smart-travel.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/recTest/page_index", PagesRecTestPage_index);
  __definePage("pages/recTest/page_index2", PagesRecTestPage_index2);
  __definePage("pages/recTest/main_recTest", PagesRecTestMain_recTest);
  __definePage("pages/recTest/page_asr", PagesRecTestPage_asr);
  __definePage("pages/recTest/page_i18n", PagesRecTestPage_i18n);
  __definePage("pages/recTest/page_renderjsOnly", PagesRecTestPage_renderjsOnly);
  __definePage("pages/recTest/my_test", PagesRecTestMy_test);
  __definePage("pages/test_api/test_api", PagesTest_apiTest_api);
  __definePage("pages/smart-travel/smart-travel", PagesSmartTravelSmartTravel);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/fuchuang/learn/demo1/App.vue"]]);
  function createApp() {
    const app2 = vue.createVueApp(App);
    return {
      app: app2
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
