<template>
	<view class="ads">		
		<view class="title font">
			选购MacBook
		</view>
		
		<view class="kinds">
			<view class="line flex">
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
			</view>
			
			<view class="line flex">
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
			</view>
			
			<view class="line flex">
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
			</view>
			
			<view class="line flex">
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
				<view class="kind flex flex-column" style="padding-right: 14rpx;">
					<image src="../../static/img/macbookAir.png" style="width: 350rpx;height: 230rpx;"/>
					<view class="content">
						<view class="name">Apple/苹果 MacBook Air</view>
						<view class="price now">¥7999.00</view>
						<view class="price past text-through text-light-muted">¥7999.00</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.ads {
		background-color: #e8f7f9;
		
		.title {
			color: #6c757d;
			padding: 30rpx 15rpx;
		}
		
		.line {
			padding: 7rpx 20rpx;
		}
		.kind {
			image {
				border-radius: 8rpx 8rpx 0 0;
			}
			.content {
				background-color: #ececec;
				padding: 10rpx 15rpx;
				border: 2rpx solid #f7f2f2;
				border-top: 0;
				border-radius: 0 0 8rpx 8rpx;
				
				.price {
					line-height: 36rpx;
				}
				.now {
					color: #fc8e54;
				}
				.past {
					font-size: 24rpx;
				}
			}
		}
	}
</style>
