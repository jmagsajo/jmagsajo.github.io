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
					    <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
					    <!-- Text -->
					    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
					    <!-- Button -->
					    <a class="btn btn-unique">Button</a>

					  </div>

					</div>
					<!-- Card Narrower -->
				</div>
				<div class="col-sm projects">
					<!-- Card Narrower -->
					<div class="card card-cascade narrower">

					  <!-- Card image -->
					  <div class="view view-cascade overlay">
					    <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
					    <!-- Text -->
					    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
					    <!-- Button -->
					    <a class="btn btn-unique">Button</a>

					  </div>

					</div>
					<!-- Card Narrower -->
				</div>
				<div class="col-sm projects">
					<!-- Card Narrower -->
					<div class="card card-cascade narrower">

					  <!-- Card image -->
					  <div class="view view-cascade overlay">
					    <img  class="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="Card image cap">
					    <a>
					      <div class="mask rgba-white-slight waves-effect waves-light"></div>
					    </a>
					  </div>

					  <!-- Card content -->
					  <div class="card-body card-body-cascade">

					    <!-- Label -->
					    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
					    <!-- Title -->
					    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
					    <!-- Text -->
					    <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
					    <!-- Button -->
					    <a class="btn btn-unique">Button</a>

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