<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">WXin</span>
			<div class="actions" v-show="edit">
				<button class="primary" v-show="!login" @click="$router.push('/login')">
					登录
				</button>
				<button class="success" v-show="login" @click="$emit('save-data')">
					保存
				</button>
				<button class="danger" v-show="login" @click="$emit('click-log-out')">
					登出
				</button>
				<button v-show="login" @click="$emit('on-preview')">
					预览	
				</button>
			</div>
			<button class="danger" v-show="login&&!edit" @click="$emit('exit-preview')"> 
				退出预览
			</button>
		</div>
	</div>
</template>

<script>
	import AV from '@/lib/leancloud.js'
	export default {
		name: 'TopBar',
		props: ['login','edit'],
		created() {
			this.getCurrent()
		},
		methods: {
			getCurrent() {
	      		let currentUser = AV.User.current()
	      		if(currentUser){

	      		}else{

	      		}
			},
		}
	}
</script>

<style scoped lang="scss">
	#topbar{
		background:#ffffff;
		box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
		>.wrapper{
			height: 64px;
			padding: 0 16px;
		}
		>.wrapper{
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.logo{
			font-size: 24px;
			color: #000000;
		}
		button{
			width: 72px;
			height: 32px;
			border: 1px solid #dbdbdb;
			border-radius: 3px;
			cursor: pointer;
			font-size: 1rem;
			background: #fff;
			color: #222;
			&:hover{
				border-color: #b5b5b5;
			}
			&:active{
				border-color: #4a4a4a;
				box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
			}
			&.primary{
				background: #00d1b2;
				color: #fff;
				border-color: transparent;
				&:hover{
					background: #00c4a7;
				}
				&:active{
					background-color: #00b89c;
					border-color: transparent;
					box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
				}
			}
			&.success{
				background-color: #23d160;
				border-color: transparent;
			    color: #fff;						
				&:hover{
					background-color: #22c65b;
				}
				&:active{
				    background-color: #20bc56;
				    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
				}
			}
			&.danger{
				background-color: #ff3860;
				border-color: transparent;
				color: #fff;
				&:hover{
	    			background-color: #ff2b56;
				}
				&:active{
				    background-color: #ff1f4b;
				    box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
				}
			}
		}

	}
</style>