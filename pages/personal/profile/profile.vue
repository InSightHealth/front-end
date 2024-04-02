<template>
	<view class="profile">
		<view class="item">
			<view class="item-left">昵称</view>
			<view class="item-right">
				<text class="text-right">张三</text>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">性别</view>
			<view class="item-right">
				<text class="text-right">女</text>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">生日</view>
			<view class="item-right">
				<view class="text-right">1979-07-01</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">所在城市</view>
			<view class="item-right">
				<view class="text-right">未设置</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">身高</view>
			<view class="item-right">
				<view class="text-right">160cm</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">体重</view>
			<view class="item-right">
				<view class="text-right">50kg</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view> 
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

<style lang="scss" scoped>
.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	
	.item-high {
		height: 173rpx;
		width: 750rpx;
	}
	
	.item {
		height: 100rpx;
		width: 750rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 29rpx;
		
		.item-left {
			margin-left: 33rpx;
			font-size: 42rpx;
		}
		
		.item-right {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			margin-right: 33rpx;
			
			.icon-right {
				margin-right: 33rpx;
				width: 19rpx;
				height: 33rpx;
				margin-bottom: 5rpx;
			}
			
			.text-right {
				margin-right: 43rpx;
				font-size: 35rpx;
				color: rgba(0, 0, 0, 0.46);
			}
		}
	}
	.line {
		height: 1px;
		width: 698rpx;
		background-color: rgba(0, 0, 0, 0.08);
	}
}
</style>
