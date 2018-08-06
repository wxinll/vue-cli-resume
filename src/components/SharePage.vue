<template>
	<div class="animation">
		<header>
			<span>分享给别人吧</span>	
			<svg class="icon" aria-hidden="true" @click="$router.push('/')">
			    <use xlink:href="#icon-close-circle"></use>
			</svg>
		</header>
		<main>
			{{shareLink}}
		</main>
	</div>
</template>

<script>
	export default{
		name: 'SharePage',
		props: ['shareLink']
	}
</script>

<style scoped lang="scss">
	div{
		width: 40%;
		position: fixed;
		left: 50%;
		transform: translate(-50%);
		top: 5%;
		z-index: 1;	
		background-color: #f5fffd;
		>header{
			background-color: #00d1b2;
			height: 2rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.icon{
				line-height: 2rem;
				margin-right: .4em;
				color: #fff;
			}
			span{
				color: #fff;
				margin-left: .4rem;
			}
		}
		>main{
			border: 1px solid #dbdbdb;
		    border-radius: 3px;
			border-top-left-radius: 0;
		    border-top-right-radius: 0;
		    border-top: none;
		    color: #021310;
		    border-color: #00d1b2;
		}
		>main{
		    line-height: 1.5;
		    word-break: break-all;
		    padding: 1em 1.25em;
		}
	}
	.icon {
       width: 1.3em; height: 1.3em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       cursor: pointer;
    }
	.animation{
		animation: divSlide 0.3s;
	}
	@keyframes divSlide{
		0% {transform: translate(-50%,-100%);}
		100% {transform: translate(-50%,0);}
	}
</style>