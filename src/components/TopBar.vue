<template>
	<div id="topbar">
		<div class="wrapper">
			<span class="logo">WXin</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TopBar',
	}
</script>

<style>
	#topbar{
		color: green;
		background:#ffffff;
		box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
	}
	#topbar>.wrapper{
		height:64px;
		display: flex;
		align-items: center;
		padding: 0 16px;
	}
	#topbar .logo{
		font-size: 24px;
		color: #000000;
	}
</style>