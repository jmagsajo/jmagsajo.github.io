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
    html, body, #wrapper{
        /*height: 100% !important;*/
    }
    .h-100{
        /*height: 100% !important;*/
    }
</style>
