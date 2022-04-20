<template>
	<view>
		<view class="info-wrapper">
			<image class="avatar" :src="item.avatarUrl" lazy-load="avatar" @tap="openSpace()"></image>
			<view class="flex-1">
				<view class="text-md">{{item.nickname}}</view>
				<view class="publish-time">{{item.publishTime}}</view>
			</view>
			<view v-if="!item.isFollow" class="follow-btn animated fast" hover-class="fadeIn" @tap="follow">
				关注
			</view>
			<view v-else class="unfollow-btn animated fast" hover-class="fadeIn" @tap="unFollow">已关注</view>
		</view>
		
		<view class="text-lg my-1 py-1" @tap="openDetail(item)">
			{{item.title}}
		</view>
		
		<!-- 图片 -->
		<image v-if="item.thumbnail" :src="item.thumbnail" class="thumbnail">
		</image>
		
		<!-- 图标 -->
		<view class="flex align-center">
			<!-- 顶 -->
			<view class="icon-wrapper animated fast" hover-class="jello text-grey" @tap="doSupport('support')"
				:class="item.support.type === 'support' ? 'support-active' : ''">
				<text class="iconfont icon-dianzan mr-2"></text>
				<text>{{item.support.supportCount}}</text>
			</view>
			<!-- 踩 -->
			<view class="icon-wrapper animated fast" hover-class="jello text-grey" @tap="doSupport('unSupport')"
				:class="item.support.type === 'unSupport' ? 'support-active' : ''">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unSupportCount}}</text>
			</view>
			<view class="icon-wrapper animated fast" hover-class="jello" @tap="openDetail">
				<text class="iconfont icon-pinglun2 mr-2"></text>
				<text>{{item.commentCount}}</text>
			</view>
			<view class="icon-wrapper animated fast" hover-class="jello" @tap="openDetail">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.shareCount}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		methods: {
			// 打开个人空间
			openSpace() {
				console.log('打开个人空间')
			},
			// 关注
			follow() {
				//console.log('关注')
				// 通知父组件
				this.$emit('follow', this.index)
			},
			// 取关
			unFollow() {
				//console.log('已关注')
				// 通知父组件
				this.$emit('unFollow', this.index)
			},
			// 打开详情页
			openDetail(item) {
				console.log("打开详情页")
				uni.navigateTo({
					url: `../article-detail/article-detail?detailData=${JSON.stringify(item)}`
				});
			},
			// 顶踩操作
			doSupport(type) {
				console.log(type)
				this.$emit('doSupport', {
					type,
					index: this.index
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import (reference) '@/common/index.less';

	.info-wrapper {
		.flex;
		.items-center;
		.justify-between;
	}

	.avatar {
		.w-10;
		.h-10;
		.rounded-full;
		.mr-2;
	}

    .thumbnail {
		.h-35;
		.w-full;
		.rounded-md;
	}
	
	.publish-time {
		.text-sm;
		color: #9D9589;
	}

	.follow-btn {
		.w-9;
		.h-5;
		.flex;
		.items-center;
		.justify-center;
		.rounded-md;
		.text-white;
		.bg-grey;
	}
	
	.unfollow-btn {
		.w-9;
		.h-5;
		.flex;
		.items-center;
		.justify-center;
		.rounded-md;
		.text-grey;
		// .bg-grey;
	}

	.icon-wrapper {
		.flex;
		.items-center;
		.justify-center;
		.flex-1;
	}
	
	.support-active {
		.text-grey;
	}
</style>
