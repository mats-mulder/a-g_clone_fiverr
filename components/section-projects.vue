<template>
  <div id="section-projects">
    <nuxt-link id="all-projects-btn" to="/projecten" class="btn-round btn-green">Alle projecten</nuxt-link>
    <div class="bg-highlight" id="slogan-holder">
      <div id="text-holder">
        <h5 id="slogan">
          <span id="slogan-a">{{ content.features[0].sentence }}</span>
          <span id="slogan-b">{{ content.features[1].sentence }}</span>
          <span id="slogan-c">{{ content.features[2].sentence }}</span>
        </h5>
        <div class="d-flex flex-row mt-4 mt-lg-5">
          <div id="desc-bar" class="vertical-divider bg-mid mr-2"></div>
          <div class="col-12 col-md-11 col-lg-10 col-xl-9">
            <p class="aspect-desc" id="desc-a">{{ content.features[0].omschrijving }}</p>
            <p class="aspect-desc" id="desc-b">{{ content.features[1].omschrijving }}</p>
            <p class="aspect-desc" id="desc-c">{{ content.features[2].omschrijving }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid" id="projects">
      <div class="row justify-content-center justify-content-md-start">
        <div class="col-12 col-sm-9 col-md-5 offset-md-6">
          <div class="category" :id="'category-'+category" v-for="(category, index) in ['a', 'b', 'c']">
            <nuxt-link :to="project.substring(10, project.length-3)" v-for="project in content.features[index].projecten">
              <div class="project" :style="'background-image:url('+ projects[project.substring(7, project.length-3)]['banner_image'] +')'">
                <div class="project-shadow">
                  <h2>{{ projects[project.substring(7, project.length-3)].title }}</h2>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "section-projects",
  props: {
    content: Object,
    projects: Object,
  },

  mounted() {
    let tl_sticky = this.$gsap.timeline({
      scrollTrigger: {
        trigger: "#section-projects",
        pin: '#slogan-holder',   // pin the trigger element while active
        scrub: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      }
    })

    let mm = this.$gsap.matchMedia();

    mm.add("(min-width: 768px) and (max-width: 1198px)", () => {
      let tl_width = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#slogan-holder",
          scrub: true,
          start: 'top top',
          invalidateOnRefresh: true,
        }
      })
      tl_width.fromTo('#slogan-holder',{width: '100%'}, {width: '44vw'},0)

      return () => {
        tl_width.kill();
      }
    });

    mm.add("(min-width: 1199px)", () => {
      let tl_width = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#slogan-holder",
          scrub: true,
          start: 'top top',
          invalidateOnRefresh: true,
        }
      })
      tl_width.fromTo('#slogan-holder',{width: '100%'}, {width: '35vw'},0)

      return () => {
        tl_width.kill();
      }
    });

    mm.add("(max-width: 767px)", () => {
      let tl_width = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#slogan-holder",
          scrub: true,
          start: 'top top',
          invalidateOnRefresh: true,
        }
      })
      tl_width.fromTo('#slogan-holder',{height: '100%'},{height: '40%'},0)
      tl_width.to('#slogan',{opacity: 0, marginTop: '-90%'}, 0)

      let tl_cat_c = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#category-c",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        }
      })
      tl_cat_c.to(['#slogan-a', '#slogan-b'],{opacity: 0.25, duration: 0.2},0)
      tl_cat_c.to(['#slogan-a', '#slogan-b'],{opacity: 1, duration: 0.2},0.8)

      tl_cat_c.fromTo('#desc-c',{opacity:0, marginTop: '-2rem'}, {opacity: 1, marginTop: 0, duration: 0.2},0)
      tl_cat_c.to('#desc-c',{opacity:0, marginTop: '-2rem', duration: 0.2},0.8)

      tl_cat_c.fromTo('#desc-bar',{height: 0}, {height: document.getElementById('desc-c').offsetHeight, duration: 0.2},0)
      tl_cat_c.to('#desc-bar',{height: 0, duration: 0.2},0.8)

      tl_cat_c.to('#slogan-holder',{height: '100%', backgroundColor: '#EDEDED',duration: 0.5},1)
      tl_cat_c.to('#text-holder',{opacity: 0,duration: 0.5},1)

      tl_cat_c.to('#all-projects-btn',{display: 'none', opacity: 0, duration: 0.2},0.8)

      return () => {
        tl_width.kill();
        tl_cat_c.kill();
      }
    });

    mm.add("(min-width: 767px)", () => {
      let tl_cat_c = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#category-c",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        }
      })
      tl_cat_c.to(['#slogan-a', '#slogan-b'],{opacity: 0.25, duration: 0.2},0)
      tl_cat_c.to(['#slogan-a', '#slogan-b'],{opacity: 1, duration: 0.2},0.8)

      tl_cat_c.fromTo('#desc-c',{opacity:0, marginTop: '-2rem'}, {opacity: 1, marginTop: 0, duration: 0.2},0)
      tl_cat_c.to('#desc-c',{opacity:0, marginTop: '-2rem', duration: 0.2},0.8)

      tl_cat_c.fromTo('#desc-bar',{height: 0}, {height: document.getElementById('desc-c').offsetHeight, duration: 0.2},0)
      tl_cat_c.to('#desc-bar',{height: 0, duration: 0.2},0.8)

      tl_cat_c.to('#slogan-holder',{width: '100%', backgroundColor: '#EDEDED',duration: 0.5},1)
      tl_cat_c.to('#text-holder',{opacity: 0,duration: 0.5},1)

      tl_cat_c.to('#all-projects-btn',{display: 'none', opacity: 0, duration: 0.2},0.8)

      return () => {
        tl_cat_c.kill();
      }
    })

    let tl_cat_a = this.$gsap.timeline({
      scrollTrigger: {
        trigger: "#category-a",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    tl_cat_a.to(['#slogan-b', '#slogan-c'],{opacity: 0.25, duration: 0.2},0)
    tl_cat_a.to(['#slogan-b', '#slogan-c'],{opacity: 1, duration: 0.2},0.8)

    tl_cat_a.fromTo('#desc-a',{opacity:0, marginTop: '-2rem'}, {opacity: 1, marginTop: 0, duration: 0.2},0)
    tl_cat_a.to('#desc-a',{opacity:0, marginTop: '-2rem', duration: 0.2},0.8)

    tl_cat_a.fromTo('#desc-bar',{height: 0}, {height: document.getElementById('desc-a').offsetHeight, duration: 0.2},0)
    tl_cat_a.to('#desc-bar',{height: 0, duration: 0.2},0.8)

    tl_cat_a.fromTo('#all-projects-btn',{display: 'none', opacity: 0},{display: 'initial', opacity: 1, duration: 0.2},0)


    let tl_cat_b = this.$gsap.timeline({
      scrollTrigger: {
        trigger: "#category-b",
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      }
    })
    tl_cat_b.to(['#slogan-a', '#slogan-c'],{opacity: 0.25, duration: 0.2},0)
    tl_cat_b.to(['#slogan-a', '#slogan-c'],{opacity: 1, duration: 0.2},0.8)

    tl_cat_b.fromTo('#desc-b',{opacity:0, marginTop: '-2rem'}, {opacity: 1, marginTop: 0, duration: 0.2},0)
    tl_cat_b.to('#desc-b',{opacity:0, marginTop: '-2rem', duration: 0.2},0.8)

    tl_cat_b.fromTo('#desc-bar',{height: 0}, {height: document.getElementById('desc-b').offsetHeight, duration: 0.2},0)
    tl_cat_b.to('#desc-bar',{height: 0, duration: 0.2},0.8)

  }
}
</script>

<style scoped lang="scss">

#section-projects{
  max-width: 100vw;
  overflow-x: hidden;
}

