<template>
  <div>{{ tours }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TestComp",
  data() {
    return {
      tours
    };
  },
  computed: {
    ...mapGetters(["allTours", "filteredTours"])
  },
  mounted() {
    this.$store.dispatch("fetchTours");
  },
  created() {
    console.log(this.tours);
    this.tours = this.$store.getters.filteredTours("sea-adventure");

    console.log(this.tours);
  }
};
</script>

<style>
</style>
