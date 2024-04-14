<template>
	<image src="https://img-insight.oss-cn-chengdu.aliyuncs.com/micphone/mic1.png" class="mic"></image>
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
				let tmpfPath = '';
				console.log('录音结束');
				recorderManager.stop();
				recorderManager.onStop(function (res) {
					this.voicePath = res.tempFilePath;
				});
				console.log("tmpfPath = " + this.voicePath);
				return tmpfPath;
			}
		}
	}

</script>


<style>
	.mic {
		width: 130rpx; /* 定义按钮的宽度 */
		height: 130rpx; /* 定义按钮的高度 */
	}
</style>

