<template>
	<div id="resume" :class="{notPreview: edit}">
		<section class="profile">
			<div class="toolBar">
				<span class="add" @click="addItem('selfInfo')">
					<svg class="icon add" aria-hidden="true">
				 		<use xlink:href="#icon-plus-circle"></use>
					</svg>
				</span>
			</div>
			<div>
				<h1 class="name"><editable-span :disabled="!edit" :value="resume.name" @edit="$emit('edit-span',$event,'name')"></editable-span></h1>
				<p class="description">
					目标职位：
					<editable-span data-lang="jobTitle" :disabled="!edit" :value="resume.jobTitle" @edit="$emit('edit-span',$event,'jobTitle')"></editable-span>
				</p>
				<ul class="selfInfo">
					<li v-for="(item,index) in resume.selfInfo">
						<div class="editable">
							<editable-span data-lang="selfInfo.name" :disabled="!edit" :value="item.name" @edit="$emit('edit-span',$event,'selfInfo','name',index)" ></editable-span>
							<editable-span data-lang="selfInfo.description" :disabled="!edit" :value="item.description" @edit="$emit('edit-span',$event,'selfInfo','description',index)" ></editable-span>	
							<span class="remove" v-show="edit" @click="removeItem('selfInfo',index)">
								<svg class="icon" aria-hidden="true">
									<use xlink:href="#icon-minus-circle"></use>
								</svg>					
							</span>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section class="education">
			<h2>教育经历</h2>
			<div class="toolBar">
				<span class="add" @click="addItem('education')">
					<svg class="icon add" aria-hidden="true">
				 		<use xlink:href="#icon-plus-circle"></use>
					</svg>
				</span>
			</div>
			<div class="content">
				<ul>
					<li class="box school" v-for="(edu,index) in resume.education">
						<span class="remove" v-show="edit" @click="removeItem('education',index)">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-minus-circle"></use>
							</svg>	
						</span>
						<div class="title">
							<editable-span data-lang="edu.time" :disabled="!edit" :value="edu.time" @edit="$emit('edit-span',$event,'education','time',index)"></editable-span>
							<editable-span data-lang="edu.school" :disabled="!edit" :value="edu.school" @edit="$emit('edit-span',$event,'education','school',index)"></editable-span>	
							<editable-span data-lang="edu.major" :disabled="!edit" :value="edu.major" @edit="$emit('edit-span',$event,'education','major',index)"></editable-span>
						</div>
						<div class="description">
							<editable-span data-lang="edu.description" :disabled="!edit" :value="edu.description" @edit="$emit('edit-span',$event,'education','description',index)"></editable-span>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<section class="projects">
			<h2>项目Demo</h2>
			<div class="toolBar">
				<span class="add" @click="addItem('projects')">
					<svg class="icon add" aria-hidden="true">
				 		<use xlink:href="#icon-plus-circle"></use>
					</svg>
				</span>
			</div>			
			<div class="content">
				<ul>
					<li class="box" v-for="(project,index) in resume.projects">
						<span class="remove" v-show="edit" @click="removeItem('projects',index)">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-minus-circle"></use>
							</svg>					
						</span>
						<div class="title">
							<editable-span class="grid-cell u-lof30" :disabled="!edit" :value="project.name" @edit="$emit('edit-span',$event,'projects','name',index)"></editable-span>
							<editable-span class="grid-cell u-lof55" :disabled="!edit" :value="project.link" @edit="$emit('edit-span',$event,'projects','link',index)"></editable-span>
						</div>
						<div class="description">
							<editable-span data-lang="proj.description" :disabled="!edit" :value="project.description" @edit="$emit('edit-span',$event,'projects','description',index)"></editable-span>
						</div>
					</li>
				</ul>
			</div>

		</section>
		<section class="skills">
			<h2>技能</h2>
			<div class="toolBar">
				<span class="add" @click="addItem('skills')">
					<svg class="icon add" aria-hidden="true">
				 		<use xlink:href="#icon-plus-circle"></use>
					</svg>
				</span>
			</div>
			<div class="content">
				<ul>
					<li class="box" v-for="(skill,index) in resume.skills">
						<span class="remove" v-show="edit" @click="removeItem('skills',index)">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-minus-circle"></use>
							</svg>					
						</span>
						<div class="title">
							<editable-span class ="u-lof20"
								data-lang="skill.name" 
								:disabled="!edit" :value="skill.name" 
								@edit="$emit('edit-span',$event,'skills','name',index)">	
							</editable-span>
							<editable-span class="grid-cell" data-lang="skill.description":disabled="!edit" :value="skill.description" @edit="$emit('edit-span',$event,'skills','description',index)"></editable-span>
						</div>
					</li>
				</ul>
			</div>
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
		addItem(key){
			let obj = {
				selfInfo:{name: '描述',description: '详细信息'},
				education: {time:'20XX.9-20XX.6',school:'学校',major:'专业',description: '添加描述'},
				skills: {name: '描述',description: '添加技能的描述'},
				projects: {name: '项目名称',link: '链接',keywords: '关键词',description: '添加描述'}
			}
			let items = this.resume[key]
			let item = obj[key]
			return items.push(item)
		},
		removeItem(key,index){
			return this.resume[key].splice(index,1)
		}
	},	
}
</script>

