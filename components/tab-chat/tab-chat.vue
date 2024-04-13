<template>
	<view class="chat-view">
		<textarea class="input-text" @input="textInput" v-model="inputText"
		@focus="focus" @blur="blur" :placeholder="placeholder" placeholder-style="font-size: 36rpx"></textarea>
		<div class="clear" @tap="clearText" v-if="hasInput">清除内容</div>
		<div class="tap-mic" @tap="send" v-if="hasInput">
			确认发送
		</div>
		<div class="tap-mic" @touchstart="micStart" @touchend="micStop" v-else>
			<image src="/static/recog/mic.png"></image>
		</div>
		<div class="divide"></div>
		<div class="show-box" :style="{color:`${playColor}`}"> {{ playText }} </div>
		<div class="clear" @tap="clearPlay" v-if="hasPlay">清除内容</div>
		<div class="tap-mic" @tap="play">
			点击播放
		</div>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;	
	innerAudioContext.src = '';
	
	export default {
		props: {
		    photoUrl: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				inputText: '',
				hasInput: false,
				playText: '我很高兴为您解答！你可以在上面手动或语音输入',
				placeholder: '你可以点击这里输入, 也可以按住下方语音发送',
				playColor: '#888888',
				hasPlay: false
			};
		},
		methods: {
			micStart() {
				console.log('开始录音');
				console.log(this.inputText);
				this.hasPlay = false;
				this.placeholder = '我正在听...';
				this.playText = '我很高兴为您解答！你可以在上面手动或语音输入';
				this.playColor = '#888888';
				recorderManager.start();
			},
			micStop() {
				const baseUrl = getApp().globalData.baseUrl;
				console.log('录音结束'); 
				this.placeholder = '识别中...';
				recorderManager.stop();
				var _this = this;
				recorderManager.onStop(function (res) {
					console.log(res.tempFilePath);
					uni.uploadFile({
						url: baseUrl + "/speechtotext"
						,name: "mp3" 
						,filePath: res.tempFilePath
						,formData: { }
						,success: (res) => { 
							console.log("上传成功："+JSON.stringify(res));
							
							if (res.statusCode == 200) {
								const response = JSON.parse(res.data);
								console.log(response.text);
								_this.inputText = response.text;
								_this.placeholder = '';
								_this.hasInput = true;
								_this.sendMsg();
							} else {
								_this.hasPlay = true;
								_this.playText = '发送失败';
								_this.playColor = 'red';
							}
						}
						,fail: (err)=>{ console.error("上传录音失败："+JSON.stringify(err)); }
					});
				});
			},
			focus() {
				this.placeholder = '';
			},
			blur() {
				this.placeholder = '';
				if (this.inputText == '') {
					this.placeholder = '你可以点击这里输入, 也可以按住下方语音发送';
				}
			},
			clearText() {
				this.hasInput = false;
				this.inputText = '';
				this.placeholder = '你可以点击这里输入, 也可以按住下方语音发送';
			},
			clearPlay() {
				this.hasPlay = false;
				this.playText = '我很高兴为您解答！你可以在上面手动或语音输入';
				this.playColor = '#888888';
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
				this.sendMsg();
			},
			sendMsg() {
				console.log(this.inputText, this.photoUrl);
				const baseUrl = getApp().globalData.baseUrl;
				this.playText = '发送中...';
				this.playColor = '#888888'
				uni.request({
					url: baseUrl + '/chatbot',
					method: 'POST',
					data: {
						"prompt": this.inputText,
						"image": this.photoUrl
					},
					success: (res) => {
						console.log(res);
						this.hasPlay = true;
						
						try {
							console.log(res.data);
							// const response = JSON.parse(res.data);
							console.log(res.data.response);
							this.playText = res.data.response;
							this.playColor = 'black';
						} catch(e) {
							this.playText = '发送失败！！';
							this.playColor = 'red';
						}
					},
					fail: (err) => {
						console.log(err);
						this.playText = '发送失败！！';
						this.playColor = 'red';
					}
				})
			},
			textInput() {
				console.log("input....");
				if (this.inputText == '') {
					this.hasInput = false;
					this.placeholder = '你可以在上方输入,也可以按住语音发送';
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
	
	.clear{
		position: relative;
		top: -40rpx;
		right: -220rpx;
		color: grey;
		font-size: 25rpx;
		background-color: rgba(219, 244, 228, 1);
		height: 0rpx;
		overflow: visible;
	}
	
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
}
</style>
