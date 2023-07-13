<script lang="ts" setup>

type Article = {
  name: string,
  description: string,
  price: number
}

import { useCartStore } from '../../stores/useCartStore';
const cart = useCartStore()

const id: string | string[] = (useRoute()).params.id 
const data = await useApiFetch('/article/' + id)
const article: Article | null  = data.data.value as Article

</script>

<template>
  <section id="unique-article my-5">
    <div class="article-container container">
      <div class="card h-100">
        <img src="/images/img-test.jpeg" class="card-img-top" alt="image de test">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="card-title fw-bold">{{article.name}}</h5>
          <p class="card-text flex-fill">{{ article.description }}</p>
          <p class="card-text fw-bold">{{ article.price }} €</p>
          <button @click="cart.getArticle(article.id, article.name, article.price)" class="btn btn-primary" type="button">Ajouter au pannier</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .article-container {
    max-width: 800px;
  }
</style>
