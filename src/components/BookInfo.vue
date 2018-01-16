<template>
	<div id="bookinfo">
		<HeadSecond></HeadSecond>
		<div class="top-bg-box">
		</div>
		<div class="path">
			<p>
				<a>首页</a><span>></span>
				<a>仙侠频道</a><span>></span>
				<a>摧神</a>
			</p>
		</div>
		<div class="border-shadow">
			<span></span>
			<span></span>
		</div>
		<div class="info-content">
			<div class="book-content">
				<div class="book-img">
					<router-link to="/showType">
						<img src="../assets/img/expent3.png" />
					</router-link>
				</div>

				<div class="book-info">
					<h1>
            		<em>摧神</em>
            		<span><a>先飞看刀</a> 著</span>
        			</h1>
					<p class="tag">
						<span class="blue">连载</span>
						<span class="red">奇幻</span>
						<span class="red">魔法</span>
					</p>
					<p class="intro">她，雪凡心，二十一世纪赫赫有名的医学天才，却穿越到镇国公呆呆傻傻的废材小姐身上。 当丑颜褪去，她的绝色容姿，她的万丈光芒，凤惊天下。 他，夜九觞，神秘莫测的九皇叔，够冷酷够霸道够腹黑，某个无聊日，发现了一个有趣的小东西，从此开始他天上地下的漫漫追妻之路。 世人都瞎了吗？难道没看见这只贪吃的小狐狸才是真正的明珠？ 管他世人瞎不瞎，总之这只贪吃的小狐狸必定是他的囊中之物，先养肥点，以后的肉才好吃。
					</p>
					<p>
						<em>9.4</em><cite>万字</cite>
						<i></i>
						<em>1.83</em><cite>万总点击<span>.</span>会员周点击2747</cite>
						<em>3092</em><cite>总推荐<span>.</span>周47</cite>
					</p>
					<p>
						<a class="red-btn">开始阅读</a>
						<a class="blue-btn">加入书架</a>
						<a class="blue-btn">互动投票</a>
					</p>
				</div>
				<div class="commtent-warp">
					<div class="contentWarp">
						<h4>
								<span>
									<cite>7</cite>
									<em>.</em>
									<i>2</i>
								</span>
							</h4>
						<p class="num-people">
							<span>99人评价</span>
						</p>
						<p class="go-to-evaluate">
							<span>我要评价</span>
						</p>
					</div>

				</div>
				<div class="take-wrap">
					<a>
						<icon class="subscribe" name="file-text"></icon>订阅</a>
					<a>
						<icon class="download" name="download"></icon>下载</a>
				</div>

			</div>
			<div class="title-info-box">
				<ul>
					<li @click="changeShow('0')" v-bind:class="{red:works}">作品信息</li>
					<li @click="changeShow('1')" v-bind:class="{red:chapter}">目录(1001章)</li>
				</ul>
				<div>
					<router-link to="/chapterInfo">更新至 第865章:惊天秘宝</router-link>
				</div>
			</div>

			<WorksInfo v-show="works"></WorksInfo>
			<AllChapter v-show="chapter"></AllChapter>

		</div>

	</div>
</template>

<script>
	import HeadSecond from '@/components/parts/HeadSecond'
	import WorksInfo from '@/components/parts/WorksInfo'
	import AllChapter from '@/components/parts/AllChapter'
	import 'vue-awesome/icons/file-text'
	import 'vue-awesome/icons/download'
	import Icon from 'vue-awesome/components/Icon'
	
	export default {
		components: {
			HeadSecond,
			WorksInfo,
			AllChapter,
			Icon
		},
		data() {
			return {
				works: true,
				chapter:false
			}
		},
		methods:{
			changeShow:function(flag){
				if(flag==0){
					this.works = true;
					this.chapter = false;
				}else{
					this.chapter = true;
					this.works = false;
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@import '../assets/css/book-info.scss'
</style>