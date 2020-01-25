<template>
    
    <!--Navbar-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark default-color fixed-top navbar-top">
        <div class="container">
            <!-- Navbar brand -->
            <a class="navbar-brand" href="https://jmagsajo.github.io/">Joseph</a>

            <!-- Collapse button -->
           <!--  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
           aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
           </button> -->

            <!-- Collapse button -->
            <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#NavbarContent"
            aria-controls="NavbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="animated-icon1"><span></span><span></span><span></span></div>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="NavbarContent">

                <!-- Links -->
                <ul class="navbar-nav ml-auto">
                    <router-link to="/" tag="li" class="nav-item ripple-parent" active-class="active" exact>
                        <a class="nav-link navbar-link">Home</a>
                    </router-link>

                    <router-link to="/portfolio" tag="li" class="nav-item ripple-parent" active-class="active">
                        <a class="nav-link navbar-link">Porfolio</a>
                    </router-link>

                    <router-link to="/contact" tag="li" class="nav-item ripple-parent" active-class="active">
                        <a class="nav-link navbar-link">Contact</a>
                    </router-link>

                    <router-link to="/cheatsheet" tag="li" class="nav-item ripple-parent" active-class="active">
                        <a class="nav-link navbar-link">cheat sheet</a>
                    </router-link>
                </ul>
                <!-- Links -->
            </div>
            <!-- Collapsible content -->
        </div>
    </nav>
    <!--/.Navbar-->
    
</template>

<script>
export default {
    name: 'app-header',
    mounted(){
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            navbar.classList.remove("navbar-top")
          } else {
            navbar.classList.add("navbar-top");
          }
        }

        $(document).ready(function () {

            $('.first-button').on('click', function () {
                $('.animated-icon1').toggleClass('open');
            });
        });
    }
}
</script>

<style>
    .navbar-brand {
      /*color: #2d3436 !important;*/
      font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 30px;
    }
    .navbar-top .navbar-brand {
        font-size: 45px;
        color: #fff !important;
    }
    .navbar.navbar-top{
        background: rgba(0, 0, 0, 0) !important;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0), 0 2px 10px 0 rgba(0,0,0,0) !important;
        -webkit-transition: background 300ms linear;
        -ms-transition: background 300ms linear;
        transition: background 300ms linear;
        padding-top: 0px;
        padding-bottom: 0px;
        -webkit-transition:padding 0.3s linear;
        -moz-transition:padding 0.3s linear;  
        -o-transition:padding 0.3s linear;         
        transition:padding 0.3s linear;  
    }
    .navbar.navbar-top .navbar-brand{
        color: #fff !important;
    }

    .navbar{
        background-color: #2bbbad;
        -webkit-transition: background-color 300ms ease;
        -ms-transition: background-color 300ms ease;
        transition: background-color 300ms ease;
        padding-top: 5px;
        padding-bottom: 5px;
        -webkit-transition:padding 0.3s ease;
        -moz-transition:padding 0.3s ease; 
        -o-transition:padding 0.3s ease;        
        transition:padding 0.3s ease;  
    }

    /* Icon 1 */

    .animated-icon1{
        width: 30px;
        height: 20px;
        position: relative;
        margin: 0px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .5s ease-in-out;
        -moz-transition: .5s ease-in-out;
        -o-transition: .5s ease-in-out;
        transition: .5s ease-in-out;
        cursor: pointer;
    }

    .animated-icon1 span, .animated-icon2 span, .animated-icon3 span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .animated-icon1 span {
        /*background: #e65100;*/
        background: #fff;
    }

    .animated-icon1 span:nth-child(1) {
        top: 0px;
    }

    .animated-icon1 span:nth-child(2) {
        top: 10px;
    }

    .animated-icon1 span:nth-child(3) {
        top: 20px;
    }

    .animated-icon1.open span:nth-child(1) {
        top: 11px;
        -webkit-transform: rotate(135deg);
        -moz-transform: rotate(135deg);
        -o-transform: rotate(135deg);
        transform: rotate(135deg);
    }

    .animated-icon1.open span:nth-child(2) {
        opacity: 0;
        left: -60px;
    }

    .animated-icon1.open span:nth-child(3) {
        top: 11px;
        -webkit-transform: rotate(-135deg);
        -moz-transform: rotate(-135deg);
        -o-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }
    
    @media (max-width: 991px) {
        .navbar.navbar-top .navbar-nav{
            background: rgba(0, 0, 0, 0.5);
        }
    }
</style>