<template>
	<view>
		<!-- 话题介绍组件 -->
		<topic-info :item="topicInfo"></topic-info>
		
		<!-- 消息区 -->
		<divider></divider>
		<block v-for="count in 2">
			<view class="top">
				<text class="iconfont icon-xiaoxi1 text-grey text-lg font-weight-bolder pl-2 mx-2"></text>
				<text>【新人必读】uni-app实战 社区交友</text>
			</view>
			<divider></divider>
		</block>
		
		<!-- 列表 -->
		<view class="px-2">
			<block v-for="(item, index) in list" :key="index">
				<common-list-item :item="item" :index="index"></common-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	const demo = [{
		nickname: 'syhan',
		avatarUrl: '/static/img/me.png',
		publishTime: '2022-04-03 23:06:41',
		isFollow: false,
		title: '风在山路吹 过往的画面全都是我不对',
		thumbnail: '/static/img/zhoujielun.png',
		support: {
			type: "support",
			supportCount: 88,
			unSupportCount: 0
		},
		commentCount: 18,
		shareCount: 14
	},
	{
		nickname: 'Jay',
		avatarUrl: '/static/img/jay.png',
		publishTime: '2022-04-05 17:17:41',
		isFollow: false,
		title: '我的脸上始终挟带 一抹浅浅的无奈',
		thumbnail: '/static/img/zhoujielun1.png',
		support: {
			type: "support",
			supportCount: 999,
			unSupportCount: 3
		},
		commentCount: 19,
		shareCount: 2
	},
	{
		nickname: '施友涵',
		avatarUrl: '/static/img/avatar3.jpg',
		publishTime: '2022-04-03 23:06:41',
		isFollow: false,
		title: '乌云在我们心里 搁下一块阴影',
		thumbnail: '/static/img/zhoujielun2.png',
		support: {
			type: "support",
			supportCount: 456,
			unSupportCount: 5
		},
		commentCount: 3,
		shareCount: 56
	}];
	import topicInfo from "@/components/common/topic-info.vue";
	import commonListItem from "@/components/common/common-list-item.vue"
	export default {
		components: {
			topicInfo,
			commonListItem
		},
		data() {
			return {
				topicInfo: {
					id: 0,
					titlePic: '',
					title: '',
					desc: '',
					totalNum: 0,
					todayNum: 0
				},
				list: demo
			};
		},
		onLoad(option) {
			console.log(option)
			this.topicInfo = JSON.parse(option.item)
			console.log(this.topicInfo)
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="less">
	@import  (reference) '@/common/index.less';
	
	.top {
		.h-10;
		line-height: 100rpx;
		.text-lg;
	}
</style>
