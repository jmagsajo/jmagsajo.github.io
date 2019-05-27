<template>
     <renderless-parent>
    	<div class="container-fluid banner">
			<!-- <div class="row"> -->

				

			<!-- </div> -->
		</div>
    	<timeline></timeline>
	 </renderless-parent>
</template>

<script>

import timeline from './Timeline';
import { renderless } from '../../Renderless.js';

export default {
    name: 'home',
    components : {
    	timeline,
    	'renderless-parent' : renderless,
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
</style>