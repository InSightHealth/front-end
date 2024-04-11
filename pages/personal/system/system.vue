<template>
	<view class="system">
		<view class="item">
			<view class="item-left"> 个人资料 </view>
			<image class="icon-right" src="/static/personal/more1.png"></image>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left"> 账号设置 </view>
			<image class="icon-right" src="/static/personal/more1.png"></image>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left"> 消息推送 
			<view class="item-middle"> 已关闭 </view>
			</view>
			<view class="item-right"> 去设置 </view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left"> 清理缓存 </view>
			<view class="item-right"> 清理 </view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left" @tap="logout"> 退出登录 </view>
			<image class="icon-right" src="/static/personal/more1.png"></image>
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
			logout() {
				uni.removeStorageSync('token');
				uni.redirectTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.system {
	display: flex;
	flex-direction: column;
	align-items: center;
	
	.item {
		height: 105rpx;
		width: 750rpx;
		padding-bottom: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		
		.item-left {
			margin-left: 22rpx;
			font-size: 42rpx;
			
			display: flex;
			align-items: flex-end;
		}
		
		.item-middle {
			margin-bottom: 5rpx;
			margin-left: 40rpx;
			font-size: 30rpx;
			color: rgba(1, 1, 1, 0.46);;
		}
		
		.icon-right {
			margin-right: 33rpx;
			margin-bottom: 7rpx;
			width: 19rpx;
			height: 33rpx;
		}
		
		.item-right {
			margin-right: 24rpx;
			font-size: 35rpx;
			color: #08DF86;
		}
	}
	
	.line {
		height: 1px;
		width: 698rpx;
		background-color: rgba(0, 0, 0, 0.08);
	}
}
</style>
