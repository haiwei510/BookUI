<template>
	<div class="title-box">
		<div class="title-summary">
			<a class="a-home">断言中文网</a>
			<ul class="type-list">
				<li>排行榜</li>
				<li>免费</li>
				<li>完本</li>
				<li>都市</li>
				<li>仙侠</li>
				<li>科幻</li>
			</ul>
			<ul class="my-msg">
				<li>登陆</li>
				<li>注册</li>
				<li>
					<icon class="plane" name='paper-plane-o'></icon>我的书架</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import 'vue-awesome/icons/paper-plane-o'
	import 'vue-awesome/icons/search'
	import Icon from 'vue-awesome/components/Icon'
	
	export default{
		components:{
			Icon
		}
		
	}
</script>

<style lang="scss">
	@import '../../assets/css/common/mixin.scss';
	.title-box {
		background-color: #8f8393;
		overflow: hidden;
	}
	
	.title-summary {
		color: #FFFFFF;
		@include width_auto_center;
		height: 40px;
		.a-home {
			margin-right: 40px;
			display: block;
			float: left;
			height: 100%;
			line-height: 40px;
			font-size: 20px;
		}
		.type-list {
			height: 100%;
			float: left;
			li {
				float: left;
				line-height: 40px;
				padding-right: 25px;
			}
		}
		.my-msg {
			height: 100%;
			float: right;
			li {
				float: left;
				line-height: 40px;
				padding-right: 25px;
			}
			li:last-child {
				position: relative;
				padding-left: 20px;
				cursor: pointer;
				.plane {
					position: absolute;
					top: 12px;
					left: 0;
				}
			}
		}
	}
</style>