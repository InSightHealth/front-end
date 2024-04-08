<template>
	<view class="profile">
		<view class="item">
			<view class="item-left">昵称</view>
				<view class="item-right" @tap="nameChange">
					<text class="text-right">{{ (nickname == '')?'未填写':nickname }}</text>
					<image class="icon-right" src="/static/personal/more1.png"></image>
				</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">性别</view>
			<picker @change="bindPickerChange" :value="index" :range="array">
				<view class="item-right">
					<text class="text-right"> {{ (genderSet)?array[index]:"未填写" }} </text>
					<image class="icon-right" src="/static/personal/more1.png"></image>
				</view>
			</picker>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">生日</view>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="item-right">
					<view class="text-right">{{ date }}</view>
					<image class="icon-right" src="/static/personal/more1.png"></image>
				</view>
			</picker>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">身高</view>
			<view class="item-right" @tap="heightChange">
				<view class="text-right">{{ (height == 0)?'未填写':height+"cm" }}</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view>
		
		<view class="item">
			<view class="item-left">体重</view>
			<view class="item-right" @tap="weightChange">
				<view class="text-right">{{ (weight == 0)?'未填写':weight+"kg" }}</view>
				<image class="icon-right" src="/static/personal/more1.png"></image>
			</view>
		</view>
		<view class="line"></view> 
		
		<uni-popup ref="popup-name" type="dialog">
			<uni-popup-dialog mode="input" title="输入你的名字" v-model="nickname" placeholder="请在此输入"/>
		</uni-popup>
		
		<uni-popup ref="popup-height" type="dialog">
			<uni-popup-dialog mode="input" title="输入你的体重(公斤)" v-model="height" placeholder="请在此输入"/>
		</uni-popup>
		
		<uni-popup ref="popup-weight" type="dialog">
			<uni-popup-dialog mode="input" title="输入你的身高(厘米)" v-model="weight" placeholder="请在此输入"/>
		</uni-popup>
		
		<view class="save-btn" @tap="save">保存</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
			        format: true
			})
			return {
			    date: currentDate,
				array: ['男', '女'],
				index: 0,
				genderSet: false,
				height: 0,
				weight: 0,
				nickname: ''
			}
		},
		onLoad() {
			uni.request({
				url: 'http://82.157.124.83:51603/user/api/v1',
				method: 'GET',
				header: {
					'token': getApp().globalData.token
				},
				success: (res) => {
					console.log(res.data.data);
					const response = res.data.data
					this.date = response.birthday;
					this.height = response.height;
					this.weight = response.weight;
					this.genderSet = true;
					if (response.gender == '男') {
						this.index = 0;
					} else if (response.gender == '女') {
						this.index = 1;
					}
					
					this.nickname = response.nickname;
				}
			})
		},
		computed: {
		    startDate() {
		        return this.getDate('start');
		    },
		    endDate() {
		        return this.getDate('end');
		    }
		},
		methods: {
			bindPickerChange: function(e) {
			    console.log('picker发送选择改变，携带值为', e.detail.value)
			    this.index = e.detail.value;
				this.genderSet = true;
			},
			bindDateChange: function(e) {
			    this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			
			    if (type === 'start') {
			        year = year - 100;
			    }
				
			    month = month > 9 ? month : '0' + month;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			nameChange() {
				this.$refs['popup-name'].open();
			},
			heightChange() {
				this.$refs['popup-height'].open();
			},
			weightChange() {
				this.$refs['popup-weight'].open();
			},
			save() {
				uni.request({
					url: 'http://82.157.124.83:51603/user/api/v1',
					method: 'PUT',
					data: {
						"birthday": this.date,
						"city": "成都",
						"gender": this.array[this.index],
						"height": this.height,
						"nickname": this.nickname,
						"phone": getApp().globalData.phone,
						"weight": this.weight
					},
					header: {
						'token': getApp().globalData.token
					},
					success() {
						uni.showToast({
							title: '保存成功',
							duration: 2000
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	
	.item-high {
		height: 173rpx;
		width: 750rpx;
	}
	
	.item {
		height: 100rpx;
		width: 750rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 29rpx;
		
		.item-left {
			margin-left: 33rpx;
			font-size: 42rpx;
		}
		
		.item-right {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			margin-right: 33rpx;
			
			.icon-right {
				margin-right: 33rpx;
				width: 19rpx;
				height: 33rpx;
				margin-bottom: 5rpx;
			}
			
			.text-right {
				margin-right: 43rpx;
				font-size: 35rpx;
				color: rgba(0, 0, 0, 0.46);
			}
		}
	}
	.line {
		height: 1px;
		width: 698rpx;
		background-color: rgba(0, 0, 0, 0.08);
	}
	
	.save-btn {
		position: fixed;
		left: 27rpx;
		bottom: 30rpx;
		width: 696rpx; 
		height: 106rpx; 
		background-color: rgba(8, 223, 134, 1); 
		border-radius: 48rpx;
		
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40rpx;
		color: white;
	}
}
</style>
