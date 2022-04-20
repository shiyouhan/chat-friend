<template>
	<view>
		<detail-info :item="detail"></detail-info>
		
		<view class="text-xl p-2 font-weight-bold">最新评论{{comments.length}}</view>
		<view class="uni-comment px-2">
			<block v-for="(item, index) in comments" :key="index">
				<comments-item :item="item" :index="index"></comments-item>
			</block>
		</view>
		
		<!-- 分享弹框 -->
		<uni-popup ref="popup" type="bottom">
			<view class="text-center py-2 font-md border-bottom">分享到</view>
			<view class="flex align-center">
				<view class="icon-wrapper">
					<view class="iconfont icon-QQ icon" style="background-color: #3d79a4;">
					</view>
					<text class="font-sm mt-1 text-muted">QQ</text>
				</view>
				<view class="icon-wrapper">
					<view class="iconfont icon-weixin icon" style="background-color: #09BB07;">
					</view>
					<text class="font-sm mt-1 text-muted">微信</text>
				</view>
				<view class="icon-wrapper">
					<view class="iconfont icon-xinlangweibo icon" style="background-color: #d94400;">
					</view>
					<text class="font-sm mt-1 text-muted">微博</text>
				</view>
			</view>
			<view class="text-center py-2 font-md border-top" @tap="cancel()">取消</view>
		</uni-popup>
	</view>
</template>

<script>
	import detailInfo from "@/components/common/detail-info.vue";
	import commentsItem from "@/components/common/comments-item.vue";
	import uniPopup from "@/components/uni/uni-popup/uni-popup.vue";
	
	export default {
		components: {
			detailInfo,
			commentsItem,
			uniPopup
		},
		data() {
			return {
				detail: {},
				comments: [],
				shareShow: false
			}
		},
		onLoad(e) {
			const obj = JSON.parse(e.detailData);
			console.log(obj)
			this.initdata(obj)
			this.detail = obj;
			this.getcomments();
		},
		// 监听导航右边按钮
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				console.log("分享")
				this.$refs.popup.open()
			}
		},
		onBackPress() {
			this.$refs.popup.open()
		},
		methods: {
			// 初始化数据，将窗口标题修改为文章标题
			initdata(obj) {
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
			cancel() {
				this.$refs.popup.close()
			},
			getcomments() {
				let arr = [
					// 一级评论
					{
						id: 1,
						fid: 0,
						avatarUrl: "https://syhan.oss-cn-hangzhou.aliyuncs.com/img/haimianbaobao.png",
						nickname: "海绵宝宝",
						time: "2022-04-12 22:22:22",
						content: "开始封山路，开始封山路",
					},
					// 子级评论
					{
						id: 2,
						fid: 1,
						avatarUrl: "https://syhan.oss-cn-hangzhou.aliyuncs.com/img/xielaoban.png",
						nickname: "蟹老板",
						time: "2022-04-12 22:22:22",
						content: "五分钟之后可以比赛",
					},
					{
						id: 3,
						fid: 1,
						avatarUrl: "https://syhan.oss-cn-hangzhou.aliyuncs.com/img/xielaoban.png",
						nickname: "蟹老板",
						time: "2022-04-12 22:22:22",
						content: "等等，有车上山",
					},
					{
						id: 4,
						fid: 0,
						avatarUrl: "https://syhan.oss-cn-hangzhou.aliyuncs.com/img/haimianbaobao.png",
						nickname: "海绵宝宝",
						time: "2022-04-12 22:22:22",
						content: "是86，86上山了",
					}
				];
				this.comments = arr;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import (reference) '@/common/index.less';
	
	.u-comment {
		padding: 0 20rpx;
	}
	
	.u-comment-title {
		padding: 0 20rpx;
		font-size: 30rpx;
		font-weight: bold;
	}
	
	.icon-wrapper {
		.flex-1;
		.flex;
		.flex-col;
		.items-center;
		.justify-center;
		.py-2;
	}
	
	.icon {
		.text-white;
		.flex;
		.items-center;
		.justify-center;
		.text-xl;
		.rounded-full;
		.w-10;
		.h-10;
	}
</style>
