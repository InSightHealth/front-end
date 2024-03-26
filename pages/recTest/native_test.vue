<template>
	<view>
		<button @tap="startRecord">开始录音</button>
		<button @tap="endRecord">停止录音</button>
		<button @tap="playVoice">播放录音</button>
	</view>
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
		onLoad() {
			recorderManager.onStop(function (res) {
				this.voicePath = res.tempFilePath;
				console.log(JSON.stringify(res));
				uni.uploadFile({
					url: "http://127.0.0.1:8000/speechtotext",
					filePath: this.voicePath,
					name: "mp3",
					formData: { },
					header: {
					    'content-type': 'multipart/form-data' 
					},
					success: (res) => { 
						console.log("上传成功："+JSON.stringify(res));
						if (res.statusCode != 200) {
							uni.showToast({
								icon: 'none',
								title: res.data,
								duration: 2000
							})
						}
					},
					fail: (err)=>{ 
						console.error("上传录音失败："+ err.errMsg ); 
						uni.showToast({
							icon: 'none',
							title: err.errMsg,
							duration: 2000
						})
					}
				});
			});
		},
		methods: {
			startRecord() {
				console.log('开始录音');
	
				recorderManager.start();
			},
			endRecord() {
				console.log('录音结束');
				recorderManager.stop();
			},
			playVoice() {
				console.log('播放录音');
	
				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
			}
		}
	}

</script>


<style>
</style>

