<template>

	<section class="book-top-ten">
		<p class="top-title">{{title}}</p>
		<ul>
			<li>
				<router-link to="/bookInfo"><span>1</span><label>圣武星辰</label><i>我不吃西红柿</i></router-link>
			</li>
			<li>
				<a><span>2</span><label>最强狂兵</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>3</span><label>剑来</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>4</span><label>大逆之门</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>5</span><label>绝命毒尸</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>6</span><label>大夏王侯</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>7</span><label>血染长生</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>8</span><label>祭炼山河</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>9</span><label>最强妖孽</label><i>我不吃西红柿</i></a>
			</li>
			<li>
				<a><span>10</span><label>道破轮回</label><i>我不吃西红柿</i></a>
			</li>

		</ul>
	</section>

</template>

<script>
	export default{
		props:["title"]
	}
</script>

<style lang="scss">
	@import '../../assets/css/common/mixin.scss';
	.book-top-ten {
		width: 100%;
		@include box_border;
		margin-bottom: 15px;
		.top-title {
			height: 30px;
			@include font-title-red;
			line-height: 30px;
			padding-left: 10px;
			padding-top: 5px;
			padding-bottom: 5px;
		}
		ul {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			height: 330px;
			flex-direction: column;
			padding: 10px 0;
			padding-top: 0;
			li {
				padding-left: 10px;
				display: flex;
				align-items: center;
				vertical-align: middle;
				width: 100%;
				box-sizing: border-box;
				flex: 1;
				font-size: 14px;
				cursor: pointer;
				&:hover {
					background-color: #e6dddf;
				}
				span {
					margin-right: 5px;
					display: inline-block;
					height: 15px;
					width: 15px;
					border-radius: 50%;
					background-color: #684C5D;
					color: #fff;
					line-height: 15px;
					text-align: center;
					font-size: 12px;
				}
				a {
					height: 100%;
					width: 100%;
					display: block;
					display: flex;
					align-items: center;
					label {
						flex: 1;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						margin-right: 5px;
					}
					i {
						float: right;
						font-size: 12px;
						color: #A69BAA;
						padding-right: 5px;
					}
				}
			}
			li:nth-child(1) {
				span {
					background-color: #C43C46;
				}
			}
			li:nth-child(2) {
				span {
					background-color: #C43C46;
				}
			}
			li:nth-child(3) {
				span {
					background-color: #C43C46;
				}
			}
		}
	}
</style>