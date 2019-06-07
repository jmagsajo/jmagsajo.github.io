<template>
     <span>
    	<div class="container-fluid banner">
			<div class="banner-text">
				<p>In the end, it's not the years in your life that count.</p>
				<p>It's the life in your years. -Abraham Lincoln</p>
			</div>
		</div>
    	<timeline></timeline>
	 </span>
</template>

<script>

import timeline from './Timeline';

export default {
    name: 'home',
    components : {
    	timeline
    },
	mounted(){
		ScrollReveal().reveal('.banner-text', { interval: 200 });
	}
}
</script>

<style>
	.banner {
	    /*background: url(/img/assets/background.jpg);*/
	    background: linear-gradient( rgba(35, 35, 90, 0.45), rgba(40, 0, 0, 0.45) ),url(/img/assets/background.jpg);
	    background-attachment: fixed;
	    background-repeat: no-repeat;
	    background-size: cover;
	    color: #fff;
	    height: 80% !important; 
	}
	.banner-text{
		text-align:center;
	    position: relative;
    	top: 30%;
	}
		.banner-text p{
		    font-family: 'Pacifico', regular, 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		    font-size: 260%;
		}

	@media (max-width: 576px) {
		.banner-text p{
		    font-size: 25px;
		}
	}
	
	@media (min-width: 577px){
		.banner-text p{
			font-size: 30px;
		}
	}

	@media (max-width: 933px) {
		.banner-text p{
			font-size: 30px;
		}
	}

	@media (min-width: 934px) {
		.banner-text p{
			font-size: 260%;
		}
	}

	@media (min-width: 1200px) {
		
	}
</style>