<style scoped lang="scss">
	.remove{
		position: relative;
	}
	.remove svg.icon{
		visibility: hidden;
		position: absolute;
		right: 5%;
		top: 5%;
		fill: red;
		width: 1em;
		height: 1em;
	}
	div.editable:hover svg.icon{
		visibility: visible;
		cursor: pointer;
	}
	.content li{
		.remove{
			position: relative;
			right: 5px;
		}
		&:hover svg.icon{
			visibility: visible;
			cursor: pointer;		
		}
	}
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
    .notPreview{
    	section:hover{
			border: 1px dashed #00c091; //鼠标经过
			.toolBar{
			    	display: block;
		    }
    	}
    	.selfInfo:hover{
			background-color: rgba(0, 205, 143, 0.1);
			border: 1px dashed #00c091;
    	}
		.content>ul>li:hover{
			background-color: rgba(0, 205, 143, 0.1);
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
			>h2{
				color: #254665;
				border-bottom: 1px solid #0b70bd;
			    padding: 10px 0;
    			margin: 0 10px 1.1rem;
			}
			.content>ul>li{
				position: relative;
				margin-bottom: .75rem;
			}
		}
	}
	.profile{
		margin-top: 5rem;
		h1{
			font-size: 1.5em;
			width: 40%;
			margin: .67em auto;
			text-align: center;
		}
		.description{
			margin-bottom: 1.3em;
			display: flex;
			justify-content: center;
			>div{
				text-align: left;
			}
		}
		.selfInfo{
			font-size: 14px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin: 0 20%;
			>li{
				width: 46%;
				display: flex;
				margin-bottom: .75em;
				.editable{
					text-align: left;
					display: flex;
					width: 100%;
					>.wrap:nth-child(1){
						margin-right: 10px;
					}
				}
			}
		}
	}
	.education,.projects,.skills{
		h2{
			font-size: 18px;
		}
		ul{
			padding: 0 .2em;
		}
		.content li{
			display: flex;
			flex-wrap: wrap;
			margin-bottom: .75em;
			>div{
				margin-bottom: .75em;
			}
			.title{
				display: flex;
				flex: auto;
				justify-content: space-between;
			}
			.description{
				display: flex;
				flex-basis: 100%;
				font-size: 14px;
				line-height: 1.8em;
			}
		}
	}
	.grid-cell{
		flex: 1;
	}
	.u-lof20{
		flex: 0 0 20%
	}
	.u-lof30{
		flex: 0 0 30%;
	}
	.u-lof70{
		flex: 0 0 70%;
	}
	.u-lof55{
		flex: 0 0 55%;
	}
	[data-lang="selfInfo.name"]{
		min-width: 20px;
		white-space: nowrap;
	}
	[data-lang="selfInfo.description"]{
		min-width: 65%;
	}
	[data-lang="jobTitle"]{
		min-width: 15%;
	}
	[data-lang="edu.time"]{
		width: 20%;
	}
	[data-lang="edu.school"]{
		width: 35%;
	}
	[data-lang="edu.major"]{
		min-width: 25%;
		white-space: nowrap;
		overflow: hidden;
	}
	[data-lang="edu.description"]{
		width: 100%;
	}
	[data-lang="proj.description"]{
		width: 100%;
	}
	[data-lang="skill.description"]{
		font-size: 14px;
		line-height: 1.8em;

	}
</style>