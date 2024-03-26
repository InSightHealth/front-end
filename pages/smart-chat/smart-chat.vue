<template>
	<view class="wholeview">
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
		<scroll-view :style="{height: `${windowHeight-300}rpx`}"
		id="scrollview"
		scroll-y="true" 
		:scroll-top="scrollTop"
		class="scroll-view"
		>
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
			<view>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				aaaaaaaaa<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
				bbbbbbbbb<br>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showbox1: true,
				showbox2: false
			}
		},
		methods: {
			toggle1() {
				this.showbox1 = !this.showbox1;
				this.showbox2 = false;
			},
			toggle2() {
				this.showbox1 = false;
				this.showbox2 = !this.showbox2;
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
	.topbar {
		width: 750rpx; 
		height: 300rpx;
		background-image: linear-gradient(180deg, rgba(172, 236, 156, 1) 2%, rgba(172, 236, 156, 0) 83%);
		display: flex;
		flex-direction: row;
		align-items: center;
		position: fixed;
		z-index: 99;
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
				background-color: rgba(255, 254.75, 254.75, 1); 
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
		top: 145rpx;
		z-index: 0;
		.polygon1 {
			position: absolute;
			top: 0rpx;
			left: 270rpx;
			height: 56rpx;
			width: 56rpx;
			z-index: 1;
		}
		.middlebox1 {
			position: relative;
			margin-top: 25rpx;
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
			top: 0rpx;
			left: 621rpx;
			height: 56rpx;
			width: 56rpx;
			z-index: 1;
		}
		.middlebox2 {
			position: relative;
			margin-top: 25rpx;
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
	}
}
</style>
