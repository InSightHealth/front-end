<template>
	<view class="root-view">
		<tab-chat class="showMore-box" 
			:style="{
				transform: 'translateY('+moveY+'px)', 
			}" 
			@touchstart="start" 
			@touchend="end" 
			@touchmove="move">
		</tab-chat>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				startData: {
					clientY: '',
				},
				moveY: 0,
				touch: {},
				state: 0,
			}
		},
		methods: {
			start(e){ 
			    this.startData.clientY = e.changedTouches[0].clientY;
			},
			end(e){ 
				//触摸事件结束
				console.log("this.moveY = ", this.touch.clientY - this.startData.clientY);
				if (this.touch.clientY - this.startData.clientY < -300) {
					this.state = 1;
					this.moveY = 0;
				}
				else if(this.touch.clientY - this.startData.clientY > 300) {
					this.state = 0;
					this.moveY = 350;
				} else {
					this.moveY = 0;
				}
			},
			move(event) {
				let touch = event.touches[0];
				this.touch = touch;
				let data = 0;
				if(touch.clientY > this.startData.clientY && this.state === 0) {  //向上移动
					data = touch.clientY - this.startData.clientY;
					if(data > 1000) {
						data = 1000;
					}
				}
				if(touch.clientY < this.startData.clientY && this.state === 1) {  //向下移动
					if(this.moveY === 0) {
						data = 0
					} else {
						data = touch.clientY - this.startData.clientY;
						if(data < -1000) {
							data = -1000;
						}
					}
				}
				this.moveY = data;
			},
		}
	}
</script>

<style>
.root-view {
	height: 100%;
	background-color: black;
	.showMore-box{
		transition: all .5s;
		background-color: white;
	}
}
</style>
