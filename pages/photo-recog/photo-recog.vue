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
		<tab-chat v-if="thumbnail"
			class="showMore-box"
			:style="{
				transform: 'translateY('+moveY+'px)', 
			}" 
			@touchstart="start" 
			@touchend="end" 
			@touchmove="move"
			:photoUrl="photoUrl">
		</tab-chat>
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
			photoUrl: '',
		};
	},
	onLoad(option) { 
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('recieveFile', (data) => {
			this.photoPath = data.filepath;
			this.$refs.image.src = data.filepath;
		})
		
		eventChannel.on('recieveFile', (data) => {
			uni.compressImage({
				src: data.filepath,
				quality: 80,
				success: res => {
					console.log(res.tempFilePath);
					this.uploadFile(res.tempFilePath);
				}
			})
		})
	},
	methods: {
		uploadFile(filepath) {
			const token = getApp().globalData.token;
			uni.uploadFile({
				url: 'http://82.157.124.83:51603/storage/api/v1/uploadImg/photo'
				,name: "multipartFile"
				,filePath: filepath
				,formData: { }
				,header: {
					'token': token
				}
				,success: (res) => { 
					console.log("上传成功："+JSON.stringify(res));
					
					if (res.statusCode == 200) {
						const response = JSON.parse(res.data);
						console.log(response.data.image);
						this.photoUrl = response.data.image;
					} else {
						
					}
				}
				,fail: (err)=>{ console.error("上传录音失败："+err.errMsg); }
			})
		},
		back() {
			if (this.thumbnail) {
				this.thumbnail = false;
			} else {
				uni.navigateBack();
			}
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
			//触摸事件结束
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
