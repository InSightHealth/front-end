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
						path: "/pages/recTest/my_test",
						lebal: "测试音频"
					},
					{
						path: "/pages/test-camera/test_nvue",
						lebal: "测试摄像头"
					},
					{
						path: "/pages/test_api/test_api",
						lebal: "测试API"
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