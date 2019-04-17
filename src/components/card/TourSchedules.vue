<template>
  <div class="content">
    Schedules:
    <span v-for="(time, index) in schedules" :key="index">{{time}},</span>
  </div>
</template>

<script>
export default {
  name: "TourSchedules",
  props: ["schedules"]
};
</script>

<style scoped>
</style>
