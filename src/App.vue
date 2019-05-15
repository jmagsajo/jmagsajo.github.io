<template>
    <div>
        <router-view name="header"></router-view>
        <div class="container">
            <div class="row">
                <router-view></router-view>
            </div>
        </div>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

</style>
