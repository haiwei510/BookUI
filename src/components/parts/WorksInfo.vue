<template>
	<div id="works">
		<div class="tickets">
			<div>
				<p><span>推荐票</span><label>本周票数</label></p>
				<p class="num-tickets">22</p>
				<div class="ticket-btn"><span>推荐给书友</span></div>
			</div>
			<div>
				<p><span>月票</span><label>本月票数</label></p>
				<p class="num-tickets">144</p>
				<div class="ticket-btn"><span>投月票</span></div>
			</div>
		</div>

		<h2 class="label-tx">作品讨论区</h2>
		<div class="discuss">
			<div class="img-box"><img src="../../assets/img/imguser.png" /></div>
			<div class="content-box">
				<div class="txt-box">
					<p><input type="text" placeholder="输入标题（选填）"></p>
					<p><textarea placeholder="输入评论内容"></textarea></p>
					<p>
						<label class="num-txt"><span>0</span>/500</label>
						<input class="send-btn" type="button" value="发表" />
						<input class="send-btn cancel" type="button" value="取消" />
					</p>
				</div>
			</div>

			<div class="say-box">
				<div class="box-item" v-for="item in 10">
					<div class="user-img"><img src="../../assets/img/imguser.png"></div>
					<div class="say-content">
						<p><span>妖精</span><label>2018-01-02 12:01</label></p>
						<p>挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油挺好了(●°u°●)​ 」加油</p>
						<p class="answer"><icon class="ico-answer" name="commenting-o"></icon>回复</p>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import 'vue-awesome/icons/commenting-o'
	import Icon from 'vue-awesome/components/Icon'

	export default {
		components: {
			Icon
		}
	}
</script>

<style lang="scss">
	@import '../../assets/css/common/mixin.scss';
	#works {
		.label-tx {
			margin-left: 20px;
			margin-top: 40px;
			padding: 10px 0;
			border-bottom: solid 1px #EEEEEE;
		}
		.tickets {
			text-align: center;
			margin-top: 20px;
			overflow: hidden;
			>div {
				width: 50%;
				float: left;
				box-sizing: border-box;
				padding-left: 20px;
				p {
					span {
						font-weight: 900;
						font-size: 18px;
						color: $color_red;
						margin-right: 10px;
					}
					label {
						color: #a6a6a6;
					}
				}
				.num-tickets {
					margin: 25px 0;
					font-weight: 500;
					font-size: 22px;
				}
				.ticket-btn {
					text-align: center;
					span {
						display: inline-block;
						background-color: $color_red;
						height: 35px;
						width: 150px;
						border-radius: 20px;
						color: #FFFFFF;
						line-height: 35px;
						text-align: center;
						cursor: pointer;
						&:hover {
							background-color: rgba(196, 60, 70, 0.8);
						}
					}
				}
			}
		}
		.discuss {
			margin-top: 20px;
			position: relative;
			.img-box {
				left: 0;
				top: 0;
				position: absolute;
				margin-left: 20px;
				margin-top: 20;
				height: 50px;
				width: 50px;
				overflow: hidden;
				border-radius: 100%;
				img {
					height: 100%;
					width: auto;
				}
			}
			.content-box {
				margin-left: 90px;
				.txt-box {
					p {
						margin-right: 50px;
						margin-bottom: 20px;
						input,
						textarea {
							height: 30px;
							border: solid 1px #dadada;
							width: 100%;
							line-height: 30px;
							padding: 0 10px;
						}
						textarea {
							height: 100px;
							resize: none;
						}
						.send-btn {
							background-color: $color_red;
							border-radius: 30px;
							color: #FFFFFF;
							width: 100px;
							float: right;
							&:hover {
								background-color: rgba(196, 60, 70, 0.8);
								cursor: pointer;
							}
						}
						.cancel {
							background-color: #A6A6A6;
							margin-right: 20px;
							&:hover {
								background-color: rgba(166, 166, 166, 0.8);
								cursor: pointer;
							}
						}
						.num-txt {
							color: #A6A6A6;
						}
					}
					p:nth-child(2) {
						margin-bottom: 10px;
					}
				}
			}
			.say-box {
				.box-item {
					border-bottom: solid 1px rgba(0, 0, 0, 0.1);
					position: relative;
					padding: 25px 0;
					margin-right: 20px;
					.user-img {
						left: 0;
						top: 28px;
						position: absolute;
						margin-left: 20px;
						margin-top: 20;
						height: 50px;
						width: 50px;
						overflow: hidden;
						border-radius: 100%;
						img {
							height: 100%;
							width: auto;
						}
					}
				}
				.say-content {
					margin-left: 85px;
					p:nth-child(1) {
						span {
							margin-right: 40px;
							font-weight: 600;
							font-size: 16px;
						}
						label {
							color: #A6A6A6;
						}
					}
					p:nth-child(2) {
						padding: 10px 0;
						color: #333333;
					}
					.answer {
						cursor: pointer;
						color: #A6A6A6;
						position: relative;
						padding-left: 20px;
						.ico-answer {
							left: 0;
							top: 1px;
							position: absolute;
						}
					}
				}
			}
		}
	}
</style>