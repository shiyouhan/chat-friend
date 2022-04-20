<template>
	<view class="p-2">
		<template v-if="searchList.length === 0">
			<!-- 搜索历史 -->
			<view class="py-2 text-md">
				搜索历史
			</view>
			<view class="flex flex-wrap">
				<view class="history-item" v-for="(item, index) in list" :key="index" @tap="tapSearchHistory(item)">
					{{item}}
				</view>
			</view>
		</template>
		
		<template v-else>
			<!-- 搜索后的结果 -->
			<view v-for="(item, index) in searchList" :key="index">
				<common-list-item :item="index" :index="index"></common-list-item>
			</view>
		</template>
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
		title: '我怀疑这奇遇只是个恶作剧',
		thumbnail: '/static/img/banner3.jpg',
		support: {
			type: "support",
			supportCount: 456,
			unSupportCount: 5
		},
		commentCount: 3,
		shareCount: 56
	}];
	import commonListItem from "@/components/common/common-list-item.vue";
	export default {
		components: {
			commonListItem
		},
		data() {
			return {
				searchTxt: '',
				list: [
					'社区交友应用',
					'UniAPP从入门到精通',
					'Vue.js实战开发',
					'前后端分离开发',
					'跨平台开发',
					'前端工程化',
					'小程序云开发',
				],
				//搜索结果
				searchList: []
			}
		},
		// 监听搜索框输入
		onNavigationBarSearchInputChanged(e) {
			console.log(e)
			this.searchTxt = e.text
		},
		// 监听点击导航栏搜索按钮
		onNavigationBarButtonTap(e) {
			console.log(e)
			// 根据 e.index 确定点击了哪个按钮
			this.searchEvent()
		},
		methods: {
			// 点击搜索历史
			tapSearchHistory(txt) {
				this.searchTxt = txt
				this.searchEvent()
			},
			// 搜索事件
			searchEvent() {
				// 收起软键盘
				uni.hideKeyboard()
				// loading
				uni.showLoading({
					title: '加载中',
					mask: false
				})
				// 请求搜索
				setTimeout(() => {
					this.searchList = demo
					uni.hideLoading()
				}, 2000)
			}
		}
	}
</script>

<style lang="less" scoped>
	@import (reference) '@/common/index.less';
	
	.history-item {
		.border;
		.border-base;
		.rounded;
		.text-sm;
		.text-base;
		.mr-2;
		.my-1;
		.px-2;
	}
</style>
