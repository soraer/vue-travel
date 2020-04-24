<template>
  <div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" :key="item.id">
           <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div> 
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
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