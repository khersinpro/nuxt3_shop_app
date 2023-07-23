<script lang="ts" setup>
import { useCartStore } from '../../stores/useCartStore';
const cart = useCartStore()
</script>

<template>
  <div class="container my-5" id="pannier">
    <h1>Votre pannier :</h1>

    <!-- Résumé du pannier -->
    <div class="row mb-5">
      <div class="col-md-12 col-lg-7">
        <p class="my-2">
          Nombre d'article : {{ cart.getCartTotalQuantity() }}
        </p>
        <p class="mt-2 mb-4">
          Prix total du pannier : {{ cart.getCartTotalPrice() }}
        </p>
      </div>
      <div class="col-md-12 col-lg-5"> 
        <button class="btn btn-primary d-block ms-lg-auto">Commander</button>
      </div>
    </div>

    <!-- Liste des articles -->
    <ul v-for="cartItem in cart.cart" class="list-group-item">
      <NuxtLink :to="`/article/${cartItem.id}`" class="list-item text-decoration-none text-dark">
        <h3>
          {{ cartItem.name }}
        </h3>
        <p>
          quantité : {{ cartItem.quantity }}
        </p>
        <p>
          prix : {{ cartItem.price }}
        </p>
      </NuxtLink>
    </ul>
    
  </div>
</template>

<style scoped></style>
