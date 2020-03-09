<template>
  <div class="hello">
    <site-header></site-header>
  </div>
</template>

<script>
import SiteHeader from './SiteHeader'
export default {
  name: 'HelloWorld',
  components: {SiteHeader},
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
