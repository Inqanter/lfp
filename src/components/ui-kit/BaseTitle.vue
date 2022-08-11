<template>
  <h1 class="title">{{ text }}</h1>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.title {
  font-family: $font--title;
  font-size: 42px;
  line-height: 62px;
  text-align: center;
  margin: 0 0 40px;
}

@media only screen and ($mobile-width) {
  .title {
    font-size: 28px;
    line-height: 36px;
  }
}
</style>
