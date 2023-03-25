<template>
  <div class="bg-background" id="page-holder">
    <image-zoom ref="imageZoom"></image-zoom>

    <navigation back-link="/projecten" back-text="Alle projecten"></navigation>

    <logo></logo>

    <back-btn path="/projecten" text="Projecten" color="green"></back-btn>

    <div id="project-nav" class="flex-row d-none d-md-flex">
      <div id="project-nav-item-1" class="project-nav-item btn-round btn-pink" @click="scrollTo(1100)">Context</div>
      <div id="project-nav-item-2" class="project-nav-item btn-round btn-pink ml-3" @click="scrollTo(1950)">Proces</div>
      <div id="project-nav-item-3" class="project-nav-item btn-round btn-pink ml-3" @click="scrollTo(3625)">Resultaat</div>
    </div>

    <div id="scroll-holder">
      <div id="scroller" class="d-flex flex-column flex-md-row">
        <div class="scroll-section" id="intro-section">
          <div class="intro-image min-nav-width intro-image-scale" :style="'background-image:url('+content['banner_image']+')'">
            <div class="intro-image-shadow"></div>
          </div>
          <h1 class="intro-title">{{ content.title }}</h1>
        </div>

        <div class="scroll-section-75 scroll-section scroll-section-content">
          <div class="container-fluid">
            <div class="row d-md-none">
              <div class="col-12 d-flex flex-row overflow-auto" id="mobile-case-nav">
                <div id="mobile-case-nav-a" @click="scrollToAnchor('#project-context')" class="btn-round btn-pink shadow-sm">Context</div>
                <div id="mobile-case-nav-b" @click="scrollToAnchor('#project-proces')" class="btn-round btn-pink ml-2 shadow-sm">Proces</div>
                <div id="mobile-case-nav-c" @click="scrollToAnchor('#project-resultaat')" class="btn-round btn-pink ml-2 shadow-sm">Resultaat</div>
              </div>
            </div>
            <div class="row d-md-none mt-5 mb-3">
              <div class="col-12">
                <div class="horizontal-divider bg-mid"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-10">
                <h2>{{ content.introduction }}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-section scroll-section-content scroll-section-75" id="project-context">
          <div class="container-fluid h-100">
            <div class="row h-100">
              <div class="col-md-4 col-12">
                <div v-html="content.context.content"></div>
                <div class="mt-5" v-if="content.context['related_articles'] && content.context['related_articles'].length > 0">
                  <p><b>Gerelateerde artikelen:</b></p>
                  <a class="float-left" :href="article.link" target="_blank" v-for="article in content.context['related_articles']">{{article.title}}</a><img class="ml-2" src="/assets/out_link.png">
                </div>
              </div>
              <div class="col-md-2 col-12 mt-5 mt-md-0">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider d-md-none bg-mid"></div>
              </div>
              <div class="col-12 col-md-6 mt-5 mt-md-0">
                <div class="row">
                  <div class="col-12 col-md-6 pl-5 pr-5 mb-2" v-for="item in content.context.labels">
                    <p class="mb-1"><b>{{ item.title }}</b></p>
                    <div v-html="item.content"></div>
                  </div>
                </div>
              </div>
