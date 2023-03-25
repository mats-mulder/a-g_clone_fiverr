<template>
  <div class="bg-mid" id="page-holder">
    <navigation back-text="Home" back-link="/"></navigation>
    <logo></logo>

    <back-btn color="pink" path="/" text="home"></back-btn>

    <div class="section" id="section-team">
      <img class="img-fluid" :src="content.image" id="full-image">
      <div class="container-fluid text-black">

<!--        <div class="row team-large-title-holder justify-content-center justify-content-sm-start">-->
<!--          <div class="col-11 col-sm-10 col-md-8 col-lg-8 col-xl-7 offset-sm-1 offset-lg-2">-->
<!--            <div class="text-nowrap section-title">-->
<!--              <h1 id="team-large-title-1" class="team-large-title">{{ content.title_parts.part_a }}</h1>-->
<!--              <h1 id="team-large-title-2" class="text-right team-large-title">{{ content.title_parts.part_b }}</h1>-->
<!--              <h1 id="team-large-title-3" class="team-large-title">{{ content.title_parts.part_c }}</h1>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

        <large-title :text="[content.title_parts.part_a, content.title_parts.part_b, content.title_parts.part_c]"></large-title>
        <div class="row justify-content-center justify-content-sm-start">
          <div class="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 offset-sm-1 offset-md-2">
            <h5>{{ content.subtitle }}</h5>
            <p>{{ content.content }}</p>
          </div>
        </div>
        <div class="row justify-content-center mt-2 mt-md-5 pt-md-5">
          <div class="col-11">
            <div class="d-flex flex-row justify-content-md-around overflow-auto flex-md-wrap" id="team-member-holder">
              <div class="col-10" :class="{'col-md-5': item.template === 'component-team-member'}" v-for="(item, index) in content.team">
                <div class="team-member" :id="'team-member-'+index" v-if="item.template === 'component-team-member'">
                  <img class="team-member-image" :src="item.image">
                  <h3 class="team-member-name mt-3">{{ item.name }}</h3>
                  <p class="team-member-role mb-0 mt-4">{{ item.function }}</p>
                  <p :id="'fill-'+index" class="text-black mt-1">placeholder</p>

                  <p class="text-black mt-4">{{ item.quote }}</p>
                </div>
                <div v-if="item.template === 'component'" class="office-image" :style="'background-image:url(' + item.image + ')'"></div>
              </div>


<!--              <div class="team-member col-8 col-md-5" :class="randomClass(index)" v-for="(member, index) in content.members">-->
<!--                <img class="team-member-image" :src="member.image">-->
<!--                <h3 class="team-member-name mt-2">{{ member.name }}</h3>-->
<!--                <p class="team-member-role mb-0 mt-3">{{ member.function }}</p>-->
<!--                <a target="_blank" :href="'mailto:'+member.email" class="team-member-email text-black">{{ member.email }}</a>-->
<!--              </div>-->
<!--              <div class="col-10">-->
<!--                <div class="office-image" :style="'background-image:url(' + content['office_images'][0] + ')'"></div>-->
<!--              </div>-->
            </div>
          </div>
        </div>

      </div>
    </div>
    <section-contact :content="contact"></section-contact>

  </div>
</template>

<script>
import SectionContact from "../../components/section-contact";
import BackBtn from "../../components/back-btn";
import Logo from "../../components/logo";
import LargeTitle from "../../components/large-title";
import Navigation from "../../components/navigation";
export default {
  head() {
    return {
      title: 'Team - Arons & Gelauff Architecten'
    }
  },
  name: "index",
  components: {Navigation, LargeTitle, Logo, BackBtn, SectionContact},

  async asyncData ({ $content }) {
    const contact = await $content('nl/home')
      .only(['contact'])
      .fetch()
    const content = await $content('nl/team')
      .fetch()
    return { content, contact: contact.contact }
  },
  mounted() {
    document.getElementById('vertical-nav-item-2').style.fontWeight = '600'
    let members = document.getElementsByClassName('team-member')
    for(let i = 0; i < members.length; i++){
      let left = Math.floor(Math.random() * 21);
      let right = 21 - left
      members[i].style.paddingLeft = left + '%'
      members[i].style.paddingRight = right + '%'
      if (i % 2 !== 0){
        let top = Math.floor(Math.random() * 35) + 10;
        members[i].style.marginTop = top + 'vh'
      }
    }
    let content = this.content
    setTimeout(function(){
      for(let i = 0; i < content.team.length; i++){
        if(content.team[i].template === 'component-team-member')
        document.getElementById('fill-'+ i).innerText = content.team[i].email
      }
    }, 500);
    // this.$ScrollTrigger.matchMedia({
    //   "(min-width: 767px)": ()=>{
    //     console.log("here")
    //
    //     let tl = this.$gsap.timeline({
    //       scrollTrigger: {
    //         trigger: ".team-large-title-holder",
    //         scrub: true,
    //         start: 'top 80%',
    //         end: 'bottom 30%',
    //         invalidateOnRefresh: true,
    //       }
    //     });
    //     tl.fromTo('.team-large-title',{opacity: 0}, {opacity: 1, stagger: 0.5, duration:1},0)
    //     tl.fromTo('#team-large-title-1',{marginLeft: '0'},{marginLeft: '5rem', duration: 3},0)
    //     tl.fromTo('#team-large-title-2',{marginRight: '-10rem'},{marginRight: '0', duration: 3},0)
    //     tl.fromTo('#team-large-title-3',{marginLeft: '-20rem'},{marginLeft: '0', duration: 3},0)
    //
    //     return () => {
    //       tl.kill();
    //     }
    //   }
    // });
  },
}
</script>

<style scoped lang="scss">

#page-holder{
  position: relative;
  z-index: 2;
  background-color: $mid;
}

  a:hover{
    color: $black;
  }

  #full-image{
    width: calc(100% - 5rem);
    aspect-ratio: 3 / 2;
  }

  .large-title-holder{
    margin-top: 20vh;
    margin-bottom: 15vh;
  }

  #section-team{
    padding-bottom: 15vh;

    .section-title{
      padding-top: 25vh!important;
      padding-bottom: 20vh!important;
    }
  }

  .office-image{
    width: 100%;
    height: auto;
    padding-top: 56%;
    background-size: cover;
    background-position: center;
    margin-top: 15vh;
    margin-bottom: 15vh;
  }

  #team-member-holder{
    margin-top: 10vh;

    .team-member{
      img{
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

  }


  @media (max-width: $breakpoint-xl) {

  }

  @media (max-width: $breakpoint-lg) {

  }

  @media (max-width: $breakpoint-md) {
    .team-member{
      margin-top: 0!important;
      padding-left: 0!important;
      padding-right: 1rem!important;
      img{
        height: 50vh!important;
      }
    }

    .office-image{
      margin: 0;
      height: 50vh;
    }

    #full-image{
      width: 100%;
    }

    #full-image{
      margin-top: 3.8rem;
    }

    .large-title-holder{
      margin-top: 15vh;
    }
  }

  @media (max-width: $breakpoint-sm) {

  }


</style>
