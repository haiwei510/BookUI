<template>
	<div id="show-type">
		<HeadSecond></HeadSecond>
		<div class="title-desc">
			<div>
				<p>玄幻仙侠</p>
				<div class="book-search"><input type="text" placeholder="星辰变"><span @click="toSearch"><icon class="icon-search" name="search"></icon></span></div>
			</div>
		</div>

		<div class="content_1">
			<div class="recommend">
				<RecommendList title="小编推荐"></RecommendList>
			</div>

			<div class="list-box">
				<ul class="good-list">
					<li v-for="item in 6">
						<div class="img-box"><img src="../assets/img/book.png" /></div>
						<h3><a>诱拐魔尊，徒儿好无耻</a></h3>
						<p>造物主的能力</p>
					</li>

				</ul>
				<div class="new-better">
					<h3 class="new-wrap">
						<span>新书精选</span>
					</h3>
					<ul>
						<li v-for="item in 6">
							<a>超级科技创意</a>
							<i>最终成为传奇科学家</i>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<GridBook title="新书推荐"></GridBook>
		<GridBook title="完本推荐"></GridBook>

		<BookList title="人气连载"></BookList>

		<div id="hot-type">
			<p class="book-type">热门分类</p>
			<div class="type-model">
				<p class="hot-type-small">
					<h3>史诗奇幻</h3></p>
				<ul class="ul-hot-type">
					<li v-for="item in 8">
						<div>
							<a><img src="../assets/img/expent3.png"></a>
						</div>
						<div>
							<h4><a>领主万万岁</a></h4>
							<p>历史研究生穿越领主，学历史的也能蛊惑人心,学历史的也能蛊惑人心！</p>
							<a class="author-type">旧人长久</a>
						</div>

					</li>
				</ul>
			</div>
			
			<div class="type-model">
				<p class="hot-type-small">
					<h3>剑与魔法</h3></p>
				<ul class="ul-hot-type">
					<li v-for="item in 8">
						<div>
							<a><img src="../assets/img/expent3.png"></a>
						</div>
						<div>
							<h4><a>领主万万岁</a></h4>
							<p>历史研究生穿越领主，学历史的也能蛊惑人心,学历史的也能蛊惑人心！</p>
							<a class="author-type">旧人长久</a>
						</div>

					</li>
				</ul>
			</div>
			

		</div>

		<UpdateNew></UpdateNew>

	</div>
</template>

<script>
	import 'vue-awesome/icons/paper-plane-o'
	import 'vue-awesome/icons/search'
	import Icon from 'vue-awesome/components/Icon'
	import RecommendList from '@/components/parts/RecommendList'
	import BookList from '@/components/parts/BookList'
	import UpdateNew from '@/components/parts/UpdateNew'
	import GridBook from '@/components/parts/GridBook'
	import HeadSecond from '@/components/parts/HeadSecond'

	export default {
		components: {
			Icon,
			RecommendList,
			BookList,
			UpdateNew,
			GridBook,
			HeadSecond
		},
		methods:{
			toSearch:function(){
				this.$router.push({ path: 'bookSearch' });
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '../assets/css/show-type.scss'
</style>