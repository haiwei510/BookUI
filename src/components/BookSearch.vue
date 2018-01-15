<template>
	<div id="book-search">
		<header class="head-box">

		</header>
		<div class="main-box">
			<div class="sign-box">

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
						<div class="book-content">
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

<style lang="scss">
	@import "../assets/css/book-search.scss"
</style>