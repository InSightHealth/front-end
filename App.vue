<script>
	export default {
		globalData: {  
			BackEndUrl: 'http://82.157.124.83:51603',
			llmUrl: 'http://127.0.0.1:8000',
		    token: "",
			phone: "17394961851",
			avatar: "http://117.72.13.28:9000/picture/2024/04/08/b4a1b88eddea45d68893d431788d3b1b.jpg"
		},
		onLaunch: function() {
			console.log('App Launch')
			
			// #ifdef APP-PLUS
			    // token标志来判断
			    let token = this.getToken();
				console.log('token is '+token);
				
			    if (token == null) {
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
			    } else {
					//存在则关闭启动页进入首页
					getApp().globalData.token = token;
					plus.navigator.closeSplashscreen();
			    }
			    // #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			setToken(value, expire) {
				let obj = {
					data: value, //存储的数据
					time: Date.now() / 1000, //记录存储的时间戳
					expire: expire //记录过期时间，单位秒
				}
				uni.setStorageSync('token', JSON.stringify(obj))
			},
			
			getToken() {
				let val = uni.getStorageSync('token');
				if (!val) {
				    return null
				}
				val = JSON.parse(val)
				console.log('pre setCache:',val.data)
				if (val.expire && Date.now() / 1000 - val.time > val.expire) {
				    uni.removeStorageSync('token');
				    return null
				}
				console.log('end setCache:',val.data)
				return val.data
			}
		}
	}
</script>

<style>
</style>
