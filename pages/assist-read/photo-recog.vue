<template>
	<view class="root-view">
		<image class="back-icon" src="/static/recog/back-icon.png" @tap="back"></image>
		<view class="recog-view">
			<image :class="[thumbnail ? 'preview-img-thumb':'preview-img']" 
				:src="photoPath" ref="image"></image>
			<view class="menu">
				<navigator class="row" url="/pages/photo-recog/photo_nvue">
					<image src="/static/recog/back.png" class="row-side"></image>
					<text class="row-text"> 返回 </text>
				</navigator>
			
				<view class="row" @tap="showThumb">
					<image src="/static/recog/ok.png" class="row-middle"></image>
				</view>
			
				<view class="row" url="/pages/photo-recog/photo_nvue">
					<image src="/static/recog/rotate.png" class="row-side"></image>
					<text class="row-text"> 旋转 </text>
				</view>
			</view>
		</view>
		<tab-recog v-if="thumbnail"
			class="showMore-box"
			:style="{
				transform: 'translateY('+moveY+'px)', 
			}" 
			@touchstart="start" 
			@touchend="end" 
			@touchmove="move"
			:recogText="recogText">
		</tab-recog>
	</view>
</template>

<script>
export default {
    data() {
		return {
			photoPath: '',
			heightRatio: 1,
			thumbnail: false,
			startData: {
				clientY: '',
			},
			moveY: 0,
			state: 0,
			recogText: '',
			backUrl: '',
			baseUrl: '', 
			token: '',
		};
	},
	onLoad(option) { 
		this.token = getApp().getToken();
		this.backUrl = getApp().globalData.backUrl;
		this.baseUrl = getApp().globalData.baseUrl;
		
		const eventChannel = this.getOpenerEventChannel();
		this.recogText = '';
		
		eventChannel.on('recieveFile', (data) => {
			this.photoPath = data.filepath;
			this.$refs.image.src = data.filepath;
		})
		
		eventChannel.on('recieveFile', (data) => {
			uni.uploadFile({
				url: this.backUrl + '/storage/api/v1/uploadImg/read'
				,name: "multipartFile"
				,filePath: data.filepath
				,formData: { }
				,header: {
					'token': this.token
				}
				,success: (res) => { 
					console.log("上传成功："+JSON.stringify(res));
					
					try {
						const response = JSON.parse(res.data);
						console.log(response.data.image);
						this.photoUrl = response.data.image;
						
						this.handleImg();
					} catch(e) {
						console.error(e);
						uni.showToast({
							title: '图片上传失败，请检查网络'
						});
					}
				}
				,fail: (err) => { 
					console.error(err); 
					uni.showToast({
						title: '图片上传失败，请检查网络'
					});
				}
			})
		})
	},
	methods: {
		back() {
			if (this.thumbnail) {
				this.thumbnail = false;
			} else {
				uni.navigateBack();
			}
		},
		handleImg() {
			var _this = this;
			console.log("photoUrl: " + this.photoUrl);
			uni.request({
				url: this.baseUrl + '/ocr',
				method: 'POST',
				data: {
					"image": this.photoUrl
				},
				success: (res) => {
					console.log(res);
					try {
						const resText = res.data.join("\n");
						_this.recogText = resText;
						console.log(this.recogText);
					} catch(e) {
						_this.recogText = "发送失败";
					}
				}, 
				fail: (err) => {
					_this.recogText = "发送失败";
				}
			})
		},
		showThumb() {
			this.thumbnail = true;
			this.moveY = 0;
			this.state = 0;
		},
		start(e){
		    this.startData.clientY = e.changedTouches[0].clientY;
		},
		end(e){ 
			console.log(this.recogText);
			console.log("this.moveY = ", this.touch.clientY - this.startData.clientY);
			if(this.touch.clientY - this.startData.clientY > 300) {
				this.state = 1;
				this.moveY = 350;
				this.thumbnail = false;
			} else {
				this.state = 0;
				this.moveY = 0;
			}
		},
		move(event) {
			let touch = event.touches[0];
			this.touch = touch;
			let data = 0;
			if(touch.clientY > this.startData.clientY && this.state === 0) {  //向下移动
				data = touch.clientY - this.startData.clientY;
				if(data > 1000) {
					data = 1000;
				}
				this.moveY = data;
			}
			if(touch.clientY < this.startData.clientY && this.state === 1) {  //向上移动
				data = this.startData.clientY - touch.clientY;
				if(data > 1000) {
					data = -1000;
				}
				this.moveY = 350-data;
			}
		},
	}
};
</script>

<style lang="scss" scoped>
.root-view {
	background-color: grey;
	height: 100%;
	.back-icon {
		position: fixed;
		top: 100rpx;
		left: 70rpx;
		z-index: 98;
		height: 77rpx;
		width: 77rpx;
	}
	.recog-view {
		background-color: grey;
		height: 100%;
			
		.preview-img {
			position: absolute;
			top: 78rpx;
			left: 65rpx;
			height: 1200rpx; // 1200
			width: 619rpx;  // 619
		}
		
		.preview-img-thumb {
			position: absolute;
			top: -346rpx;
			left: 0rpx;
			height: 1454rpx; // 1200
			width: 750rpx;  // 619
		}
		
		.menu {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 750rpx;
			height: 250rpx;
			z-index: 97;
			background-color: black;
			
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: row;
			
			.row {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				.row-side {
					height: 77rpx;
					width: 77rpx;
					margin-bottom: 10rpx;
				}
				.row-middle {
					height: 138rpx;
					width: 138rpx;
				}
				.row-text {
					font-size: 30rpx;
					color: white;
				}
			}
		}
	}
	.thumb-view {
		transition: all .5s;
		background-color: white;
	}
}
</style>
