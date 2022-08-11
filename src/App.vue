<template>
  <section class="lfp">
    <div class="container">
      <div class="lfp__content">
        <RouterView />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, provide } from "vue";
import { RouterView } from "vue-router";
import { usePsyStore } from "./stores/psychologists";

const psyStore = usePsyStore();
const psyData = computed(() => psyStore.getData);

provide("psyData", psyData);
</script>

<style lang="scss">
.lfp__content {
  padding: 40px 0;
}

.lfp__search {
  margin-bottom: 40px;
}

.lfp__showcase {
  display: flex;
  gap: 40px;
}

.lfp__details {
  width: 100%;
}

.lfp__list {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 700px;
}

.lfp__item {
  width: 100%;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

@media only screen and ($portable-width) {
  .lfp__showcase {
    flex-direction: column;
  }

  .lfp__list {
    order: 1;
    max-width: none;
  }
}
</style>
