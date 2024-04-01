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
  const _sfc_main$k = {
    name: "homeHead",
    data() {
      return {};
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "home-head" }, [
        vue.createElementVNode("image", {
          class: "home-icon",
          src: "/static/homepage/image.png"
        }),
        vue.createElementVNode("text", { class: "home-title" }, "明道-掌上之眼助慧行")
      ])
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-fe552612"], ["__file", "E:/fuchuang/learn/demo1/components/home-head/home-head.vue"]]);
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
  const _sfc_main$j = {
    name: "homeFoot",
    data() {
      return {};
    },
    methods: {
      TestPage() {
        const url = "/pages/test/test";
        uni.navigateTo({ url });
      },
      navigateHome() {
        let routes = getCurrentPages();
        let curRoute = routes[routes.length - 1].route;
        const url = "/pages/index/index";
        formatAppLog("log", "at components/home-foot/home-foot.vue:39", curRoute, url);
        if (url != curRoute) {
          uni.navigateTo({ url });
        }
      },
      navigatePerson() {
        let routes = getCurrentPages();
        let curRoute = routes[routes.length - 1].route;
        const url = "/pages/personal/personal";
        formatAppLog("log", "at components/home-foot/home-foot.vue:49", curRoute, url);
        if (url != curRoute) {
          uni.navigateTo({ url });
        }
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("footer", { class: "footer-container" }, [
        vue.createElementVNode("div", { class: "footer-parter-left" }, [
          vue.createCommentVNode(" Replace with your actual home icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/home-icon.png",
            class: "icon-footer",
            id: "home-icon",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateHome && $options.navigateHome(...args))
          }),
          vue.createElementVNode("text", {
            class: "footer-words",
            style: { "color": "#08DF86" }
          }, " 首页 ")
        ]),
        vue.createElementVNode("div", { class: "footer-parter-center" }, [
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/segment.png",
            class: "icon-footer-center",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.TestPage())
          }),
          vue.createElementVNode("text", { class: "footer-words" }, " 测试音频 "),
          vue.createCommentVNode(' <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> ')
        ]),
        vue.createElementVNode("div", { class: "footer-parter-right" }, [
          vue.createCommentVNode(" Replace with your actual user profile icon SVG or image "),
          vue.createElementVNode("img", {
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/user.png",
            class: "icon-footer",
            id: "user-icon",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.navigatePerson && $options.navigatePerson(...args))
          }),
          vue.createElementVNode("text", { class: "footer-words" }, " 个人 ")
        ])
      ])
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-5c189880"], ["__file", "E:/fuchuang/learn/demo1/components/home-foot/home-foot.vue"]]);
  const _sfc_main$i = {};
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_head = resolveEasycom(vue.resolveDynamicComponent("home-head"), __easycom_0$3);
    const _component_home_foot = resolveEasycom(vue.resolveDynamicComponent("home-foot"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "main-container" }, [
      vue.createVNode(_component_home_head),
      vue.createElementVNode("div", { class: "content" }, [
        vue.createElementVNode("div", { class: "content-first-row" }, [
          vue.createElementVNode("navigator", {
            id: "link-to-smart-travel",
            url: "/pages/test-camera/cover_nvue"
          }, " 智能出行 "),
          vue.createElementVNode("navigator", {
            id: "link-to-snap-recognize",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("img", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/snap-icon.png" }),
            vue.createTextVNode(" 拍照识图 ")
          ])
        ]),
        vue.createElementVNode("div", { class: "content-second-row" }, [
          vue.createElementVNode("navigator", {
            id: "link-to-health-assistant",
            url: "/pages/smart-chat/smart-chat"
          }, [
            vue.createElementVNode("text", null, "智能健康助手"),
            vue.createElementVNode("image", { src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/poe.png" })
          ]),
          vue.createElementVNode("navigator", {
            id: "link-to-assist-read",
            url: "/pages/assist-read/photo_nvue"
          }, [
            vue.createElementVNode("text", null, "辅助阅读"),
            vue.createElementVNode("image", { src: "/static/homepage/book.png" })
          ])
        ])
      ]),
      vue.createVNode(_component_home_foot)
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "E:/fuchuang/learn/demo1/pages/index/index.vue"]]);
  const _sfc_main$h = {
    data() {
      return {
        pathList: [
          {
            path: "/pages/recTest/native_test",
            lebal: "测试音频"
          },
          {
            path: "/pages/test-camera/cover_nvue",
            lebal: "测试摄像头"
          },
          {
            path: "/pages/test_api/test-upload",
            lebal: "测试API"
          },
          {
            path: "/pages/test-page/test-page",
            lebal: "测试Page"
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
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
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
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "E:/fuchuang/learn/demo1/pages/test/test.vue"]]);
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
          CLog($T("mSxV::剩{1}个GetContext未close", 0, L + "-1=" + arr.length), arr.length ? 3 : 0);
        }
      };
      var CtxState = function(ctx) {
        var v = ctx.state, msg = "ctx.state=" + v;
        if (v == "suspended")
          msg += $T("nMIy::（注意：ctx不是running状态，rec.open和start至少要有一个在用户操作(触摸、点击等)时进行调用，否则将在rec.start时尝试进行ctx.resume，可能会产生兼容性问题(仅iOS)，请参阅文档中runningContext配置）");
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
        var oldIsBest = $T("ZGlf::。由于{1}内部1秒375次回调，在移动端可能会有性能问题导致回调丢失录音变短，PC端无影响，暂不建议开启{1}。", 0, audioWorklet);
        var oldScript = function() {
          isWorklet = stream.isWorklet = false;
          _Disconn_n(stream);
          CLog($T("7TU0::Connect采用老的{1}，", 0, scriptProcessor) + i18n.get(
            Recorder2[ConnectEnableWorklet] ? $T("JwCL::但已设置{1}尝试启用{2}", 2) : $T("VGjB::可设置{1}尝试启用{2}", 2),
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
                  CLog($T("MxX1::{1}未返回任何音频，恢复使用{2}", 0, audioWorklet, scriptProcessor), 3);
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
                CLog($T("XUap::{1}多余回调", 0, audioWorklet), 3);
              }
            };
            CLog($T("yOta::Connect采用{1}，设置{2}可恢复老式{3}", 0, audioWorklet, RecTxt + "." + ConnectEnableWorklet + "=false", scriptProcessor) + webMTips + oldIsBest, 3);
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
          webMTips = supportMR ? "" : $T("VwPd::（此浏览器不支持{1}）", 0, MRWebMPCM);
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
                  CLog($T("vHnb::{1}未返回任何音频，降级使用{2}", 0, MediaRecorderTxt, audioWorklet), 3);
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
                CLog($T("O9P7::{1}多余回调", 0, MediaRecorderTxt), 3);
              }
            };
            reader.readAsArrayBuffer(e.data);
          };
          mr.start(~~(bufferSize / 48));
          CLog($T("LMEm::Connect采用{1}，设置{2}可恢复使用{3}或老式{4}", 0, MRWebMPCM, RecTxt + "." + ConnectEnableWebM + "=false", audioWorklet, scriptProcessor));
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
          CLog($T("d48C::{1}的filter采样率变了，重设滤波", 0, Txt), 3);
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
          CLog($T("tlbC::{1}似乎传入了未重置chunk {2}", 0, Txt, index + ">" + nLen), 3);
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
          This.CLog($T.G("IllegalArgs-1", [$T("VtS4::{1}和{2}必须是数值", 0, sampleRateTxt, bitRateTxt)]), 1, set);
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
            This.CLog($T("5tWi::录音open失败：") + errMsg + ",isUserNotAllow:" + isUserNotAllow, 1);
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
              var err = $T("dFm8::open被取消");
              if (lockOpen == Lock.O) {
                This.close();
              } else {
                err = $T("VtJO::open被中断");
              }
              failCall(err);
              return true;
            }
          };
          if (!isBrowser) {
            failCall($T.G("NonBrowser-1", ["open"]) + $T("EMJq::，可尝试使用RecordApp解决方案") + "(" + GitUrl + "/tree/master/app-support-sample)");
            return;
          }
          var checkMsg = This.envCheck({ envName: "H5", canProcess: true });
          if (checkMsg) {
            failCall($T("A5bm::不能录音：") + checkMsg);
            return;
          }
          if (set.sourceStream) {
            This._streamTag = "set.sourceStream";
            if (!Recorder2.GetContext()) {
              failCall($T("1iU7::不支持此浏览器从流中获取录音"));
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
              failCall($T("BTW2::从流中打开录音失败：") + e.message);
              return;
            }
            ok();
            return;
          }
          var codeFail = function(code, msg) {
            try {
              window.top.a;
            } catch (e) {
              failCall($T("Nclz::无权录音(跨域，请尝试给iframe添加麦克风访问策略，如{1})", 0, 'allow="camera;microphone"'));
              return;
            }
            if (/Permission|Allow/i.test(code)) {
              failCall($T("gyO5::用户拒绝了录音权限"), true);
            } else if (window.isSecureContext === false) {
              failCall($T("oWNo::浏览器禁止不安全页面录音，可开启https解决"));
            } else if (/Found/i.test(code)) {
              failCall(msg + $T("jBa9::，无可用麦克风"));
            } else {
              failCall(msg);
            }
          };
          if (Recorder2.IsOpen()) {
            ok();
            return;
          }
          if (!Recorder2.Support()) {
            codeFail("", $T("COxc::此浏览器不支持录音"));
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
                  This.CLog($T("upb8::发现同时多次调用open"), 1);
                Connect(streamStore, 1);
                ok();
              } else {
                failCall($T("Q1GA::录音功能无效：无音频流"));
              }
            }, 100);
          };
          var f2 = function(e) {
            var code = e.name || e.message || e.code + ":" + e;
            This.CLog($T("xEQR::请求录音权限错误"), 1, e);
            codeFail(code, $T("bDOG::无法录音：") + code);
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
          This.CLog(getUserMediaTxt + "(" + JSON.stringify(mSet) + ") " + CtxState(ctx) + $T("RiWe::，未配置noiseSuppression和echoCancellation时浏览器可能会自动打开降噪和回声消除，移动端可能会降低系统播放音量（关闭录音后可恢复），请参阅文档中audioTrackSet配置") + "(" + GitUrl + ") LM:" + LM + " UA:" + navigator.userAgent);
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
            This.CLog($T("hWVz::close被忽略（因为同时open了多个rec，只有最后一个会真正close）") + sTag, 3);
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
          This.CLog(srcSampleRateTxt + ": " + sampleRate + " set." + sampleRateTxt + ": " + set[sampleRateTxt] + (setSr ? " " + $T("UHvm::忽略") + ": " + setSr : ""), setSr ? 3 : 0);
        },
        envCheck: function(envInfo) {
          var errMsg, This = this, set = This.set;
          var tag = "CPU_BE";
          if (!errMsg && !Recorder2[tag] && typeof Int8Array == "function" && !new Int8Array(new Int32Array([1]).buffer)[0]) {
            Traffic(tag);
            errMsg = $T("Essp::不支持{1}架构", 0, tag);
          }
          if (!errMsg) {
            var type = set.type, hasFn = This[type + "_envCheck"];
            if (set.takeoffEncodeChunk) {
              if (!hasFn) {
                errMsg = $T("2XBl::{1}类型不支持设置takeoffEncodeChunk", 0, type) + (This[type] ? "" : $T("LG7e::(未加载编码器)"));
              } else if (!envInfo.canProcess) {
                errMsg = $T("7uMV::{1}环境不支持实时处理", 0, envInfo.envName);
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
              This.CLog("[" + now + "]" + i18n.get(fixOpen ? $T("4Kfd::补偿{1}ms", 1) : $T("bM5i::未补偿{1}ms", 1), [addTime]), 3);
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
            formatAppLog("error", "at node_modules/recorder-core/src/recorder-core.js:1197", procTxt + $T("gFUF::回调出错是不允许的，需保证不会抛异常"), e);
          }
          var slowT = Date.now() - now;
          if (slowT > 10 && This.envInFirst - now > 1e3) {
            This.CLog(procTxt + $T("2ghS::低性能，耗时{1}ms", 0, slowT), 3);
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
              This.CLog($T("ufqH::未进入异步前不能清除buffers"), 3);
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
            This.CLog($T("6WmN::start失败：未open"), 1);
            return;
          }
          var ctx = This._streamCtx();
          This.CLog($T("kLDN::start 开始录音，") + CtxState(ctx) + " stream:" + This._streamTag);
          This._stop();
          This.envStart(null, ctx[sampleRateTxt]);
          This.state = 3;
          if (This._SO && This._SO + 1 != This._S) {
            This.CLog($T("Bp2y::start被中断"), 3);
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
              This.CLog(tag + ctx.state + $T("upkE::，可能无法录音：") + e.message, 1, e);
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
          This.CLog($T("Xq4s::stop 和start时差:") + (envInMS ? envInMS + "ms " + $T("3CQP::补偿:") + This.envInFix + "ms envIn:" + envInLen + " fps:" + (envInLen / envInMS * 1e3).toFixed(1) : "-") + " stream:" + This._streamTag + " (" + GitUrl + ") LM:" + LM);
          var end = function() {
            This._stop();
            if (autoClose) {
              This.close();
            }
          };
          var err = function(msg) {
            This.CLog($T("u8JG::结束录音失败：") + msg, 1);
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
                dErr = $T.G("NonBrowser-1", [dTag]) + $T("1skY::，请设置{1}", 0, RecTxt + "." + tDDT + '="' + tABuf + '"');
              } else {
                if (isAB)
                  blob = new Blob([blob], { type: mime });
                if (!(blob instanceof Blob))
                  dErr = 1;
                mime = blob.type || mime;
              }
            } else {
              dErr = $T.G("NotSupport-1", [dTag]);
            }
            This.CLog($T("Wv7l::结束录音 编码花{1}ms 音频时长{2}ms 文件大小{3}b", 0, Date.now() - t1, duration2, dLen) + " " + dTag + "," + mime);
            if (dErr) {
              err(dErr != 1 ? dErr : $T("Vkbd::{1}编码器返回的不是{2}", 0, set.type, dType) + ", " + dTag);
              return;
            }
            if (set.takeoffEncodeChunk) {
              This.CLog($T("QWnr::启用takeoffEncodeChunk后stop返回的blob长度为0不提供音频数据"), 3);
            } else if (dLen < Math.max(50, duration2 / 5)) {
              err($T("Sz2H::生成的{1}无效", 0, set.type));
              return;
            }
            True && True(blob, duration2, mime);
            end();
          };
          if (!This.isMock) {
            var isCtxWait = This.state == 3;
            if (!This.state || isCtxWait) {
              err($T("wf9t::未开始录音") + (isCtxWait ? $T("Dl2c::，开始录音前无用户交互导致AudioContext未运行") : ""));
              return;
            }
          }
          This._stop(true);
          var size = This.recSize;
          if (!size) {
            err($T("Ltz3::未采集到录音"));
            return;
          }
          if (!This[set.type]) {
            err($T("xGuI::未加载{1}编码器，请尝试到{2}的src/engine内找到{1}的编码器并加载", 0, set.type, RecTxt));
            return;
          }
          if (This.isMock) {
            var checkMsg = This.envCheck(This.mockEnvInfo || { envName: "mock", canProcess: false });
            if (checkMsg) {
              err($T("AxOH::录音错误：") + checkMsg);
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
            err($T("xkKd::音频buffers被释放"));
            return;
          }
          var chunk = Recorder2.SampleData(This.buffers, This[srcSampleRateTxt], set[sampleRateTxt]);
          set[sampleRateTxt] = chunk[sampleRateTxt];
          var res = chunk.data;
          var duration = Math.round(res.length / set[sampleRateTxt] * 1e3);
          This.CLog($T("CxeT::采样:{1} 花:{2}ms", 0, size + "->" + res.length, Date.now() - t1));
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
      var $T = i18n.$T;
      $T.G = i18n.get;
      $T("NonBrowser-1::非浏览器环境，不支持{1}", 1);
      $T("IllegalArgs-1::参数错误：{1}", 1);
      $T("NeedImport-2::调用{1}需要先导入{2}", 2);
      $T("NotSupport-1::不支持：{1}", 1);
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
        CLog($T("8HO5::覆盖导入{1}", 0, RecTxt), 1);
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
    })(function(Export, Recorder2, i18n, $T, isBrowser) {
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
        WApp2.CLog($T("uXtA::重复导入{1}", 0, AppTxt), 3);
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
            CLog($T("kIBu::同时多次调用：{1}，旧的回调被丢弃", 0, tag) + (err ? ", error: " + err : ""), 3);
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
          CLog($T("ha2K::重复注册{1}", 0, key), 3);
        }
        Platforms[key] = config;
      };
      App2.__StopOnlyClearMsg = function() {
        return $T("wpTL::仅清理资源");
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
            fail($T("bpvP::未开始录音") + (clearMsg ? " (" + clearMsg + ")" : ""));
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
        CLog($T("fLJD::当前环境不支持实时回调，无法进行{1}", 0, tag), 3);
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
          CLog($T("YnzX::录音权限请求失败：") + msg, 1);
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
        return $T("nwKR::需先调用{1}", 0, ReqTxt);
      };
      var CheckH5 = function() {
        var msg = "";
        if (App2.Current.Key == KeyH5 && !isBrowser) {
          msg = $T("citA::当前不是浏览器环境，需引入针对此平台的支持文件（{1}），或调用{2}自行实现接入", 0, "src/app-support/app-xxx-support.js", AppTxt + "." + RegTxt);
        }
        return msg;
      };
      App2.Start = function(set, success, fail) {
        var sid = SID(), tag = AppTxt + ".Start";
        var failCall = function(msg) {
          if (!Sync(sid, tag, msg))
            return;
          CLog($T("ecp9::开始录音失败：") + msg, 1);
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
          failCall($T("EKmS::不能录音：") + checkMsg);
          return;
        }
        App2._SRec = 0;
        cur.Start(sid, set, function() {
          if (!Sync(sid, tag))
            return;
          CLog($T("k7Qo::已开始录音"), set);
          App2._STime = Date.now();
          success && success();
        }, failCall);
      };
      App2.Stop = function(success, fail) {
        var sid = SID(), tag = AppTxt + ".Stop";
        var failCall = function(msg) {
          if (!Sync(sid, tag, msg))
            return;
          CLog($T("Douz::结束录音失败：") + msg, success ? 1 : 0);
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
        CLog("Stop... " + $T("wqSH::和Start时差：{1}ms", 0, App2._STime ? Date.now() - App2._STime : -1) + " Recorder.LM:" + Recorder2.LM + " " + AppTxt + ".LM:" + App2.LM);
        var t1 = Date.now();
        var cur = App2.Current;
        if (!cur) {
          failCall(NeedReqMsg());
          return;
        }
        cur.Stop(sid, !success ? null : function(arrayBuffer, duration, mime) {
          if (!Sync(sid, tag))
            return;
          CLog($T("g3VX::结束录音 耗时{1}ms 音频时长{2}ms 文件大小{3}b {4}", 0, Date.now() - t1, duration, arrayBuffer.byteLength, mime));
          try {
            success(arrayBuffer, duration, mime);
          } finally {
            clear();
          }
        }, failCall);
      };
    });
  })(app);
  const RecordApp = appExports;
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
  const block0 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("yourModuleName");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["yourModuleName"] = "425f6c57";
  };
  const _sfc_main$g = {
    data() {
      return {};
    },
    mounted() {
      this.isMounted = true;
      RecordApp.UniPageOnShow(this);
    },
    onShow() {
      if (this.isMounted)
        RecordApp.UniPageOnShow(this);
    },
    methods: {
      //请求录音权限
      recReq() {
        RecordApp.UniWebViewActivate(this);
        RecordApp.RequestPermission(() => {
          formatAppLog("log", "at pages/test_api/test_api.vue:60", "已获得录音权限，可以开始录音了");
        }, (msg, isUserNotAllow) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:65", "请求录音权限失败：" + msg);
        });
      },
      recStart() {
        RecordApp.UniWebViewActivate(this);
        RecordApp.RequestPermission(() => {
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
        RecordApp.UniWebViewActivate(this);
        RecordApp.Start(set, () => {
          formatAppLog("log", "at pages/test_api/test_api.vue:120", "已开始录音");
          RecordApp.UniFindCanvas(this, [".recwave-WaveView"], `
	                this.waveView=Recorder.WaveView({compatibleCanvas:canvas1, width:300, height:100});
	            `, (canvas1) => {
            this.waveView = Recorder.WaveView({ compatibleCanvas: canvas1, width: 300, height: 100 });
          });
        }, (msg) => {
          formatAppLog("error", "at pages/test_api/test_api.vue:131", "开始录音失败：" + msg);
        });
      },
      recPause() {
        if (RecordApp.GetCurrentRecOrNull()) {
          RecordApp.Pause();
          formatAppLog("log", "at pages/test_api/test_api.vue:139", "已暂停");
        }
      },
      recResume() {
        if (RecordApp.GetCurrentRecOrNull()) {
          RecordApp.Resume();
          formatAppLog("log", "at pages/test_api/test_api.vue:146", "继续录音中...");
        }
      },
      recStop() {
        RecordApp.Stop((arrayBuffer, duration, mime) => {
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
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
  if (typeof block0 === "function")
    block0(_sfc_main$g);
  const PagesTest_apiTest_api = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "E:/fuchuang/learn/demo1/pages/test_api/test_api.vue"]]);
  const _sfc_main$f = {
    name: "bot-chat",
    data() {
      return {
        userId: "",
        //发送的消息
        chatMsg: "",
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
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
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
                ),
                vue.createCommentVNode(" 头像 "),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", { src: "/static/smart-chat/icon-girl.png" })
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 机器人发的消息 "),
              item.botContent != "" ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "item Ai"
              }, [
                vue.createCommentVNode(" 头像 "),
                vue.createElementVNode("view", { class: "avatar" }, [
                  vue.createElementVNode("image", { src: "/static/smart-chat/icon-bot.png" })
                ]),
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
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-fb69b191"], ["__file", "E:/fuchuang/learn/demo1/components/bot-chat/bot-chat.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bot_chat = resolveEasycom(vue.resolveDynamicComponent("bot-chat"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { style: { "background-color": "#F1F1F1" } }, [
      vue.createVNode(_component_bot_chat, { style: { "margin-top": "40rpx" } })
    ]);
  }
  const PagesSmartTravelSmartTravel = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "E:/fuchuang/learn/demo1/pages/smart-travel/smart-travel.vue"]]);
  const recorderManager$1 = uni.getRecorderManager();
  const innerAudioContext = uni.createInnerAudioContext();
  innerAudioContext.autoplay = true;
  const _sfc_main$d = {
    data() {
      return {
        text: "uni-app",
        voicePath: ""
      };
    },
    onLoad() {
      recorderManager$1.onStop(function(res) {
        this.voicePath = res.tempFilePath;
        formatAppLog("log", "at pages/recTest/native_test.vue:25", JSON.stringify(res));
        uni.uploadFile({
          url: "http://127.0.0.1:8000/speechtotext",
          filePath: this.voicePath,
          name: "mp3",
          formData: {},
          header: {
            "content-type": "multipart/form-data"
          },
          success: (res2) => {
            formatAppLog("log", "at pages/recTest/native_test.vue:35", "上传成功：" + JSON.stringify(res2));
            if (res2.statusCode != 200) {
              uni.showToast({
                icon: "none",
                title: res2.data,
                duration: 2e3
              });
            }
          },
          fail: (err) => {
            formatAppLog("error", "at pages/recTest/native_test.vue:45", "上传录音失败：" + err.errMsg);
            uni.showToast({
              icon: "none",
              title: err.errMsg,
              duration: 2e3
            });
          }
        });
      });
    },
    methods: {
      startRecord() {
        formatAppLog("log", "at pages/recTest/native_test.vue:57", "开始录音");
        recorderManager$1.start();
      },
      endRecord() {
        formatAppLog("log", "at pages/recTest/native_test.vue:62", "录音结束");
        recorderManager$1.stop();
      },
      playVoice() {
        formatAppLog("log", "at pages/recTest/native_test.vue:66", "播放录音");
        if (this.voicePath) {
          innerAudioContext.src = this.voicePath;
          innerAudioContext.play();
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.startRecord && $options.startRecord(...args))
      }, "开始录音"),
      vue.createElementVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.endRecord && $options.endRecord(...args))
      }, "停止录音"),
      vue.createElementVNode("button", {
        onClick: _cache[2] || (_cache[2] = (...args) => $options.playVoice && $options.playVoice(...args))
      }, "播放录音")
    ]);
  }
  const PagesRecTestNative_test = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "E:/fuchuang/learn/demo1/pages/recTest/native_test.vue"]]);
  const _sfc_main$c = {
    name: "press-mic",
    data() {
      return {};
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "speakarea" }, [
      vue.createElementVNode("image", { src: "/static/smart-chat/press-mic.png" })
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-f48dac70"], ["__file", "E:/fuchuang/learn/demo1/components/press-mic/press-mic.vue"]]);
  const recorderManager = uni.getRecorderManager();
  const _sfc_main$b = {
    data() {
      return {
        keyboardHeight: 100,
        showbox1: true,
        showbox2: false,
        showbox: true,
        chatMsg: "",
        speak_mode: true,
        type_mode: false,
        show_listen: false,
        placeholder: "请输入你想问的..."
      };
    },
    updated() {
      if (this.chatMsg != "") {
        this.placeholder = "";
      } else {
        this.placeholder = "请输入你想问的...";
      }
    },
    onLoad() {
    },
    onUnload() {
      uni.offKeyboardHeightChange();
    },
    methods: {
      keyboardInput() {
        if (this.chatMsg != "") {
          this.placeholder = "";
        } else {
          this.placeholder = "请输入你想问的...";
        }
      },
      toggle1() {
        this.showbox1 = !this.showbox1;
        this.showbox2 = false;
        this.showbox = this.showbox1;
        this.scrollTotop();
      },
      toggle2() {
        this.showbox1 = false;
        this.showbox2 = !this.showbox2;
        this.showbox = this.showbox2;
        this.scrollTotop();
      },
      pxTorpx(px) {
        let deviceWidth = wx.getSystemInfoSync().windowWidth;
        let rpx = 750 / deviceWidth * Number(px);
        return Math.floor(rpx);
      },
      scrollTotop() {
        uni.createSelectorQuery().select(".scroll-view").boundingClientRect((res) => {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:137", res);
          const scrollH = res.top;
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:139", "scroll view selected!!");
          uni.pageScrollTo({
            duration: 100,
            // 过渡时间
            scrollTop: scrollH
            // 滚动的实际距离
          });
        }).exec();
      },
      scrollTobottom() {
        uni.createSelectorQuery().select(`.scroll-view`).boundingClientRect((res) => {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:148", res);
          const scrollH = res.bottom;
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:150", "scroll view selected!!");
          uni.pageScrollTo({
            duration: 100,
            // 过渡时间
            scrollTop: scrollH
            // 滚动的实际距离
          });
        }).exec();
      },
      keyboardInput() {
        this.placeholder = "";
      },
      touchstart() {
        this.show_listen = true;
        this.startRecord();
      },
      touchend() {
        this.show_listen = false;
        this.endRecord();
      },
      togglemode() {
        this.speak_mode = !this.speak_mode;
        this.type_mode = !this.type_mode;
      },
      startRecord() {
        formatAppLog("log", "at pages/smart-chat/smart-chat.vue:173", "开始录音");
        recorderManager.start();
      },
      endRecord() {
        formatAppLog("log", "at pages/smart-chat/smart-chat.vue:177", "录音结束");
        recorderManager.stop();
        recorderManager.onStop(function(res) {
          formatAppLog("log", "at pages/smart-chat/smart-chat.vue:180", JSON.stringify(res));
          uni.uploadFile({
            url: "http://127.0.0.1:8000/speechtotext",
            filePath: res.tempFilePath,
            name: "mp3",
            formData: {},
            success: (res2) => {
              formatAppLog("log", "at pages/smart-chat/smart-chat.vue:187", "上传成功：" + JSON.stringify(res2));
            },
            fail: (err) => {
              formatAppLog("error", "at pages/smart-chat/smart-chat.vue:189", "上传录音失败：" + err);
            }
          });
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_bot_chat = resolveEasycom(vue.resolveDynamicComponent("bot-chat"), __easycom_0$1);
    const _component_press_mic = resolveEasycom(vue.resolveDynamicComponent("press-mic"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "wholeview" }, [
      vue.createElementVNode("view", { class: "topview" }),
      vue.createElementVNode("view", { class: "topbar" }, [
        vue.createElementVNode("view", { class: "topbarleft" }, [
          vue.createElementVNode("text", { class: "topbarlefttitle" }, " 健康助手 "),
          vue.createElementVNode("view", {
            class: "topbarlefticon",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.toggle1 && $options.toggle1(...args))
          }, [
            vue.createElementVNode("text", { class: "topbarlefticontext" }, "Λ")
          ])
        ]),
        vue.createElementVNode("image", {
          class: "topbarright",
          src: "/static/smart-chat/manage.png",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.toggle2 && $options.toggle2(...args))
        })
      ]),
      vue.createElementVNode("scroll-view", {
        style: vue.normalizeStyle({ height: `${_ctx.windowHeight}rpx` }),
        id: "scrollview",
        "scroll-y": "true",
        "scroll-top": _ctx.scrollTop,
        class: "scroll-view"
      }, [
        vue.createElementVNode("view", { class: "placebox" }),
        vue.createElementVNode("view", { class: "placebox-bottom" }),
        $data.showbox1 ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "polygon1",
          src: "/static/smart-chat/polygon.png"
        })) : vue.createCommentVNode("v-if", true),
        $data.showbox2 ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 1,
          class: "polygon2",
          src: "/static/smart-chat/polygon.png"
        })) : vue.createCommentVNode("v-if", true),
        $data.showbox1 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "middlebox1"
        }, [
          vue.createElementVNode("view", { class: "row11" }, " Hi，你好，我是你的智能助手 "),
          vue.createElementVNode("view", { class: "row12" }, "可能偶尔产生不正确的信息，可能偶尔产生有害的指令，内容仅供参考。"),
          vue.createElementVNode("view", { class: "row13" }),
          vue.createElementVNode("view", { class: "row14" })
        ])) : vue.createCommentVNode("v-if", true),
        $data.showbox2 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "middlebox2"
        }, [
          vue.createElementVNode("view", { class: "col21" }, [
            vue.createElementVNode("image", {
              class: "row211",
              src: "/static/smart-chat/archive.png"
            }),
            vue.createElementVNode("view", { class: "row212" }, " 上传医疗报告 ")
          ]),
          vue.createElementVNode("view", { class: "col22" }, [
            vue.createElementVNode("image", {
              class: "row221",
              src: "/static/smart-chat/info.png"
            }),
            vue.createElementVNode("view", { class: "row222" }, " 完善个人信息 ")
          ])
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([$data.showbox ? "content-box" : "content"])
          },
          [
            vue.createVNode(_component_bot_chat)
          ],
          2
          /* CLASS */
        ),
        $data.show_listen ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          class: "show-listen"
        }, [
          vue.createElementVNode("text", { class: "listen-title" }, "正在听，请说出您的问题"),
          vue.createElementVNode("image", { src: "/static/smart-chat/wave.png" })
        ])) : vue.createCommentVNode("v-if", true),
        $data.show_listen ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 5,
          class: "listen-place"
        })) : vue.createCommentVNode("v-if", true)
      ], 12, ["scroll-top"]),
      vue.createElementVNode("view", { class: "chat-bottom" }, [
        $data.type_mode ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "send-msg"
        }, [
          vue.createElementVNode("image", {
            src: "/static/smart-chat/chat-mic.png",
            class: "send-btn",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.togglemode && $options.togglemode(...args))
          }),
          vue.createElementVNode("view", { class: "uni-textarea" }, [
            vue.withDirectives(vue.createElementVNode("textarea", {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.chatMsg = $event),
              placeholder: $data.placeholder,
              "placeholder-style": "display:flex; align-items:center; justify-content:center;",
              onInput: _cache[4] || (_cache[4] = (...args) => $options.keyboardInput && $options.keyboardInput(...args)),
              maxlength: "300",
              "show-confirm-bar": false,
              class: "textarea"
            }, null, 40, ["placeholder"]), [
              [vue.vModelText, $data.chatMsg]
            ])
          ]),
          vue.createElementVNode("image", {
            src: "/static/smart-chat/send.png",
            class: "send-btn",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.scrollTobottom && $options.scrollTobottom(...args))
          })
        ])) : vue.createCommentVNode("v-if", true),
        $data.speak_mode ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "send-msg"
        }, [
          vue.createElementVNode("image", {
            src: "/static/smart-chat/keyboard.png",
            class: "send-btn",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.togglemode && $options.togglemode(...args))
          }),
          vue.createElementVNode("view", { class: "uni-textarea" }, [
            vue.createVNode(_component_press_mic, {
              onTouchstart: $options.touchstart,
              onTouchend: $options.touchend
            }, null, 8, ["onTouchstart", "onTouchend"])
          ]),
          vue.createElementVNode("image", {
            src: "/static/smart-chat/send.png",
            class: "send-btn",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.scrollTobottom && $options.scrollTobottom(...args))
          })
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  const PagesSmartChatSmartChat = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "E:/fuchuang/learn/demo1/pages/smart-chat/smart-chat.vue"]]);
  const _sfc_main$a = {
    data() {
      return {};
    },
    methods: {
      moveHandle() {
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-view" }, [
      vue.createElementVNode("textarea", { class: "input-text" }),
      vue.createElementVNode("div", { class: "tap-mic" }, [
        vue.createElementVNode("image", { src: "/static/recog/mic.png" })
      ]),
      vue.createElementVNode("div", { class: "divide" }),
      vue.createElementVNode("div", { class: "show-box" }),
      vue.createElementVNode("div", { class: "menu" }, [
        vue.createElementVNode("image", { src: "/static/recog/home.png" }),
        vue.createElementVNode("div", { class: "once-again" }, "再拍一张")
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-6c9e0889"], ["__file", "E:/fuchuang/learn/demo1/components/tab-chat/tab-chat.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        photoPath: "",
        heightRatio: 1,
        thumbnail: false,
        startData: {
          clientY: ""
        },
        moveY: 0,
        state: 0
      };
    },
    onLoad: function(option) {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("recieveFile", function(data) {
        formatAppLog("log", "at pages/photo-recog/photo-recog.vue:52", "recievedData = " + data.filepath);
        this.photoPath = "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/snapshot_1711522255791.jpg";
      });
    },
    methods: {
      back() {
        if (this.thumbnail) {
          this.thumbnail = false;
        } else {
          uni.navigateBack();
        }
      },
      showThumb() {
        this.thumbnail = true;
        this.moveY = 0;
        this.state = 0;
      },
      start(e) {
        this.startData.clientY = e.changedTouches[0].clientY;
      },
      end(e) {
        formatAppLog("log", "at pages/photo-recog/photo-recog.vue:93", "this.moveY = ", this.touch.clientY - this.startData.clientY);
        if (this.touch.clientY - this.startData.clientY > 300) {
          this.state = 1;
          this.moveY = 350;
          this.thumbnail = false;
        } else {
          this.state = 0;
          this.moveY = 0;
        }
      },
      move(event) {
        let touch = event.touches[0];
        this.touch = touch;
        let data = 0;
        if (touch.clientY > this.startData.clientY && this.state === 0) {
          data = touch.clientY - this.startData.clientY;
          if (data > 1e3) {
            data = 1e3;
          }
          this.moveY = data;
        }
        if (touch.clientY < this.startData.clientY && this.state === 1) {
          data = this.startData.clientY - touch.clientY;
          if (data > 1e3) {
            data = -1e3;
          }
          this.moveY = 350 - data;
        }
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_chat = resolveEasycom(vue.resolveDynamicComponent("tab-chat"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createElementVNode("image", {
        class: "back-icon",
        src: "/static/recog/back-icon.png",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.back && $options.back(...args))
      }),
      vue.createElementVNode("view", { class: "recog-view" }, [
        vue.createElementVNode(
          "image",
          {
            class: vue.normalizeClass([$data.thumbnail ? "preview-img-thumb" : "preview-img"]),
            src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/image.png"
          },
          null,
          2
          /* CLASS */
        ),
        vue.createElementVNode("view", { class: "menu" }, [
          vue.createElementVNode("navigator", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/back.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 返回 ")
          ]),
          vue.createElementVNode("view", {
            class: "row",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.showThumb && $options.showThumb(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/ok.png",
              class: "row-middle"
            })
          ]),
          vue.createElementVNode("view", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/rotate.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 旋转 ")
          ])
        ])
      ]),
      $data.thumbnail ? (vue.openBlock(), vue.createBlock(_component_tab_chat, {
        key: 0,
        class: "showMore-box",
        style: vue.normalizeStyle({
          transform: "translateY(" + $data.moveY + "px)"
        }),
        onTouchstart: $options.start,
        onTouchend: $options.end,
        onTouchmove: $options.move
      }, null, 8, ["style", "onTouchstart", "onTouchend", "onTouchmove"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesPhotoRecogPhotoRecog = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-3abb26b1"], ["__file", "E:/fuchuang/learn/demo1/pages/photo-recog/photo-recog.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        startData: {
          clientY: ""
        },
        moveY: 0,
        touch: {},
        state: 0
      };
    },
    methods: {
      start(e) {
        this.startData.clientY = e.changedTouches[0].clientY;
      },
      end(e) {
        formatAppLog("log", "at pages/test-page/test-page.vue:32", "this.moveY = ", this.touch.clientY - this.startData.clientY);
        if (this.touch.clientY - this.startData.clientY > 200) {
          this.state = 1;
          this.moveY = 350;
        } else {
          this.state = 0;
          this.moveY = 0;
        }
      },
      move(event) {
        let touch = event.touches[0];
        this.touch = touch;
        let data = 0;
        if (touch.clientY > this.startData.clientY && this.state === 0) {
          data = touch.clientY - this.startData.clientY;
          if (data > 1e3) {
            data = 1e3;
          }
          this.moveY = data;
        }
        if (touch.clientY < this.startData.clientY && this.state === 1) {
          data = this.startData.clientY - touch.clientY;
          if (data > 1e3) {
            data = -1e3;
          }
          this.moveY = 350 - data;
        }
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tab_chat = resolveEasycom(vue.resolveDynamicComponent("tab-chat"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createVNode(_component_tab_chat, {
        class: "showMore-box",
        style: vue.normalizeStyle({
          transform: "translateY(" + $data.moveY + "px)"
        }),
        onTouchstart: $options.start,
        onTouchend: $options.end,
        onTouchmove: $options.move
      }, null, 8, ["style", "onTouchstart", "onTouchend", "onTouchmove"])
    ]);
  }
  const PagesTestPageTestPage = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "E:/fuchuang/learn/demo1/pages/test-page/test-page.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    onLoad: function(option) {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("recieveFile", function(data) {
        formatAppLog("log", "at pages/assist-read/assist-read.vue:29", "recievedData = " + data.filepath);
        this.photoPath = "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/snapshot_1711522255791.jpg";
      });
    },
    methods: {
      back() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createElementVNode("view", { class: "recog-view" }, [
        vue.createElementVNode("image", {
          src: "/static/read/image.png",
          class: "preview-img"
        }),
        vue.createElementVNode("view", { class: "menu" }, [
          vue.createElementVNode("view", { class: "first-row" }, [
            vue.createElementVNode("image", {
              src: "/static/read/start.png",
              class: "start-play"
            }),
            vue.createElementVNode("view", { class: "mult-play" }, "倍速")
          ]),
          vue.createElementVNode("view", { class: "second-row" }, [
            vue.createElementVNode("image", { src: "/static/recog/home.png" }),
            vue.createElementVNode("div", { class: "once-again" }, "再拍一张")
          ])
        ])
      ])
    ]);
  }
  const PagesAssistReadAssistRead = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-64b52ef9"], ["__file", "E:/fuchuang/learn/demo1/pages/assist-read/assist-read.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        photoPath: ""
      };
    },
    onLoad: function(option) {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("recieveFile", function(data) {
        formatAppLog("log", "at pages/assist-read/photo-recog.vue:35", "recievedData = " + data.filepath);
        this.photoPath = "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/snapshot_1711522255791.jpg";
      });
    },
    methods: {
      showThumb() {
        uni.navigateTo({
          url: "/pages/assist-read/assist-read",
          success: function(res) {
            res.eventChannel.emit("recogFile", { filepath: this.photoPath });
          },
          fail: (e) => {
            formatAppLog("log", "at pages/assist-read/photo-recog.vue:46", e);
          }
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "root-view" }, [
      vue.createElementVNode("view", { class: "recog-view" }, [
        vue.createElementVNode("image", {
          class: "preview-img",
          src: "https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/image.png"
        }),
        vue.createElementVNode("view", { class: "menu" }, [
          vue.createElementVNode("navigator", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/back.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 返回 ")
          ]),
          vue.createElementVNode("view", {
            class: "row",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.showThumb && $options.showThumb(...args))
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/ok.png",
              class: "row-middle"
            })
          ]),
          vue.createElementVNode("view", {
            class: "row",
            url: "/pages/photo-recog/photo_nvue"
          }, [
            vue.createElementVNode("image", {
              src: "/static/recog/rotate.png",
              class: "row-side"
            }),
            vue.createElementVNode("text", { class: "row-text" }, " 旋转 ")
          ])
        ])
      ])
    ]);
  }
  const PagesAssistReadPhotoRecog = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-fb8e82d4"], ["__file", "E:/fuchuang/learn/demo1/pages/assist-read/photo-recog.vue"]]);
  const _sfc_main$5 = {
    methods: {
      clickUpload() {
        uni.chooseImage({
          success: (chooseImageRes) => {
            const tempFilePaths = chooseImageRes.tempFilePaths;
            uni.uploadFile({
              url: "https://www.example.com/upload",
              //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: "file",
              formData: {
                "user": "test"
              },
              success: (uploadFileRes) => {
                formatAppLog("log", "at pages/test_api/test-upload.vue:20", uploadFileRes.data);
              }
            });
          }
        });
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("button", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickUpload && $options.clickUpload(...args))
    }, "点击文件上传");
  }
  const PagesTest_apiTestUpload = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "E:/fuchuang/learn/demo1/pages/test_api/test-upload.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        gender: true
      };
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_home_foot = resolveEasycom(vue.resolveDynamicComponent("home-foot"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "personal" }, [
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "home-head" }, [
          vue.createElementVNode("view", { class: "head-left" }, [
            vue.createElementVNode("image", {
              class: "home-icon",
              src: "/static/personal/girl.png"
            }),
            vue.createElementVNode("view", { class: "head-info" }, [
              vue.createElementVNode("text", { class: "home-title" }, "张三"),
              $data.gender ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "info-text"
              }, [
                vue.createElementVNode("span", { style: { "color": "#1fa6ea" } }, "♂"),
                vue.createTextVNode(" 男 45岁")
              ])) : (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "info-text"
              }, [
                vue.createElementVNode("span", { style: { "color": "#F49ED9" } }, "♀"),
                vue.createTextVNode(" 女 45岁")
              ]))
            ])
          ]),
          vue.createElementVNode("view", { class: "edit-button" }, "编辑资料")
        ]),
        vue.createElementVNode("view", { class: "service" }, [
          vue.createElementVNode("view", { class: "content-title" }, "推荐服务"),
          vue.createElementVNode("view", { class: "service-container" }, [
            vue.createElementVNode("view", { class: "service-box" }, "历史视图"),
            vue.createElementVNode("view", { class: "service-box" }, "收藏地点"),
            vue.createElementVNode("view", { class: "service-box" }, "健康档案")
          ])
        ]),
        vue.createElementVNode("view", { class: "more-funcs" }, [
          vue.createElementVNode("view", { class: "content-title" }, "更多功能"),
          vue.createElementVNode("view", { class: "funcs-container" }, [
            vue.createElementVNode("view", { class: "service-box" }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/help.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "获取帮助"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ]),
            vue.createElementVNode("view", { class: "service-box" }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/about.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "关于明道"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ]),
            vue.createElementVNode("view", { class: "service-box" }, [
              vue.createElementVNode("image", {
                class: "item1",
                src: "/static/personal/setting.png"
              }),
              vue.createElementVNode("text", { class: "item2" }, "系统设置"),
              vue.createElementVNode("image", {
                class: "item3",
                src: "/static/personal/more1.png"
              })
            ])
          ])
        ])
      ]),
      vue.createVNode(_component_home_foot)
    ]);
  }
  const PagesPersonalPersonal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "E:/fuchuang/learn/demo1/pages/personal/personal.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesPersonalProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "E:/fuchuang/learn/demo1/pages/personal/profile/profile.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesPersonalSystemSystem = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "E:/fuchuang/learn/demo1/pages/personal/system/system.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesPersonalAccountAccount = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "E:/fuchuang/learn/demo1/pages/personal/account/account.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/test_api/test_api", PagesTest_apiTest_api);
  __definePage("pages/smart-travel/smart-travel", PagesSmartTravelSmartTravel);
  __definePage("pages/recTest/native_test", PagesRecTestNative_test);
  __definePage("pages/smart-chat/smart-chat", PagesSmartChatSmartChat);
  __definePage("pages/photo-recog/photo-recog", PagesPhotoRecogPhotoRecog);
  __definePage("pages/test-page/test-page", PagesTestPageTestPage);
  __definePage("pages/assist-read/assist-read", PagesAssistReadAssistRead);
  __definePage("pages/assist-read/photo-recog", PagesAssistReadPhotoRecog);
  __definePage("pages/test_api/test-upload", PagesTest_apiTestUpload);
  __definePage("pages/personal/personal", PagesPersonalPersonal);
  __definePage("pages/personal/profile/profile", PagesPersonalProfileProfile);
  __definePage("pages/personal/system/system", PagesPersonalSystemSystem);
  __definePage("pages/personal/account/account", PagesPersonalAccountAccount);
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
