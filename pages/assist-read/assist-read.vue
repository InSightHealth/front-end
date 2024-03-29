<template>
	<view class="root-view">
		<view class="recog-view">
			<image class="preview-img"
				src="https://img-insight.oss-cn-chengdu.aliyuncs.com/tmp/image.png"></image>
			<view class="menu">
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
.root-view {
	background-color: grey;
	height: 100%;
	.recog-view {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: grey;
		height: 100%;
			
		.preview-img {
			height: 1200rpx; // 1200
			width: 619rpx;  // 619
		}
		
		.menu {
			flex: 1;
			width: 750rpx;
			height: 250rpx;
			z-index: 97;
			background-color: black;
			
			display: flex;
			align-items: column;
			justify-content: space-around;
			flex-direction: row;
		}
	}
}
</style>