#slogan-holder{
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 3;

  #text-holder{
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 10%;
    width: 25vw;
  }
}

#projects{
  margin-top: 60vh;
  position: relative;
  z-index: 2;
}

.category{
  padding-bottom: 50vh;
}

.project{
  position: relative;
  height: 22vw;
  background-image: url("/images/buro.jpg");
  background-size: cover;
  background-position: center;
  margin: 2rem;
  transition: 200ms;

  .project-shadow{
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(78, 78, 80, 0) 74.48%, rgba(27, 26, 30, 0.31) 100%);
  }

  h2{
    color: white;
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
  }

  &:hover{
    transform: scale(0.95);
    cursor: pointer;
  }
}

.aspect-desc{
  position: absolute;
  opacity: 0;
}

#all-projects-btn{
  position: fixed;
  left: 38vw;
  bottom: 5%;
  opacity: 0;
  display: none;
  z-index: 5;
}

@media (max-width: $breakpoint-xl) {
  #slogan-holder{
    #text-holder{
      width: 32vw;
    }
  }
}

@media (max-width: $breakpoint-lg) {

}

@media (max-width: $breakpoint-md) {
  .project{
    height: 30vw;
  }

  #slogan-holder{
    #text-holder{
      transform: translate(0, -50%);
      left: 10%;
      width: 75%;
    }
  }
  #all-projects-btn{
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
  }

  .project h2{
    left: 50%;
    transform: translate(-50%);
    white-space: nowrap;
    bottom: 5%;
  }
}

@media (max-width: $breakpoint-sm) {
  #slogan-holder{
    #text-holder{
      transform: translate(0, -50%);
      width: 80%;
    }
  }

  .project{
    height: 30vh;
    margin: 1rem;
    margin-bottom: 3rem;
  }
}


</style>
