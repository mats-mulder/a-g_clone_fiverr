<template>
<div id="page-holder">
  <navigation back-link="/" back-text="Home"></navigation>
  <logo></logo>
  <back-btn path="/" text="Home" color="green"></back-btn>

  <div class="container-fluid" id="page-title">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row">
          <div class="col-12">
            <h1>{{ content.title }}</h1>
          </div>
        </div>
        <div class="row mt-3 mt-md-5">
          <div class="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4">
            <p>{{ content.content }}</p>
          </div>
<!--          <div class="col-12 col-md-5 col-lg-4 col-xl-3 offset-md-1 offset-lg-2 offset-xl-3 mt-5 mt-md-0">-->
<!--            <h6 class="mb-3">Filter</h6>-->
<!--            <div class="d-flex flex-row project-filter" :key="index" v-for="(key, index) in Object.keys(filters)" @click="setFilter(key, index)">-->
<!--              <p>{{ setFilterNum(key) }}</p>-->
<!--              <p class=" ml-2">{{ key }}</p>-->
<!--            </div>-->
<!--            <div>-->
<!--              -->
<!--            </div>-->
<!--          </div>-->

        </div>

      </div>
    </div>
  </div>

  <div class="container-fluid mt-md-5" id="projects">
    <div class="row">
      <div class="col-12 col-sm-11 col-md-10 col-lg-11">
        <div class="row justify-content-end">
          <div class="col-7 col-sm-5 col-md-4 col-lg-3 col-xl-2">
            <multiselect openDirection="below" v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Filter projects" label="name" track-by="name" :preselect-first="false">
              <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
            </multiselect>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 col-sm-10 col-md-9 col-xl-10 offset-sm-1">
        <div class="row">
          <div class="p-1 project col-12" :class="{'col-xl-6': index % 3 !== 0 }" v-for="(project, index) in this.getProjects()">
            <nuxt-link :to="project.path.substring(3,)">
              <div class="project-holder" :style="'background-image: url('+ project.banner_image +')'">
                <div class="project-label m-1 p-3 p-md-5">
<!--                  <div class="d-flex flex-row">-->
<!--                    <h6 v-for="(type, index) in project.types">{{ type }}<span class="ml-1 mr-1" v-if="index < project.types.length - 1">/</span></h6>-->
<!--                  </div>-->
                  <h4 class="mt-2">{{ project.title }}</h4>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section-contact :content="contact"></section-contact>

</div>
</template>

<script>
import Navigation from "../../components/navigation";
import BackBtn from "../../components/back-btn";
import Logo from "../../components/logo";
import SectionContact from "../../components/section-contact";
import Multiselect from 'vue-multiselect'

export default {
  head() {
    return {
      title: 'Projecten - Arons & Gelauff Architecten'
    }
  },
  name: "index",
  components: {SectionContact, Logo, BackBtn, Navigation, Multiselect},
  transition: {
    appear: true,
    beforeEnter(el){
      let tl = this.$gsap.timeline({})
      tl.set('#navigation',{right: 0})
      tl.fromTo('#back-btn',{opacity: 0, paddingTop: 0},{opacity: 1, paddingTop: '2.5rem', duration: 0.5},2)
      tl.to('#logo-holder',{opacity: 1},1.5)
    }
  },
  methods:{
    getProjects: function (){
      let selected = []
      for(let i = 0; i < this.selected_projects.length; i++){
        for(let j = 0; j < this.projects.length; j++){
          if(this.selected_projects[i] === this.projects[j].path){
            let check = false
            if(this.value.length === 0){
              check = true
            }
            else{
              this.projects[j].types.forEach(type => {
                for(let k = 0; k < this.value.length; k++){
                  if(this.value[k].name === type){
                    check = true
                  }
                }
              })
            }
            if(check === true){
              selected.push(this.projects[j])
            }
          }
        }
      }
      return selected
    },
  },

  data() {
    return {
      value: '',
      options: [
        { name: 'Wonen - sociale sector', enabled: true },
        { name: 'Wonen - midden sector', enabled: true },
        { name: 'Wonen - vrije sector', enabled: true },
        { name: 'Publiek', enabled: true },
        { name: 'Commercieel', enabled: true },
        { name: 'Zorg', enabled: true },
        { name: 'Gemengd', enabled: true },
      ]
    }
  },
  async asyncData ({ $content }) {
    const selected_projects = await $content('nl/project-overzicht')
      .fetch()
    const projects = await $content('nl/projecten')
      .only(['title','banner_image', 'types', 'path'])
      .fetch()
    const contact = await $content('nl/home')
      .only(['contact'])
      .fetch()
    // let project_object = {}
    // projects.forEach(project => {
    //   project_object[project['path']] = project
    // })
    return { projects, selected_projects: selected_projects['projecten'].map(path => {return path.substring(7, path.length-3) }), contact: contact.contact, content: selected_projects}
  },
  mounted() {
    document.getElementById('vertical-nav-item-1').style.fontWeight = '600'
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped lang="scss">


#page-holder{
  background-color: $background;
  min-height: 100vh;
  position: relative;
  z-index: 3;
}

#projects{
  padding-bottom: 20vh;
}

#page-title{
  padding-top: 20vh;
  padding-bottom: 4vh;
}


.project{
  transition: 200ms;

  &:hover{
    transform: scale(0.98);
    .project-holder{
      .project-label{
        background-color: $mid;
      }
    }
  }
}

.project-holder{
  width: 100%;
  height: 65vh;
  background-position: center;
  background-size: cover;


  .project-label{
    transition: 200ms;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: $background;
    color: $black;
  }
}

.project-filter{
  cursor: pointer;

  p{
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }

  &:hover{
    text-decoration: underline;
  }

  &.selected{
    color: $mid;
  }
}

.multiselect{
  font-family: 'Overpass', sans-serif;
  position: absolute;
  right: 4px;
}

@media (max-width: $breakpoint-md) {

}



</style>
