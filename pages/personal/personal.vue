<template>
	<view class="personal">
		<view class="content">
			<view class="home-head">
				<view class="head-left">
					<image class="home-icon" :src="avatar"></image>
					<view class="head-info">
						<text class="home-title"> {{ nickname }} </text>
						<text class="info-text" v-if="gender"><span style="color: #1fa6ea;">♂</span>  男   {{age + "岁"}}</text>
						<text class="info-text" v-else><span style="color: #F49ED9;">♀</span>  女   {{age + "岁"}}</text>
					</view>
				</view>
				<navigator class="edit-button" url="/pages/personal/profile/profile">
					编辑资料
				</navigator>
			</view>
			<view class="service">
				<view class="content-title">推荐服务</view>
				<view class="service-container">
					<view class="service-box">健康助手</view>
					<view class="service-box">智能出行</view>
					<view class="service-box">辅助阅读</view>
				</view>
			</view>
			<view class="more-funcs">
				<view class="content-title">更多功能</view>
				<view class="funcs-container">
					<view class="service-box">
						<image class="item1" src="/static/personal/help.png"></image>
						<text class="item2">获取帮助</text>
						<image class="item3" src="/static/personal/more1.png"></image>
					</view>
					<view class="service-box">
						<image class="item1" src="/static/personal/about.png"></image>
						<text class="item2">关于明道</text>
						<image class="item3" src="/static/personal/more1.png"></image>
					</view>
					<navigator class="service-box" url="/pages/test/test">
						<image class="item1" src="/static/personal/setting.png"></image>
						<text class="item2">系统设置</text>
						<image class="item3" src="/static/personal/more1.png"></image>
					</navigator>
				</view>
			</view>
		</view>
		<home-foot></home-foot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gender: false,
				avatar: '',
				age: 0,
				nickname: ''
			};
		},
		onLoad() {
			uni.request({
				url: 'http://82.157.124.83:51603/user/api/v1',
				method: 'GET',
				header: {
					'token': getApp().globalData.token
				},
				success: (res) => {
					console.log(res.data.data);
					const response = res.data.data
					
					this.date = response.birthday;
					const date = new Date();
					const year = parseInt(this.date.slice(0, 4));
					this.age = date.getFullYear() - year;
					this.nickname = response.nickname;
					
					if (response.imageUri == null) {
						this.avatar = "/static/personal/girl.png";
					} else {
						this.avatar = response.imageUri;
					}
					
					if (response.gender == '男') {
						this.gender = true;
					} else if (response.gender == '女') {
						this.gender = false;
					}
				}
			})
		}
	}
</script>

<style lang="scss">
.personal {
	display: flex;
	flex-direction: column;
	background-color: #f9f9f9;
	height: 100%;
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		.home-head {
			width: 750rpx;
			height: 400rpx; 
			background-image: linear-gradient(180deg, rgba(172, 236, 156, 0.7), rgba(172, 236, 156, 0));
			border-radius: 8px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.head-left {
				margin-left: 20rpx;
				width: 350rpx;
				height: 419rpx;
				display: flex;
				align-items: center;
				justify-content: space-around;
				
				.home-icon {
					height: 123rpx;
					width: 123rpx;
					border-radius: 50%;
				}
				.head-info {
					height: 123rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.home-title {
						font-size: 34rpx;
					}
					.info-text {
						font-size: 14px; 
						color: rgba(175, 175, 175, 1);
					}
				}
			}
			.edit-button {
				margin-right: 30rpx;
				width: 150rpx;
				height: 56rpx;
				background-color: rgba(8, 223, 134, 0.13);
				border-radius: 15rpx;
				font-size: 27rpx;
				color: #08DF86;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.content-title {
			font-size: 38rpx;
			margin-left: 75rpx;
		}
		.service {
			height: 275rpx;
			width: 750rpx;
			.service-container {
				height: 200rpx;
				width: 750rpx;
				margin-left: 65rpx;
				align-items: center;
				display: flex;
				.service-box {
					box-sizing: border-box;
					width: 144rpx;
					height: 144rpx;
					margin-right: 30rpx;
					background-color: rgba(219, 244, 228, 1);
					border-radius: 39rpx;
					border: 1px solid rgba(0, 0, 0, 0.13);
					padding: 33rpx;
					
					display: flex;
					align-items: center;
					justify-self: center;
				}
			}
		}
		.funcs-container {
			margin-top: 25rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 750rpx;
			.service-box {
				box-sizing: border-box;
				width: 650rpx;
				height: 100rpx;
				border-bottom: 1px solid rgba(0, 0, 0, 0.08);
				padding-left: 30rpx;
				display: flex;
				align-items: center;
				
				.item1 {
					height: 39rpx;
					width: 39rpx;
					margin: 0 10rpx;
				}
				
				.item2 {
					font-size: 30rpx;
					color: rgba(1, 1, 1, 0.46);
				}
				
				.item3 {
					position: absolute;
					right: 70rpx;
					width: 15rpx;
					height: 25rpx;
				}
			}
		}
	}
}
</style>
