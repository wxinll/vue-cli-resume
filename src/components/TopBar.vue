<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">WXin</span>
			<div class="actions">
				<button class="primary">
					登录
				</button>
				<button>
					登出
				</button>
				<button class="primary">
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
		color: green;
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
			border: none;
			cursor: pointer;
			font-size: 18px;
			background: #ddd;
			color: #222;
			&:hover{
				box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
			}
			&.primary{
				background:#02af5f;
				color: white;
			}
		}

	}
</style>