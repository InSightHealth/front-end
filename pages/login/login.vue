<template>
	<view class="login">
		<view class="head1">
			<image class="home-icon" src="/static/login/icon.png"></image>
			<image class="title" src="/static/login/title.png"></image>
		</view>
		<image class="head2" src="/static/login/subtitle.png"></image>
		
		<navigator class="option" url="/pages/login/easy-login/easy-login"> 快捷登录 </navigator>
		<navigator class="option" url="/pages/login/verify-login/verify-login"> 验证码登录 </navigator>
		<view style="height: 100rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
	}
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	
	.head1 {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 102rpx;
		margin-top: 104rpx;
		
		.home-icon {
			height: 152rpx; 
			width: 170rpx;
		}
		
		.title {
			margin-left: 20rpx;
			height: 90rpx;
			width: 170rpx;
		}
	}
	
	.head2 {
		height: 60rpx;
		width: 400rpx;
		margin-top: 60rpx;
		margin-bottom: 50rpx;
	}
	
	.option {
		display: flex;
		align-items: center;
		justify-content: center;
		
		background-color: #08DF86;
		width: 600rpx;
		height: 100rpx;
		border-radius: 20rpx;
		
		color: white;
		font-size: 50rpx;
		margin-top: 50rpx;
	}
	
	.input1 {
		box-sizing: border-box;
		margin-top: 105rpx;
		width: 604rpx; 
		height: 75rpx; 
		background-color: #FDFAFA; 
		border-radius: 210px; border: 1px solid #C2C1C1;
		padding: 20rpx;
	}
}
</style>
