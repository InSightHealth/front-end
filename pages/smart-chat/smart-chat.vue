<template>
	<view class="wholeview">
		<view class="topbar">
			<view class="topbarleft">
				<text class="topbarlefttitle"> 健康助手 </text>
				<view class="topbarlefticon">
					<text class="topbarlefticontext">Λ</text>
				</view>
			</view>
			<image class="topbarright" src="/static/smart-chat/manage.png">
			</image>
		</view>
		<scroll-view  :style="{height: `${windowHeight-300}rpx`}"
		id="scrollview"
		scroll-y="true" 
		:scroll-top="scrollTop"
		class="scroll-view"
		>
			<view></view>
			<view class="middlebox"></view>
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
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.wholeview {
	display: flex;
	flex-direction: column;
	align-items: center;
	.topbar {
		width: 750rpx; 
		height: 300rpx;
		background-image: linear-gradient(180deg, rgba(172, 236, 156, 1) 2%, rgba(172, 236, 156, 0) 83%);
		display: flex;
		flex-direction: row;
		align-items: center;
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
		.middlebox {
			position: relative;
			translate: 0rpx -100rpx;
			left: 59rpx;
			width: 633rpx;
			height: 543rpx;
			background-color: #DBF4E4;
		}
	}
}
</style>
