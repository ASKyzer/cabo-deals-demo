<template>
  <div>
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- <img :src="image" :alt="name"> -->
        <img src="http://unsplash.it/800/600" alt>
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ name }}</p>
      <p class="subtitle is-6">by {{ company }}</p>
    </div>
    <div class="content">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: "SubCard",
  props: ["name", "image", "company", "description"]
};
</script>

<style>
.card-image {
  background-color: #aaa;
  color: white;
}
</style>
