<template>
  <article class="empty">
    <p>Пустота, да и только...</p>
  </article>
</template>

<style lang="scss">
.empty {
  width: 700px;
  padding: 20px;
  margin: 0 auto;
  background-color: var(--color-elements-main);
  box-shadow: 0 0 10px 0 var(--color-background-contrast);
  border-radius: 10px;
}

.empty p {
  font-family: $font--title;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin: 0;
}
</style>
