<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab" :style="scrollStyle">
			<block v-for="(tab, index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list"
					:class="{'active' : tabIndex == index}"
					:style="scrollItemStyle"
					@tap="tabtap(index)">
					{{tab.name}} {{tab.num ? tab.num : ''}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabBars: Array,
			tabIndex: Number,
			scrollItemStyle: {
				type: String,
				default: ""
			},
			scrollStyle: {
				type: String,
				default: ""
			}
		},
		methods: {
			tabtap(index) {
				this.$emit('tabtap', index);
			},
		}
	}
</script>

<style>
</style>
