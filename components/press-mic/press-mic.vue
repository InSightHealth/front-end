<template>
	<view class="speakarea">
		<image src="/static/smart-chat/press-mic.png"></image>
	</view>
</template>

<script>
	export default {
		name:"press-mic",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	
.speakarea {
	width: 500rpx; 
	height: 98rpx;
	border-radius: 48rpx; 
	border: 2rpx solid #afc3b6;
	background: #DBF4E4;
	display: flex;
	align-items: center;
	justify-content: center;
	
	image {
		width: 67rpx;
		height: 77rpx;
	}
}
</style>