<template>
	<aside id="resumeEditor" class="box">
		<button class="button primary" @click="share">
			分享
		</button>
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
		button{
			width: 4em;
			height: 2.25em;
		}
	}
</style>