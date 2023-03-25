<!--<template>-->
<!--  <div id="page-holder">-->

<!--    <navigation back-link="/" back-text="Home"></navigation>-->
<!--    <logo></logo>-->
<!--    <back-btn path="/" text="Home" color="green"></back-btn>-->

<!--    <div class="wrapper d-flex flex-column flex-md-row flex-md-nowrap">-->
<!--      <section class="section flex-shrink-0 vh-100 d-flex" id="intro-section">-->
<!--        <div class="intro-image min-nav-width intro-image-scale" :style="'background-image:url('+content['banner_image']+')'">-->
<!--          <div class="intro-image-shadow"></div>-->
<!--        </div>-->
<!--        <h1 class="intro-title">{{ content.title }}</h1>-->
<!--      </section>-->
<!--      <section class="section vh-100 flex-shrink-0 d-flex">-->
<!--        <div class="container-fluid section-content">-->
<!--          <div class="row">-->
<!--            <div class="col-12 col-md-8 offset-md-2">-->
<!--              <h2>{{ content.introduction }}</h2>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

<!--      <section class="section vh-100 flex-shrink-0 d-flex">-->
<!--        <div class="container-fluid section-content">-->
<!--          <div class="row h-100">-->
<!--            <div class="col-12 col-md-3">-->
<!--              <div v-html="content.context.content"></div>-->
<!--              <div class="mt-5" v-if="content.context['related_articles'] && content.context['related_articles'].length > 0">-->
<!--                <p><b>Gerelateerde artikelen:</b></p>-->
<!--                <a class="float-left" :href="article.link" target="_blank" v-for="article in content.context['related_articles']">{{article.title}}</a><img class="ml-2" src="/assets/out_link.png">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-md-2 col-12 mt-5 mt-md-0">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider d-md-none bg-mid"></div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-5">-->
<!--              <div class="row">-->
<!--                <div class="col-6 pl-5 pr-5 mb-2" v-for="item in content.context.labels">-->
<!--                  <p class="mb-1"><b>{{ item.title }}</b></p>-->
<!--                  <div v-html="item.content"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

<!--      <section class="section flex-shrink-0 vh-100 d-flex section-75">-->
<!--        <div class="container-fluid section-content">-->
<!--          <div class="row justify-content-center h-100">-->
<!--            <div class="col-12 h-100 p-0">-->
<!--              <img @click="$refs.imageZoom.open(content.proces.image)" id="project-proces-image" class="img-fluid full-stretch-image zoom-image" :src="content.proces.image">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

<!--      <section class="section flex-shrink-0 vh-100 d-flex">-->
<!--        <div class="container-fluid section-content">-->
<!--          <div class="row">-->
<!--            <div class="col-12 col-md-6 col-lg-4">-->
<!--              <div v-html="content.proces.content"></div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-5 offset-md-1">-->
<!--              <h3 class="quote text-mid">{{ content.proces.quote }}</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

<!--      <section class="section flex-shrink-0 vh-100 d-flex section-75" v-for="(section, index) in content.resultaat.sections" :key="index + '-result-section'">-->
<!--        <div class="container-fluid section-content">-->

<!--          <div class="row h-100" v-if="section.type === 'content-equal-image'">-->
<!--            <div class="col-12 col-md-10 mt-5 mt-md-0 d-flex flex-column">-->
<!--              <h3>{{ section.title }}</h3>-->
<!--              <div class="mt-4" v-html="section.content"></div>-->
<!--              <div class="row flex-grow-1 mt-4">-->
<!--                <div class="col-12 col-md-6">-->
<!--                  <div class="result-image zoom-image" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
<!--                </div>-->
<!--                <div class="col-12 col-md-6 mt-3 mt-md-0">-->
<!--                  <div class="result-image zoom-image" @click="$refs.imageZoom.open(section.images[1])" :style="'background-image: url('+ section.images[1] + ')'"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--            </div>-->
<!--          </div>-->