<!--              <div class="col-md-6 col-12 h-100 d-flex flex-column">-->
<!--                <div class="row mt-5 mt-md-0">-->
<!--                  <div class="col-md-3 col-6" v-for="item in content.context.labels">-->
<!--                    <p class="mb-1"><b>{{ item.title }}</b></p>-->
<!--                    <div v-html="item.content"></div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="row flex-grow-1 order-first order-md-last" id="project-context-image" >-->
<!--                  <div class="full-image-background h-100 w-100 zoom-image" @click="$refs.imageZoom.open(content.context.image)" :style="'background-image: url('+ content.context.image + ')'"></div>-->
<!--&lt;!&ndash;                  <img @click="$refs.imageZoom.open(content.context.image)" class="img-fluid zoom-image" :src="content.context.image">&ndash;&gt;-->
<!--                </div>-->
<!--              </div>-->
            </div>
          </div>
        </div>
        <div class="scroll-section scroll-section-75 scroll-section-content" id="project-proces">
          <div class="container-fluid h-100">
            <div class="row justify-content-end h-100">
              <div class="col-12 col-md-10 h-100 p-0">
                <img @click="$refs.imageZoom.open(content.proces.image)" id="project-proces-image" class="img-fluid aspect-2-3 zoom-image" :src="content.proces.image">
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-section scroll-section-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 offset-md-1">
                <div v-html="content.proces.content"></div>
              </div>
              <div class="col-12 col-md-5 offset-md-1">
                <h3 class="quote">{{ content.proces.quote }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div id="project-resultaat"></div>

        <div class="scroll-section scroll-section-75 scroll-section-content" v-for="(section, index) in content.resultaat.sections" :key="index + '-result-section'">
          <div class="container-fluid h-100" v-if="section.type === 'content-equal-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0 d-flex flex-column justify-content-between">
                <div>
                  <h3>{{ section.title }}</h3>
                  <div class="mt-4" v-html="section.content"></div>
                </div>
                <div class="row mt-4">
                  <div class="col-12 col-md-6" v-if="section.images[0]">
                    <img class="aspect-2-3 zoom-image image-stick-bottom" @click="$refs.imageZoom.open(section.images[0])" :src="section.images[0]">
                  </div>
                  <div class="col-12 col-md-6 mt-3 mt-md-0" v-if="section.images[1]">
                    <img class="aspect-2-3 zoom-image image-stick-bottom" @click="$refs.imageZoom.open(section.images[1])" :src="section.images[1]">
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>
          <div class="container-fluid h-100" v-if="section.type === 'content-large-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0">
                <div class="row h-100">
                  <div class="col-12 col-md-6 d-flex flex-column">
                    <h3>{{ section.title }}</h3>
                    <div class="mt-4" v-html="section.content"></div>
                    <img class="aspect-2-3 zoom-image image-stick-bottom" @click="$refs.imageZoom.open(section.images[0])" :src="section.images[0]">
<!--                    <div class="result-image mt-4 zoom-image aspect-2-3" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
                  </div>
                  <div class="col-12 col-md-6 mt-3 mt-md-0">
                    <img class="aspect-2-3 aspect-3-2 zoom-image image-stick-bottom" @click="$refs.imageZoom.open(section.images[1])" :src="section.images[1]">
<!--                    <div class="result-image flex-grow-1 zoom-image" @click="$refs.imageZoom.open(section.images[1])" :style="'background-image: url('+ section.images[1] + ')'"></div>-->
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>

          <div class="container-fluid h-100" v-if="section.type === 'full-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0 p-0 h-100">
                <div class="result-image zoom-image aspect-2-3" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>

          <div class="container-fluid h-100" v-if="section.type === 'full-split-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0">
                <div class="row h-100">
                  <div class="col-6">
                    <div class="result-image aspect-2-3 zoom-image aspect-3-2" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>
                  </div>
                  <div class="col-6">
                    <div class="result-image aspect-2-3 zoom-image aspect-3-2" @click="$refs.imageZoom.open(section.images[1])" :style="'background-image: url('+ section.images[1] + ')'"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>

          <div class="container-fluid h-100"  v-if="section.type === 'split-content-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0">
                <div class="row h-100">
                  <div class="col-12 col-md-6">
                    <h3>{{ section.title }}</h3>
                    <div class="mt-4" v-html="section.content"></div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="result-image aspect-2-3 aspect-3-2 zoom-image" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>

          <div class="container-fluid h-100"  v-if="section.type === 'small-content-image'">
            <div class="row h-100">
              <div class="col-12 col-md-10 mt-5 mt-md-0">
                <div class="row h-100">
                  <div class="col-12 col-md-3">
                    <h3>{{ section.title }}</h3>
                    <div class="mt-4" v-html="section.content"></div>
                  </div>
                  <div class="col-12 col-md-9">
                    <div class="result-image aspect-2-3 zoom-image" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">
                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>
                <div class="horizontal-divider bg-mid d-md-none"></div>
              </div>
            </div>
          </div>

        </div>

<!--        <div class="scroll-section scroll-section-75 scroll-section-content" id="project-resultaat">-->
<!--          <div class="container-fluid h-100">-->
<!--            <div class="row h-100">-->
<!--              <div class="col-12 col-md-10 h-100 d-flex flex-column mt-5 mt-md-0">-->
<!--                <h3 class="mt-5 mt-md-0">{{ content.resultaat['content_block_a'].title }}</h3>-->
<!--                <p class="mt-4">{{ content.resultaat['content_block_a'].content }}</p>-->
<!--                <div class="row mt-md-5 mt-3 flex-grow-1 order-first order-md-last">-->
<!--                  <div class="col-6 col-md-5 full-image-background" :style="'background-image: url('+ content.resultaat['content_block_a']['image_a'] + ')'"></div>-->
<!--                  <div class="col-6 col-md-5 offset-md-1 full-image-background" :style="'background-image: url('+ content.resultaat['content_block_a']['image_b'] + ')'"></div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-12 col-md-2 order-first order-md-last">-->
<!--                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--                <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="scroll-section scroll-section-75 scroll-section-content">-->
<!--          <div class="container-fluid h-100">-->
<!--            <div class="row h-100">-->
<!--              <div class="col-12 col-md-10 mt-5 mt-md-0">-->
<!--                <div class="row h-100">-->
<!--                  <div class="col-12 col-md-5 d-flex flex-column mt-5 mt-md-0">-->
<!--                    <h3>{{ content.resultaat['content_block_b'].title }}</h3>-->
<!--                    <p class="mt-4">{{ content.resultaat['content_block_b'].content }}</p>-->
<!--                    <div class="flex-grow-1 full-image-background mt-5 p-0" :style="'background-image: url('+ content.resultaat['content_block_b']['image_a'] + ')'"></div>-->
<!--                  </div>-->
<!--                  <div class="col-12 col-md-6 offset-md-1 p-0 order-first order-md-last">-->
<!--                    <img class="full-stretch-image" :src="content.resultaat['content_block_b']['image_b']">-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-12 col-md-2 order-first order-md-last">-->
<!--                <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--                <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="scroll-section scroll-section-75 scroll-section-content" id="final-full-image">-->
<!--          <div class="container-fluid h-100">-->
<!--            <div class="row h-100">-->
<!--              <div class="col-12 col-md-11 p-0 full-image-background" :style="'background-image: url('+ content.resultaat['content_block_c']['full_image'] + ')'"></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <div class="scroll-section bg-highlight" id="project-final">
          <div class="container-fluid">
            <div class="row justify-content-center h-100">
              <div class="col-10 h-100">
                <nuxt-link :to="next">
                  <img :src="content.footer['full_image']">
                </nuxt-link>
              </div>
            </div>
            <div class="row justify-content-center mt-3 mt-lg-4 mb-4">
              <div class="col-10">
                <nuxt-link :to="next" class="btn-round btn-white">Volgende project</nuxt-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../../components/navigation";
import BackBtn from "../../components/back-btn";
import Logo from "../../components/logo";
import ImageZoom from "../../components/image-zoom";
export default {
  head() {
    return {
      title: this.content.title + ' - Arons & Gelauff Architecten'
    }
  },
  name: "test",
  components: {ImageZoom, Logo, BackBtn, Navigation},
  transition: {
    appear: true,
    afterEnter(el){
      let mm = this.$gsap.matchMedia();
      mm.add("(min-width: 767px)", () => {
        let tl = this.$gsap.timeline({})
        tl.fromTo('.intro-image',{opacity: 0},{opacity: 1},0)
        tl.fromTo('.intro-title',{opacity:0, left:0, bottom: '6vh'}, {opacity: 1, left: '5vw'},0.4)
        tl.to('#navigation',{right: 0},1)

        return () => {
          tl.kill();
        }
      })
    }
  },
  methods:{
    scrollTo: function (margin){
      let count = this.content.resultaat.sections.length + 5
      console.log(count)
      this.timeline.scrollTrigger.scroll((margin/count) * 10)

    },
    scrollToAnchor: function(anchor){
      document.querySelector(anchor).scrollIntoView({behavior: "smooth"
      });
    }
  },
  data(){
    return {
      timeline: ''
    }
  },
  mounted() {
    document.getElementById('vertical-nav-item-1').style.fontWeight = '600'
    let v = this

    let mm = this.$gsap.matchMedia();
    mm.add("(min-width: 767px)", () => {
      let margin = 0
      if(window.innerWidth > 1200){
        margin = (document.getElementsByClassName('scroll-section').length * 100) - (document.getElementsByClassName('scroll-section-50').length * 50) - (document.getElementsByClassName('scroll-section-75').length * 25) - 100
      }
      else{
        margin = (document.getElementsByClassName('scroll-section').length * 150) - (document.getElementsByClassName('scroll-section-50').length * 50) - (document.getElementsByClassName('scroll-section-75').length * 25) - 200
      }
      this.timeline = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#scroll-holder",
          pin: true,   // pin the trigger element while active
          scrub: 0.5,
          end: '+=10000px',
          invalidateOnRefresh: true,
          onUpdate: function(){

            const context_offset = document.getElementById('project-context').getBoundingClientRect().x
            const proces_offset = document.getElementById('project-proces').getBoundingClientRect().x
            const resultaat_offset = document.getElementById('project-resultaat').getBoundingClientRect().x
            const final_offset = document.getElementById('project-final').getBoundingClientRect().x

            if(context_offset < 500 && final_offset > 1000){
              v.$gsap.to('.project-nav-item', {opacity: 1, marginTop: 0, stagger: 0.1, duration: 0.3})
            }
            else{
              v.$gsap.to('.project-nav-item', {opacity: 0, marginTop: '-2vh', stagger: 0.1, duration: 0.3})
            }
            if(context_offset < 500 && proces_offset > 500){
              v.$gsap.to('#project-nav-item-1', {backgroundColor: '#CFACAC', duration: 0.3})
            }
            else{
              v.$gsap.to('#project-nav-item-1', {backgroundColor: 'rgba(0,0,0,0)', duration: 0.3})
            }
            if(proces_offset < 500 && resultaat_offset > 500){
              v.$gsap.to('#project-nav-item-2', {backgroundColor: '#CFACAC', duration: 0.3})
            }
            else{
              v.$gsap.to('#project-nav-item-2', {backgroundColor: 'rgba(0,0,0,0)', duration: 0.3})
            }
            if(resultaat_offset < 500){
              v.$gsap.to('#project-nav-item-3', {backgroundColor: '#CFACAC', duration: 0.3})
            }
            else{
              v.$gsap.to('#project-nav-item-3', {backgroundColor: 'rgba(0,0,0,0)', duration: 0.3})
            }
          }
        }
      });
      this.timeline.fromTo('#navigation',{opacity:0, backgroundColor: 'rgba(255,255,255,0'},{opacity: 1, backgroundColor: '#EDEDED', duration: 0.8},0.2)
      this.timeline.to('.intro-image',{width: '70%', marginLeft:'15%', height: '75vh', marginTop: '12.5vh', duration: 1},0)
      this.timeline.to('.intro-image-shadow',{opacity: 0, duration: 1},0)
      this.timeline.fromTo('.intro-title',{color: '#8AB987'},{color: '#000000', duration: 1},0)
      this.timeline.to('#scroller', {marginLeft: '-' + margin + 'vw', duration: 100})

      return () => {
        this.timeline.kill();
      }
    })

    mm.add("(max-width: 766px)", () => {
      let mobile_tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: "#mobile-case-nav",
          pin: '#mobile-case-nav',
          start: "top 11%",
          endTrigger: '#project-final',
          end: 'top 20%',
          pinSpacing: false,
          invalidateOnRefresh: true,
        }
      })

      let mobile_btn_a = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#project-context',
          start: 'top 30%',
          endTrigger: '#project-proces',
          toggleActions: 'play reverse play reverse',
          end: 'top 30%',
          invalidateOnRefresh: true,
        }
      })
      mobile_btn_a.fromTo("#mobile-case-nav-a",{backgroundColor:'#EDEDED'}, {backgroundColor: '#CFACAC', duration: 0.5})

      let mobile_btn_b = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#project-proces',
          start: 'top 30%',
          endTrigger: '#project-resultaat',
          toggleActions: 'play reverse play reverse',
          end: 'top 30%',
          invalidateOnRefresh: true,
        }
      })
      mobile_btn_b.fromTo("#mobile-case-nav-b",{backgroundColor:'#EDEDED'}, {backgroundColor: '#CFACAC', duration: 0.5})

      let mobile_btn_c = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '#project-resultaat',
          start: 'top 30%',
          toggleActions: 'play reverse play reverse',
          endTrigger: '#project-final',
          end: 'top 20%',
          invalidateOnRefresh: true,
        }
      })
      mobile_btn_c.fromTo("#mobile-case-nav-c",{backgroundColor:'#EDEDED'}, {backgroundColor: '#CFACAC', duration: 0.5})

      return () => {
        mobile_tl.kill();
        mobile_btn_a.kill();
        mobile_btn_b.kill();
        mobile_btn_c.kill();
      }
    })
  },

  async asyncData ({ $content, params }) {
    const content = await $content('nl/projecten', params.slug).fetch()
    const selected_projects = await $content('nl/project-overzicht')
      .only(['projecten'])
      .fetch()
    let next = '/'

    for(let i = 0; i < selected_projects.projecten.length; i++){
      if(selected_projects.projecten[i].substring(7, selected_projects.projecten[i].length-3) === content.path){
        if(i === selected_projects.projecten.length -1){
          next = selected_projects.projecten[0].substring(10, selected_projects.projecten[0].length-3)
        }
        else{
          next = selected_projects.projecten[i+1].substring(10, selected_projects.projecten[i+1].length-3)
        }
      }
    }
    return { content, next }
  }
}
</script>

