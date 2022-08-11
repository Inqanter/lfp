<template>
  <BaseTitle text="Найди своего психолога" />
  <PsySearch
    class="lfp__search"
    @search="searchPsychologist"
    :searchValue="enteredSearchValue" />
  <div class="lfp__showcase">
    <ul class="lfp__list list-default">
      <template v-if="psychologists.length > 0">
        <li
          class="lfp__item"
          v-for="(psychologist, $index) in psychologists"
          :key="$index">
          <PsyItem
            @viewDetail="viewDetail"
            :id="psychologist.id"
            :photo="psychologist.photo"
            :name="psychologist.name"
            :specialization="psychologist.specialization"
            :themes="psychologist.themes"
            :price="psychologist.price" />
        </li>
      </template>
      <li v-else class="lfp__item">
        <EmptyItem />
      </li>
    </ul>
    <transition>
      <div
        class="lfp__details"
        v-scroll
        v-if="chosenPsychologist?.value?.details">
        <PsyDetails
          class="lfp__details"
          :details="chosenPsychologist.value.details"
          @reset="resetDetails" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch, inject } from "vue";
import { usePsyStore } from "../stores/psychologists";
import { vScroll } from "../directives/vscroll";
import PsyItem from "../components/home/PsyItem.vue";
import PsyDetails from "../components/home/PsyDetails.vue";
import PsySearch from "../components/home/PsySearch.vue";
const enteredSearchValue = ref("");
const activeSearchValue = ref("");
const psyStore = usePsyStore();
const psyData = inject("psyData");
const psychologists = computed(() => {
  if (activeSearchValue.value) {
    return psyData.value.filter((psychologists) =>
      psychologists.name.includes(activeSearchValue.value)
    );
  }

  return psyData.value;
});

const chosenPsychologist = reactive({});

const viewDetail = (id) =>
  (chosenPsychologist.value = psyStore.findPsychologist(id));

const resetDetails = () => (chosenPsychologist.value = {});

const searchPsychologist = (value) => (enteredSearchValue.value = value);

watch(enteredSearchValue, (value) => {
  setTimeout(() => {
    if (value === enteredSearchValue.value) {
      activeSearchValue.value = value;
    }
  }, 300);
});
</script>
