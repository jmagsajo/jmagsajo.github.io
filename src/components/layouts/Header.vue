<template>
    
    <!--Navbar-->
    <nav id="navbar" class="navbar navbar-expand-lg navbar-dark default-color fixed-top navbar-top">
        <div class="container">
            <!-- Navbar brand -->
            <a class="navbar-brand" href="https://jmagsajo.github.io/">Joseph</a>

            <!-- Collapse button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Collapsible content -->
            <div class="collapse navbar-collapse" id="basicExampleNav">

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
    }
}
</script>

<style>
    .navbar-brand {
      color: #2d3436 !important;
      font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      font-size: 45px;
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
</style>