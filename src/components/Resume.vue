<template>
	<div id="resume">
		<section class="profile">
			<h1 class="name"><editable-span :disabled="!edit" :value="resume.name" @edit="$emit('edit-span',$event,'name')"></editable-span></h1>
			<p class="description">
				目标职位：
				<editable-span :disabled="!edit" :value="resume.jobTitle" @edit="$emit('edit-span',$event,'jobTitle')"></editable-span>
			</p>
			<div class="selfInfo">
				<editable-span :disabled="!edit" :value="resume.gender" @edit="$emit('edit-span',$event,'gender')"></editable-span>
				<editable-span :disabled="!edit" :value="resume.age" @edit="$emit('edit-span',$event,'age')"></editable-span>
				<editable-span :disabled="!edit" :value="resume.email" @edit="$emit('edit-span',$event,'email')"></editable-span>
				<editable-span :disabled="!edit" :value="resume.phone" @edit="$emit('edit-span',$event,'phone')"></editable-span>
			</div>
		</section>
		<section class="projects">
			<h2>项目Demo</h2>
			<ul>
				<li class="box" v-for="(project,index) in resume.projects">
					<h3>
						<editable-span :disabled="!edit" :value="project.name" @edit="$emit('edit-span',$event,'projects','name',index)"></editable-span>
					</h3>
					<ul class="content">
						<li v-for="(item,index2) in project.description">
							<editable-span :disabled="!edit" :value="item" @edit="$emit('edit-span',$event,'projects','description',index,index2)"></editable-span>
							<span class="del" v-show="edit" @click="delRow('projects',index,index2)">
								<svg class="icon" aria-hidden="true">
							 		<use xlink:href="#icon-minus-circle"></use>
								</svg>
							</span>
						</li>
						<li v-show="edit">
							<span class="add" @click="addRow('projects',index)">
								<svg class="icon" aria-hidden="true">
							 		<use xlink:href="#icon-plus-circle"></use>
								</svg>
							</span>
						</li>
					</ul>
					<span class="del" v-show="edit" @click="delProject(index)">
						<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
						</svg>
					</span>
				</li>
				<li class="box add" v-show="edit" @click="addProject">
					<div class="row">
						<svg class="icon" aria-hidden="true">
					 		<use xlink:href="#icon-plus-circle"></use>
						</svg>
					</div>
				</li>
			</ul>

		</section>
		<section class="skills">
			<h2>技能</h2>
			<ul>
				<li class="box" v-for="(skill,index) in resume.skills">
					<h3>
						<editable-span :disabled="!edit" class="header" :value="skill.name" @edit="$emit('edit-span',$event,'skills','name',index)"></editable-span>
					</h3>
					<ul class="content">
						<li v-for="(item, index2) in skill.description">
							<editable-span :disabled="!edit" :value="item" @edit="$emit('edit-span',$event,'skills','description',index,index2)"></editable-span>
							<span class="del" v-show="edit" @click="delRow('skills',index,index2)">
								<svg class="icon" aria-hidden="true">
								 		<use xlink:href="#icon-minus-circle"></use>
								</svg>						
							</span>
						</li>
						<li>
							<span class="add" v-show="edit" @click="addRow('skills',index)">
								<svg class="icon" aria-hidden="true">
							 		<use xlink:href="#icon-plus-circle"></use>
								</svg>
							</span>
						</li>
					</ul>
					<span class="del" v-show="edit" @click="delSkill(index)">
						<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
						</svg>
					</span>

				</li>
				<li class="box add" v-show="edit" @click="addSkill">
					<svg class="icon" aria-hidden="true">
					    <use xlink:href="#icon-plus-circle"></use>
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
		}
	},
	methods: {
		addSkill() {
			let obj = {
				name: '技能名称',
				description: ['技','能','描','述']
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
		addRow(name,index){
			this.resume[name][index].description.push('1111')
		},
		delRow(name,index,index2) {
			this.resume[name][index].description.splice(index2,1)
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
			>ul>li{
				position: relative;
				margin-bottom: .75rem;
				>h3{
					margin-bottom: 1.1rem;
				}
				>ul>li{
					position: relative;	
					padding:.35em 0;
				}
			}
		}
	}
	.profile{
		font-size: 1.2em;
		h1{
			font-size: 1.5em;
		}
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
			justify-content: center;
			>li{
				width: 45%;
				margin: 0 .5em .75rem;
				&.add svg{
					width: 2.5em;
					height: 2.5em;
				}	
			}
		}
	}
	.box>.del>svg.icon{
		position: absolute;
		right: 5%;
		top: 5%;
		fill: red;
		width: 1.75em;
		height: 1.75em;
	}
	.box>.content{
			svg.icon{
				position: absolute;
				right: 0;
				top: 0;
				fill: red;
				width: 1em;
				height: 1em;
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
	@media screen and (min-width: 960px){
	    .projects{
	    	>ul{
	    		display: flex;
	    		flex-wrap: wrap;
	    		justify-content: center;
				>li{
					width: 80%;
				}
	    	}
	    }
  	}	
</style>