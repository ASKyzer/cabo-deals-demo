<template>
  <div class="content">
            Categories:
    <span v-for="(category, index) in categories" :key="index">
      {{category}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Taxonomy',
  props: ['categories'],
}
</script>

<style>

</style>
