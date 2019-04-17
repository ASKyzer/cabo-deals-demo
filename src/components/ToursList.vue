<template>
  <div class="container is-centered">
    <div v-if="!filtered && !priceFiltered">
      <TourCard :tours="allTours" :col="col"/>
    </div>
    <div v-if="filtered">
      <TourCard :tours="tours" :col="col"/>
    </div>
    <div v-if="priceFiltered">
      <TourCard :tours="filteredPrices" :col="col"/>
    </div>
  </div>
</template>

<script>
import TourCard from "./card/TourCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ToursList",
  components: {
    TourCard
  },
  data() {
    return {
      col: "column is-4-desktop is-6-tablet is-12-mobile"
    };
  },
  props: {
    tours: {},
    filtered: {
      type: Boolean,
      default: false
    },
    priceFiltered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["allTours", "filteredTours", "filteredPrices"])
  },
  created() {
    console.log(this.tours);
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
