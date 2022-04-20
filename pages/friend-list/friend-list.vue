<template>
	<view class="body">
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width: 33%;" scrollStyle="border-bottom: 0;"></swiper-tab-head>

		<view class="uni-tab-bar" style="flex-direction: unset;">
			<swiper class="swiper-box" :style="{ height: swiperheight + 'px' }" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items, index) in newslist" :key="index">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length > 0">
							<!-- 图文列表 -->
							<block v-for="(item, index1) in items.list" :key="index1">
								<friend-list-item :item="item" :index="index1"></friend-list-item>
							</block>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<nothing></nothing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
const demo = [
	{
		list: [
			{
				avatar: '/static/img/laoban.png',
				nickname: '老班',
				age: 22,
				gender: 1,
				isFollow: true
			},
			{
				avatar: '/static/img/me.png',
				nickname: '施友涵',
				age: 22,
				gender: 0,
				isFollow: false
			},
			{
				avatar: '/static/img/haimianbaobao.png',
				nickname: '海绵宝宝',
				age: 22,
				gender: 0,
				isFollow: true
			},
			{
				avatar: '/static/img/zhangyuge.png',
				nickname: '章鱼哥',
				age: 22,
				gender: 0,
				isFollow: true
			},
		]
	},
	{
		list: [
				{
					avatar: '/static/img/laoban.png',
					nickname: '老班',
					age: 22,
					gender: 1,
					isFollow: true
				},
				{
					avatar: '/static/img/me.png',
					nickname: '施友涵',
					age: 22,
					gender: 0,
					isFollow: false
				},
				{
					avatar: '/static/img/haimianbaobao.png',
					nickname: '海绵宝宝',
					age: 22,
					gender: 0,
					isFollow: true
				},
				{
					avatar: '/static/img/zhangyuge.png',
					nickname: '章鱼哥',
					age: 22,
					gender: 0,
					isFollow: true
				},
				{
					avatar: '/static/img/xielaoban.png',
					nickname: '蟹老板',
					age: 22,
					gender: 1,
					isFollow: true
				}
		]
	},
	{
		list: [
			{
				avatar: '/static/img/laoban.png',
				nickname: '老班',
				age: 22,
				gender: 1,
				isFollow: true
			},
			{
				avatar: '/static/img/me.png',
				nickname: '施友涵',
				age: 22,
				gender: 0,
				isFollow: false
			},
			{
				avatar: '/static/img/haimianbaobao.png',
				nickname: '海绵宝宝',
				age: 22,
				gender: 0,
				isFollow: true
			},
			{
				avatar: '/static/img/zhangyuge.png',
				nickname: '章鱼哥',
				age: 22,
				gender: 0,
				isFollow: true
			},
			{
				avatar: '/static/img/xielaoban.png',
				nickname: '蟹老板',
				age: 22,
				gender: 1,
				isFollow: true
			}
		]
	}
];
import swiperTabHead from '@/components/common/swiper-tab-head.vue';
import friendListItem from '@/components/common/friend-list-item.vue';

export default {
	components: {
		swiperTabHead,
		friendListItem
	},
	data() {
		return {
			swiperheight: 500,
			tabIndex: 0,
			tabBars: [
				{
					name: '互关',
					id: 'huguan',
					num: demo[0].list.length
				},
				{
					name: '关注',
					id: 'guanzhu',
					num: demo[1].list.length
				},
				{
					name: '粉丝',
					id: 'fensi',
					num: demo[2].list.length
				}
			],
			newslist: demo
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				let height = res.windowHeight - uni.upx2px(100);
				this.swiperheight = height;
			}
		});
	},
	// 监听导航按钮事件
	onNavigationBarButtonTap(e) {
		if (e.index === 0) {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	methods: {
		// tabbar点击事件
		tabtap(index) {
			this.tabIndex = index;
		},
		// 滑动事件
		tabChange(e) {
			this.tabIndex = e.detail.current;
		}
	}
};
</script>

<style>
	
</style>
