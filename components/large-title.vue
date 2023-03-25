<template>
  <div class="row large-title-holder justify-content-center justify-content-sm-start">
    <div class="col-11 col-sm-10 col-md-8 col-lg-8 col-xl-7 offset-sm-1 offset-lg-2">
      <div class="text-nowrap section-title">
        <h1 id="large-title-1" class="large-title">{{ text[0] }}</h1>
        <h1 id="large-title-2" class="text-right large-title">{{ text[1] }}</h1>
        <h1 id="large-title-3" class="large-title">{{ text[2] }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "large-title",
  props:{
    text: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    let mm = this.$gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      let tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: ".large-title-holder",
          scrub: true,
          start: 'top 80%',
          end: 'bottom 30%',
          invalidateOnRefresh: true,
        }
      });
      tl.fromTo('.large-title',{opacity: 0}, {opacity: 1, stagger: 0.5, duration:1},0)
      tl.fromTo('#large-title-1',{marginLeft: '0'},{marginLeft: '5rem', duration: 3},0)
      tl.fromTo('#large-title-2',{marginRight: '-10rem'},{marginRight: '0', duration: 3},0)
      tl.fromTo('#large-title-3',{marginLeft: '-20rem'},{marginLeft: '0', duration: 3},0)

      return () => {
        tl.kill();
      }
    })
  }
}
</script>

<style scoped>


</style>
