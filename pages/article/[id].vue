<script lang="ts" setup>
import { useCartStore } from '../../stores/useCartStore';
const cart = useCartStore()

// Gestion de la quantité de l'article
const quantity = ref(1)
watch(quantity, (value) => {
  if (value < 1) {
    quantity.value = 1
  }
  if (value > 10) {
    quantity.value = 10
  }
})

// Récupération de l'id de l'article et de l'article
const id: string | string[] = (useRoute()).params.id 
const {data, error} = await useApiFetch<Article>('/article/' + id)
</script>

<template>
  <section id="unique-article" class="py-5">
    <!-- Bouton de retour en arriere -->
    <div class="container">
      <button @click="$router.back()" class="btn btn-outline-primary mb-3 float-left">Retour</button>
    </div>

    <!-- affichage de l'article -->
    <div class="article-container container">

      <div class="card h-100" v-if="data">
        <img src="/images/img-test.jpeg" class="card-img-top" alt="image de test">
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="card-title fw-bold">{{data.name}}</h5>
          <p class="card-text flex-fill">{{ data.description }}</p>
          <p class="card-text fw-bold">{{ data.price }} €</p>

          <!-- Container du bouon d'ajout au panier -->
          <div class="container d-flex px-0">
            <div class="d-flex flex-row align-items-center me-2">
              <label class="me-2 text-nowrap" for="quantity">Quantité :</label>
              <button @click="quantity--" class="btn btn-danger">-</button>
              <input 
                v-model="quantity" 
                type="number" 
                id="quantity" 
                name="quantity" 
                min="1" 
                max="10" 
                class="form-control mx-2"
              >
              <button @click="quantity++" class="btn btn-success">+</button>
            </div>
  
            <button 
              @click="cart.addArticle(data.id, data.name, data.price, quantity)" 
              class="btn btn-primary" 
              type="button"
            >
              Ajouter au pannier
            </button>
          </div>

        </div>
      </div>

      <!-- Affichage d'une erreur -->
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }} 
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .article-container {
    max-width: 800px;
  }
</style>
