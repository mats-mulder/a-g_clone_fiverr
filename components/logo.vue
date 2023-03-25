<template>
  <div id="logo-holder" class="d-none d-md-block">
    <nuxt-link to="/">
      <img id="logo-pink" class="logo" src="/assets/logo-pink.png">
      <img id="logo-white" class="logo" src="/assets/logo-white.png">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "logo",
  mounted() {
    // let tl = this.$gsap.timeline()
    // tl.to('#logo-holder',{opacity: 1},1)
  }
}
</script>

<style scoped lang="scss">

#logo-holder{
  position: fixed;
  left: 2rem;
  top: 2rem;
  opacity: 1;
  z-index: 13;

  .logo{
    width: 4rem;
    position: absolute;
  }
  #logo-white{
    opacity: 0;
  }
}

</style>
