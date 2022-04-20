<template>
	<view class="p-2">
		<!-- 聊天列表 -->
		<scroll-view scroll-y :scroll-with-animation="true">
			<block v-for="(item, index) in list" :key="index">
				<chat-list-item :item="item" :index="index"></chat-list-item>
			</block>
		</scroll-view>
		
		<!-- 输入框 -->
		<friend-chat-bottom @submit="submit"></friend-chat-bottom>
	</view>
</template>

<script>
	const arr= [{
			isMe: false,
			avatar: "/static/img/me.png",
			type: "text",
			content: "你会遇到很多的人",
		},
		{
			isMe: true,
			avatar: "/static/img/haimianbaobao.png",
			type: "text",
			content: "是吗❓",
		},
		{
			isMe: false,
			avatar: "/static/img/me.png",
			type: "text",
			content: "也许是陪你走一站的，也许只是一个过客",
		},
		{
			isMe: false,
			avatar: "/static/img/me.png",
			type: "text",
			content: "于是生命中留下了许多逗号",
		},
		{
			isMe: false,
			avatar: "/static/img/me.png",
			type: "text",
			content: "无数个逗号的等待",
		},
		{
			isMe: false,
			avatar: "/static/img/me.png",
			type: "text",
			content: "也都只是为最终那个句号",
		}
	];
	import friendChatBottom from "@/components/common/friend-chat-bottom.vue";
	import chatListItem from "@/components/common/chat-list-item.vue";
	export default {
		components: {
			friendChatBottom,
			chatListItem
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getdata();
		},
		methods: {
			// 获取聊天数据
			getdata() {
				// 模拟从服务器获取到的数据
				this.list = arr;
			},
			// 发送逻辑
			submit(data) {
				console.log(123)
				// 构建数据
				let obj = {
					isMe: true,
					avatar: "/static/img/haimianbaobao.png",
					type: "text",
					content: data,
				};
				this.list.push(obj);
			}
		}
	}
</script>

<style lang="less" scoped>
	@import  (reference) '@/common/index.less';
</style>
