<template>
	<view class="tag-gender iconfont" :class="[gender === 0 ? 'icon-nan' : 'icon-nv']">
		{{gender}}
	</view>
</template>

<script>
	export default {
		props: {
			sex: Number,
			gender: Number
		}
	}
</script>

<style lang="less" scoped>
	@import (reference) '@/common/index.less';
	
	.tag-gender {
		.bg-primary;
		.text-white;
		.text-sm;
		.ml-1;
		.rounded;
		line-height: 20rpx;
	}
</style>
