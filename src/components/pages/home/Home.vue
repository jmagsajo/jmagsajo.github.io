<template>
    <section class="h-100">
    	<div class="container-fluid banner h-150">
			<!-- <div class="row"> -->

				

			<!-- </div> -->
		</div>
    	<timeline></timeline>
	</section>
</template>

<script>

import timeline from './Timeline';

export default {
    name: 'home',
    components : {
    	timeline,
    },
}
</script>

<style>
	.h-150{
	    /*height: 150% !important;*/
	}
	.banner {
	    /* background: url(/img/assets/background.jpg);
	    background-attachment: fixed;
	    background-repeat: no-repeat;
	    background-size: cover;
	    color: #fff;
	    height: 100%;  */
	}
</style>