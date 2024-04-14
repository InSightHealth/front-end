<template>
	<view class="login">
		<view class="head1">
			<image src="/static/login/icon.png" style="height: 102rpx; width: 110rpx;"></image>
			<image class="title" src="/static/login/title.png"></image>
		</view>
		<image class="head2" src="/static/login/subtitle.png"></image>
		
		<view class="logbox">
			<view class="subtitle">短信验证码登录</view>
			<view class="hint">未注册的手机号验证后将自动登录</view>
			
			<input class="input1" placeholder="请输入手机号码" v-model="phoneNumber"
			placeholder-style="font-size: 30rpx; color: rgba(0, 0, 0, 0.26);">
			
			<input class="input2" placeholder="请输入验证码" v-model="verifyCode"
			placeholder-style="font-size: 30rpx; color: rgba(0, 0, 0, 0.26);">
			
			<text class="verify-button" @tap="getVeriCode"> 获取验证码 </text>
			
			<view class="login-button" :checked="checked" @tap="login"> 登录 </view>
			
			<checkbox-group @change="checkboxChange" class="agreement">
				<label>
					<checkbox class="checkbox" :checked="state" 
						style="transform:scale(0.7); border-radius: 50%;"/> 我已阅读并同意<a style="color:#3ab0de">《用户服务协议》</a>和<a style="color:#3ab0de">《隐私政策》</a>
				</label>
			</checkbox-group>
			
			<view class="last-row">
				<image src="/static/login/wechat.png"></image>
				<image src="/static/login/QQ.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				state: false,
				phoneNumber: '',
				verifyCode: '',
			}
		},
		methods:{
			checkboxChange(e) {
				this.state = !this.state;
				console.log(this.state);
			},
			getVeriCode() {
				const backUrl = getApp().globalData.backUrl;
				const url = backUrl + '/user/api/v1/sendCode';
				console.log("url: " + url);
				console.log("phoneNumber: " + this.phoneNumber);
				uni.request({
					url: url,
					method: 'POST',
					data: {
						phone: this.phoneNumber
					},
					success: (res) => {
						console.log(res.data);
						this.text = 'request success';
					},
					fail(e) {
						console.log(e);
					}
				})
			},
			
			login(){
				const backUrl = getApp().globalData.backUrl;
				console.log("phoneNumber: " + this.verifyCode);
				uni.request({
					url: backUrl + '/user/api/v1/login',
					method: 'POST',
					data: {
						phone: this.phoneNumber,
						code: this.verifyCode
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
	height: 100%;
	
	.head1 {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 102rpx;
		margin-top: 104rpx;
		.title {
			margin-left: 20rpx;
			height: 75rpx;
			width: 144rpx;
		}
	}
	
	.head2 {
		display: flex;
		align-items: center;
		justify-content: center;
		
		font-size: 46rpx;
		height: 52rpx;
		width: 342rpx;
		margin-top: 30rpx;
	}
	
	.logbox {
		margin-top: 38rpx;
		width: 673rpx; 
		height: 992rpx; 
		background-image: linear-gradient(180deg, rgba(172.48, 235.65, 156.38, 1) 58%, rgba(172.48, 235.65, 156.38, 0)); 
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
		border-radius: 38rpx; 
		border: 1px solid rgba(0, 0, 0, 0);
		
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.subtitle {
			font-size: 46rpx;
			margin-top: 125rpx;
		}
		.hint {
			font-size: 30rpx;
			color: rgba(0, 0, 0, 0.26);
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
		
		.input2 {
			box-sizing: border-box;
			margin-top: 44rpx;
			width: 604rpx; 
			height: 75rpx; 
			background-color: #FDFAFA; 
			border-radius: 210px; border: 1px solid #C2C1C1;
			padding: 20rpx;
		}
		
		.verify-button {
			z-index: 100;
			font-size: 30rpx;
			color: #3AB0DE;
			position: relative;
			height: 0rpx;
			overflow: visible;
			top: -60rpx;
			left: 200rpx;
		}
		
		.login-button {
			margin-top: 77rpx;
			width: 604rpx; 
			height: 71rpx; 
			background-color: rgba(194, 193, 193, 0.65); 
			border-radius: 210px; 
			border-color: 1px solid #C2C1C1; 
			
			display: flex;
			align-items: center;
			justify-content: center;
			color: #F6F3F3;
		}
		
		.agreement {
			margin-top: 71rpx;
			font-size: 25rpx;
			
			uni-checkbox .uni-checkbox-input{
				width: 27rpx;
				height: 27rpx;
				border-radius: 50%;
			}
		}
		
		.last-row {
			margin-top: 60rpx;
			height: 77rpx;
			width: 200rpx;
			
			display: flex;
			align-items: center;
			justify-content: space-between;
			
			image {
				height: 77rpx;
				width: 77rpx;
			}
		}
	}
	
	.uni-checkbox {
		border-radius: 50%;
	}
}
</style>
