<template>
  <div class="container-fluid bg-background" id="section-about">

    <nuxt-link class="btn-round btn-green" id="team-btn" to="/team">Ons team</nuxt-link>

    <large-title :text="[content.title['part_a'], content.title['part_b'], content.title['part_c']]"></large-title>

    <div class="row mt-5" id="subtitle">
      <div class="col-12 text-center">
        <h4>{{ content.subtitle }}</h4>
      </div>
    </div>

    <div class="row" id="about-scroll-holder">
      <div class="col-12 col-sm-10 col-lg-9 offset-sm-1 offset-md-0 offset-lg-1">
        <div class="row about-scroll-holder" :id="'about-scroll-holder-'+ (index + 1)" v-for="(item, index) in content.features">
          <div class="col-12 col-md-7">
            <div class="d-flex flex-row" :id="'about-image-'+ (index + 1)">
              <div class="d-md-flex flex-column mr-3 h-50 d-none">
                <div class="vertical-divider bg-black mb-2" v-for="(k, i) in [0, 1, 2]" :class="{'bg-mid': i===index}"></div>
              </div>
              <div class="about-scroll-image flex-grow-1" :style="'background-image:url('+ item.image +')'">

              </div>
<!--              <img class="img-fluid  flex-grow-1" :src="item.image">-->
            </div>
          </div>
          <div class="col-12 col-md-5 pl-md-5 about-scroll-content" :id="'about-scroll-content-' + (index + 1)">
            <h5>{{ item.title }}</h5>
            <p class="mt-4">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import LargeTitle from "./large-title";
export default {
  name: "section-about",
  components: {LargeTitle},
  props: {
    content: Object,
  },
  mounted() {
    // Subtitle timeline
    let tl_st = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '#subtitle',
        start: 'top 90%',
        end: 'top 70%',
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    tl_st.fromTo('#subtitle', {opacity: 0}, {opacity: 1})

    // mobile btn timeline
    let tl = this.$gsap.timeline({
      scrollTrigger:  {
        trigger: '#about-scroll-holder',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
      },
    })
    tl.fromTo('#team-btn',{zIndex: 0, opacity: 0},{zIndex: 4, opacity: 1, duration: 0.2},0)

    // Aspects timelines
    let collection = document.getElementsByClassName("about-scroll-holder");

    let mm = this.$gsap.matchMedia();

    for (let i = 0; i < collection.length; i++) {

      mm.add("(min-width: 767px)", () => {
        let tl = this.$gsap.timeline({
          scrollTrigger: {
            trigger: collection[i],
            pin: '#about-image-' + (i+1),
            scrub: true,
            start: 'top 25%',
            end: 'bottom 10%',
            pinSpacing: false,
            invalidateOnRefresh: true,
          }
        });
        tl.fromTo('#about-image-' + (i + 1), {opacity: 0 }, {opacity: 1, duration: 0.5}, 0)
        tl.fromTo('#about-image-' + (i + 1), { marginLeft: '-2vw'}, {marginLeft: 0, duration: 0.8}, 0)
        tl.fromTo('#about-scroll-content-' + (i+1), {opacity: 0}, {opacity: 1, duration: 0.3}, 0)
        tl.to('#about-image-' + (i + 1), {marginLeft: '-2vw', duration: 0.8}, 1.2)
        tl.to('#about-image-' + (i + 1), {opacity: 0, duration: 0.3}, 1.5)
        tl.to('#about-scroll-content-' + (i+1), {opacity: 0, duration: 0.3}, 1.5)

        return () => {
          tl.kill();
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

#team-btn{
  position: fixed;
  bottom: 10%;
  right: 12%;
}


#section-about{
  padding-top: 60vh;
  margin-bottom: 60vh;
}

#about-scroll-holder{
  margin-top: 15vh;

  .about-scroll-image{
    height: 50vh;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .about-scroll-content{
    padding-top: 50vh;
  }

}

@media (max-width: $breakpoint-xl) {

}

@media (max-width: $breakpoint-lg) {


}

@media (max-width: $breakpoint-md) {
  #section-about{
    margin-bottom: 10vh;
  }
  #about-scroll-holder{
    padding-top: 5vh;

    .about-scroll-image{
      height: 35vh;
    }

    .about-scroll-content{
      padding-top: 5vh;
      padding-bottom: 5vh;
    }
  }
  #team-btn{
    z-index: 4;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
    width: min-content;
    white-space: nowrap;
  }
}


@media (max-width: $breakpoint-sm) {

}

</style>
