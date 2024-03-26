<template>
	<div>
		<cover-view @click="start" style="margin-top: 20rpx;">开始录音</cover-view>
		<cover-view @click="stop" style="margin-top: 20rpx;">停止录音</cover-view>
	</div>
</template>

<script>
	const plug = uni.requireNativePlugin("html5app-recordaudio");
	
	export default {
		methods: {
			start() {
				const set = {
					format:"mp3", //音频格式,wav,mp3,pcm
					rate:16000, //音频采样率，8000hz,16000hz,44100hz 
					encode:16, //音频位宽,8位，16位 
					channel:2, //通道，1=>单声道，2=>双声道
					saveDir:"",  //自定义保存文件夹路径,留空默认保存路径,例如：let path=plus.io.convertLocalFileSystemURL("_doc");
					showNotification:true, //是否显示状态栏，开启可以增强应用在后台录音和息屏录音的存活率
					notificationName:"", //状态栏，默认是应用名称
					notificationText:"正在录音中,不要关闭应用" //内容显示，默认显示是正在录音中...
				};
				
				plug.start(set, (e) => { console.log(JSON.stringify(e)) });
			},
			stop() {
				plug.stop( (e) => {
					console.log(e.filePath);
					
					uni.uploadFile({
						url: "http://127.0.0.1:8000/speechtotext"
						,filePath: e.filePath
						,name: "mp3"
						,formData: { }
						,success: (res) => { 
							console.log("上传成功："+res.data); 
						}
						,fail: (err)=>{ console.error("上传录音失败："+err); }
					});
				});
			}
		}
	}
</script>