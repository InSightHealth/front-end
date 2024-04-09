<template>
	<view>
		<footer class="footer-container">
		    <div class = "footer-parter-left">
		        <!-- Replace with your actual home icon SVG or image -->
		        <img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/home-icon.png" class="icon-footer" id="home-icon" @tap="navigateHome">
				<text class = "footer-words" style="color: #08DF86;"> 首页 </text>
		    </div>
		    <div class = "footer-parter-center">
		        <img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/segment.png" 
					class="icon-footer-center"
					@touchstart="assist" 
					@touchend="close">
				<text class = "footer-words"> 智能助手 </text>
		        <!-- <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> -->
		    </div>
		    <div class = "footer-parter-right">
		        <!-- Replace with your actual user profile icon SVG or image -->
				<img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/user.png" class="icon-footer" id="user-icon" @tap="navigatePerson">
				<text class = "footer-words"> 个人 </text>
		    </div>
			<uni-popup ref="popup" type="bottom" class="popup">
				<view class="popup"> 
					<text class="holderText" v-if="holding"> {{ holderText }} </text>
					<text class="responseText" v-if="recoging"> {{ recogText }} </text>
					<image class="popup-gif" src="/static/homepage/sound.gif"></image>
				 </view>
			</uni-popup>
		</footer>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;			//不让它自动播放
	innerAudioContext.src = '';
	
	export default {
		name:"homeFoot",
		data() {
			return {
				chatMsg: '',
				holding: true,
				recoging: false,
				holderText: '正在听，请说出你的问题...',
				recogText: '',
			};
		}, 
		methods : {
			TestPage() {
				const url = "/pages/test/test";
				uni.navigateTo({url});
			},
			navigateHome() {
				let routes = getCurrentPages();
				let curRoute = routes[routes.length - 1].route;
				const url = "/pages/index/index";
				console.log(curRoute, url);
				
				if (url != curRoute) {
					uni.navigateTo({url});
				}
			},
			navigatePerson() {
				let routes = getCurrentPages();
				let curRoute = routes[routes.length - 1].route;
				const url = "/pages/personal/personal"
				console.log(curRoute, url);
				
				if (url != curRoute) {
					uni.navigateTo({url});
				}
			},
			assist() {
				const pages = getCurrentPages()
				//    getCurrentPages() 方法用于获取当前页面栈的实例，返回一个由页面实例组成的数组，
				//    数组的顺序是由打开的页面依次排序的，也就是说你每跳转一个页面，这个数组就会将那个页面
				const page = pages[pages.length-1];
				console.log(page);
				
				this.recoging = false;
				this.holding = true;
				this.holderText = '正在听，请说出你的问题...';
				
				this.$refs['popup'].open();
				console.log('开始录音');
				recorderManager.start();
			},
			stopMic() {
				var _this = this;
				console.log('录音结束');
				this.holderText = '正在识别...';
				recorderManager.stop();
				recorderManager.onStop(function (res) {
					console.log(JSON.stringify(res));
					uni.uploadFile({
						url: "http://8.137.38.90:8000/speechtotext"
						,filePath: res.tempFilePath
						,name: "mp3"
						,formData: { } 
						,success: (res) => { 
							console.log("上传成功："+JSON.stringify(res)); 
							const response = JSON.parse(res.data);
							_this.chatMsg = response.text;
							_this.close();
						}
						,fail: (err)=>{ console.error("上传录音失败："+err); _this.close();}
					});
				});
			},
			close() {
				const pages = getCurrentPages()
				//    getCurrentPages() 方法用于获取当前页面栈的实例，返回一个由页面实例组成的数组，
				//    数组的顺序是由打开的页面依次排序的，也就是说你每跳转一个页面，这个数组就会将那个页面
				const page = pages[pages.length-1];
				console.log(page);
				var index = -1;
				const links = [
					'/pages/smart-travel/smart-travel',
					'/pages/photo-recog/photo_nvue',
					'/pages/smart-chat/smart-chat',
					'/pages/assist-read/photo_nvue'
				]
				
				this.recoging = true;
				this.holding = false;
				if (this.chatMsg.includes('出行')) {
					this.recogText = '即将为你打开智能出行...';
					index = 0;
				} else if (this.chatMsg.includes('识图') || this.chatMsg.includes('拍照')) {
					this.recogText = '即将为你打开拍照识图...';
					index = 1;
				} else if (this.chatMsg.includes('助手') || this.chatMsg.includes('健康')) {
					this.recogText = '即将为你打开智能健康助手...';
					index = 2;
				} else if (this.chatMsg.includes('阅读')) {
					this.recogText = '即将为你打开辅助阅读...';
					index = 3;
				} else{
					this.recogText = '抱歉，我没听清...';
					setTimeout(()=> {
						console.log('Timeout Here!');
						this.$refs['popup'].close();
					}, 5000);
					const text = this.recogText;
					
					const encoded = encodeURI(text);
					console.log(encoded);
					innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
						&spd=6&ctp=1&amp&pdt=301&tex=` + encoded;
					console.log(innerAudioContext.src);
					innerAudioContext.play();
					console.log("play over!!!"); 
				}
				
				setTimeout(()=> {
					this.$refs['popup'].close();
					
					uni.navigateTo({
						url: links[index]
					})
				}, 3000);
				const text = this.recogText;
				
				const encoded = encodeURI(text);
				console.log(encoded);
				innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
					&spd=6&ctp=1&amp&pdt=301&tex=` + encoded;
				console.log(innerAudioContext.src);
				innerAudioContext.play();
				console.log("play over!!!"); 
			}
		}
	}
</script>

<style lang="scss">
.footer-container {
	position: fixed;
	bottom: 0rpx;
	
    background: url('/static/homepage/bottom.png') no-repeat center center;
    background-size: 100% 100%;
    height: 260rpx;
    width: 750rpx;
	
	.footer-parter-left{
		position: absolute;
		bottom: 15rpx;
		left: 80rpx;
		height: 130rpx;
		width: 80rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		#home-icon {
			height: 77rpx;
			width: 77rpx;
		}
			
		.footer-words {
			font-size: 25rpx;
		}
	}
		
	.footer-parter-center {
		position: absolute;
		bottom: 15rpx;
		left: 225rpx;
		height: 195rpx;
		width: 300rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.icon-footer-center {
			width: 250rpx;
			height: 154rpx;
		}
		.footer-words {
			font-size: 30rpx;
		}
	}
	
	.footer-parter-right{
		position: absolute;
		bottom: 15rpx;
		right: 80rpx;
		height: 130rpx;
		width: 80rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		
		#user-icon {
			height: 77rpx;
			width: 67rpx;
		}
			
		.footer-words {
			font-size: 25rpx;
		}
	}
	.popup {
		z-index: 100;
		position: fixed;
		width: 570rpx; 
		left: 90rpx;
		bottom: 363rpx;
		height: 358rpx; 
		background-color: white; 
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
		border-radius: 38rpx;
		
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		.holderText {
			font-size: 40rpx;
			color: #686868;
		}
		
		.responseText {
			font-size: 40rpx;
			color: black;
		}
		
		.popup-gif {
			height: 175rpx;
			width: 350rpx;
		}
	}
}
</style>