<template>
	<button @tap="playMusic">点击播放</button>
</template>

<script>
var innerAudioContext = uni.createInnerAudioContext();
innerAudioContext.autoplay = false;			//不让它自动播放
innerAudioContext.src = '';

export default {
	data() {
		return {
			content: 'hey hey you you'
		}
	}, 
	methods: {
		playMusic() {
			const encoded = encodeURI(this.content);
			console.log(encoded);
			innerAudioContext.src = 'https://tts.baidu.com/text2audio.mp3?lan=ZH&cuid=baike&ctp=1&amp&pdt=301&tex=' + encoded;
			console.log(innerAudioContext.src);
			innerAudioContext.play();
			console.log("play over!!!");
		}
	}
}
</script>