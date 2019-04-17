<template>
  <div class="content">
    <span>Adults: ${{ adults }}</span>
    <span v-if="kids">Kids: ${{ kids }}</span>
  </div>
</template>

<script>
export default {
  name: "TourPrices",
  props: ["adults", "kids"]
};
</script>

<style>
</style>
