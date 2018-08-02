<template>
	<div class="login" v-on:submit="onLogin">
		<div class="row,title">
			<label>用户登录</label>
			<a href="#" v-on:click="$router.push('/')">返回</a>
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
				<button type="submit">登陆</button>
			</div>
			<a href="#" v-on:click="$router.push('signup')">注册</a>
		</form>
	</div>
</template>

<script>
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

<style>
	
</style>