<template>
	<span>
		<div class="container-fluid banner">
			<div class="banner-text">
				<p>Portfolio Page</p>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-sm projects">
					<!-- Card Narrower -->
					<div class="card card-cascade narrower">

					  <!-- Card image -->
					  <div class="view view-cascade overlay">
					    <img  class="card-img-top" src="/img/gmovies/gmovies.png" alt="GMovies">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-window-restore"></i> Web project</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">GMovies</h4>
					    <!-- Text -->
					    <p class="card-text">GMovies is a FREE app for both for Android and iOS devices, GMovies mobile app features services that allow you to stay updated on the current and upcoming movie releases in cinemas nationwide, check daily showtimes, reserve the best seats and book your movie tickets straight on your phones.</p>
					    <!-- Button -->
					    <a href="https://www.gmovies.ph/" target="_blank" class="btn btn-unique">Go to site</a>

					  </div>

					</div>
					<!-- Card Narrower -->
				</div>
				<div class="col-sm projects">
					<!-- Card Narrower -->
					<div class="card card-cascade narrower">

					  <!-- Card image -->
					  <div class="view view-cascade overlay">
					    <img  class="card-img-top" src="/img/sureseats/sureseats.png" alt="Sureseats">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-window-restore"></i> Web project</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">Sureseats</h4>
					    <!-- Text -->
					    <p class="card-text">Online Reservation for Ayala Malls</p>
					    <!-- Button -->
					    <a href="https://www.sureseats.com/" target="_blank" class="btn btn-unique">Go to site</a>

					  </div>

					</div>
					<!-- Card Narrower -->
				</div>

				<div class="col-sm projects">
					<!-- Card Narrower -->
					<div class="card card-cascade narrower">

					  <!-- Card image -->
					  <div class="view view-cascade overlay">
					    <img  class="card-img-top" src="/img/sample/sample1.jpg" alt="Sample 1">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-window-restore"></i> Open Source</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">Hackers Theme based html template</h4>
					    <!-- Text -->
					    <p class="card-text">
					    	An Open source html template.
							<br>
							You can download it <a href="https://github.com/jmagsajo/Hackers-Theme-Sample" target="_blank">here!</a>
					    </p>
					    <!-- Button -->
					    <a href="http://josephmagsajo.atwebpages.com/sample/sample1/index.html" target="_blank" class="btn btn-unique">Go to site</a>

					  </div>

					</div>
					<!-- Card Narrower -->
				</div>

			</div>
		</div>
	</span>
</template>

<script>
export default {
    name: 'portfolio',
    mounted(){
    	ScrollReveal().reveal('.banner-text', { interval: 200 });
    }
}
</script>

<style scoped>

	.banner {
	    background: linear-gradient( rgba(35, 35, 90, 0.45), rgba(40, 0, 0, 0.45) ),url(/img/assets/background2.jpg);
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