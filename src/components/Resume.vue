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
						<editable-span :value="item" @edit="$emit('edit-span',$event,'projects','description',index,index2)" @input-change="onInputChange"></editable-span>
						<span class="del" v-show="!inputStatus" @click="delRow(index,index2)">
							<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
							</svg>
						</span>
					</div>
					<span class="del" @click="delProject(index)">
						<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
						</svg>
					</span>
				</li>
				<li class="box add" @click="addProject">
					<div class="row">
						<svg class="icon" aria-hidden="true">
					 		<use xlink:href="#icon-add"></use>
						</svg>
					</div>
				</li>
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
					<span class="del" @click="delSkill(index)">
						<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
						</svg>
					</span>
				</li>
				<li class="box add" @click="addSkill">
					<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-add"></use>
					</svg>					
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import EditableSpan from './EditableSpan'
import '../lib/icon.js'

export default {
	name: 'Resume',
	components: {
		EditableSpan
	},
	props: ['currentUser','edit','resume'],
	data(){
		return {
			inputStatus: false
		}
	},
	methods: {
		onInputChange($event) {
			this.inputStatus = $event
		},
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
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
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
			.title{
				font-size: 1.3rem;
				margin-bottom: .75rem;
			}
			&.add svg{
				width: 2.5em;
				height: 2.5em;
			}
		}
	}
	.skills{
		>ul{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			>li{
				width: 47%;
			&.add svg{
				width: 2.5em;
				height: 2.5em;
			}	
			}
		}
	}
	ul>li{
		position: relative;
		margin-bottom: .75rem;
		.del{
			position: absolute;
			right: 0;
			top: 0;
			svg{
				fill: red;
			}
		}	
		.row{
			position: relative;
			padding: .4em 0;
			.del{
				svg{
					
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