<template>
	<div class="login box" v-on:submit="onLogin">
		<div class="title">
			<label>用户登录</label>
			<button class="button link" @click="$router.push('/')">返回</button>
		</div>
		<form>
			<div class="row">
				<label for="account-div">账户</label>
				<input type="text" id="account-div" v-model="login.account">
			</div>
			<div class="row">
				<label for="pwd-div">密码</label>
				<input type="text" id="pwd-div" v-model="login.pwd">
			</div>
			<div class="row">
				<button class="button success" type="submit">登陆</button>
				<button class="button link" @click="$router.push('signup')">注册</button>
			</div>
		</form>
	</div>
</template>

<script>
	import AV from '../lib/leancloud'
	export default {
		name: 'Login',
		data() {
			return {
				login: {
					account: '',
					pwd: '',
				},
			}
		},
		methods: {
			onLogin(e) {
				e.preventDefault()
				let {account,pwd} = this.login
				AV.User.logIn(account, pwd).then((User) => {
					this.$emit('login', User)
				}, function(error) {
					switch (error.code) {
						case 219:
							alert('登录失败次数超过限制，请稍候再试，或者通过忘记密码重设密码')
							// case 2:
							//   console.log('x 等于2')
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