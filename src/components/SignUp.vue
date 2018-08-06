<template>
	<div>
		<div class="login box" v-on:submit="onSignUp">
			<div class="title">
				<label>注册</label>
				<button class="button link" @click="$router.push('/')">返回</button>
			</div>
			<form>
				<div class="row">
					<label for="account-div">账户</label>
					<input type="text" id="account-div" v-model="signUp.account">
				</div>
				<div class="row">
					<label for="pwd-div">密码</label>
					<input type="text" id="pwd-div" v-model="signUp.pwd">
				</div>
				<div class="row">
					<button class="button success" type="submit">注册</button>
					<button class="button link" type="button" @click="$router.push('/login')">登录</button>
				</div>
			</form>
		</div>
		<div class="cover"></div>
	</div>
</template>

<script>
	import AV from '../lib/leancloud'
	export default {
		name: 'SignUp',
		data() {
			return {
				signUp: {
					account: '',
					pwd: '',
				},
			}
		},
		created(){
			this.forbid()
		},
		destroyed(){
			this.normal()
		},
		methods: {
			forbid(){
				document.body.style.overflow = 'hidden'
			},
			normal(){
				document.body.style.overflow = 'auto'
			},
			onSignUp(e) {
				e.preventDefault()
				let {account,pwd} = this.signUp
				let userSign = new AV.User()
				userSign.setUsername(account)
				userSign.setPassword(pwd)
				userSign.setEmail(account)
				userSign.signUp().then((User) =>{
					alert('signUp success')
					console.log(User)
					this.$emit('sign-up', User)
				}, function(error) {
					switch (error.code) {
						case 203:
							alert('邮箱已被占用')
						case 210:
							console.log('账户密码不匹配')
							// default:
							//   console.log('x 等于其他值')
					}
				})
			},
		},	
	}
</script>

<style scoped lang="scss">
	.cover{
		position: absolute;
		left: 0;
		top: 0;
		width: 100vw;
		height:100vh;
		background: #111;
		opacity: 0.4;
	}
	.login {
		z-index:1;
		width: 35%;
		height: 15rem;
		position: fixed;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		animation: op 1s;
		.row{
			height: 2.5em;
		}
		>.title{
			margin-bottom: .75rem;
			label{
				font-size: 1.5em;
			}
		}
	}
	.button{
		height: 2.2em;
		padding: 0 .75em;
	}
	@keyframes op{
		0% {opacity: 0;}
		100% {opacity: 1;}
	}
</style>