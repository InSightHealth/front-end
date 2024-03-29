<template>
	<view class="chat-view">
		<textarea class="input-text"></textarea>
		<div class="tap-mic">
			<image src="/static/recog/mic.png"></image>
		</div>
		<div class="divide"></div>
		<div class="show-box"></div>
		<div class="menu">
			<image src="/static/recog/home.png"></image>
			<div class="once-again">再拍一张</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			moveHandle(){}
		}
	}
</script>

<style lang="scss" scoped>
.chat-view {
	position: fixed;
	z-index: 100;
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
