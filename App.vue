<script>
	export default {
		globalData: {  
			backUrl: 'http://82.157.124.83:51603',
			baseUrl: 'http://127.0.0.1:8000'
		},
		onLaunch: function() {
			console.log('App Launch')
			
			let token = this.getToken();
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
					data: value,
					time: Date.now() / 1000, 
					expire: expire 
				}
				uni.setStorageSync('token', JSON.stringify(obj))
			},
			
			getToken() {
				let val = uni.getStorageSync('token');
				if (!val) {
					uni.reLaunch({
						url: "/pages/login/login",
						success: () => {
							console.log("jump to login");
						},
						fail(e) {
							console.log(e);
						}
					});
				}
				val = JSON.parse(val)
				console.log('pre setCache:',val.data)
				if (val.expire && Date.now() / 1000 - val.time > val.expire) {
				    uni.removeStorageSync('token');
				    uni.reLaunch({
				    	url: "/pages/login/login",
				    	success: () => {
				    		console.log("jump to login");
				    	},
				    	fail(e) {
				    		console.log(e);
				    	}
				    });
				}
				console.log('end setCache:',val.data)
				return val.data
			}
		}
	}
</script>

<style>
</style>
