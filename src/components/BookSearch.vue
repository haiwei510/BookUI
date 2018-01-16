<template>
	<div id="book-search">
		<router-view name='head'></router-view>
		<div class="main-box">
			<div class="sign-box">
				<div class="sign-type-box">
					<h4 class="type-check">已选</h4>
					<ul class="ul-type">
						<li><span class="checked-show">全部</span></li>
					</ul>
				</div>

				<div class="sign-type-box">
					<h4 class="title-type">分类</h4>
					<ul class="ul-type">
						<li>
							<a class="checked">全部</a>
						</li>
						<li>
							<a>玄幻</a>
						</li>
						<li>
							<a>奇幻</a>
						</li>
						<li>
							<a>武侠</a>
						</li>
						<li>
							<a>仙侠</a>
						</li>
						<li>
							<a>都市</a>
						</li>
						<li>
							<a>游戏</a>
						</li>
						<li>
							<a>言情</a>
						</li>
					</ul>
				</div>
				<div class="sign-type-box">
					<h4 class="title-type">状态</h4>
					<ul class="ul-type">
						<li>
							<a class="checked">全部</a>
						</li>
						<li>
							<a>连载</a>
						</li>
						<li>
							<a>完本</a>
						</li>
					</ul>
				</div>
				<div class="sign-type-box">
					<h4 class="title-type">更新时间</h4>
					<ul class="ul-type">
						<li>
							<a class="checked">全部</a>
						</li>
						<li>
							<a>三日内</a>
						</li>
						<li>
							<a>七日内</a>
						</li>
						<li>
							<a>半月内</a>
						</li>
						<li>
							<a>一月内</a>
						</li>
					</ul>
				</div>
				<div class="sign-type-box">
					<h4 class="title-type">标签</h4>
					<ul class="ul-type">
						<li>
							<a class="checked">全部</a>
						</li>
						<li>
							<a>丹药</a>
						</li>
						<li>
							<a>功法</a>
						</li>
						<li>
							<a>龙</a>
						</li>
						<li>
							<a>穿越</a>
						</li>
						<li>
							<a>重生</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="book-list-box">
				<ul class="condition-top">
					<li class="red">人气排序
						<icon name="long-arrow-up"></icon>
					</li>
					<li>更新时间</li>
					<li>推荐票</li>
				</ul>
				<div class="find-num">共找到<span>5644</span>本书</div>
				<ul class="ul-book">
					<li v-for="item in 20">
						<div class="book-picture-box">
							<a><img src="../assets/img/bookitem.png"></a>
						</div>
						<div class="book-content-sh">
							<p class="book-name">
								<a>不朽凡人</a>
							</p>
							<p class="descript-type"><span class="user-icon-box"><icon class="user-icon" name="user-circle-o"></icon>耳根</span><span>仙侠.幻想修仙</span><span>连载中</span></p>
							<p class="descript-book">在这里，拥有灵根才能修仙，所有凡根注定只是凡人。莫无忌，只有凡根，一介凡人！妖魔横行，世人苦难。神兵魔刃，遮耀天下。手机上的一款游戏修改器，意外成了路胜脑海里的异能。也成了</p>
							<p class="txt-count">368.58万字</p>
						</div>
					</li>
				</ul>

				<div class="page-change-box">
					<p>共25页<input type="number"><span>GO</span></p>
					<ul>
						<li>
							<icon class="ico-btn" name="angle-left"></icon>
						</li>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>
							<icon class="ico-btn" name="angle-right"></icon>
						</li>
					</ul>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import 'vue-awesome/icons/long-arrow-up'
	import 'vue-awesome/icons/long-arrow-down'
	import 'vue-awesome/icons/angle-left'
	import 'vue-awesome/icons/angle-right'
	import 'vue-awesome/icons/user-circle-o'
	import Icon from 'vue-awesome/components/Icon'

	export default {
		components: {
			Icon
		}

	}
</script>

<style lang="scss" scoped="scoped">
	@import "../assets/css/book-search.scss"
</style>