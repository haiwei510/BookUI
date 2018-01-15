<template>
	<header id="in-head">
		<div class="website-top">
			<div class="top-content">
				<p class="reg-login">
					<span><a>登陆</a></span>
					<span><a>注册</a></span>
				</p>
			</div>
		</div>
		<div class="website-info">
			<div class="website-name">断言小说网</div>
			<div class="book-search"><input type="text" placeholder="星辰变"><span><icon class="icon-search" name="search"></icon></span></div>
			<div class="bookself"><icon class="icon-columns" name='paper-plane-o'></icon>我的书架</div>
		</div>
		<nav class="website-nva">
			<ul class="in-nva">
				<li>
					<icon class="nvaicon" name="navicon"></icon>
					<router-link to="/showType">全部分类</router-link>
				</li>
				<li>
					<router-link to="/showType">排行榜</router-link>
				</li>
				<li>
					<router-link to="/showType">完本</router-link>
				</li>
				<li>
					<router-link to="/showType">热门连载</router-link>
				</li>
				<li>
					<router-link to="/showType">言情</router-link>
				</li>
				<li>
					<router-link to="/showType">玄幻</router-link>
				</li>
				<li>
					<router-link to="/showType">仙侠</router-link>
				</li>
				<li>
					<router-link to="/showType">灵异</router-link>
				</li>
				<li>
					<router-link to="/showType">游戏</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	import 'vue-awesome/icons/navicon'
	import 'vue-awesome/icons/paper-plane-o'
	import 'vue-awesome/icons/search'
	import Icon from 'vue-awesome/components/Icon'

	export default {
		components: {
			Icon,
		}
	}
</script>

<style lang='scss'>
	@import '../../assets/css/head-index.scss'
</style>