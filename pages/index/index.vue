<template>
	<view>
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row shadow" style="100rpx;">
			<view v-for="(item, index) in tabBars" class="scroll-row-item px-3 py-2 font-md"
				:key="index"
				:class="tabIndex === index ? 'text-primary text-lg font-weight-bolder' : ''"
				@tap="changeTab(index)">
				{{item.name}}
			</view>
		</scroll-view>
		
		<!-- 横向滑动的视图容器，对应上面的tabber -->
		<swiper :duration="150" :current="tabIndex" :style="'height:' + scrollH + 'px;'" @change="onChangeTab">
			<swiper-item v-for="(item,index) in newsList" :key="index">
				<!-- 每个横向的swiper-item中，用纵向滚动视图容器显示数据 -->
				<scroll-view scroll-y="true" :style="'height:' + scrollH + 'px;'" @scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<view v-for="(item2, index2) in item.list" :key="index2" class="mb-3 p-2">
							<!-- 通用列表项组件 -->
							<common-list-item :item="item2" :index="index2" @follow="follow" @unFollow="unFollow"
								@doSupport="doSupport">
							</common-list-item>
							<!-- 全局组件 -->
							<divider></divider>
						</view>
						<!-- 上拉加载组件 -->
						<loadmore :loadmore="item.loadmore"></loadmore>
					</template>
					<template v-else>
						<nothing></nothing>
					</template>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import commonListItem from '@/components/common/common-list-item.vue';
	import loadmore from '@/components/common/loadmore.vue';
	const demo = [{
		nickname: 'syhan',
		avatarUrl: '/static/img/me.png',
		publishTime: '2022-04-03 23:06:41',
		isFollow: false,
		gender: 0,
		title: '一路向北',
		content: `<p>风在山路吹 过往的画面全都是我不对</p>
				  <p>细数惭愧 我伤你几回</p>
				  <p>我一路向北 离开有你的季节</p>
				  <p>方向盘周围 回转着我的后悔</p>
				  <p>我加速超越 却甩不掉紧紧跟随的伤悲</p>
				  <p>细数惭愧 我伤你几回</p>
				  <p>停止狼狈 就让错纯粹</p>`,
		thumbnail: '/static/img/zhoujielun.png',
		morePics: ["/static/img/zhoujielun4.png","/static/img/zhoujielun5.png","/static/img/zhoujielun6.png"],
		support: {
			type: "support",
			supportCount: 88,
			unSupportCount: 0
		},
		address: "江苏无锡",
		commentCount: 10,
		shareCount: 18,
		likeCount: 14
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
	export default {
		components: {
			commonListItem,
			loadmore
		},
		data() {
			return {
				// 列表高度
				scrollH: 600,
				tabIndex: 0,
				scrollInto: "",
				// 顶部选项卡
				tabBars: [
					{
						name: "推荐",
					},
					{
						name: "体育",
					},
					{
						name: "热点",
					},
					{
						name: "财经",
					},
					{
						name: "军事",
					},
					{
						name: "历史",
					}
				],
				newsList: []
			}
		},
		onLoad() {
			// 异步获取系统信息
			let res = uni.getSystemInfo({
				success: res => {
					console.log(res)
					this.scrollH = res.windowHeight - uni.upx2px(100)
				}
			})
			this.getData()
		},
		// 点击导航栏搜索框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '../search/search'
			})
		},
		onNavigationBarButtonTap(e) {
			uni.navigateTo({
				url: '../write/write'
			})
		},
		methods: {
			// 获取数据
			getData() {
				let arr = []
				// 生成数据
				for (let i = 0; i < this.tabBars.length - 1; i++) {
					// 列表数据模版
					let obj = {
						// 1. 上拉加载更多 2.加载中 3.没有更多了
						loadmore: '上拉加载更多',
						list: demo
					}
					arr.push(obj)
				}
				// 最后一个选项卡内容
				let emptyObj = {
					list: []
				}
				arr.push(emptyObj)
				this.newsList = arr
			},
			follow(e) {
				// console.log(e)
				// console.log(this.tabIndex)
				let list = this.newsList[this.tabIndex].list
				console.log(list)
				list[e].isFollow = true;
				uni.showToast({
					title: '关注成功'
				})
			},
			unFollow(e) {
				let list = this.newsList[this.tabIndex].list
				list[e].isFollow = false;
				uni.showToast({
					title: '取关成功'
				})
			},
			doSupport(e) {
				console.log(e)
				// console.log(e.type)
				// console.log(e.index)
				let list = this.newsList[this.tabIndex].list
				let item = list[e.index]
				// 执行了“踩”操作
				if (item.support.type === 'support' && e.type === 'unSupport') {
					// 顶-1，踩+1
					item.support.supportCount--;
					item.support.unSupportCount++;
				} else if (item.support.type === 'unSupport' && e.type === 'support') { 
					// 执行了“顶”操作
					// 顶+1，踩-1
					item.support.supportCount++;
					item.support.unSupportCount--;
				}
				item.support.type = e.type;
			},
			// 切换选项卡
			changeTab(index) {
				if (this.tabIndex === index) {
					return;
				}
				console.log(index)
				this.tabIndex = index
				console.log(this.tabIndex)
			},
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			// 上拉加载更多
			loadmore(index) {
				// 获取当前列表
				let item = this.newsList[index]
				// 判断是否处于可加载状态
				if (item.loadmore !== '上拉加载更多') {
					return;
				}
				// 修改当前列表的加载状态
				item.loadmore = '加载中...'
				// 模拟数据请求
				setTimeout(() => {
					// 加载数据
					item.list = [...item.list, ...item.list]
					// 修改状态
					item.loadmore = '上拉加载更多'
				}, 2000)
			}
		}
	}
</script>
 
 <style lang="less" scoped>
	 .scroll-row {
		 width: 100%;
		 white-space: nowrap;
	 }
	 
	 .scroll-row-item {
		 display: inline-block !important;
	 }
 </style>