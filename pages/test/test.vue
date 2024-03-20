<template>
	<view>
		<div class="container">
			<button v-for="(item, index) in pathList" :key="index" @click="TestPage(item.path)"> {{ item.lebal }} </button>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pathList:[
					{
						path: "/pages/recTest/page_index",
						lebal: "测试音频"
					},
					{
						path: "/pages/test-camera/test-camera",
						lebal: "测试摄像头"
					}
				]
			}
		},
		methods: {
			TestPage (url) {
				uni.navigateTo ({
					url
				})
			}
		}
	}
</script>

<style>

</style>