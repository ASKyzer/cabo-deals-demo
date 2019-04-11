<template>
  <div class="content">
    Schedules: 
      <span v-for="(time, index) in tour.schedules" :key="index">{{time}}, </span>
  </div>
</template>

<script>
export default {
  name: 'TourSchedules',
  props: ['tour']
}
</script>

<style>

</style>
