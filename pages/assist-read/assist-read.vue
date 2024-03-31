<template>
	<view class="root-view">
		<view class="recog-view">
			<image src="/static/read/image.png"
				 class="preview-img"></image>
			<view class="menu">
				<view class="first-row">
					<image src="/static/read/start.png" class="start-play"></image>
					<view class="mult-play">倍速</view>
				</view>
				<view class="second-row">
					<image src="/static/recog/home.png"></image>
					<div class="once-again">再拍一张</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
		return {
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
			uni.navigateBack();
		}
	}
};
</script>

<style lang="scss" scoped>
*{
	border: 0rpx;
	padding: 0rpx;
	margin: 0rpx;
}
.root-view {
	background-color: white;
	height: 100%;
	.recog-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: white;
		height: 100%;
			
		.preview-img {
			height: 1050rpx;
		}
		
		.menu {
			flex: 1;
			width: 750rpx;
			// background-color: #F1f1f1;
			// border-top: 2rpx solid grey;
			
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			
			.first-row {
				display: flex;
				align-items: center;
				
				width: 750rpx;
				height: 138rpx;
				
				.start-play {
					margin-left: 300rpx;
					width: 138rpx;
					height: 138rpx;
				}
				
				.mult-play {
					width: 138rpx; 
					height: 65rpx; 
					background-color: white; 
					border-radius: 19rpx; 
					border: 2rpx solid rgba(148, 200, 108, 1);
					margin-left: 44rpx;
					
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
			
			.second-row {
				margin-top: 45rpx;
				width: 600rpx;
				height: 77rpx;
				margin-right: 100rpx;
				
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				image {
					width: 90rpx;
					height: 90rpx;
				}
				
				.once-again {
					height: 90rpx;
					width: 490rpx;
					background-color: rgba(8, 223, 134, 1); 
					border-radius: 19rpx;
					
					display: flex;
					align-items: center;
					justify-content: center;
					
					color: white;
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>