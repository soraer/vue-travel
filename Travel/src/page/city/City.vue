<template>
  <div>
    <city-header></city-header>
    <city-search :cities="this.cityList"></city-search>
    <city-list 
                :hotCityList="this.hotCityList"
                :cityList="this.cityList"
                :letter="this.letter"
    ></city-list>
    <city-alphabet 
                   :cityList="this.cityList"
                   @change="alphabetEvent"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from './components/Alphabet'
export default {
  name: "City",
  data () {
    return {
      hotCityList: [],
      cityList: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityData: function () {
      axios.get('./api/city.json')
           .then(this.getCityDataSuccess)
    },
    getCityDataSuccess: function (res) {
      if (res) {
        this.hotCityList = res.data.data.hotCities
        this.cityList = res.data.data.cities
      }   
    },
    alphabetEvent: function (data) {
      this.letter = data
    }
  },
  mounted () {
    this.getCityData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped></style>