<template>
  <article class="details">
    <p>{{ details }}</p>
    <button class="details__button" type="button" @click="$emit('reset')">
      Скрыть
    </button>
  </article>
</template>

<script setup>
defineProps({
  details: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss">
.details {
  position: sticky;
  top: 20px;
  padding: 20px;
  background-color: var(--color-elements-main);
  box-shadow: 0 0 10px 0 var(--color-background-contrast);
  border-radius: 10px;
}

.details p {
  max-height: 300px;
  overflow-y: auto;
  margin: 0 0 20px;
}

.details__button {
  display: block;
  font-family: $font--primary;
  font-size: 18px;
  line-height: 1.5;
  text-decoration: none;
  text-align: center;
  color: var(--color-light);
  max-width: 200px;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid var(--color-border-main);
  transition: $transition--primary;
}

.details__button:hover {
  color: var(--color-wealth);
}
</style>
