<template>
	<image @touchstart="startRecord" @touchend="endRecord" src="https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png" class="mic"></image>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	
	innerAudioContext.autoplay = true;
	
	export default {
		data() {
			return {
				text: 'uni-app',
				voicePath: ''
			}
		},
		methods: {
			startRecord() {
				console.log('开始录音');
				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
				recorderManager.onStop(function (res) {
					console.log(JSON.stringify(res));
					uni.uploadFile({
						url: "http://127.0.0.1:8000/speechtotext"
						,filePath: res.tempFilePath
						,name: "mp3"
						,formData: { }
						,success: (res) => { 
							console.log("上传成功："+JSON.stringify(res)); 
						}
						,fail: (err)=>{ console.error("上传录音失败："+err); }
					});
				});
			}
		}
	}

</script>


<style>
	.mic {
		width: 100rpx; /* 定义按钮的宽度 */
		height: 100rpx; /* 定义按钮的高度 */
	}
</style>

