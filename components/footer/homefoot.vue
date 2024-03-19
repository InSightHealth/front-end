<template>
	<view>
		<footer class="footer-container">
		    <div class = "footer-parter">
		        <!-- Replace with your actual home icon SVG or image -->
		        <img src="/static/homepage/home-icon.png" class="icon-footer" id="icon home-icon">
		        <div class = "footer-words" style="color: #08DF86;"> 首页 </div>
		    </div>
		    <div class = "footer-parter-center">
		        <img src="/static/homepage/segment.png" class="icon-footer-center" @click="TestPage()">
				<div class = "footer-words-center"> 测试音频 </div>
		        <!-- <img src="path_to_microphone_icon.png" class="icon-footer" id="icon microphone-icon"> -->
		    </div>
		    <div class = "footer-parter">
		        <!-- Replace with your actual user profile icon SVG or image -->
		        <img src="/static/homepage/user.png" class="icon-footer" id="icon user-icon">
		        <div class = "footer-words"> 个人 </div>
		    </div>
		</footer>
	</view>
</template>

<script>
	export default {
		name:"foot",
		data() {
			return {
				
			};
		}, methods : {
			TestPage() {
				const url = "/pages/test/test";
				uni.navigateTo({url});
			}
		}
	}
</script>

<style lang="scss">
.footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: url('/static/homepage/bottom.png') no-repeat center center;
    background-size: 100% 100%;
    height: 150px;
    width: 100%;
}

.footer-parter {
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer-parter-center {
	  height: 75%;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
  }
}

// .icon {
//     width: 24px; /* Adjust as needed */
//     height: 24px; /* Adjust as needed */
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

/* Adjust the sizes as needed */
.icon-footer {
    margin-top: 20%;
    height: auto;
}

.icon-footer-center {
    height: auto;
	transform:scale(0.9);
}

/* You might want to add :hover or :active states for the icons */
.icon-footer:hover {
    opacity: 0.7;
}

.footer-words {
  margin-top: 12%;
}

.footer-words-center{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>