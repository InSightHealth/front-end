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
			}
		},
		methods: {
			start(e){ 
			    this.startData.clientY = e.changedTouches[0].clientY;
			},
			end(e){ 
				//触摸事件结束恢复原状
				this.moveY = 0;
				
				if(Math.abs(this.touch.clientY-this.startData.clientY) > 100) {  //在事件结束时，判断滑动的距离是否达到出发需要执行事件的要求
					console.log('执行查看跳转事件');
					// this.touch = {};
				} else {
					console.log('滑动距离不够，不执行跳转')
					// this.touch = {};
				}
			},
			move(event) {  //@touchmove触摸移动
				let touch = event.touches[0];  //滑动过程中，手指滑动的坐标信息 返回的是Objcet对象
				this.touch = touch;
				let data = touch.clientY - this.startData.clientY;
				if(touch.clientY > this.startData.clientY) {  //向上移动
					if(data > 250) {
						data = 250;
					}
				}
				if(touch.clientY < this.startData.clientY) {  //向右移动
					if(this.moveY == 0) {
						data = 0
					} else {
						if(data < -50) {
							data = 50;
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
