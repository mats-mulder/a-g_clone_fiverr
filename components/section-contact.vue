<template>
  <div class="container-fluid bg-mid text-highlight" id="section-contact">
    <div class="col-12 col-sm-11 col-md-8 offset-sm-1">
      <div class="row" id="contact-title">
        <div class="col-12">
          <h1 class="text-black">{{ content.title }}</h1>
        </div>
      </div>
      <div class="row" id="contact-info">
        <div class="col-12 col-sm-6">
          <div class="d-flex flex-row h-100">
            <div class="vertical-divider bg-background mr-4"></div>
            <div class="flex-column d-flex text-black">
              <a :class="{'mb-3': index < content.contact_method.length -1}" v-for="(item, index) in content.contact_method" target="_blank" :href="item.link" v-html="item.details"></a>
            </div>
          </div>
        </div>
        <div class="col-11 col-sm-6 mt-5 mt-sm-0">
          <div class="social-logo-holder d-flex flex-row">
            <a target="_blank" href="https://nl.linkedin.com/company/aronsengelauff"><img class="social-logo" src="/assets/linkedin.png"></a>
            <a target="_blank" class="ml-4 ml-sm-5" href="https://www.instagram.com/arons_en_gelauff_architecten/"><img class="social-logo" src="/assets/instagram.png"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-contact",
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">

#section-contact{
  min-height: 100vh;
  z-index: 3;
  position: relative;

  #contact-title{
    padding-top: 20vh;
  }

  #contact-info{
    padding-top: 20vh;
  }

  .text-black a{
    color: $black;

    &:hover{
      cursor: pointer;
    }
  }

}

@media (max-width: $breakpoint-xl) {

}

@media (max-width: $breakpoint-lg) {

}

@media (max-width: $breakpoint-md) {

}

@media (max-width: $breakpoint-sm) {
  #section-contact{
    #contact-info{
      padding-top: 10vh;
    }

  }
}

</style>
