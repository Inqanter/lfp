import { defineStore } from "pinia";
import { data } from "../mocks/data";

export const usePsyStore = defineStore("psychologists", {
  state: () => ({
    data
  }),
  getters: {
    getData(state) {
      return state.data;
    }
  },
  actions: {
    findPsychologist(id) {
      return this.data.find(
        (psychologist) => Number(psychologist.id) === Number(id)
      );
    }
  }
});
