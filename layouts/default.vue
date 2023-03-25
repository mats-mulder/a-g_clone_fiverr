<template>
  <div>
    <div id="lottie-holder">
      <lottie-animation id="lottie"
                        ref="anim"
                        :autoPlay="false"
                        :animationData="require('@/assets/animation.json')"
                        renderer="svg"
      />
    </div>
    <div id="loader"></div>
    <Nuxt />
  </div>
</template>

<script>
import lottieAnimation from 'lottie-web-vue'
export default {
  components: {lottieAnimation},
  methods: {
    lottieComplete(){
      const pathname = window.location.pathname
      window.scrollTo(0, 0);
      document.getElementById('lottie-holder').style.position = 'absolute'
      let tl = this.$gsap.timeline({
        onComplete: function (){

        }
      })
      if(pathname === '/'){
        tl.to('#lottie-holder',{backgroundColor: 'rgba(0,0,0,0)', zIndex: 1, duration: 1, ease: 'power4'},0)
        tl.fromTo('#section-home',{height: '100vh', width: '100%', marginLeft: 0, marginTop: 0},{height: '105vh', width: '105vw', marginLeft: '-2.5vw', marginTop: '-2.5vh', duration: 1, ease: 'power4'},0)
      }
      else{
        tl.to('#lottie-holder',{backgroundColor: 'rgba(0,0,0,0)', opacity: 0, zIndex: 1, duration: 1},0)
        tl.to('#lottie-holder',{opacity: 1, duration: 0.1},1)
      }
    },
  },
  mounted() {
    const width_per =  window.innerWidth / 1920
    const height_per = window.innerHeight / 1080
    let scale_factor = Math.max(width_per, height_per)
    console.log(scale_factor)
    document.getElementById('lottie').style.height = 1080 * scale_factor + 'px'
    document.getElementById('lottie').style.width = 1920* scale_factor + 'px'
    // document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    setTimeout(() => {  this.$refs.anim.play() }, 200);
    setTimeout(() => {  this.lottieComplete() }, 4500);
  }
}
</script>

<style lang="scss">

#loader{
  position: fixed;
  background-color: $light-pink;
  z-index: 15;
  height: 100vh;
  width: 100%;
}
#lottie-holder{
  position: fixed;
  z-index: 20;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: $highlight;
}
#lottie{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
