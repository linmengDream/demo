<template>
  <div class="page page-layout page-layout-wrapper">
    <keep-alive>
      <router-view class="app-sub-page" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="app-sub-page" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
  .page-layout-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .app-sub-page{
      height: 100%;
    }
  }
</style>
