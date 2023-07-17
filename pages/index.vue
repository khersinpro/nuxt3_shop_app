<script lang="ts" setup>
const {data , error} = await useApiFetch<Article[] | []>("/article");

</script>

<template>
  <!-- Hero homepage -->
  <section class="hero p-0 container-fluid mb-5 position-relative">
    <img class="hero--image" src="/images/hero.jpg" alt="hero">
    <div class="hero--presentation container position-absolute top-50 start-50 translate-middle">
      <h1 class="text-light h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Alias voluptatem magnam quam!</h1>
      <p class="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, doloribus?</p>
      <button type="button" class="btn btn-outline-light fw-bold">Commander ici</button>
    </div>

  <!-- Liste des article de la homepage -->
  </section>
  <section class="display-articles p-0container-fluid mb-5 position-relative">
    <div class="container">
      <h1 class="mb-4 h2">Liste des articles</h1>
      <div class="row">
        <articleCard v-for="article in data" :article="article" :key="article.id"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  height: 450px;
  &--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }
}
</style>
