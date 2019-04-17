<template>
  <div class="card">
    <SubCard :name="name" :image="image" :company="company" :description="description"/>
    <Taxonomy :categories="taxonomy"/>
    <TourSchedules :schedules="schedules"/>
    <IncludedInTour :includes="included"/>
    <Restrictions :restrictions="restrictions"/>
    <TourPrices :adults="adults" :kids="kids"/>
    <div class="content">Tour Duration: {{ duration | convertTime }}</div>
  </div>
</template>

<script>
import Restrictions from "./Restrictions.vue";
import SubCard from "./SubCard.vue";
import TourPrices from "./TourPrices.vue";
import TourSchedules from "./TourSchedules.vue";
import IncludedInTour from "./IncludedInTour.vue";
import Taxonomy from "./Taxonomy.vue";

export const convertTime = minutes => {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  return h + ":" + m;
};

// deconstruct tour info before passing with set default values a run a check
// const { categories, schedules, included, prices } = this.tour

export default {
  name: "Card",
  components: {
    Taxonomy,
    IncludedInTour,
    TourSchedules,
    TourPrices,
    SubCard,
    Restrictions
  },
  data() {
    const {
      name,
      company,
      taxonomy,
      included,
      restrictions,
      price: { adults, kids },
      schedules,
      duration,
      description,
      image
    } = this.tour;
    return {
      name,
      company,
      taxonomy,
      included,
      restrictions,
      adults,
      kids,
      schedules,
      duration,
      description,
      image
    };
  },
  props: ["tour"],
  filters: {
    convertTime
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
