<template>
  <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="tour.image" :alt="tour.name">
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">{{tour.name}}</p>
          <p class="subtitle is-6">by {{tour.company}}</p>
        </div>
        <div class="content">
          {{tour.description}}
        </div>
        <Taxonomy :category="tour.taxonomy" />
        <TourSchedules :tour="tour" />
        <IncludedInTour :tour="tour" />
        <!-- sep to own compo and loop through array -->
        <div class="content">
          <span v-if="tour.price.adults">Adult Price: ${{tour.price.adults}}</span>
          <span v-if="tour.price.kids">  |  Kids Price: ${{tour.price.kids}}</span>
        </div>
        <div class="content">Tour Duration: {{tour.duration | convertTime}}</div>
      </div>
</template>

<script>
import TourSchedules from './TourSchedules.vue' 
import IncludedInTour from './IncludedInTour.vue' 
import Taxonomy from './Taxonomy.vue' 

export const convertTime = minutes => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  return h + ':' + m;
}

// deconstruct tour info before passing with set default values a run a check 

export default {
  name: 'Card',
  components: {
    Taxonomy,  
    IncludedInTour,  
    TourSchedules
  },
  props: ['tour'],
  filters: {
    convertTime
  }
}
</script>

<style scoped>
.card {
  height: 100%;
}
.card-image {
  background-color: #000;
}
</style>
