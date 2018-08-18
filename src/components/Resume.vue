<template>
	<div id="resume">
		<section class="profile">
			<div class="toolBar">
				<span class="add">
					<svg class="icon add" aria-hidden="true">
				 		<use xlink:href="#icon-plus-circle"></use>
					</svg>
				</span>
			</div>
			<div>
				<h1 class="name"><editable-span :disabled="!edit" :value="resume.name" @edit="$emit('edit-span',$event,'name')"></editable-span></h1>
				<p class="description">
					目标职位：
					<editable-span :disabled="!edit" :value="resume.jobTitle" @edit="$emit('edit-span',$event,'jobTitle')"></editable-span>
				</p>
				<ul class="selfInfo">
					<li v-for="(item,index) in resume.selfInfo">
						<editable-span data-lang="selfInfo.name" :disabled="!edit" :value="item.name" @edit="$emit('edit-span',$event,'selfInfo','name',index)" ></editable-span>
						<editable-span data-lang="selfInfo.description" :disabled="!edit" :value="item.description" @edit="$emit('edit-span',$event,'selfInfo','desciption',index)" ></editable-span>	
					</li>
				</ul>
			</div>
		</section>
		<section class="education">	
			<h2>教育经历</h2>
			<ul>
				<li class="box" v-for="(edu,index) in resume.education">
					<h3>
						<editable-span :disabled="!edit" :value="edu.time" @edit="$emit('edit-span',$event,'education','time',index)"></editable-span>
					</h3>
					<span class="left">
						<editable-span :disabled="!edit" :value="edu.school" @edit="$emit('edit-span',$event,'education','school',index)"></editable-span>	
					</span>
					<span class="right">
						<editable-span :disabled="!edit" :value="edu.major" @edit="$emit('edit-span',$event,'education','major',index)"></editable-span>	
					</span>
					<span class="del" v-show="edit" @click="delEdu(index)">
						<svg class="icon" aria-hidden="true">
						 		<use xlink:href="#icon-minus-circle"></use>
						</svg>
					</span>				
				</li>
			</ul>
		</section>
		<section class="projects">
			<h2>项目Demo</h2>
			<ul>
				<li class="box" v-for="(project,index) in resume.projects">
					<h3>
						<editable-span :disabled="!edit" :value="project.name" @edit="$emit('edit-span',$event,'projects','name',index)"></editable-span>
					</h3>
					<h4>
						<editable-span :disabled="!edit" :value="project.link" @edit="$emit('edit-span',$event,'projects','link',index)"></editable-span>
					</h4>
					<ul class="content">
						<editable-span :disabled="!edit" :value="project.description" @edit="$emit('edit-span',$event,'projects','description',index)"></editable-span>
						<li v-show="edit">
							<span class="add" @click="addRow('projects',index)">
								<svg class="icon" aria-hidden="true">
							 		<use xlink:href="#icon-plus-circle"></use>
								</svg>
							</span>
						</li>
					</ul>
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
						<editable-span :disabled="!edit" :value="skill.description" @edit="$emit('edit-span',$event,'skills','description',index)"></editable-span>
					</ul>

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
		addEdu(){
			let obj = {time:'20XX.9-20XX.6',school:'学校',major:'专业'}
			this.resume.education.push(obj)
		},
		delEdu(index){
			this.resume.education.splice(index,1)
		},
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
				description: ['请添加描述','请添加描述','请添加描述','请添加描述'],
			}
			this.resume.projects.push(obj)
		},
		delProject(index) {
			this.resume.projects.splice(index, 1)
		},
		addRow(name,index){
			this.resume[name][index].description.push('请添加描述')
		},
		delRow(name,index,index2) {
			this.resume[name][index].description.splice(index2,1)
		}
	},	
}
</script>

<style scoped lang="scss">
    .icon {
       width: 1em; 
       height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
    .toolBar{
    	display: none;
    	position: absolute;
    	right: 2px;
    	top: 5px;
    	.icon{
			width: 1.2rem;
			height: 1.2rem;
			vertical-align: -0.15em;
			fill: #00c091;
			overflow: hidden;	
			&:hover{
				fill:#02dca0;
			}
    	}
    }
	#resume{
		color: #4a4a4a;
		padding: 20px 40px;
		background-color: #ffffff;
		background-image: url(../assets/head.png);
		background-repeat: no-repeat;
		background-position: top center;
		>section{
			padding: 30px 0;
			position: relative;
			&:hover{
			    border: 1px dashed #00c091;
			    .toolBar{
			    	display: block;
			    }
			}
			>h2{
				color: #254665;
				border-bottom: 1px solid #0b70bd;
			    padding: 10px 0;
    			margin: 0 10px 1.1rem;
			}
			>ul>li{
				position: relative;
				margin-bottom: .75rem;
				&:hover{
					background-color: rgba(0, 205, 143, 0.1);
				}
				&.add svg{
					width: 2.5em;
					height: 2.5em;
				}
				>h3,h4{
					margin-bottom: 1.1rem;
				}
				>ul>li{
					position: relative;	
					padding:.35em 0;
					span.input + span{
						visibility: hidden;
					}
				}
			}
		}
	}
	.profile{
		margin-top: 5rem;
		h1{
			font-size: 1.5em;
			width: 40%;
			margin: .67em auto;
		}
		.description{
			margin-bottom: 1.3em;
			display: flex;
			justify-content: center;
			>div{
				width:30%;
				text-align: left;
			}
		}
		.selfInfo{
			font-size: 14px;
			display: flex;
			justify-content: space-between;
			margin: 0 20%;	
			&:hover{
				background-color: rgba(0, 205, 143, 0.1);
				border: 1px dashed #00c091;
			}
			>li{
				width: 46%;
				display: flex;
				>div{
					text-align: left;
				}
			}
		}
		[data-lang="selfInfo.name"]{
			width: 35%;
		}
		[data-lang="selfInfo.description"]{
			width: 65%;
		}
	}
	.education{
		ul{
			padding: 0 .2em;
		}
		li{
			overflow: hidden;
			span{
				&.left{
					float: left;
					width: 60%;
				}
				&.right{
					float: right;
				}
				input{
					width: 100%;
				}
			}
		}
	}
	.skills{
		>ul{
			display: flex;
			flex-wrap: wrap;
			padding:0 .2em;
			>li{
				width: 100%;
				margin: 0 .5em .75rem;
			}
		}
	}
	.box>.del>svg.icon{
		display: none;
		position: absolute;
		right: 5%;
		top: 5%;
		fill: red;
		width: 1.75em;
		height: 1.75em;
	}
	.box:hover>.del>svg.icon{
		display: block;
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
					width: 100%;
				}
	    	}
	    }
  	}	
</style>