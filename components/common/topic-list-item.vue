<template>
	<view class="container">
		<view class="pt-1">
			<image :src="item.titlePic" lazy-load class="pic"></image>
		</view>
		<view>
			<view class="title">#{{item.title}}#</view>
			<view class="desc">{{item.desc}}</view>
			<view class="num">动态 {{item.totalNum}} 今日 {{item.todayNum}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		}
	}
</script>

<style lang="less" scoped>
	@import (reference) '@/common/index.less';
	
	.container {
		.flex;
		.mb-2;
		.border;
		.border-base;
		.border-opacity-20;
		.rounded;
	}
	
	.pic {
		.w-23;
		.h-19;
		.rounded;
		.mr-2;
	}
	
	.title {
		.text-lg;
		.text-grey;
		.mb-1;
	}
	
	.desc {
		.text-md;
		.text-base-focus;
		.mb-1;
	}
	
	.num {
		.text-base;
		.text-sm;
	}
</style>
