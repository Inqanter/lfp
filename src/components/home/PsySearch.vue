<template>
  <form>
    <div class="form-field">
      <label class="form-field__label" for="search">Ищущий да обрящет...</label>
      <div class="form-field__entry">
        <input
          class="form-field__input"
          id="search"
          type="search"
          name="search"
          @input="search"
          :value="searchValue" />
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  searchValue: {
    type: String,
    default: ""
  }
});
const emits = defineEmits(["search"]);

const search = (e) => {
  return emits("search", e.target.value);
};
</script>

<style scoped lang="scss">
.form-field,
.form-field__entry {
  width: 100%;
}

.form-field__entry {
  position: relative;
}

.form-field__label {
  display: block;
  font-family: $font--title;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 5px;
}

.form-field__input {
  min-height: 40px;
  padding: 0 10px;
  background-color: var(--color-inputs-main);
  border: none;
}

.form-field__input {
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: var(--color-light);
  width: 100%;
}

.form-field__input::placeholder {
  font-family: $font--primary;
  color: var(--color-light-darker);
}

.form-field__input:focus {
  outline: none;
}

@media only screen and ($mobile-width) {
  .form-field__label,
  .form-field__input {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
