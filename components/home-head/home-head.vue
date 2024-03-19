<template>
	<view>
		<div class="phone-container">
		    <div class="header">
		        <div class="avatar"></div>
		        <div class="user-name">
		            张三
		        </div>
		    </div>
		</div>
	</view>
</template>

<script>
	export default {
		name:"homeHead",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
    .header {
        padding: 10px 20px; /* Padding around the content */
        display: flex; /* Use flexbox for layout */
        align-items: center; /* Center items vertically */
        background: url("/static/homepage/top.png")  no-repeat center center;
        background-size: 100% 100%;
        height: 100px;
    }

    .avatar {
        width: 64px; /* Avatar width */
        height: 64px; /* Avatar height */
        border-radius: 50%; /* Make it round */
        background-color: #fff; /* Background color of the avatar */
        margin-right: 15px; /* Space between avatar and name */
        box-shadow: 0 2px 4px rgba(0,0,0,0.25); /* Shadow below the avatar */
        display: flex; /* Use flexbox for positioning the icon */
        justify-content: center; /* Center the icon horizontally */
        align-items: center; /* Center the icon vertically */

        background-image: url("/static/homepage/avatar.jpg");
        background-size: 100% 100%;
    }

    .user-name {
        font-size: 1.2em; /* Size of the username */
        font-weight: 500;
        color: black;
        font-family: 'SimHei';
        padding-bottom: 18px;
    }
</style>