<template>
  <div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg"></swiper-slide>
        <swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg"></swiper-slide>
        <swiper-slide><img class="swiper-img" src="https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div> 
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
      return {
        notNextTick: true,
        swiperOption: {
          autoplay: 2000,
          loop: true,
          pagination: '.swiper-pagination',
        }
      }
  }
}
</script>

<style lang="stylus" scoped>
   .swiper
     width 100%
     height 0
     overflow hidden
     padding-bottom 31.25%
     .swiper-img 
        width  100%
        height  auto
</style>