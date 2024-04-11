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
		},
		methods: {
			startRecord() {
				console.log('开始录音');
	
				recorderManager.start();
			},
			endRecord() {
				var _this = this;
				console.log('录音结束');
				recorderManager.stop();
				recorderManager.onStop(function (res) {
					_this.voicePath = res.tempFilePath;
					uni.showToast({
						title: _this.voicePath
					})
				});
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

