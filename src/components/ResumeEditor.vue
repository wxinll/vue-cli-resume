<template>
	<aside id="resumeEditor">
		<div class="fixed box">
			<button class="button primary" @click="share">
				分享
			</button>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'ResumeEditor',
		methods: {
			share(){
				this.$emit('share-link')
				this.$router.push('/sharePage')
			}
		}
	}
</script>

<style scoped lang="scss">
	#resumeEditor{
		.fixed{
			position: fixed;
			width: 100px;
			height: 30vh;
		}
		button{
			width: 4em;
			height: 2.25em;
		}
	}
</style>