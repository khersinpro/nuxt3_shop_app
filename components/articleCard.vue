<script lang="ts" setup>
const props = defineProps(['article', 'key'])
</script>

<template>
  <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
    <div class="card h-100">
      <img src="/images/img-test.jpeg" class="card-img-top" alt="image de test">
      <div class="card-body d-flex flex-column align-items-start">
        <h5 class="card-title fw-bold">{{props.article.name}}</h5>
        <p class="card-text flex-fill">{{ props.article.description }}</p>
        <p class="card-text fw-bold">{{ props.article.price }} €</p>
        <NuxtLink class="btn btn-primary" :to="`/article/${props.article.id}`"><i class="fa-solid fa-magnifying-glass me-2"></i> Voir</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
