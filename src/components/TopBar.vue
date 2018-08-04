<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">WXin</span>
			<div class="actions">
				<button class="primary" @click="$router.push('/login')">
					登录
				</button>
				<button @click="$emit('click-log-out')">
					登出
				</button>
				<button class="primary" @click="$emit('save-data')">
					保存
				</button>
				<button>
					预览	
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopBar',
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
			}
			&.primary:hover{
				background: #00c4a7;
			}
			&.primary:active{
				background-color: #00b89c;
				border-color: transparent;
				box-shadow: inset 0 1px 2px hsla(0,0%,4%,.2);
			}
		}

	}
</style>