<style scoped lang="scss">

.aspect-2-3{
  aspect-ratio: 3 / 2;
  max-height: 100%;
  margin: auto;
  display: flex;
  object-fit: cover;
  object-position: center;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  width: auto;
}

.aspect-3-2{
  aspect-ratio: 2 / 3;
  max-height: 65vh;
}

.image-stick-bottom{
  margin-top: auto;
  margin-bottom: 0;
  display: flex;
}

#page-holder{
  position: relative;
  z-index: 2;
}

.zoom-image:hover{
  cursor: zoom-in;
}

#scroll-holder{
  width: 99vw;
  height: 100vh;
}

.scroll-section {
  height: 100vh;
  width: 100vw;
  flex: 0 0 auto;
  position: relative;
}

.scroll-section-75{
  width: 75vw;
}

.scroll-section-50{
  width: 50vw;
}

.scroll-section-content{
  margin-top: 20vh;
  height: 65vh;
}


#intro-section{

  .intro-image{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    opacity: 0;
  }

  .intro-image-shadow{
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  }

  .intro-title{
    position: absolute;
    opacity: 0;
    white-space: nowrap;
  }
}

a{
  color: $mid;

}

#project-context-image{
  padding-left: 25%;
  margin-top: 1rem;

  //img{
  //  height: 100%;
  //  width: 100%;
  //  object-fit: cover;
  //  object-position: center;
  //}
}

