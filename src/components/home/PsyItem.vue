<template>
  <article class="psychologist">
    <div class="psychologist__content">
      <img
        class="psychologist__image"
        :src="props.photo"
        width="300"
        height="300" />
      <div class="psychologist__about">
        <p class="psychologist__name">{{ props.name }}</p>
        <p class="psychologist__specialization">{{ props.specialization }}</p>
        <div class="psychologist__themes">
          <ThemeItem
            v-for="(theme, $index) in props.themes"
            :theme="theme"
            :key="$index" />
        </div>
        <footer class="psychologist__footer">
          <p class="psychologist__price">
            Цена: <span> {{ props.price }} </span>
          </p>
          <div class="psychologist__controls">
            <a
              class="psychologist__link"
              @click="$emit('viewDetail', props.id)">
              Подробнее
            </a>
            <RouterLink
              class="psychologist__link"
              :to="{ name: 'contacts', params: { id: props.id } }">
              Связаться
            </RouterLink>
          </div>
        </footer>
      </div>
    </div>
  </article>
</template>

<script setup>
import ThemeItem from "./ThemeItem.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  themes: {
    type: Array,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss">
.psychologist {
  max-width: 700px;
  padding: 20px;
  background-color: var(--color-elements-main);
  box-shadow: 0 0 10px 0 var(--color-background-contrast);
  border-radius: 10px;
}

.psychologist__about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
}

.psychologist__content {
  display: flex;
  gap: 40px;
  width: 100%;
}

.psychologist__name {
  font-family: $font--title;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  margin: 0 0 20px;
}

.psychologist__specialization {
  text-align: center;
  padding-bottom: 10px;
  margin: 0 0 20px;
  border-bottom: 1px solid var(--color-border-main);
}

.psychologist__themes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.psychologist__image {
  width: 250px;
  border-radius: 10px;
  object-fit: cover;
}

.psychologist__price {
  margin: 0 0 20px;
}

.psychologist__price span {
  color: var(--color-wealth);
}

.psychologist__controls {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}

.psychologist__link {
  display: block;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  width: 100%;
  border: 1px solid var(--color-border-main);
  transition: $transition--primary;
  cursor: pointer;
}

.psychologist__link:hover {
  color: var(--color-wealth);
}

@media only screen and ($portable-width) {
  .psychologist {
    max-width: none;
  }
}

@media only screen and ($mobile-width) {
  .psychologist__content {
    display: block;
  }

  .psychologist__image {
    margin: 0 auto 20px;
  }
}
</style>
