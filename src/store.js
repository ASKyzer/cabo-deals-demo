import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    tours: [],
    filteredTours: [],
    filteredPrices: []
  },
  getters: {
    allTours: state => state.tours,
    filteredTours: state => state.filteredTours,
    filteredPrices: state => state.filteredPrices
  },
  actions: {
    async fetchTours({
      commit
    }) {
      const response = await axios.get("./data.json");

      // commit our mutation to change the state
      commit("setTours", response.data);
    },
    filterTours({
      commit,
      state
    }, category) {
      const filtered = state.tours.filter(tour => {
        // return tour.taxonomy[0] === category;
        let catIndex = tour.taxonomy.findIndex(cat => {
          return cat === category;
        })
        return catIndex !== -1
      });
      console.log(filtered)
      commit("setFiltered", filtered);
    },
    filterPrice({
      commit,
      state
    }, maxPrice) {
      const filtered = state.tours.filter(tour => {
        return tour.price.adults < maxPrice
      })
      console.log(filtered)
      commit('setPriceFilter', filtered)
    }
  },
  mutations: {
    setTours: (state, tours) => {
      state.tours = tours
    },
    setFiltered: (state, tours) => {
      state.filteredTours = tours
    },
    setPriceFilter: (state, tours) => {
      state.filteredPrices = tours
    }
  }
});