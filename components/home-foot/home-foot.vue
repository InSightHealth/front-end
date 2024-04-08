<template>
	<view>
		<footer class="footer-container">
		    <div class = "footer-parter-left">
		        <!-- Replace with your actual home icon SVG or image -->
		        <img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/home-icon.png" class="icon-footer" id="home-icon" @tap="navigateHome">
				<text class = "footer-words" style="color: #08DF86;"> 首页 </text>
		    </div>
		    <div class = "footer-parter-center">
		        <img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/segment.png" class="icon-footer-center" @click="assist">
				<text class = "footer-words"> 智能助手 </text>
		        <!-- <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> -->
		    </div>
		    <div class = "footer-parter-right">
		        <!-- Replace with your actual user profile icon SVG or image -->
				<img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/user.png" class="icon-footer" id="user-icon" @tap="navigatePerson">
				<text class = "footer-words"> 个人 </text>
		    </div>
		</footer>
	</view>
</template>

<script>
	export default {
		name:"homeFoot",
		data() {
			return {
				
			};
		}, methods : {
			TestPage() {
				const url = "/pages/test/test";
				uni.navigateTo({url});
			},
			navigateHome() {
				let routes = getCurrentPages();
				let curRoute = routes[routes.length - 1].route;
				const url = "/pages/index/index";
				console.log(curRoute, url);
				
				if (url != curRoute) {
					uni.navigateTo({url});
				}
			},
			navigatePerson() {
				let routes = getCurrentPages();
				let curRoute = routes[routes.length - 1].route;
				const url = "/pages/personal/personal"
				console.log(curRoute, url);
				
				if (url != curRoute) {
					uni.navigateTo({url});
				}
			},
			assist() {
				const pages = getCurrentPages()
				//    getCurrentPages() 方法用于获取当前页面栈的实例，返回一个由页面实例组成的数组，
				//    数组的顺序是由打开的页面依次排序的，也就是说你每跳转一个页面，这个数组就会将那个页面
				const page = pages[pages.length-1];
				console.log(page);
				page.$refs['popup'].open();
			}
		}
	}
</script>

<style lang="scss">
.footer-container {
	position: fixed;
	bottom: 0rpx;
	
    background: url('/static/homepage/bottom.png') no-repeat center center;
    background-size: 100% 100%;
    height: 260rpx;
    width: 750rpx;
	
	.footer-parter-left{
		position: absolute;
		bottom: 15rpx;
		left: 80rpx;
		height: 130rpx;
		width: 80rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		#home-icon {
			height: 77rpx;
			width: 77rpx;
		}
			
		.footer-words {
			font-size: 25rpx;
		}
	}
		
	.footer-parter-center {
		position: absolute;
		bottom: 15rpx;
		left: 225rpx;
		height: 195rpx;
		width: 300rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.icon-footer-center {
			width: 250rpx;
			height: 154rpx;
		}
		.footer-words {
			font-size: 30rpx;
		}
	}
	
	.footer-parter-right{
		position: absolute;
		bottom: 15rpx;
		right: 80rpx;
		height: 130rpx;
		width: 80rpx;
			
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		
		#user-icon {
			height: 77rpx;
			width: 67rpx;
		}
			
		.footer-words {
			font-size: 25rpx;
		}
	}
}
</style>