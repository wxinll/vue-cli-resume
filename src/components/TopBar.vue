<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">WXin</span>
			<div class="actions" v-show="edit">
				<button class="button primary" v-show="!login" @click="$router.push('/login')">
					登录
				</button>
				<button class="button success" v-show="login" @click="$emit('save-data')">
					保存
				</button>
				<button class="button danger" v-show="login" @click="$emit('click-log-out')">
					登出
				</button>
				<button class="button" v-show="login" @click="$emit('on-preview')">
					预览	
				</button>
			</div>
			<button class="button danger" v-show="login&&!edit" @click="$emit('exit-preview')"> 
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
			font-size: 1rem;
		}

	}
</style>