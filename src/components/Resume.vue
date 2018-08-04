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
				<li class="box" v-for="(project,index) in resume.projects">
					<div class="row title">
						<editable-span :value="project.name" @edit="$emit('edit-span',$event,'projects','name',index)"></editable-span>
					</div>
					<div class="row" v-for="(item,index2) in project.description">
						<editable-span :value="item" @edit="$emit('edit-span',$event,'projects','description',index,index2)"></editable-span>
						<span @click="delRow(index,index2)">xxxxxxxxxxxx</span>
					</div>
					<span @click="delProject(index)">xxxxxxxxx</span>
				</li>
				<li class="box" @click="addProject">++++++++++++</li>
			</ul>

		</section>
		<section class="skills">
			<h2>技能</h2>
			<ul>
				<li class="box" v-for="(skill,index) in resume.skills">
					<div class="row">
						<editable-span class="header" :value="skill.name" @edit="$emit('edit-span',$event,'skills','name',index)"></editable-span>
					</div>
					<div class="row">
						<editable-span class="description" :value="skill.description" @edit="$emit('edit-span',$event,'skills','description',index)"></editable-span>
					</div>
					<span @click="delSkill(index)">xxxxxxxxxxxxx</span>
				</li>
				<li class="box" @click="addSkill">+++++++++++++</li>
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
				description: ['111','222','333','4444'],
			}
			this.resume.projects.push(obj)
		},
		delProject(index) {
			this.resume.projects.splice(index, 1)
		},
		delRow(index,index2) {
			this.resume.projects[index].description.splice(index2,1)
		}	
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
			.title{
				font-size: 1.3rem;
				margin-bottom: .75rem;
			}
			.row{
				padding: .4em 0;
			}
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
				.row{
					padding: .4em 0;
				}
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