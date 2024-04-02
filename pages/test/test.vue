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
						path: "/pages/recTest/native_test",
						lebal: "测试音频"
					},
					{
						path: "/pages/test-camera/cover_nvue",
						lebal: "测试摄像头"
					},
					{
						path: "/pages/test_api/test-upload",
						lebal: "测试API"
					},
					{
						path: "/pages/test-page/login",
						lebal: "测试Page"
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