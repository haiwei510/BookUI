<template>

	<!--分类模块-->
	<div class="book-model">
		<p class="book-type">{{title}}</p>
		<div class="book-content">
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent.png" /></div>
				<p class="name">方外：消失的八门</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">徐公子胜治</p>
				<div class="discript">徐公子胜治新书来袭！惊疲飘册风火爵要，江湖八门展奇技!</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent2.png" /></div>
				<p class="name">大荒仙踪</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">触控</p>
				<div class="discript">无数修行者，渴求飞升成仙，千百年来，却是没有一人成功。无数修行者，渴求飞升成仙，千百年来，却是没有一人成功。佛道相争，大儒林立，十六岁的少年道士柳生，身不由己卷入江湖，开启仙侠之旅</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent3.png" /></div>
				<p class="name">无限召唤</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">夜浮尘</p>
				<div class="discript">少年苏暮掌握神秘古印玺，召唤古代英勇之英灵，他的出现给新纪元掀起滔天巨浪，他在这部历史上添上了浓厚的一笔。</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent.png" /></div>
				<p class="name">方外：消失的八门</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">徐公子胜治</p>
				<div class="discript">徐公子胜治新书来袭！惊疲飘册风火爵要，江湖八门展奇技!</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent2.png" /></div>
				<p class="name">大荒仙踪</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">触控</p>
				<div class="discript">无数修行者，渴求飞升成仙，千百年来，却是没有一人成功。佛道相争，大儒林立，十六岁的少年道士柳生，身不由己卷入江湖，开启仙侠之旅</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent3.png" /></div>
				<p class="name">无限召唤</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">夜浮尘</p>
				<div class="discript">少年苏暮掌握神秘古印玺，召唤古代英勇之英灵，他的出现给新纪元掀起滔天巨浪，他在这部历史上添上了浓厚的一笔。</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent.png" /></div>
				<p class="name">方外：消失的八门</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">徐公子胜治</p>
				<div class="discript">徐公子胜治新书来袭！惊疲飘册风火爵要，江湖八门展奇技!</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent2.png" /></div>
				<p class="name">大荒仙踪</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">触控</p>
				<div class="discript">无数修行者，渴求飞升成仙，千百年来，却是没有一人成功。佛道相争，大儒林立，十六岁的少年道士柳生，身不由己卷入江湖，开启仙侠之旅</div>
			</div>
			<div class="book-item">
				<div class="book-picture"><img src="../../assets/img/expent3.png" /></div>
				<p class="name">无限召唤</p>
				<p class="like-num"><i class="icon-heart"></i>225 人</p>
				<p class="author">夜浮尘</p>
				<div class="discript">少年苏暮掌握神秘古印玺，召唤古代英勇之英灵，他的出现给新纪元掀起滔天巨浪，他在这部历史上添上了浓厚的一笔。</div>
			</div>
		</div>
	</div>
	<!--分类模块-->

</template>

<script>
	export default{
		props:['title']
	}
</script>

<style lang="scss">
	@import '../../assets/css/common/mixin.scss';
	.book-model {		
		margin-top: 30px;
	}
	
	.book-type {
		font-size: 18px;
		color: $color_red;
		padding-bottom: 5px;
		border-bottom: solid 1px #a69baa;
		margin-bottom: 10px;
		font-weight: 600;
	}
	
	.book-content {
		@include box_border;
		display: flex;
		flex-wrap: wrap;
		.book-item {
			height: 145px;
			width: 25%;
			box-sizing: border-box;
			position: relative;
			overflow: hidden;
			&:after {
				content: " ";
				position: absolute;
				height: 1px;
				width: 100%;
				border-bottom: 1px solid #dad3d3;
				transform-origin: 0 0;
				transform: scaleY(0.5);
				left: 0;
				bottom: 0;
			}
		}
		.book-item:nth-child(3n+1):nth-last-child(-n+3),
		.book-item:nth-child(3n+1):nth-last-child(-n+3)~.book-item {
			&:after {
				border-bottom: none;
			}
		}
		.book-item {
			position: relative;
			padding-left: 105px;
			padding-right: 10px;
			padding-bottom: 10px;
			.book-picture {
				width: 80px;
				height: 100px;
				position: absolute;
				top: 10px;
				left: 10px;
				img {
					width: 100%;
					height: auto;
				}
			}
			.name {
				font-size: 16px;
				font-weight: 500;
				margin-top: 10px;
			}
			.like-num {
				font-size: 12px;
				color: #BD3961;
				.icon-heart {
					margin-right: 5px;
				}
			}
			.author {
				color: #a6a6a6;
				margin: 5px 0;
				font-size: 12px;
			}
			.discript {
				color: #808080;
				font-size: 12px;
				height: 50px;
				overflow: hidden;
			}
		}
	}
</style>