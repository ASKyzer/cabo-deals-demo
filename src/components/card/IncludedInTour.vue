<template>
  <div class="content" v-if="includes">
    <b>What's Included:</b>
    <br>
    <div v-if="includes.length > 0">
      <span v-for="(inc, index) in includes" :key="index">{{inc}},</span>
    </div>
    <div v-else>
      <p>{{notIncludedMsg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IncludedInTour",
  data() {
    return {
      notIncludedMsg: "Nothing is included with this tour."
    };
  },
  props: {
    includes: {
      type: Array,
      default: ["no inclusions"]
    }
  }
};
</script>

<style>
</style>
