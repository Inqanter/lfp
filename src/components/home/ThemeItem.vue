<template>
  <div class="theme">
    <p class="theme__name">{{ theme }}</p>
  </div>
</template>

<script setup>
defineProps({
  theme: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.theme {
  text-align: center;
  background-color: var(--color-magic);
  border-radius: 15px;
  padding: 5px 10px;
}

.theme__name {
  margin: 0;
}
</style>
