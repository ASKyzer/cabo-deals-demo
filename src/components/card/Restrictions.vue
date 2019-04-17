<template>
  <div class="content">
    <b>What's Restricted:</b>
    <div v-if="restrictions.length > 0">
      <span v-for="(res, index) in restrictions" :key="index">{{res}},</span>
    </div>
    <div v-if="restrictions.length === 0">
      <p>{{noRestrictionsMsg}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Restrictions",
  props: ["restrictions"],
  data() {
    return {
      noRestrictionsMsg: "There are no restrictions."
    };
  }
};
</script>

<style scoped>
</style>
