<template>
	<view class="root-view">
		<image class="back-icon" src="/static/recog/back-icon.png" @tap="back"></image>
		<view class="recog-view">
			<image :class="[thumbnail ? 'preview-img-thumb':'preview-img']" 
				src="https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/image.png"></image>
			<view class="menu">
					<navigator class="row" url="/pages/photo-recog/photo_nvue">
					<image src="/static/recog/back.png" class="row-side"></image>
					<text class="row-text"> 返回 </text>
				</navigator>
			
				<navigator class="row" url="/pages/photo-recog/photo_nvue">
					<image src="/static/recog/ok.png" class="row-middle"></image>
				</navigator>
			
				<navigator class="row" url="/pages/photo-recog/photo_nvue">
					<image src="/static/recog/rotate.png" class="row-side"></image>
					<text class="row-text"> 旋转 </text>
				</navigator>
			</view>
		</view>
		<view v-if="thumbnail"></view>
	</view>
</template>

<script>
export default {
    data() {
		return {
			photoPath: '',
			heightRatio: 1,
			thumbnail: false
		};
	},
	onLoad: function (option) { 
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('recieveFile', function(data) {
		    console.log('recievedData = ' + data.filepath);
			this.photoPath = 'https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/snapshot_1711522255791.jpg';
			/*
			uni.uploadFile({
			    url: 'http://82.157.124.83:51603/api/v1/uploadImg', // 后端api接口
			    filePath: data.filepath,
			    name: 'file',
			    formData: {},
			    header:{ "Content-Type": "multipart/form-data" },
			    success:(res) => {
			        if (res.data.code == 200){
			            console.log('文件上传成功')
						console.log(JSON.stringify(res));
			        }
			    },
				fail: (err) => {
				    console.log('发生错误, 查看数据', data);
				    console.log('发生错误, 查看数据', path);
				}
			});
			*/
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
		z-index: 99;
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
		background-color: grey;
		height: 100%;
			
		.preview-img {
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
}
</style>
