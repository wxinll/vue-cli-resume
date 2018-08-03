<template>
	<div id="resume">
		{{currentUser}}
		<section class="profile">
			<h1 class="name">爱迪生</h1>
			<p class="description">
				目标职位：
				<span>前端工程师</span>
			</p>
			<div class="selfInfo">
				<span>男</span>
				<span>年龄：23</span>
				<span>邮箱：XXX@gmail.com</span>
				<span>手机：1861234567</span>
			</div>
		</section>
		<section class="projects">
			<h2>项目Demo</h2>
			<ul>
				<li class="box">
					<header>
						网易云音乐
					</header>
					<p class="description">
						<p class="row">移动端播放页面，使用原生JS，jQuery，CSS3实现</p>
						<p class="row">后台管理页面，使用原生JS, 结合七牛云，leanCloud，实现歌曲上传管理</p>
						<p class="row">-七牛云 实现内容存储</p>
						<p class="row">-leanCloud 实现用户信息管理</p>
					</p>
				</li>
				<li class="box">
					<header>
						网易云音乐
					</header>
					<p class="description">
						<p class="row">移动端播放页面，使用原生JS，jQuery，CSS3实现</p>
						<p class="row">后台管理页面，使用原生JS, 结合七牛云，leanCloud，实现歌曲上传管理</p>
						<p class="row">-七牛云 实现内容存储</p>
						<p class="row">-leanCloud 实现用户信息管理</p>
					</p>
				</li>
				<li class="box">
					<header>
						网易云音乐
					</header>
					<p class="description">
						<p class="row">移动端播放页面，使用原生JS，jQuery，CSS3实现</p>
						<p class="row">后台管理页面，使用原生JS, 结合七牛云，leanCloud，实现歌曲上传管理</p>
						<p class="row">-七牛云 实现内容存储</p>
						<p class="row">-leanCloud 实现用户信息管理</p>
					</p>
				</li>
				<li class="box">
					<editable-span></editable-span>
				</li>
			</ul>

		</section>
		<section class="skills">
			<h2>技能</h2>
			<ul>
				<li class="box">
					<header>
						JavaScript
					</header>
					<p class="description">
						熟悉原型链，继承，Promise，异步
						一一一一一一一一一一一一一一一一
					</p>
				</li>
				<li class="box">
					<header>
						JavaScript
					</header>
					<p class="description">
						熟悉原型链，继承，Promise，异步
					</p>
				</li>
				<li class="box">
					<header>
						JavaScript
					</header>
					<p class="description">
						熟悉原型链，继承，Promise，异步
					</p>
				</li>
				<li class="box">
					<editable-span class="header"></editable-span>
					<editable-span class="description"></editable-span>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import EditableSpan from './EditableSpan'

export default {
	name: 'Resume',
	components: {
		EditableSpan
	},
	props: ['currentUser','edit','resume'],
	methods: {
		addSkill() {
			let obj = {
				name: '技能名称',
				description: '技能描述'
			}
			this.resume.skills.push(obj)
		},
		delSkill(index) {
			this.resume.skills.splice(index,1)
		},
		addProject() {
			let obj = {
				name: '项目名称',
				link: '链接',
				keywords: '关键词',
				description: '详细描述',
			}
			this.resume.projects.push(obj)
		},
		delProject(index) {
			this.resume.projects.splice(index, 1)
		},		
	},	
}
</script>

<style scoped lang="scss">
	#resume{
		color: #4a4a4a;
		padding: 20px;
		>section{
			margin-bottom: 1.5rem;
			>h2{
				margin-bottom: 1.1rem;
			}
		}
	}
	.profile{
		font-size: 1.2em;
		h1{font-size: 1.5em;}
		h1, p.description{
			text-align: center;
			margin-bottom: 1.3em;
		}
		.selfInfo{
			text-align: center;
		}
	}
	.projects{
		>ul>li{
			margin-bottom: .75rem;
		}
	}
	.skills{
		>ul{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			>li{
				margin-bottom: .75rem;
				width: 47%;
			}
		}
	}
	@media screen and (max-width: 600px){
		.skills{
			>ul{
				display: flex;
				flex-direction: column;
				>li{
					width: 100%;
				}
			}		
		}
	}
</style>