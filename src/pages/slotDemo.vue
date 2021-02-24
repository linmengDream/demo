<template>
  <div>
    112
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    watch:{
      '$route'(to,from) {
        console.log(to,from)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>