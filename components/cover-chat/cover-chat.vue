<template>
		<view id="msglistview" class="chat-body" :style="{ width: windowWidth, height: windowHeight }">
			<!-- 聊天记录 -->
			<view v-for="(item,index) in msgList" :key="index" :style="{ width: windowWidth}">
				<view class="item self" v-if="item.userContent != ''" >
					<view class="content right">
					{{item.userContent}}
					</view>
					<image class="poly-right" src="/static/travel/polygon-right.png"></image>
				</view>
				<view class="item Ai" v-if="item.botContent != ''">
					<image class="poly-left" src="/static/travel/polygon-left.png"></image>
					<view class="content left">
						{{item.botContent}}
					</view>
				</view>
			</view>
<!-- 			{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>{{randstr}}<br>-->
		</view>
</template>

<script>
	export default {
		name:"bot-chat",
		props: {
		    msgList: {
				type: Array,
				default: [
					{
					    botContent: "hello，请问我有什么可以帮助你的吗？",
					    recordId: 0,
					    titleId: 0,
					    userContent: "",
					    userId: 0
					},
					// {
					//     botContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "你好呀我想问你一件事，可以吗？",
					//     userId: 0
					// },
					// {
					//     userContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     botContent: "当然可以!",
					//     userId: 0
					// },
					// {
					//     botContent: "",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "我的问题是：blablabla...",
					//     userId: 0
					// },
				]
		    }
		},
		data() {
			return {
				userId:'',
				//发送的消息
				chatMsg:"",
				randstr: 'ksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfklksdafhaslihflksahfkl',
			};
		}
	}
</script>

<style lang="scss">
view {
	margin: 0;
	padding: 0;
	box-sizing: border-box; 
}

.chat-body {
	display: flex;
	flex-direction: column;
	background-color: inherit;
	width: 750rpx;
	height: 750rpx;
	box-sizing: content-box; 
	
	.self {
		justify-content: flex-end;
	}
	
	.item {
		width: 750rpx;
		display: flex;
		padding: 45rpx 30rpx;
		
		.right {
			background-color: #ACEC9C;
			align-self: flex-end;
		}
		.left {
			background-color: #FFFFFF;
		}
		.poly-right {
			position: relative;
			top: -50rpx;
			left: -5rpx;
			height: 30rpx;
			width: 30rpx;
			align-self: flex-end;
			display: inline-block;
		}
		.poly-left {
			position: relative;
			top: 50rpx;
			left: 5rpx;
			height: 30rpx;
			width: 30rpx;
			align-self: flex-start;
			display: inline-block;
		}
		
		.content {
			position: relative;
			word-wrap: break-word;
			padding: 24rpx 24rpx;
			margin: 0 24rpx;
			border-radius: 30rpx;
			font-size: 32rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #333333;
			line-height: 42rpx;
			max-width: 380rpx;
			display: inline-block;
		}

		.avatar {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 115rpx;
			height: 115rpx;
			overflow: hidden;
			
			image {
				width: 115rpx;
				height: 115rpx;
				align-self: center;
			}
		}
	}
}
</style>