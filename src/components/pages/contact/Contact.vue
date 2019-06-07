<template>
	<span>
    	<div class="container-fluid banner">
			<div class="banner-text">
				<p>I'm open with new opportunities.</p>
				<p>Contact me!</p>
			</div>
		</div>
	 </span>
</template>

<script>
export default {
    name: 'cotact',
    mounted(){
    	ScrollReveal().reveal('.banner-text', { interval: 200 });
    }
}
</script>

<style scoped>

	.banner {
	    background: linear-gradient( rgba(35, 35, 90, 0.45), rgba(40, 0, 0, 0.45) ),url(/img/assets/background3.jpg);
	    background-attachment: fixed;
	    background-repeat: no-repeat;
	    background-size: cover;
	    color: #fff;
	    height: 80% !important; 
	}

	.projects{
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.view.view-cascade.overlay{
	    margin-left: 4% !important;
    	margin-right: 4% !important;
    	margin-top: -1.25rem !important;
	}
</style>