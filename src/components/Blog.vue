<template>
    <div class="blog">
        <site-header></site-header>
            <div class="content">
                <h1 id="heading">Coming soon...</h1>
        </div>
    <custom-footer></custom-footer>
    </div>
</template>

<script>
import SiteHeader from './SiteHeader'
import customFooter from './customFooter'
export default {
    name: 'Blog',
    components: {
    SiteHeader,
    customFooter
  }
    
}
</script>

<style scoped>
.content {
  height: 73vh;
  margin-left: 5vw;
}
#heading {
  font-family: "Bebasneue-Regular";
  font-size: 50px;
  margin-top: 7vh;
  margin-bottom: 0;
}
</style>