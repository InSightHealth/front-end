<script>
	export default {
		globalData: {  
			BackEndUrl: 'http://82.157.124.83:51603',
			llmUrl: 'http://127.0.0.1:8000',
		    token: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAADWL0QrDIAwA_yXPFRprY-nfxCjFMUEWCxuj_770YW93HPeFx6iwA6UZcQmb45CjC5iiY6Tosi8iJFIkJ5ig8oAdI_qZFh9wAj2T3frRUdrdVU2PZ22tvMz5zObcu3F59_9L2_1Wa-v1A4M1H0WCAAAA.s39x3oTuAOX5dl7Zwv6jLGT1nqYWfx9k7g-1RUvjC9XlPxPmB1JyWw0scNsZXoC6digRclB3hAxTMAE86mSFBQ"
		},
		onLaunch: function() {
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			    // token标志来判断
			    let token= getApp().globalData.token;    
				console.log('token is '+token);
				
			    if (token != '') {
				    //存在则关闭启动页进入首页
					plus.navigator.closeSplashscreen();
				
			    } else {
					console.log("Here we go!!!");
					//不存在则跳转至登录页
			        uni.reLaunch({
			            url: "/pages/test-page/login",
					    success: () => {
					        plus.navigator.closeSplashscreen();
					    },
						fail(e) {
							console.log(e);
						}
			    	})
			    }
			    // #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifdef H5 */
	*{
		padding: 0;
		margin: 0;
	}

	uni-page-body,html,body{  
		height: 100%;  
	}  
	/* #endif */
</style>
