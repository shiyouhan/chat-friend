<template>
	<view>
		<uni-nav-bar statusBar backgroundColor="#538399" color="#FFFFFF" title="动态"></uni-nav-bar>

		<scroll-view srcoll-y class="mt-1">
			<!-- 轮播图 -->
			<swiper class="px-2" :indicator-dots="true" :interval="3000" :duration="1000">
				<block v-for="(item, index) in topic.swiper" :key="index">
					<swiper-item><image :src="item.src" class="w-full rounded" mode="aspectFill" lazy-load></image></swiper-item>
				</block>
			</swiper>

			<!-- 热门分类 -->
			<hot-topic :nav="topic.nav"></hot-topic>

			<!-- 最近更新 -->
			<view class="px-2">
				<view class="text-lg mb-1">最近更新</view>
				<block v-for="(item, index) in topic.list" :key="index"><topic-list-item :item="item" :index="index" @click.native="gotoDetail(item)"></topic-list-item></block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni/uni-nav-bar/uni-nav-bar.vue';
import hotTopic from '@/components/common/hot-topic.vue';
import topicListItem from '@/components/common/topic-list-item.vue';

export default {
	components: {
		uniNavBar,
		hotTopic,
		topicListItem
	},
	data() {
		return {
			swiperheight: 600,
			topic: {
				swiper: [
					{
						src: '/static/img/banner3.jpg'
					},
					{
						src: '/static/img/banner5.jpg'
					},
					{
						src: '/static/img/banner6.jpg'
					}
				],
				nav: [
					{
						name: '最新'
					},
					{
						name: '音乐'
					},
					{
						name: '打卡'
					},
					{
						name: '情感'
					},
					{
						name: '故事'
					},
					{
						name: '喜爱'
					}
				],
				list: [
					{
						id: 1,
						titlePic: '/static/img/tuihou.jpg',
						title: '退后',
						desc: '酸酸的空气 嗅出我们的距离',
						totalNum: 50,
						todayNum: 10
					},
					{
						id: 2,
						titlePic: '/static/img/geqian.jpg',
						title: '搁浅',
						desc: '我睁开双眼看着空白 忘记你对我的期待',
						totalNum: 50,
						todayNum: 10
					},
					{
						id: 3,
						titlePic: '/static/img/yiluxiangbei.jpg',
						title: '一路向北',
						desc: '在车窗外面徘徊 是我错失的机会',
						totalNum: 50,
						todayNum: 10
					},
					{
						id: 4,
						titlePic: '/static/img/tuihou.jpg',
						title: '退后',
						desc: '酸酸的空气 嗅出我们的距离',
						totalNum: 50,
						todayNum: 10
					},
					{
						id: 5,
						titlePic: '/static/img/geqian.jpg',
						title: '搁浅',
						desc: '我睁开双眼看着空白 忘记你对我的期待',
						totalNum: 50,
						todayNum: 10
					},
					{
						id: 6,
						titlePic: '/static/img/yiluxiangbei.jpg',
						title: '一路向北',
						desc: '在车窗外面徘徊 是我错失的机会',
						totalNum: 50,
						todayNum: 10
					}
				]
			}
		};
	},
	methods: {
		gotoDetail(item) {
			uni.navigateTo({
				url: '/pages/topic-detail/topic-detail?item=' + JSON.stringify(item),
			})
		}
	}
};
</script>

<style scoped>
.topic-swiper {
	padding: 0 20upx 20upx 20upx;
}

.topic-swiper image {
	width: 100%;
	border-radius: 10upx;
}

.topic-new {
	padding: 20upx;
}

.topic-new > view:first-child {
	padding-bottom: 5upx;
	font-size: 32upx;
}
</style>
