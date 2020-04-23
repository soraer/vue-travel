<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>