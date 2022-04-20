<template>
	<view class="px-2">
		<template v-if="list.length > 0">
		    <!-- 消息列表 -->
			<block v-for="(item, index) in list" :key="index">
				<msg-list-item :item="item" :index="index" @click.native="chat(index)"></msg-list-item>
			</block>
		</template>
		
		<template v-else>
			<nothing></nothing>
		</template>
		
		<uni-popup ref="popup" type="top">
			<view class="menu-item" @tap="popupEvent('friend')">
				<text class="iconfont icon-sousuo mr-2"></text>
				<text>添加好友</text>
			</view>
			<view class="menu-item" @tap="popupEvent('clear')">
				<text class="iconfont icon-shanchu mr-2"></text>
				<text>清楚列表</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	const demo = [{
			avatarUrl: "/static/img/laoban.png",
			nickname: "老班",
			time: "20:25",
			content: "没有理由 写代码就是开心",
			noReadNum: 2
		},
		{
			avatarUrl: "/static/img/me.png",
			nickname: "施友涵",
			time: "20:25",
			content: "你会遇到很多的人",
			noReadNum: 3
		},
		{
			avatarUrl: "/static/img/haimianbaobao.png",
			nickname: "海绵宝宝",
			time: "20:25",
			content: "山水万程 皆要好运",
			noReadNum: 5
		},
		{
			avatarUrl: "/static/img/zhangyuge.png",
			nickname: "章鱼哥",
			time: "20:25",
			content: "向海风许愿 在山海想见",
			noReadNum: 5
		},
		{
			avatarUrl: "/static/img/xielaoban.png",
			nickname: "蟹老板",
			time: "20:25",
			content: "有趣的人自然相互吸引",
			noReadNum: 1
		},
		{
			avatarUrl: "/static/img/pilaoban.png",
			nickname: "痞老板",
			time: "20:25",
			content: "怀旧的人活得总像拾荒者",
			noReadNum: 4
		}
	]
	// 自定义消息列表item组件
	import msgListItem from "@/components/common/msg-list-item.vue";
	// 弹出层组件
	import uniPopup from "@/components/uni/uni-popup/uni-popup.vue";
	
	export default {
		components: {
			msgListItem,
			uniPopup
		},
		data() {
			return {
				list: []
			};
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			this.getData();
		},
		// 监听导航按钮点击事件
		onNavigationBarButtonTap(e) {
			switch(e.index) {
				case 0:
					console.log("点击了左边按钮");
					uni.navigateTo({
						url: '../friend-list/friend-list'
					})
					// 关闭弹出层
					this.$refs.popup.close();
					break;
				case 1:
					this.$refs.popup.open();
					break;
			}
		},
		methods: {
			// 获取数据
			getData() {
				setTimeout(() => {
					// 赋值
					this.list = demo;
					// 关闭下拉刷新
					uni.stopPullDownRefresh();
				}, 1000);
			},
			// 弹出层选型点击事件
			popupEvent(e) {
				switch (e) {
					case 'friend':
						console.log('添加好友');
						uni.navigateTo({
							url: '../friend-list/friend-list'
						})
						break;
					case 'clear':
						console.log('清楚列表');
						this.list = "";
						break;
				}
				// 关闭弹出层
				this.$refs.popup.close();
			},
			chat(index) {
				uni.navigateTo({
					url: '../friend-chat/friend-chat'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import  (reference) '@/common/index.less';
	
	.msg-list {
		.py-2;
		.flex;
		
		image {
			.w-10;
			.h-10;
			.rounded-full;
			.mr-2;
			flex-shrink: 0;
		}
		
		view {
			flex: 1;
		}
	}
	
	.menu-item {
		.flex;
		.items-center;
		.justify-center;
		.h-10;
		.text-lg;
		.px-2;
		border-bottom: 1px solid #ccc;
	}
</style>
