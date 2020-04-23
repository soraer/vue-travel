<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
      return {
          list: [
              {
                  id: '001',
                  imgUrl: 'https://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_256x160_6b62ea82.jpg',
                  title: '标题一',
                  desc: '描述一'
              },
              {
                  id: '002',
                  imgUrl: 'https://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_256x160_14e8c382.jpg',
                  title: '标题二',
                  desc: '描述二'
              },
              {
                  id: '003',
                  imgUrl: 'https://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_256x160_a6703da7.jpg',
                  title: '标题三',
                  desc: '描述三'
              },
              {
                  id: '004',
                  imgUrl: 'https://img1.qunarzz.com/sight/p0/1507/44/2fef900d9523f298e4c0ee5bb34be06e.water.jpg_256x160_af81c644.jpg',
                  title: '标题四',
                  desc: '描述四'
              }
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>