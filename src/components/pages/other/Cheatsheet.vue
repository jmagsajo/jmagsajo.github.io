<template>
	<span>
    	<div class="container-fluid banner">
			<div class="banner-text">
				<p>Cheat Sheet</p>
			</div>
		</div>
		<div class="container" id="contact-container">
			<div class="row">
				<div class="col-md-4">
					<h1>PHP</h1>
					<ul>
						<li><a target="_blank" href="https://www.w3schools.com/php/func_filesystem_fgetcsv.asp">PHP fgetcsv() Function</a></li>
						<li><a target="_blank" href="https://stackoverflow.com/questions/22991021/php-to-round-up-to-the-2nd-decimal-place">PHP to round up to the 2nd decimal place</a></li>
						<li><a target="_blank" href="https://stackoverflow.com/questions/10646105/how-to-use-a-csv-file-in-phpunit-test/34253401#34253401">How to use a csv file in PHPUnit test</a></li>
						<li><a target="_blank" href="https://hackernoon.com/you-dont-understand-the-single-responsibility-principle-abfdd005b137">Single Responsibility Principle</a></li>
						<li><a target="_blank" href="https://tighten.co/blog/tidying-up-your-phpunit-tests-with-data-providers">Tidying Up Your PHPUnit Tests with Data Providers</a></li>
						<li><a target="_blank" href="https://www.diycode.cc/projects/FriendsOfPHP/PHP-CS-Fixer">PHP-CS-Fixer</a></li>
						<li><a href="https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design" target="_blank">S.O.L.I.D</a></li>
						<li><a href="https://stackoverflow.com/questions/32615861/get-week-number-in-month-from-date-in-php" target="_blank">Get week number in month from date in PHP?</a></li>
						<li>
							<a href="https://andy-carter.com/blog/difference-between-include-and-require-statements-in-php" target="_blank">Difference Between 'include' and 'require' Statements in PHP</a>
						</li>
						<li>
							<a href="https://www.cloudways.com/blog/php-security/" target="_blank">Ultimate PHP Security Best Practices</a>
						</li>
						<li>
							<a href="https://stackoverflow.com/questions/1876516/is-it-possible-to-have-an-interface-that-has-private-protected-methods" target="_blank">Is it possible to have an interface that has private / protected methods?</a>
						</li>
						<li>
							<a href="https://phppot.com/php/php-access-modifiers/" target="_blank">PHP Access Modifiers</a>
						</li>
						<li>
							<a href="https://www.startutorial.com/articles/view/5-new-features-in-php-7-that-you-should-have-a-look-at" target="_blank">5 New Features In PHP 7 That You Should Have A Look At</a>
						</li>
					</ul>
				</div>

				<div class="col-md-4">
					<h1>VueJS</h1>
					<ul>
						<li><a href="https://vuejs.org/" target="_blank">vuejs</a></li>
						<li><a href="https://vuex.vuejs.org/" target="_blank">vuex</a></li>
						<li><a href="https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations" target="_blank">HTML5 History Mode</a></li>
						<li>
							<a href="https://vuejsdevelopers.com/2017/07/03/vue-js-code-splitting-webpack/?fbclid=IwAR13D3lLvIRaRJzwZl9VYrr4ThL5ssfzXkj5c5mFEFaZUI5Wgo3i77gM3MU" target="_blank">Code Splitting With Vue.js And Webpack</a>
						</li>
					</ul>
				</div>

				<div class="col-md-4">
					<h1>MySQL</h1>
					<ul>
						<li><a href="https://www.tutorialspoint.com/mysql/mysql-indexes.htm" target="_blank">MySQL - INDEXES</a></li>
						<li><a href="https://www.w3resource.com/mysql/mysql-procedure.php" target="_blank">MySQL Stored Procedure</a></li>
						<li><a href="https://dev.mysql.com/doc/refman/8.0/en/views.html" target="_blank">Using Views</a></li>
						<li><a href="https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html" target="_blank">View Syntax</a></li>
						<li><a href="http://zetcode.com/databases/mysqltutorial/storageengines/" target="_blank">MySQL storage engines</a></li>
						<li>
							<a href="https://www.guru99.com/joins.html" target="_blank">MySQL JOINS Tutorial: INNER, OUTER, LEFT, RIGHT, CROSS</a>
						</li>
					</ul>
				</div>

				<div class="col-md-4">
					<h1>Laravel</h1>
					<ul>
						<li><a href="https://laravel.com/docs/6.x" target="_blank">Docs 6.x</a></li>
						<li><a href="https://lumen.laravel.com/" target="_blank">Lumen</a></li>
						<li><a href="https://backpackforlaravel.com/" target="_blank">backpack</a></li>
					</ul>
				</div>

				<div>
					<h1>OOP</h1>
					<ul>
						<li>
							<a href="https://www.guru99.com/interface-vs-abstract-class-java.html" target="_blank">Interface vs Abstract Class in Java</a>
						</li>
						<li>
							<a href="https://www.quora.com/What-is-different-between-abstract-class-and-interface-in-PHP" target="_blank">What is different between abstract class and interface in PHP?</a>
						</li>
						<li>
							<a href="https://www.greycampus.com/codelabs/php/OOPS" target="_blank">OBJECT-ORIENTED PROGRAMMING IN PHP</a>
						</li>
						<li>
							<a href="https://medium.com/@hamzzza.ahmed95/four-pillars-of-object-oriented-programming-oop-e8d7822aa219" target="_blank">Four Pillars of Object Oriented Programming</a>
						</li>
						<li>
							<a href="https://stackoverflow.com/questions/3384204/what-are-namespaces" target="_blank">What are namespaces?</a>
						</li>
						<li>
							<a href="https://www.tutorialspoint.com/java/java_polymorphism.htm" target="_blank">Java - Polymorphism</a>
						</li>
					</ul>
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
	    background: linear-gradient( rgba(35, 35, 90, 0.45), rgba(40, 0, 0, 0.45) ),url(/img/assets/background2.jpg);
	    background-attachment: fixed;
	    background-repeat: no-repeat;
	    /* background-size: cover; */
		background-size: 100% 100%;
	    color: #fff;
	    height: 50% !important; 
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