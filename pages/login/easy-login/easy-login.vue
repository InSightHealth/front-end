<template>
	<view class="login">
		<view class="head1">
			<image class="home-icon" src="/static/login/icon.png"></image>
			<image class="title" src="/static/login/title.png"></image>
		</view>
		<image class="head2" src="/static/login/subtitle.png"></image>
		
		<input class="input1" placeholder="请输入手机号码" v-model="phoneNumber"
		placeholder-style="font-size: 30rpx; color: rgba(0, 0, 0, 0.26);">
		
		<checkbox-group @change="checkboxChange" class="agreement">
			<label>
				<checkbox class="checkbox" :checked="state" 
					style="transform:scale(0.7); border-radius: 50%;"/> 我已阅读并同意<a style="color:#3ab0de">《用户服务协议》</a>和<a style="color:#3ab0de">《隐私政策》</a>
			</label>
		</checkbox-group>
		
		<view class="option" @tap="login"> 点击登录 </view> 
		<view style="height: 100rpx;"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: ''
			}
		},
		methods: {
			login(){
				const backUrl = getApp().globalData.backUrl;
				const url = backUrl + '/user/api/v1/loginFast';
				console.log("phoneNumber: " + this.phoneNumber);
				uni.request({
					url: url,
					method: 'POST',
					data: {
						phone: this.phoneNumber,
					},
					success: (res) => {
						console.log(res.data);
						this.text = 'request success';
						
						getApp().setToken(res.data.data.token, 3600);
						console.log(res.data.data.token);
						uni.navigateTo({
							url: '/pages/index/index',
							success() {
								console.log(getApp().getToken());
							}
						})
					},
					fail(e) {
						console.log(e);
					}
				})
			}
		}
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
	
	.agreement {
		width: 600rpx;
		margin-top: 71rpx;
		font-size: 35rpx;
		
		uni-checkbox .uni-checkbox-input{
			width: 27rpx;
			height: 27rpx;
			border-radius: 50%;
		}
	}
	
	.input1 {
		box-sizing: border-box;
		margin-top: 50rpx;
		width: 600rpx; 
		height: 100rpx; 
		background-color: #FAFAFA; 
		border-radius: 210px; 
		border: 1px solid #C2C1C1;
		padding: 20rpx;
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
	
}
</style>