.quote{
  color: $mid;
  font-size: 2.5rem;
  line-height: 130%;
}

#project-nav{
  position: fixed;
  left: 20%;
  top: 10vh;
  z-index: 1;
}

.project-nav-item{
  opacity: 0;
  font-size: 0.8rem;
}

//.result-image{
//  height: 100%;
//  width: 100%;
//  background-size: cover;
//  background-position: center;
//}

#project-final{

  .container-fluid{
    margin-top: 10vh;
  }

  img{
    height: 75vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

#mobile-case-nav{
  z-index: 3;
}

@media (max-width: $breakpoint-xl) {
  .scroll-section{
    width: 150vw;
  }
  .scroll-section-75{
    width: 125vw;
  }

  .scroll-section-50{
    width: 100vw;
  }
  #intro-section, #project-final{
    width: 100vw;
  }
}

@media (max-width: $breakpoint-md) {
  #scroll-holder{
    height: auto;
  }

  .scroll-section {
    height: auto;
    width: 100vw;
    flex: 0 0 auto;
    position: relative;
  }

  .scroll-section-75{
    width: 100vw;
  }

  .scroll-section-50{
    width: 100vw;
  }

  .scroll-section-content{
    margin-top: 5vh;
    height: auto;
  }

  #project-context-image {
    padding-left: 0;
    height: 35vh;
  }


  .full-image-background{
    height: 35vh;
  }


  #intro-section{

    .intro-image{
      object-fit: cover;
      opacity: 1;
      height: 50vh;
    }

    .intro-title{
      position: absolute;
      opacity: 1;
      left: 50%;
      transform: translate(-50%);
      bottom: 0;
      color: $mid;
    }
  }

  .result-image{
    min-height: 35vh;
  }

}


</style>
