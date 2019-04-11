<template>
  <div class="content">
    What's Included:<br>
    <span v-for="(inc, index) of tour.included" :key="index">{{inc}}, </span>
  </div>
</template>

<script>
export default {
  name: 'IncludedInTour',
  props: ['tour']
}
</script>

<style>

</style>
