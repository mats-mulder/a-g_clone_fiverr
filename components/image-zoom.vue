<template>
<div @click="close" class="container-fluid" id="image-zoom">
  <div id="image-holder"></div>
<!--  <img src="/assets/close-btn.png">-->
</div>
</template>

<script>
export default {
  name: "image-zoom",
  methods:{
    close: function (){
      let tl = this.$gsap.timeline({
        onComplete: function (){
          document.getElementById('image-zoom').style.display = 'none'
        }
      })
      tl.to('#image-zoom',{opacity: 0})
    },
    open: function (path){
      document.getElementById('image-holder').style.backgroundImage = 'url('+path+')'
      document.getElementById('image-zoom').style.display = 'initial'
      this.$gsap.to('#image-zoom',{opacity: 1})
    }
  }
}
</script>

<style scoped lang="scss">

.container-fluid{
  display: none;
  opacity: 0;
  background-color: rgba(0,0,0,0.75);
  height: 100vh;
  width: 100%;
  z-index: 14;
  position: fixed;
  cursor: zoom-out;


  #image-holder{
    height: 80vh;
    margin-top: 10vh;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  img{
    position: absolute;
    right: 25px;
    top: 25px;
    width: 50px;
    height: 50px;
  }
}

</style>
