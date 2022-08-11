<template>
  <template v-if="psychologist">
    <BaseTitle :text="psychologist?.name"></BaseTitle>
    <div class="contacts__context">
      <img
        class="contacts__photo"
        :src="psychologist?.photo"
        width="400"
        height="600" />
      <div class="contacts__information">
        <p>{{ psychologist?.contacts }}</p>
        <router-link class="contacts__link" to="/">
          Найти другого психолога
        </router-link>
      </div>
    </div>
  </template>
  <template v-else>
    <EmptyItem />
  </template>
</template>

<script setup>
import { usePsyStore } from "../stores/psychologists";
import { useRoute } from "vue-router";
import { computed } from "vue";
const psyStore = usePsyStore();
const route = useRoute();
const psychologist = computed(() => psyStore.findPsychologist(route.params.id));
</script>

<style lang="scss">
.contacts__context {
  display: flex;
  gap: 40px;
}

.contacts__information p {
  margin: 0 0 20px;
}

.contacts__link {
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  background-color: var(--color-elements-main);
  transition: $transition--primary;
}

.contacts__link:hover {
  color: var(--color-wealth);
}
</style>
