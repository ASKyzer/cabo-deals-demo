<template>
  <div id="app">
    <RangeSelect @onPriceSelect="filterPrices"/>
    <br>
    <InputSelect @onCategorySelect="filterTours"/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ToursList :tours="tours" :filtered="filtered == true" :priceFiltered="priceFiltered == true"/>
  </div>
</template>

<script>
import RangeSelect from "./components/RangeSelect.vue";
import InputSelect from "./components/InputSelect.vue";
import ToursList from "./components/ToursList.vue";

import { mapGetters } from "vuex";
import { setTimeout } from "timers";

// filter functions

export default {
  name: "app",
  components: {
    ToursList,
    InputSelect,
    RangeSelect
  },
  data() {
    return {
      tours: [],
      filtered: Boolean,
      priceFiltered: Boolean
    };
  },
  mounted() {
    this.$store.dispatch("fetchTours");
  },
  computed: {
    ...mapGetters(["allTours", "filteredTours"])
  },
  methods: {
    filterTours(category) {
      console.log(category);
      this.priceFiltered = false;
      if (category === "all-tours") {
        this.filtered = false;
      } else {
        this.filtered = true;
        this.tours = this.$store.getters.filteredTours(category);
        console.log(this.tours);
      }
    },
    filterPrices: _.debounce(function(maxPrice) {
      this.filtered = false;
      this.priceFiltered = true;
      this.$store.dispatch("filterPrice", maxPrice);
    }, 500)
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url(https://fonts.googleapis.com/css?family=Concert+One);
@import url(https://fonts.googleapis.com/css?family=Advent+Pro:300);
html,
body {
  height: 100%;
}
body {
  text-align: center;
  background: #d5d5d5; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #d5d5d5 0%,
    #f3f3f3 80%,
    #feffff 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #d5d5d5),
    color-stop(80%, #f3f3f3),
    color-stop(100%, #feffff)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #d5d5d5 0%,
    #f3f3f3 80%,
    #feffff 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #d5d5d5 0%,
    #f3f3f3 80%,
    #feffff 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(
    top,
    #d5d5d5 0%,
    #f3f3f3 80%,
    #feffff 100%
  ); /* IE10+ */
  background: linear-gradient(
    to bottom,
    #d5d5d5 0%,
    #f3f3f3 80%,
    #feffff 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d5d5d5', endColorstr='#feffff',GradientType=0 ); /* IE6-9 */
}
</style>
