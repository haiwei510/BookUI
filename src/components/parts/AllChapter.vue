<template>
	<div id="chapter-box">
		<div class="chapter-item" v-for="it in 10">
			<h3 class="chapter-title">初入大清<i>.</i>共78章<span>本卷共788855字</span></h3>
			<ul>
				<li v-for="item in 50">第{{item}}章 一吻定情</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	#chapter-box{
		.chapter-item{
			.chapter-title{
				height: 60px;
				line-height: 60px;
				span{
					margin-left: 10px;
					font-style: normal;
					color: #818181;
					font-weight: 200;
					font-size: 12px;
				}
			}
			
			ul{
				overflow: hidden;
				li{
					height: 50px;
					line-height: 50px;
					border-bottom: solid rgba(0,0,0,0.1) 1px;
					width: 33.333333333%;
					float: left;
				}
			}
		}
	}
	
</style>