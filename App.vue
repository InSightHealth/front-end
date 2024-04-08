<script>
	export default {
		globalData: {  
			BackEndUrl: 'http://82.157.124.83:51603',
			llmUrl: 'http://127.0.0.1:8000',
		    token: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAADWLSQrDMAwA_6JzDF4i7OQ3ViIXlxpM5UBL6d-jHHKbYZgfPEeFFSxm2sNWTLSYzOyKNeSXYHihuBHHwgVhgpoHrC46jzj7kCaQg_SWrwxuVxdRfbxqa_xWz8eunntX5k-_35iut2rD_wnHjcgIggAAAA.3oIGB9_m2VKeItuVeK8EsIZu4-DWeklZawU6VCU3jIl2leRWf6vzSIozvw1Uf2_6GZznGoQki1xon3VeCb8heQ",
			phone: ""
		},
		onLaunch: function() {
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			    // token标志来判断
			    let token = getApp().globalData.token;    
				// console.log('token is '+token);
				
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
</style>
