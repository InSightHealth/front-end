<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
