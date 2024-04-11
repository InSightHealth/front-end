<template>
	<view>
		<view class="home-head">
			<image class="home-icon" src="/static/homepage/image.png"></image>
			<image class="home-title" src="/static/homepage/title.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"homeHead",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
    .home-head {
		width: 750rpx; 
		height: 319rpx; 
		background-image: linear-gradient(180deg, rgba(172, 236, 156, 1), rgba(172, 236, 156, 0));
		border-radius: 8px;
		
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		.home-icon {
			position: absolute;
			height: 84rpx;
			width: 90rpx;
			left: 40rpx;
			top: 136rpx;
		}
		.home-title {
			position: absolute;
			top: 155rpx;
			left: 155rpx;
			height: 49rpx; 
			width: 428rpx;
		}
	}
</style>