<script>
	export default {
		globalData: {  
			BackEndUrl: 'http://82.157.124.83:51603',
			llmUrl: 'http://127.0.0.1:8000',
		    token: "eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAADWLywqDMBAA_2XPBpK6Wa1_s3m0RAyEboSK-O9dD73NMMwJay-wwGjZjxyj4ZmsQU4vE2Iig-R8CmgxxwADFO6wuMk98Okd0QCyB73lkJ7r3UVU31upNX_UeU_q3Jpy_rb_O0_3W7T56wfz5p8PggAAAA.-LbMs0Yjl1qd9N6lJR1JOb2tf1YZ-FT-KrPwwgXeFvMKDLEMsNGHGZxnMnoj_hb3gVm_rp6JwCzHHh_TBNgmoA",
			phone: ""
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
</style>
