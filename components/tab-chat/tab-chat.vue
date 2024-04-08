<template>
	<view class="chat-view">
		<textarea class="input-text" @input="textInput" v-model="inputText"
		@focus="focus" :placeholder="placeholder" placeholder-style="font-size: 36rpx"></textarea>
		<div class="tap-mic" @tap="send" v-if="hasInput">
			确认发送
		</div>
		<div class="tap-mic" @touchstart="micStart" @touchend="micStop" v-else>
			<image src="/static/recog/mic.png"></image>
		</div>
		<div class="divide"></div>
		<div class="show-box"> {{ playText }} </div>
		<div class="tap-mic" @tap="play">
			点击播放
		</div>
		<!-- <div class="menu">
			<image src="/static/recog/home.png"></image>
			<navigator class="once-again" url="/pages/photo-recog/photo_nvue">再拍一张</navigator>
		</div> -->
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;			//不让它自动播放
	innerAudioContext.src = '';
	
	export default {
		data() {
			return {
				inputText: '',
				hasInput: false,
				playText: '',
				placeholder: '你可以点击这里输入, 也可以按住下方语音发送'
			};
		},
		methods: {
			moveHandle(){}, 
			micStart() {
				console.log('开始录音');
				this.placeholder = '识别中...';
				recorderManager.start();
			},
			micStop() {
				console.log('录音结束'); 
				this.placeholder = '你可以点击这里输入,也可以按住下方语音发送';
				recorderManager.stop();
				recorderManager.onStop((res) => {
					uni.uploadFile({
						url: "http://127.0.0.1:8000/speechtotext"
						,name: "mp3" 
						,filePath: res.tempFilePath
						,formData: { }
						,success: (res) => { 
							console.log("上传成功："+JSON.stringify(res));
							const response = JSON.parse(res.data);
							this.playText = "sb服创大赛！！我哭死";
							console.log(this.playText);
							if (res.statusCode == 200) {
								console.log(response.text);
							}
						}
						,fail: (err)=>{ console.error("上传录音失败："+JSON.stringify(err)); }
					});
				});
			},
			focus() {
				this.placeholder = '';
			},
			play() {
				console.log("播放");
				
				const encoded = encodeURI(this.playText);
				console.log(encoded);
				innerAudioContext.src = 'https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&ctp=1&amp&pdt=301&tex=' + encoded;
				console.log(innerAudioContext.src);
				innerAudioContext.play();
				console.log("play over!!!"); 
			},
			send() {
				console.log(this.inputText);
			},
			textInput() {
				console.log("input....");
				if (this.inputText == '') {
					this.hasInput = false;
					this.placeholder = '你可以点击这里输入,也可以按住下方语音发送';
				} else {
					this.hasInput = true;
					this.placeholder = '';
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.chat-view {
	position: fixed;
	z-index: 99;
	bottom: 0rpx;
	height: 68%;
	width: 750rpx;
	background-color: white; 
	border-radius: 70rpx 70rpx 0 0;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	
	.input-text {
		margin-top: 73rpx;
		height: 284rpx;
		width: 600rpx;
		background-color: rgba(219, 244, 228, 1);
		border-radius: 38rpx;
		box-sizing: border-box;
		padding: 40rpx;
	}
	.tap-mic{
		margin-top: 38rpx;
		width: 494rpx; 
		height: 91rpx; 
		background-color: rgba(8, 223, 134, 1); 
		border-radius: 19rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		
		color: white;
		font-size: 36rpx;
		
		image {
			height: 74rpx;
			width: 74rpx;
		}
	}
	.divide {
		margin-top: 36rpx;
		width: 656rpx; 
		height: 0.5rpx; 
		border: 1rpx solid rgba(0, 0, 0, 0.07);
	}
	.show-box {
		margin-top: 45rpx;
		width: 600rpx; 
		height: 284rpx; 
		background-color: rgba(219, 244, 228, 1); 
		border-radius: 38rpx;
		box-sizing: border-box;
		padding: 40rpx;
		font-size: 36rpx;
	}
	.menu {
		margin-top: 45rpx;
		width: 600rpx;
		height: 77rpx;
		
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		image {
			width: 77rpx;
			height: 77rpx;
		}
		
		.once-again {
			height: 75rpx;
			width: 490rpx;
			background-color: rgba(8, 223, 134, 1); 
			border-radius: 19rpx;
			
			display: flex;
			align-items: center;
			justify-content: center;
			
			color: white;
			font-size: 30rpx;
		}
	}
}
</style>
