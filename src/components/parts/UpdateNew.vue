<template>
	<div class="update-new">
		<p class="title"><span>最近更新</span></p>
		<div class="update-content">
			<p class="explain">
				<span>类别</span> <span>书名</span> <span>章节</span><span>作者</span><span>更新时间</span>
			</p>
			<ul>
				<li v-for="item in 20">
					<a><span>「都市」</span> <span>万能私人教练</span> <span>第二十章部门划分</span><span>纪文独孤</span><span>12-10 10:51</span></a>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '../../assets/css/common/mixin.scss';
	.update-new {
		@include width_auto_center;
		p.title {
			@include font-title-red;
			margin-top: 30px;
			margin-bottom: 10px;
			padding-bottom: 10px;
			@include border_bottom;
		}
		.update-content {
			@include box_border;
			.explain {
				display: flex;
				padding-left: 15px;
				margin-top: 20px;
				padding-right: 15px;
				text-align: left;
				span {
					display: inline-block;
					color: #684C5D;
				}
				span:nth-child(1) {
					box-sizing: border-box;
					padding-left: 10px;
					width: 80px;
				}
				span:nth-child(2) {
					width: 180px;
				}
				span:nth-child(3) {
					flex: 1;
				}
				span:nth-child(4) {
					width: 150px;
				}
				span:nth-child(5) {
					width: 80px;
				}
			}
			>ul {
				padding: 15px;
				box-sizing: border-box;
				li {
					height: 30px;
					line-height: 30px;
					a {
						display: flex;
						span {
							display: inline-block;
						}
						span:nth-child(1) {
							width: 80px;
						}
						span:nth-child(2) {
							width: 180px;
						}
						span:nth-child(3) {
							flex: 1;
						}
						span:nth-child(4) {
							width: 150px;
						}
						span:nth-child(5) {
							width: 80px;
						}
						span:nth-child(1),
						span:nth-child(4) {
							color: #A69BAA;
						}
						span:nth-child(3),
						span:nth-child(5) {
							color: #818181;
						}
					}
				}
			}
		}
	}
</style>