<!--          <div class="row h-100" v-if="section.type === 'content-large-image'">-->
<!--            <div class="col-12 col-md-10 mt-5 mt-md-0">-->
<!--              <div class="row h-100">-->
<!--                <div class="col-12 col-md-6 d-flex flex-column">-->
<!--                  <h3>{{ section.title }}</h3>-->
<!--                  <div class="mt-4" v-html="section.content"></div>-->
<!--                  <div class="result-image flex-grow-1 mt-4 zoom-image" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
<!--                </div>-->
<!--                <div class="col-12 col-md-6 mt-3 mt-md-0">-->
<!--                  <div class="result-image flex-grow-1 zoom-image" @click="$refs.imageZoom.open(section.images[1])" :style="'background-image: url('+ section.images[1] + ')'"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="row h-100" v-if="section.type === 'full-image'">-->
<!--            <div class="col-12 col-md-10 mt-5 mt-md-0 p-0">-->
<!--              <div class="result-image zoom-image" @click="$refs.imageZoom.open(section.images[0])" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="row h-100" v-if="section.type === 'full-split-image'">-->
<!--            <div class="col-12 col-md-10 mt-5 mt-md-0">-->
<!--              <div class="row h-100">-->
<!--                <div class="col-6">-->
<!--                  <div class="result-image" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
<!--                </div>-->
<!--                <div class="col-6">-->
<!--                  <div class="result-image" :style="'background-image: url('+ section.images[1] + ')'"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="row h-100" v-if="section.type === 'split-content-image'">-->
<!--            <div class="col-12 col-md-10 mt-5 mt-md-0">-->
<!--              <div class="row h-100">-->
<!--                <div class="col-12 col-md-6">-->
<!--                  <h3>{{ section.title }}</h3>-->
<!--                  <div class="mt-4" v-html="section.content"></div>-->
<!--                </div>-->
<!--                <div class="col-12 col-md-6">-->
<!--                  <div class="result-image" :style="'background-image: url('+ section.images[0] + ')'"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="col-12 col-md-2 order-first order-md-last" v-if="index < content.resultaat.sections.length - 1">-->
<!--              <div class="vertical-divider bg-mid vertical-horizontal-center d-none d-md-block"></div>-->
<!--              <div class="horizontal-divider bg-mid d-md-none"></div>-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--      </section>-->

<!--      <section class="section flex-shrink-0 vh-100 d-flex bg-highlight" id="project-final">-->
<!--        <div class="container-fluid">-->
<!--          <div class="row justify-content-center">-->
<!--            <div class="col-10 h-100">-->
<!--              <img :src="content.footer['full_image']">-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="row justify-content-center mt-3 mt-lg-4 mb-4">-->
<!--            <div class="col-10">-->
<!--              <nuxt-link :to="next" class="btn-round btn-white">Volgende project</nuxt-link>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

