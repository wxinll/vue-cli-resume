<template>
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
		methods: {
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
	.login {
		width: 35%;
		height: 15rem;
		position: fixed;
		margin: auto;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
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
</style>