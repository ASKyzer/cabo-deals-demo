<template>
  <div class="select is-rounded">
    <select @input="$emit('onCategorySelect', $event.target.value)">
      <option value hidden selected>Select a tour category</option>
      <option value="all-tours">All Tours</option>
      <option value="out-doors">Outdoors</option>
      <option value="sea-adventure">Sea Adventures</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "InputSelect"
};
</script>

<style>
</style>
