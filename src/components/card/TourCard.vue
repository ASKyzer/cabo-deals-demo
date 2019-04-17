<template>
  <div class="columns is-multiline">
    <div v-for="tour in tours" :key="tour.id" :class="col">
      <Card :tour="tour"/>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

const cardTypes = {
  tours: {
    type: Array
  },
  col: {
    type: String
  }
};

export default {
  name: "TourCard",
  components: {
    Card
  },
  props: cardTypes
};
</script>

<style scoped>
</style>
