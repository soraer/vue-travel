<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }

  .header-input {
    flex: 1;
    color: #eee;
    line-height: 0.64rem;
    height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #ffffff;
    border-radius: 0.1rem;
    padding-left: 0.2rem;
  }

  .header-right {
    width: 1.24rem;
    text-align: center;
    float: right;
    color : #fff;
    .arrow-icon {
      font-size: 0.24rem;
      margin-left: 0.24rem;
    }
  }
}
</style>