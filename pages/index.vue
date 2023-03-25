<template>
<div id="page-holder">

  <logo></logo>

  <navigation></navigation>

  <div id="section-home" :style="'background-image:url('+ content.intro.image +')'">
    <iframe src="https://player.vimeo.com/video/722684929?background=1" width="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
  </div>

  <section-projects :content="content.projecten" :projects="projects"></section-projects>

  <section-about :content="content.werkwijze" style="margin-top: 30vh"></section-about>

  <section-contact :content="content.contact"></section-contact>

</div>
</template>

<script>
import Navigation from "../components/navigation";
import SectionAbout from "../components/section-about";
import SectionContact from "../components/section-contact";
import LargeTitle from "../components/large-title";
import SectionProjects from "../components/section-projects";
import Logo from "../components/logo";

export default {
  components: {Logo, SectionProjects, LargeTitle, SectionContact, SectionAbout, Navigation},
  head() {
    return {
      title: 'Arons & Gelauff Architecten'
    }
  },
  transition: {
    appear: true,
    afterEnter(el) {
    }
  },
  async asyncData ({ $content }) {
    const content = await $content('nl/home').fetch()
    const projects = await $content('nl/projecten')
      .only(['title','banner_image', 'path'])
      .fetch()
    let project_object = {}
    projects.forEach(project => {
      project_object[project['path']] = {
        title: project.title,
        banner_image: project['banner_image']
      }
    })

    return {
      content, projects: project_object
    }
  },
  mounted() {

    let tl_logo_appear = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-projects',
        start: 'top 8%',
        end: 'bottom 8%',
        toggleActions: 'play pause play reverse',
        invalidateOnRefresh: true,
      }
    })
    tl_logo_appear.fromTo('#logo-pink',{opacity: 0},{opacity: 1, duration: 0.2},0)


    let tl_logo = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-projects',
        start: 'top 8%',
        end: 'bottom 8%',
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      }
    })
    tl_logo.to('#logo-white',{opacity: 1, duration: 0.2},0)

    let tl_nav_home = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-home',
        start: 'top 50%',
        end: 'bottom top',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
      }
    })
    tl_nav_home.to(['#vertical-nav-item-0', '#large-nav-item-0', '#mobile-nav-item-0'],{fontWeight: 600})

    let tl_nav_projects = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-projects',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
      }
    })
    tl_nav_projects.to(['#vertical-nav-item-1', '#large-nav-item-1', '#mobile-nav-item-1'],{fontWeight: 600})

    let tl_nav_about = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-about',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
      }
    })
    tl_nav_about.to(['#vertical-nav-item-2', '#large-nav-item-2', '#mobile-nav-item-2'],{fontWeight: 600})

    let tl_nav_contact = this.$gsap.timeline({
      scrollTrigger:{
        trigger: '#section-contact',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'play reset play reset',
        invalidateOnRefresh: true,
      }
    })
    tl_nav_contact.to(['#vertical-nav-item-3', '#large-nav-item-3', '#mobile-nav-item-3'],{fontWeight: 600})
  }
}

</script>

<style lang="scss">

#page-holder{
  background-color: $background;
  overflow-x: hidden;
}

#section-home{
  top: 0;
  left: 0;
  width: 100vw;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  max-height: 100vh;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  pointer-events: none;
  position: relative;
}

#section-home iframe {
  width: 100%;
  height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
  min-height: 100vh;
  min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@media (max-width: $breakpoint-xl) {

}

@media (max-width: $breakpoint-lg) {


}

@media (max-width: $breakpoint-md) {

}

@media (max-width: $breakpoint-sm) {

}

</style>
