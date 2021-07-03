<template>
	<span>
    	<div class="container-fluid banner">
			<div class="banner-text">
				<p>I'm open with new opportunities.</p>
				<p>Contact me!</p>
			</div>
		</div>
		<div class="container" id="contact-container">
			<div class="row">
				<div class="jumbotron">
					<h2 class="display-4">Contact Details</h2>
					<p class="lead">Feel free to contact me!</p>
					<hr class="my-4">
				  	<p>
						Email me @ <b>joseph.magsajo03@gmail.com</b>
					</p>
					<p class="social-icons">
						<a href="https://www.facebook.com/jmagsajo" target="-blank" class="text-info pb-2 pt-1"><i class="fab fa-facebook-square"></i></a>
						<a href="https://www.linkedin.com/in/joseph-magsajo-a239a442/" target="-blank" class="text-info pb-2 pt-1"><i class="fab fa-linkedin"></i></a>
						<a href="https://www.instagram.com/phesoj03/" target="-blank" class="text-info pb-2 pt-1"><i class="fab fa-instagram"></i></a>
					</p>
				  	<!-- <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> -->
				</div>
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

	.banner-text{
		text-align:center;
	    position: relative;
    	top: 30%;
	}
		.banner-text p{
		    font-family: 'Pacifico', regular, 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
		    font-size: 260%;
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

	#contact-container{
		margin-top: 30px;
	}

	.jumbotron{
	    width: 1140px;
	}

	.social-icons{
		font-size: 30px;
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
</style>