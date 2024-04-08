<template>
	<view class="root-view">
		<view class="recog-view">
			<image class="preview-img"
				src="https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/image.png"></image>
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
	</view>
</template>

<script>
export default {
    data() {
		return {
			photoPath: ''
		};
	},
	onLoad: function (option) { 
		const eventChannel = this.getOpenerEventChannel();
		eventChannel.on('recieveFile', function(data) {
		    console.log('recievedData = ' + data.filepath);
			this.photoPath = 'https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/snapshot_1711522255791.jpg';
		})
	},
	methods: {
		showThumb() {
			uni.navigateTo({
				url: '/pages/assist-read/assist-read',
				success: function(res) {
				    res.eventChannel.emit('recogFile', { filepath: this.photoPath })
				},
				fail: (e) => { console.log(e); } 
			})
		}
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
