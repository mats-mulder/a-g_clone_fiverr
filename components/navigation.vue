<template>
  <div>
    <div @mouseenter="openLarge" @mouseleave="closeLarge" id="navigation" class="d-none d-md-block">
      <div class="d-flex flex-column" id="vertical-nav">
        <img id="menu-icon" :src="'/assets/menu-icon_white.png'">
        <p v-for="(item, index) in menuItems" :key="index" :id="'vertical-nav-item-'+index" class="flex-grow-1 vertical-nav-item">{{ item.title }}</p>
      </div>
      <div id="large-nav">
        <div class="mb-5 large-nav-item" v-for="(item, index) in menuItems" :key="index">
          <nuxt-link :to="item.path"><h4 :id="'large-nav-item-'+index">{{ item.title }}</h4></nuxt-link>
          <nuxt-link :to="sub.path" v-if="item.subpages" v-for="sub in item.subpages"><h6 class="mt-3">{{ sub.title }}</h6></nuxt-link>
        </div>
        <div id="large-nav-socials" class="social-logo-holder d-flex flex-row">
          <a href="#"><img class="social-logo" :src="'/assets/linkedin_white.png'"></a>
          <a class="ml-3" href="#"><img class="social-logo" :src="'/assets/instagram_white.png'"></a>
        </div>
      </div>
    </div>
    <div id="mobile-nav" class="d-md-none pl-4 pr-4">
      <div class="d-flex flex-row">
        <p v-if="backText === ''" class="flex-grow-1">Arons en Gelauff architecten</p>
        <nuxt-link class="d-flex flex-row flex-grow-1" v-if="backText !== ''" :to="backLink">
          <img id="mobile-back-arrow" src="/assets/arrow_left_white.png">
          <p class="ml-2">{{ backText }}</p>
        </nuxt-link>
        <img @click="toggleMobile" class="menu-icon" src="/assets/menu-icon.png">
      </div>

      <div id="mobile-hidden-holder" class="position-absolute h-75 pl-4">
        <div class="mt-5 mobile-nav-item" v-for="(item, index) in menuItems" :key="index">
          <nuxt-link :to="item.path">
            <h4 :id="'mobile-nav-item-'+index">{{ item.title }}</h4>
          </nuxt-link>
          <nuxt-link class="mt-4" :to="sub.path" v-if="item.subpages" v-for="sub in item.subpages">
            <h6>{{ sub.title }}</h6>
          </nuxt-link>
        </div>

        <div class="social-logo-holder d-flex flex-row mt-5">
          <a href="#"><img class="social-logo mobile-social-logo" src="/assets/linkedin.png"></a>
          <a class="ml-4" href="#"><img class="social-logo mobile-social-logo" src="/assets/instagram.png"></a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    backText: {
      type: String,
      default: ''
    },
    backLink:{
      type: String,
    },
  },
  methods:{
    openLarge: function () {
      const width = (1/window.innerWidth) * 40000
      let tl = this.$gsap.timeline({})
      tl.to('#navigation',{width: width + '%', backgroundColor: '#EDEDED'},0)
      tl.to('#large-nav',{opacity:1},0)
      tl.to('.vertical-nav-item',{opacity: 0},0)
      tl.to('#menu-icon',{rotation:90},0)
      tl.fromTo('.large-nav-item',{opacity: 0},{opacity: 1, stagger: 0.1},0.2)
    },
    closeLarge: function (){
      let tl = this.$gsap.timeline({})
      tl.to('#navigation',{width: '5rem', backgroundColor: 'rgba(255,255,255,0)'},0.2)
      tl.to('#menu-icon',{rotation:0},0)
      tl.to('#large-nav',{opacity:0},0)
      tl.to('.vertical-nav-item',{opacity: 1},0.2)
      tl.to('.large-nav-item',{opacity: 0, duration: 0.2},0)
    },
    toggleMobile: function (){
      if(this.mobileMenu === false){
        this.mobileMenu = true
        let tl = this.$gsap.timeline({})
        tl.set('#mobile-hidden-holder',{opacity: '1', display: 'initial'})
        tl.to('#mobile-nav',{height: '100vh'},0)
        tl.fromTo('.mobile-nav-item',{opacity: '0'},{opacity: 1, stagger: 0.1},0.1)
        tl.fromTo('.mobile-social-logo',{opacity: '0'},{opacity: 1},0.4)
      }
      else{
        this.mobileMenu = false
        let tl = this.$gsap.timeline({})
        tl.to(['.mobile-nav-item', '.mobile-social-logo'],{opacity: '0', duration: 0.1},0)
        tl.to('#mobile-nav',{height: 'auto'},0.1)
        tl.to('#mobile-hidden-holder',{opacity: '0', display: 'none'},0.1)
      }

    }
  },
  data(){
    return{
      mobileMenu: false,
      menuItems:[
        {
          title: 'Home',
          path: '/#section-home'
        },
        {
          title: 'Wat wij maken',
          path: '/#section-projects',
          subpages: [
            {
              title: 'Projecten',
              path: '/projecten',
            }
          ]
        },
        {
          title: 'Hoe wij werken',
          path: '/#section-about',
          subpages: [
            {
              title: 'Ons team',
              path: '/team',
            }
          ]
        },
        {
          title: 'Contact',
          path: '/#section-contact',
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

#navigation{
  position: fixed;
  height: 100vh;
  width: 5rem;
  right: 0;
  border-left: 1.5px solid;
  z-index: 5;
  background-color: rgba(255,255,255,0);
}

#vertical-nav{
  position: absolute;
  right: 0;
  height: 100%;
  width: 5rem;

  #menu-icon{
    width: 3rem;
    margin: 1.5rem 1rem 5rem 1rem;
  }

  p{
    font-size: 1rem;
    writing-mode: vertical-rl;
    margin: 0;
    line-height: 100%;
    padding-right: 2rem;
    cursor: default;
  }
}

#large-nav{
  padding-top: 15vh;
  margin-left: 4rem;
  opacity: 0;

  h4, h6{
    transition: 200ms;

    &:hover{
      margin-left: 0.5rem;
      cursor: pointer;
    }
  }

  #large-nav-socials{
    position: absolute;
    bottom: 5vh;
  }

  a{
    color: $black;
  }

}

#mobile-nav{
  position: fixed;
  background-color: $highlight;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid white;

  .menu-icon{
    height: 1.8rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: 200ms;

  }

  p{
    font-size: 1rem;
    color: white;
    margin-top: 1.5rem;
    line-height: 100%;
  }

  h4, h6{
    color: white;
  }

  a:hover{
    color: white;
  }

  #mobile-hidden-holder{
    opacity: 0;
    display: none;
  }

  #mobile-back-arrow{
    height: 1rem;
    margin-top: 1.4rem;
  }

}

.nuxt-link-exact-active{
  h6{
    font-weight: 600;
  }
}

</style>
