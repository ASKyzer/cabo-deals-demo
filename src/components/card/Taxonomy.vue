<template>
  <div class="content">
            Categories:
    <span v-for="(category, index) in tour.taxonomy" :key="index">
    {{category}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Taxonomy',
  props: ['tour'],
}
</script>

<style>

</style>
