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
						<image src="https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/avatar.jpg"></image>
					</view>
				</view>
				<!-- 机器人发的消息 -->
				<view class="item Ai" v-if="item.botContent != ''">
					<!-- 头像 -->     
					<view class="avatar">
						<image src="/static/smart-chat/icon-bot.png"></image>
					</view>
					<!-- 文字内容 -->
					<view class="content left" @tap="play(index)">
						{{item.botContent}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;			//不让它自动播放
	innerAudioContext.src = '';
	
	export default {
		name:"bot-chat",
		props: {
		    msgList: {
				type: Array,
				default: [
					// {
					//     botContent: "hello，请问我有什么可以帮助你的吗？",
					//     recordId: 0,
					//     titleId: 0,
					//     userContent: "",
					//     userId: 0
					// },
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
				chatMsg:""
			};
		},
		methods: {
			play(index) {
				const text = this.msgList[index].botContent;
				
				const encoded = encodeURI(text);
				console.log(encoded);
				innerAudioContext.src = `https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike
					&spd=` + this.speed + `&ctp=1&amp&pdt=301&tex=` + encoded;
				console.log(innerAudioContext.src);
				innerAudioContext.play();
				console.log("play over!!!"); 
			}
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
		width: 750rpx;
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
			border-radius: 50%;
						
			image {
				width: 115rpx;
				height: 115rpx;
				align-self: center;
			}
		}
	}
}
</style>