<template>
	<view class="wholeview">
		<view class="topview">
		</view>
		<view class="topbar">
			<view class="topbarleft">
				<text class="topbarlefttitle"> 健康助手 </text>
				<view class="topbarlefticon" @tap="toggle1">
					<text class="topbarlefticontext">Λ</text>
				</view>
			</view>
			<image class="topbarright" src="/static/smart-chat/manage.png" @tap="toggle2">
			</image>
		</view>
		<scroll-view :style="{height: `${windowHeight}rpx`}"
		id="scrollview"
		scroll-y="true" 
		:scroll-top="scrollTop"
		class="scroll-view"
		>
			<view class="placebox"></view>
			<view class="placebox-bottom"></view>
			<image class="polygon1" src="/static/smart-chat/polygon.png" v-if="showbox1"></image>
			<image class="polygon2" src="/static/smart-chat/polygon.png" v-if="showbox2"></image>
			<view class="middlebox1" v-if="showbox1">
				<view class="row11"> Hi，你好，我是你的智能助手 </view>
				<view class="row12">可能偶尔产生不正确的信息，可能偶尔产生有害的指令，内容仅供参考。</view>
				<view class="row13"></view>
				<view class="row14"></view>
			</view>
			<view class="middlebox2" v-if="showbox2">
				<view class="col21">
					<image class="row211" src="/static/smart-chat/archive.png"></image>
					<view class="row212"> 上传医疗报告 </view>
				</view>
				<view class="col22">
					<image class="row221" src="/static/smart-chat/info.png"></image>
					<view class="row222"> 完善个人信息 </view>
				</view>
			</view>
			<view :class="[showbox?'content-box':'content']">
				<bot-chat :msgList="msglist"></bot-chat>
			</view>
			<view class="show-listen" v-if="show_listen">
				<text class="listen-title">正在听，请说出您的问题</text>
				<image src="/static/smart-chat/wave.png"></image>
			</view>
			<view class="listen-place" v-if="show_listen"></view>
		</scroll-view>
		<view class="chat-bottom">
			<view class="send-msg" v-if="type_mode">
				<image src="/static/smart-chat/chat-mic.png" class="send-btn" @tap="togglemode">
				</image>
				<view class="uni-textarea">
					<textarea 
						v-model="chatMsg"
						:placeholder="placeholder"
						placeholder-style="display:flex; align-items:center; justify-content:center;"
						@input="keyboardInput"
						maxlength="300"
						:show-confirm-bar="false"
						class="textarea"></textarea>
				</view>
				<image src="/static/smart-chat/send.png" class="send-btn" @tap="typeSend">
				</image>
			</view>
			
			<view class="send-msg" v-if="speak_mode">
				<image src="/static/smart-chat/keyboard.png" class="send-btn" @tap="togglemode">
				</image>
				<view class="uni-textarea" >
					<press-mic @touchstart="touchstart" @touchend="touchend"></press-mic>
				</view>
				<image src="/static/smart-chat/send.png" class="send-btn" @tap="scrollTobottom">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	
	export default {
		data() {
			return {
				keyboardHeight:100,
				showbox1: true,
				showbox2: false,
				showbox: true,
				chatMsg: '',
				speak_mode: true,
				type_mode: false,
				show_listen: false,
				msgModified: false,
				placeholder: '请输入你想问的...',
				msglist: [
					{
						botContent: "hello，请问我有什么可以帮助你的吗？",
						recordId: 0,
						titleId: 0,
						userContent: "",
						userId: 0
					}
				]
			}
		},
		updated() {
			if (this.chatMsg != '') {
				this.placeholder = '';
			} else {
				this.placeholder = '请输入你想问的...'
			}
		},
		onLoad(){
		},
		onUnload(){
			uni.offKeyboardHeightChange()//如果不传入监听的对象，则移除所有监听函数
		},
		methods: {
			keyboardInput() {
				if (this.chatMsg != '') {
					this.placeholder = '';
				} else {
					this.placeholder = '请输入你想问的...'
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
			pxTorpx(px){
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = ( 750 / deviceWidth ) * Number(px)
				return Math.floor(rpx)
			},
			scrollTotop() {
				uni.createSelectorQuery().select(".scroll-view").boundingClientRect((res)=>{
				    console.log(res)
				    const scrollH = res.top;
					console.log("scroll view selected!!");
					uni.pageScrollTo({
				    	duration: 100,// 过渡时间
				    	scrollTop: scrollH,// 滚动的实际距离
					})
				}).exec();
			},
			scrollTobottom() {
				uni.createSelectorQuery().select(`.scroll-view`).boundingClientRect(res => {
					console.log(res)
					const scrollH = res.bottom;
					console.log("scroll view selected!!");
					uni.pageScrollTo({
						duration: 100,// 过渡时间
						scrollTop: scrollH,// 滚动的实际距离
					})
				}).exec();
			},
			keyboardInput() {
				this.placeholder = ''; 
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
			},
			typeSend() {
				this.showbox1 = this.showbox2 = false;
				this.showbox = false;
				this.msgModified = true;
				
				this.msglist.push({
					botContent: "",
					recordId: 0,
					titleId: 0,
					userContent: this.chatMsg,
					userId: 0
				})
				
				this.chatMsg = '';
				this.scrollTobottom();
			}
		}
	}
</script>

<style lang="scss">
.wholeview {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #F1F1F1;
	height: 100%;
	.topview {
		height: 60rpx; 
		background-color: rgba(172, 236, 156, 1); 
		width: 750rpx;
		position: fixed;
		top: 0rpx;
		z-index: 100;
	}
	.topbar {
		width: 750rpx; 
		height: 300rpx;
		background-image: linear-gradient(180deg, rgba(172, 236, 156, 1) 2%, rgba(172, 236, 156, 0) 83%);
		display: flex;
		flex-direction: row;
		align-items: center;
		position: fixed;
		z-index: 99;
		top: 50rpx;
		
		.topbarleft {
			position: absolute;
			left: 30rpx;
			top: 0rpx;
			width: 300rpx;
			height: 200rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			.topbarlefttitle {
				font-size: 50rpx;
				color: #08DF86;
				white-space: nowrap;
			}
			.topbarlefticon {
				width: 58rpx; 
				height: 58rpx; 
				background-color: white; 
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: rgba(0, 0, 0, 0.25);
				font-size: 40rpx;
				font-weight: 500;
				.topbarlefticontext {
					transform: scale(1.3, 0.5)
				}
			}
		}
		.topbarright {
			width: 70rpx;
			height: 70rpx;
			position: absolute;
			right: 50rpx;
			top: 65rpx;
		}
	}
	.scroll-view {
		display: flex;
		flex-direction: column;
		position: absolute;
		// top: 145rpx;
		z-index: 0;
		background-color: #F1F1F1;
		.placebox {
			position: fixed;
			background-color: #F1F1F1;
			top: 0rpx;
			width: 750rpx;
			height: 190rpx;
			z-index: 3;
		}
		.placebox-bottom{
			position: fixed;
			background-color: #F1F1F1;
			bottom: 0rpx;
			width: 750rpx;
			height: 195rpx;
			z-index: 3;
		}
		.polygon1 {
			position: absolute;
			// top: 0rpx;
			top: 195rpx;
			left: 270rpx;
			height: 56rpx;
			width: 56rpx;
			z-index: 1;
		}
		.middlebox1 {
			position: relative;
			// margin-top: 25rpx;
			margin-top: 220rpx;
			margin-left: 58rpx;
			width: 633rpx;
			height: 543rpx;
			background-color: #DBF4E4;
			border: 2rpx solid rgba(255, 254.75, 254.75, 1);
			border-radius: 40rpx;
			z-index: 2;
			
			display: flex;
			flex-direction: column;
			align-items: center;
			
			.row11 {
				margin-top: 20rpx;
				width: 586rpx; 
				height: 92rpx; 
				font-size: 38rpx; 
				line-height: 100%;
				font-weight: 600;
				color: black;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			
			.row12 {
				margin-top: 5rpx;
				width: 586rpx;
				font-size: 30rpx; 
				font-weight: 400; 
				line-height: 150%; 
				color: #9aaba0;
			}
			
			.row13 {
				margin-top: 50rpx;
				width: 555rpx; 
				height: 79rpx;
				background-color: white; 
				border-radius: 19rpx;
			}
			
			.row14 {
				margin-top: 30rpx;
				width: 555rpx;
				height: 79rpx;
				background-color: white;
				border-radius: 19rpx;
			}
		}
		.polygon2 {
			position: absolute;
			top: 195rpx;
			left: 621rpx;
			height: 56rpx;
			width: 56rpx;
			z-index: 1;
		}
		.middlebox2 {
			position: relative;
			// margin-top: 25rpx;
			margin-top: 220rpx;
			margin-left: 58rpx;
			width: 633rpx;
			height: 543rpx;
			background-color: #DBF4E4;
			border: 2rpx solid rgba(255, 254.75, 254.75, 1);
			z-index: 2;
			border-radius: 40rpx;
			
			display: flex;
			flex-direction: row;
			.col21 {
				margin-top: 60rpx;
				margin-left: 40rpx;
				height: 200rpx;
				width: 200rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				
				.row211 {
					height: 123rpx;
					width: 123rpx;
				}
				
				.row212 {
					font-size: 30rpx;
				}
			}
			
			.col22 {
				height: 200rpx;
				width: 200rpx;
				margin-top: 60rpx;
				margin-left: 40rpx;
				display: flex;
				align-items: center;
				flex-direction: column;
				
				.row221 {
					height: 123rpx;
					width: 123rpx;
				}
				
				.row222 {
					font-size: 30rpx;
				}
			}
		}
		.content {
			padding-top: 250rpx;
			padding-bottom: 200rpx;
			background-color: #F1F1F1;
		}
		
		.content-box {
			padding-top: 50rpx;
			padding-bottom: 200rpx;
		}
		
		.listen-place {
			width: 750rpx; 
			height: 358rpx; 
			background-color: #F1F1F1;
		}
		.show-listen {
			position: fixed;
			left: 86rpx;
			bottom: 230rpx;
			width: 577rpx; 
			height: 358rpx; 
			background-color: white; 
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
			border-radius: 38rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
			.listen-title {
				font-size: 46rpx; 
				line-height: 100%; 
				text-align: center; 
				color: rgba(0, 0, 0, 0.59);
			}
			
			image {
				width: 298rpx;
				height: 149rpx;
			}
		}
	}
	.chat-bottom {
		position: fixed;
		bottom: 0rpx;
		width: 750rpx;
		height: 190rpx;
		background-color: white; 
		border-radius: 50rpx 50rpx 0 0;
		z-index: 99;

		.send-msg {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 750rpx;
			min-height: 177rpx;
			position: fixed;
			bottom: 0;
			padding-bottom: 15rpx;
		}

		.uni-textarea {
                
			.textarea {
				box-sizing: border-box;
				width: 500rpx; 
				height: 98rpx;
				border-radius: 48rpx; 
				border: 2rpx solid black;
				background: #FFFFFF;
				font-size: 42rpx;
				font-family: PingFang SC;
				color: #333333;
				line-height: 100%;
				padding: 26rpx 22rpx;
				
				display: table-cell;
				vertical-align: middle;
			}
		}
            
		.send-btn {
			width: 69rpx;
			height: 69rpx;
		}
	}
}
</style>
