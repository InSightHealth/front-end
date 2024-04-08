<template>
	<view class="tab-view">
		<view class="show-box" style=""> {{ recogText }} </view>
		<view class="menu">
			<view class="first-row">
				<image src="/static/read/start.png" class="start-play" @tap="play"></image>
				<view class="mult-play">倍速</view>
			</view>
			<view class="second-row">
				<image src="/static/recog/home.png"></image>
				<div class="once-again">再拍一张</div>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
	    photoUrl: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			recogText: ''
		}
	},
	onLoad() {
		uni.request({
			url: 'http://127.0.0.1:8000/ocr',
			method: 'POST',
			data: {
				"image": photoUrl
			},
			success: (res) => {
				console.log(res);
			}
		})
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
				margin-left: 300rpx;
				width: 138rpx;
				height: 138rpx;
			}
			
			.mult-play {
				width: 138rpx; 
				height: 65rpx; 
				background-color: white; 
				border-radius: 19rpx; 
				border: 2rpx solid rgba(148, 200, 108, 1);
				margin-left: 44rpx;
				
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		
		.second-row {
			margin-top: 45rpx;
			width: 600rpx;
			height: 77rpx;
			margin-right: 100rpx;
			
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			image {
				width: 90rpx;
				height: 90rpx;
			}
			
			.once-again {
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
