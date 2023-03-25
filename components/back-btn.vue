<template>
  <div class="container-fluid d-none d-md-block" id="back-btn">
    <div class="row justify-content-center">
      <div class="col-9 col-lg-10 p-0">

          <div style="width: min-content">
            <nuxt-link class="d-flex flex-row btn-round shadow-sm" :class="'btn-'+color" :to="path">
              <img src="/assets/arrow_left.png">
              <p class="">{{ text }}</p>
            </nuxt-link>
          </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "back-btn",
  props: {
    path: {
      type: String,
      required: true,
    },
    text:{
      type: String,
      required: true,
    },
    color: String,
  },
  mounted() {
    // Initial state
    // let scrollPos = 0;
    // let up = false;
    // let v = this

    let tl_appear = this.$gsap.timeline({
      // onComplete: function (){
      //   window.addEventListener('scroll', function(){
      //     // detects new state and compares it with the new one
      //     if ((document.body.getBoundingClientRect()).top > scrollPos && up === false){
      //       let tl = v.$gsap.timeline({})
      //       tl.set('#back-btn',{position: 'fixed'})
      //       tl.fromTo('#back-btn',{opacity: 0, paddingTop: 0},{opacity: 1, paddingTop: '2.5rem', duration: 0.5})
      //       up = true
      //     }
      //     else if((document.body.getBoundingClientRect()).top < scrollPos && up === true){
      //       let tl = v.$gsap.timeline({})
      //       tl.to('#back-btn',{opacity: 0, paddingTop: 0, duration: 0.5})
      //       tl.set('#back-btn',{position: 'absolute'},0.5)
      //       up = false
      //     }
      //     scrollPos = (document.body.getBoundingClientRect()).top;
      //   });
      // }
    })
    tl_appear.fromTo('#back-btn',{opacity: 0, paddingTop: 0},{opacity: 1, paddingTop: '2.5rem', duration: 0.5},2)
  }
}
</script>

<style scoped lang="scss">

.container-fluid{
  padding-top: 2.5rem;
  position: fixed;
  z-index: 12;
  opacity: 0;
}

a{
  text-decoration: none;
}

.btn-round{

  p{
    margin: 0;
    font-size: 1rem;
    text-decoration: none;
    color: $black;
  }

  img{
    height: 0.8rem;
    margin-top: 0.25rem;
    margin-right: 0.8rem;
    transition: 100ms;
  }

  &:hover{
    padding-left: 2.5rem;

    img{
      margin-right: 1rem;
    }
  }
}



</style>
