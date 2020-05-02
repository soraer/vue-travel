<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="clickEvent"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: ["cityList"],
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timeOut: null
    };
  },
  updated() {
    const startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    clickEvent: function(e) {
      this.$emit("change", e.toElement.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.timeOut) {
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        if (this.touchStatus) {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }
      }, 16);
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cityList) {
        letters.push(i);
      }
      return letters;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
