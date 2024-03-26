<template>
	<view class="chat">
		<scroll-view  :style="{height: `${windowHeight-inputHeight}rpx`}"
		id="scrollview"
		scroll-y="true" 
		:scroll-top="scrollTop"
		class="scroll-view"
		>
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index">
					<!-- 自己发的消息 -->
					<view class="item self" v-if="item.userContent != ''" >
						<!-- 文字内容 -->
						<view class="content right">
							{{item.userContent}}
						</view>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent != ''">
						<!-- 文字内容 -->
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<!-- 用来占位，防止聊天消息被发送框遮挡 -->
		<view class="chat-bottom">
			<micphone :StopHandler="handleSend"></micphone>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//键盘高度
				keyboardHeight:0,
				//底部消息发送高度
				bottomHeight: 0,
				//滚动距离
				scrollTop: 0,
				userId:'',
				//发送的消息
				chatMsg:"",
				msgList:[
					{
					    botContent: "按住屏幕下方按钮讲话",
					    recordId: 0,
					    titleId: 0,
					    userContent: "",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的前面有什么？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "您的正前方有一个指示牌，请注意安全",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的前面有什么？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "您的正前方有一个指示牌，请注意安全",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的前面有什么？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "您的正前方有一个指示牌，请注意安全",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的前面有什么？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "您的正前方有一个指示牌，请注意安全",
					    userId: 0
					},
					{
					    botContent: "",
					    recordId: 0,
					    titleId: 0,
					    userContent: "我的前面有什么？",
					    userId: 0
					},
					{
					    userContent: "",
					    recordId: 0,
					    titleId: 0,
					    botContent: "您的正前方有一个指示牌，请注意安全",
					    userId: 0
					},
				]	
			}
		},
		updated(){
			//页面更新时调用聊天消息定位到最底部
			this.scrollToBottom();
		},
		computed: {
			windowHeight() {
			    return this.rpxTopx(uni.getSystemInfoSync().windowHeight)
			},
			// 键盘弹起来的高度+发送框高度
			inputHeight(){
				return 177;
			}
		},
		onLoad(){
			// uni.onKeyboardHeightChange(res => {
			// 	//这里正常来讲代码直接写
			// 	//this.keyboardHeight=this.rpxTopx(res.height)就行了
			// 	//但是之前界面ui设计聊天框的高度有点高,为了不让键盘和聊天输入框之间距离差太大所以我改动了一下。
			// 	this.keyboardHeight = this.rpxTopx(res.height-30)
			// 	if(this.keyboardHeight<0)this.keyboardHeight = 0;
			// })
		},
		onUnload(){
			uni.offKeyboardHeightChange()
		},
		methods: {
			focus(){
				this.scrollToBottom()
			},
			blur(){
				this.scrollToBottom()
			},
			// px转换成rpx
			rpxTopx(px){
				let deviceWidth = wx.getSystemInfoSync().windowWidth
				let rpx = ( 750 / deviceWidth ) * Number(px)
				return Math.floor(rpx)
			},
			// 监视聊天发送栏高度
			sendHeight(){
				setTimeout(()=>{
					let query = uni.createSelectorQuery();
					query.select('.send-msg').boundingClientRect()
					query.exec(res =>{
						this.bottomHeight = this.rpxTopx(res[0].height)
					})
				},10)
			},
			// 滚动至聊天底部
			scrollToBottom(e){
				setTimeout(()=>{
					let query = uni.createSelectorQuery().in(this);
					query.select('#scrollview').boundingClientRect();
					query.select('#msglistview').boundingClientRect();
					query.exec((res) =>{
						if(res[1].height > res[0].height){
							this.scrollTop = this.rpxTopx(res[1].height - res[0].height)
						}
					})
				},15)
			},
			
			handleSend() {
				console.log("Here");
			},
		}
	}
</script>
<style lang="scss" scoped>
	
	$chatContentbgc: #C2DCFF;
	// $sendBtnbgc: #4F7DF5;
	
	view,button,text,input,textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* 聊天消息 */
	.chat {
		width: 750rpx;
		.scroll-view {
			width: 750rpx;
			::-webkit-scrollbar {
					    display: none;
					    width: 0 !important;
					    height: 0 !important;
					    -webkit-appearance: none;
					    background: transparent;
					    color: transparent;
					  }
			
			// background-color: orange;
			// background-color: #F6F6F6;
			
			.chat-body {
				display: flex;
				width: 750rpx;
				flex-direction: column;
				padding-top: 23rpx;
				// background-color:skyblue;
				
				.self {
					justify-content: flex-end;
				}
				.item {
					display: flex;
					padding: 23rpx 5rpx;
					width: 750rpx;
					// background-color: greenyellow;

					.right {
						// background-color: $chatContentbgc;
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
						border-left: 15rpx solid #ACEC9C;
						transform: translate(-4rpx);
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
						border-right: 15rpx solid #FFFFFF;
						transform: translate(4rpx);
					}

					.content {
						position: relative;
						max-width: 450rpx;
						border-radius: 8rpx;
						word-wrap: break-word;
						padding: 10rpx 20rpx;
						margin: 0 24rpx;
						border-radius: 12px;
						font-size: 20rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 32rpx;
					}
				}
			}
		}

		/* 底部聊天发送栏 */
		.chat-bottom {
			width: 750rpx;
			height: 177rpx;
			// background: #F4F5F7;
			padding-bottom: 20rpx;
			transition: all 0.1s ease;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
