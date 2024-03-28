<template>
	<view>
		<view id="msglistview" class="chat-body">
			<!-- 聊天记录 -->
			<view v-for="(item,index) in msgList" :key="index">
				<!-- 自己发的消息 -->
				<view class="item self" v-if="item.userContent != ''" >
					<!-- 文字内容 -->
					<view class="content right">
					{{item.userContent}}
					</view>
					<!-- 头像 -->
					<view class="avatar">
						<image src="/static/smart-chat/icon-girl.png"></image>
					</view>
				</view>
				<!-- 机器人发的消息 -->
				<view class="item Ai" v-if="item.botContent != ''">
					<!-- 头像 -->     
					<view class="avatar">
						<image src="/static/smart-chat/icon-bot.png"></image>
					</view>
					<!-- 文字内容 -->
					<view class="content left">
						{{item.botContent}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"bot-chat",
		data() {
			return {
				userId:'',
				//发送的消息
				chatMsg:"",
				msgList:[
					{
					    botContent: "hello，请问我有什么可以帮助你的吗？",
					    recordId: 0,
					    titleId: 0,
					    userContent: "",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "你好呀我想问你一件事，可以吗？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "当然可以!",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的问题是：blablabla...",
					    userId: 0
					},
				]
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
	width: 100%;
	height: 100%;
	box-sizing: content-box; 
	
	.self {
		justify-content: flex-end;
	}
	
	.item {
		display: flex;
		padding: 45rpx 30rpx;
		
		.right {
			background-color: #ACEC9C;
		}
		.left {
			background-color: #FFFFFF;
		}
		// 聊天消息的三角形
		.right::after {
			position: absolute;
			display: inline-block;
			content: '';
			width: 0;
			height: 0;
			left: 100%;
			top: 10px;
			border: 12rpx solid transparent;
			border-left: 12rpx solid #ACEC9C;
		}
		
		.left::after {
			position: absolute;
			display: inline-block;
			content: '';
			width: 0;
			height: 0;
			top: 10px;
			right: 100%;
			border: 12rpx solid transparent;
			border-right: 12rpx solid #FFFFFF;
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
			display: flex;
			align-self: center;
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