<!--      </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "test",-->
<!--  mounted() {-->
<!--    this.$ScrollTrigger.matchMedia({-->
<!--      "(min-width: 767px)": ()=>{-->
<!--        const sections = this.$gsap.utils.toArray("section");-->
<!--        let maxWidth = 0;-->

<!--        const getMaxWidth = () => {-->
<!--          maxWidth = 0;-->
<!--          sections.forEach((section) => {-->
<!--            maxWidth += section.offsetWidth;-->
<!--          });-->
<!--        };-->
<!--        getMaxWidth();-->

<!--        this.$ScrollTrigger.addEventListener("refreshInit", getMaxWidth);-->

<!--        let tl_1 = this.$gsap.timeline()-->

<!--        tl_1.to(sections, {-->
<!--          x: () => `-${maxWidth - window.innerWidth}`,-->
<!--          ease: "none",-->
<!--          scrollTrigger: {-->
<!--            trigger: ".wrapper",-->
<!--            pin: true,-->
<!--            scrub: 0.5,-->
<!--            end: () => `+=${maxWidth}`,-->
<!--            invalidateOnRefresh: true-->
<!--          }-->
<!--        });-->

<!--        sections.forEach((sct, i) => {-->
<!--          this.$ScrollTrigger.create({-->
<!--            trigger: sct,-->
<!--            start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),-->
<!--            end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),-->
<!--            toggleClass: {targets: sct, className: "active"}-->
<!--          });-->
<!--        });-->

<!--        let tl = this.$gsap.timeline({-->
<!--          scrollTrigger: {-->
<!--            trigger: "#intro-section",-->
<!--            start: "top top",-->
<!--            scrub: 0.5,-->
<!--          }-->
<!--        })-->
<!--        tl.to('.intro-image',{width: '70%', marginLeft:'50%',  height: '75vh', marginTop: '12.5vh', duration: 1},0)-->
<!--        tl.to('.intro-image-shadow',{opacity: 0, duration: 1},0)-->
<!--        tl.fromTo('.intro-title',{color: '#8AB987'},{color: '#000000', duration: 1, marginLeft: '40%'},0)-->


<!--      }-->
<!--    });-->
<!--  },-->
<!--  async asyncData ({ $content, params }) {-->
<!--    const content = await $content('nl/projecten', params.slug).fetch()-->
<!--    const selected_projects = await $content('nl/project-overzicht')-->
<!--        .only(['projecten'])-->
<!--        .fetch()-->
<!--    let next = '/'-->

<!--    for(let i = 0; i < selected_projects.projecten.length; i++){-->
<!--      if(selected_projects.projecten[i].substring(7, selected_projects.projecten[i].length-3) === content.path){-->
<!--        if(i === selected_projects.projecten.length -1){-->
<!--          next = selected_projects.projecten[0].substring(10, selected_projects.projecten[0].length-3)-->
<!--        }-->
<!--        else{-->
<!--          next = selected_projects.projecten[i+1].substring(10, selected_projects.projecten[i+1].length-3)-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--    return { content, next }-->
<!--  },-->
<!--  transition: {-->
<!--    appear: true,-->
<!--    afterEnter(el){-->
<!--      this.$ScrollTrigger.matchMedia({-->
<!--        "(min-width: 767px)": () => {-->
<!--          let tl = this.$gsap.timeline({})-->
<!--          tl.fromTo('.intro-image',{opacity: 0},{opacity: 1},0)-->
<!--          tl.fromTo('.intro-title',{opacity:0, left:0, bottom: '6vh'}, {opacity: 1, left: '5vw'},0.4)-->
<!--          tl.to('#navigation',{right: 0},1)-->

<!--          return () => {-->
<!--            tl.kill();-->
<!--          }-->
<!--        }-->
<!--      });-->
<!--    }-->
<!--  },-->
<!--}-->
<!--</script>-->

<!--<style scoped lang="scss">-->

<!--body {-->
<!--  overflow-x: hidden;-->
<!--}-->

<!--.wrapper{-->
<!--  width: 100vw!important;-->
<!--}-->

<!--.section{-->
<!--  width: 100%;-->
<!--}-->

<!--.section-content{-->
<!--  padding-top: 20vh;-->
<!--  height: 90vh;-->
<!--}-->

<!--.section-flexible-content{-->
<!--  width: 25%;-->
<!--}-->

<!--.section-75{-->
<!--  width: 75%;-->

<!--  img{-->
<!--    width: 124vh;-->
<!--  }-->
<!--}-->

<!--#intro-section{-->

<!--  .intro-image{-->
<!--    width: 100%;-->
<!--    height: 100vh;-->
<!--    background-size: cover;-->
<!--    background-position: center;-->
<!--    opacity: 0;-->
<!--  }-->

<!--  .intro-image-shadow{-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(0, 0, 0, 0.6) 100%);-->
<!--  }-->

<!--  .intro-title{-->
<!--    position: absolute;-->
<!--    white-space: nowrap;-->
<!--    opacity: 0;-->
<!--  }-->
<!--}-->

<!--.result-image{-->
<!--  height: 100%;-->
<!--  width: 100%;-->
<!--  background-size: cover;-->
<!--  background-position: center;-->
<!--}-->

<!--#project-final{-->

<!--  .container-fluid{-->
<!--    margin-top: 10vh;-->
<!--  }-->

<!--  img{-->
<!--    height: 75vh;-->
<!--    width: 100%;-->
<!--    object-fit: cover;-->
<!--    object-position: center;-->
<!--  }-->
<!--}-->

<!--a{-->
<!--  color: $mid;-->
<!--}-->


<!--</style>-->