<script lang="ts" setup>
const id = (useRoute()).params.id
const data = await useApiFetch('/article/' + id)
const article = data.data.value
</script>

<template>
  <section id="unique-article">
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="/images/img-test.jpeg" class="card-img-top" alt="image de test">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="card-title fw-bold">{{article.name}}</h5>
          <p class="card-text flex-fill">{{ article.description }}</p>
          <p class="card-text fw-bold">{{ article.price }} €</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
