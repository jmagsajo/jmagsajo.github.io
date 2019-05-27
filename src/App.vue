<template>
    <div id="wrapper">
        <router-view name="app-header"></router-view>
        <router-view></router-view>
        <a id="back-to-top" title="Back to top"><span class="fas fa-angle-up"></span><!--&uarr;--></a>
        <router-view name="app-footer"></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    /***** SCROLL TO TOP *****/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
  }
}
</script>

<style lang="scss">
    html, body{
        /*margin:0;
        padding:0;*/
        height:100% !important;
    }
    #wrapper{
        height:100% !important;
        /*position:relative;*/
    }
    .h-100{
        height: 100% !important;
    }
    .h-150{
        height: 150% !important;
    }
    /***** SCROLL TO TOP ********/
    #back-to-top {
        position: fixed;
        bottom: 40px;
        right: 40px;
        z-index: 9999;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 30px;
        background: #b2bec3;
        color: #444;
        cursor: pointer;
        border: 0;
        border-radius: 2px;
        text-decoration: none;
        transition: opacity 0.2s ease-out;
        opacity: 0;
    }
    #back-to-top:hover {
        background: #e9ebec;
    }
    #back-to-top.show {
        opacity: 0.7;
    }
</style>
