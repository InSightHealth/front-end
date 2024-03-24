<template>
	<view class="main-container">
		<home-head></home-head>
		<div class="content">
			<div class="content-first-row">
				<navigator id="link-to-smart-travel" url="/pages/smart-travel/smart-travel">
					智能出行
				</navigator>
				<a id="link-to-snap-recognize">
					<img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/snap-icon.png">
					拍照识图
				</a>
			</div>
			<div class="content-second-row">
				<a id="link-to-health-assistant">
					<img src="https://img-insight.oss-cn-chengdu.aliyuncs.com/poe.png">
					智能健康助手
				</a>
			</div>
		</div>
		<home-foot></home-foot>
	</view>
</template>

<script>
	export default {
	}
</script>

<style lang='scss'>
	* {
		margin: 0px;
		padding: 0px;
	}
	page {
		width: 100%;
		height: 100%;
	}
	
	.main-container {
		background-color: #EFEFEF;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	
	.content {
		flex: 1; 
		
		display: flex;
		flex-direction: column;
		align-items: center;
		
		a {
			display: block;
		}
		
		.content-first-row {
			margin: 0px;
			height: 370rpx;
			width: 600rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding-top: 55rpx;
			padding-bottom: 15rpx;
			
			#link-to-smart-travel {
				width: 300rpx;
				height: 300rpx;
				
				display: flex;
				align-items: center;
				justify-content: center;
				color: white;
				font-size: 2rem;
				font-weight: 600;
				-webkit-text-stroke: 0.5px black;
				background-image: url("/static/homepage/smart-travel.png");
				background-size: 100% 100%;
			}
			
			#link-to-snap-recognize {
				width: 210rpx;
				height: 300rpx;
				
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: space-evenly;
				color: white;
				font-size: 1.2rem;
				font-weight: 600;
				-webkit-text-stroke: 0.3px black;
				
				background-color: #DBF4E4;
				border-radius: 8%;
				border: 0.7px solid #BFD4C6;
				
				img {
					width: 50%;
				}
			}
		}
		
		.content-second-row {
			height: 200rpx;
			width: 600rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			
			#link-to-health-assistant {
				width: 600rpx;
				height: 200rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-evenly;
				
				color: white;
				font-size: 1.2rem;
				font-weight: 600;
				-webkit-text-stroke: 0.3px black;
				background-color: #DBF4E4;
				border-radius: 10%;
				border: 0.7px solid #BFD4C6;
				
				img {
					height: 44%;
				}
			}
		}
	} 
</style>