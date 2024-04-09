<template>
	<view class="tab-view">
		<scroll-view class="show-box" style="" scroll-y="true"> {{ recogText }} </scroll-view>
		<view class="menu">
			<view class="first-row">
				<image src="/static/read/start.png" class="start-play" @tap="play"></image>
				<view class="mult-play" @tap="toggle"> {{ playHint }} </view>
			</view>
			<view class="second-row">
				<image src="/static/recog/home.png" @tap="goHome"></image>
				<navigator class="once-again" url="/pages/assist-read/photo_nvue">再拍一张</navigator>
			</view>
		</view>
	</view>
</template>

<script>
const innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = false;			//不让它自动播放
innerAudioContext.src = '';

export default {
	props: {
	    recogText: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			speed: 5,
			playHint: '正常'
		}
	},
	methods: {
		goHome() {
			uni.navigateTo({
				url: '/pages/index/index'
			})
		},
		play() {
			console.log("播放" + this.recogText);
			
			const encoded = encodeURI(this.recogText);
			console.log(encoded);
			innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
				&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
			console.log(innerAudioContext.src);
			innerAudioContext.play();
			console.log("play over!!!"); 
		},
		toggle() {
			switch(this.speed) {
				case 3: 
					this.speed = 5;
					this.playHint = '正常';
					break;
				case 5:
					this.speed = 8;
					this.playHint = '倍速';
					break;
				case 8:
					this.speed = 3;
					this.playHint = '慢速';
					break;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.tab-view {
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
	justify-content: center;
	
	.show-box {
		width: 628rpx; 
		height: 640rpx; 
		background-color: rgba(219, 244, 228, 1); 
		border-radius: 38rpx;
		box-sizing: border-box;
		padding: 40rpx;
		white-space: pre-line;
		font-size: 36rpx;
	}
	
	.menu {
		width: 750rpx;
		margin-top: 50rpx;
		// background-color: #F1f1f1;
		// border-top: 2rpx solid grey;
		
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		
		.first-row {
			display: flex;
			align-items: center;
			
			width: 750rpx;
			height: 138rpx;
			
			.start-play {
				margin-left: 250rpx;
				width: 138rpx;
				height: 138rpx;
			}
			
			.mult-play {
				width: 138rpx; 
				height: 65rpx; 
				border-radius: 19rpx; 
				border: 2rpx solid rgba(148, 200, 108, 1);
				background-color: rgba(148, 200, 108, 1);
				margin-left: 44rpx;
				color: white;
				
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
		.second-row {
			margin-top: 45rpx;
			width: 750rpx;
			height: 77rpx;
			
			display: flex;
			align-items: center;
			justify-content: center;
			
			image {
				width: 90rpx;
				height: 90rpx;
			}
			
			.once-again {
				margin-left: 30rpx;
				height: 90rpx;
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
}
</style>
