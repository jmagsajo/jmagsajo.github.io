<template>
    <!-- About -->
	<div class="page-section" id="about">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading text-uppercase">About me</h2>
					<h3 class="section-subheading text-muted">Hi My name is Joseph Magsajo!</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<ul class="timeline">
						<li>
							<div class="timeline-image">
								<img class="rounded-circle img-fluid" src="img/assets/jru_logo.png" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>2012</h4>
									<h4 class="subheading">Graduation day!</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">I took BSIT in Jose Rizal University.</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted">
							<div class="timeline-image bg-color-white">
								<img class="rounded-circle img-fluid" src="img/assets/now-corp.png" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>April 2012 - June 2013</h4>
									<h4 class="subheading">My Humble Beginnings</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">I joined NOW Corporation/ICTV on my first job! And I learned a lot in this company</p>
								</div>
							</div>
						</li>
						<li>
							<div class="timeline-image">
								<img class="rounded-circle img-fluid" src="img/assets/lifedata.jpg" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>July 2013 - March 2014</h4>
									<h4 class="subheading">LiFEDATA Systems, Inc.</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">After i took a month break, I joined this company and gained a new skill set!</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted">
							<div class="timeline-image">
								<img class="rounded-circle img-fluid" src="img/assets/info-alchemy.jpg" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>March 2014 - September 2016</h4>
									<h4 class="subheading">Info Alchemy Corporation</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">The third company that i joined, and worked with awesome people!</p>
								</div>
							</div>
						</li>
						<li>
							<div class="timeline-image bg-color-white">
								<img class="rounded-circle img-fluid" src="img/assets/yondu-inc.jpg" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>September 2016 - June 2017</h4>
									<h4 class="subheading">Yondu, Inc.</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">I wanted to get out with my comfort zone and decided to join this company, and luckily I learned a lot!</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted">
							<div class="timeline-image">
								<img class="rounded-circle img-fluid" src="img/assets/cloudstaff.jpg" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>June 2017 - October 2018</h4>
									<h4 class="subheading">cloudstaff philippines inc.</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">I wanted to experience to work with a foreigner, so i decided to move in pampanga and it's fun to work with them!</p>
								</div>
							</div>
						</li>
						<li>
							<div class="timeline-image bg-color-white">
								<img class="rounded-circle img-fluid" src="img/assets/yondu-inc.jpg" alt="">
							</div>
							<div class="timeline-panel">
								<div class="timeline-heading">
									<h4>PRESENT</h4>
									<h4 class="subheading">Yondu, Inc.</h4>
								</div>
								<div class="timeline-body">
									<p class="text-muted">I missed my family in manila, so i returned to manila and luckily the door is still open for me!</p>
								</div>
							</div>
						</li>
						<li class="timeline-inverted">
							<div class="timeline-image bg-color-default">
								<h4>
									Let's Talk!
									<br>I am open to opportunities!
								</h4>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: 'timeline',
    mounted(){
    	ScrollReveal().reveal('.timeline-image', { interval: 200 });
    }
}
</script>

<style lang="scss">
	
	@import "~styles/variables";
	@import "~styles/timeline";

	.bg-color-white{
		background-color: #fff !important;
	}

	.bg-color-default{
		background-color: #2bbbad !important;
	}

	#about{
		margin-top: 20px;
	}

</style>