<template>
    <div id="wrapper">
        <router-view name="app-header"></router-view>
        <router-view></router-view>
        <router-view name="app-footer"></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
