<script lang="ts" setup>
import { useCartStore } from '../stores/useCartStore';

const props = defineProps(['cart'])
const cart = useCartStore()

</script>

<template>
  <!-- Canva -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    
    <!-- Pannier -->
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">
        <i class="fa-solid fa-cart-shopping fs-5 me-3"></i>
        Panier
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <h5 class="text-secondary fs-5">Mes articles :</h5>

      <!-- Liste des articles -->
      <ul class="list-group list-group-flush flex-fill">
        <!-- Article unique -->
        <li class="list-group-item d-flex flex-column" v-for="cartitem in cart.cart" :key="cartitem.id" >
          <span class="fw-bold mb-2">
            {{ cartitem.name }}
          </span>
          <span class="mb-2">
            Prix unitaire: {{ cartitem.price }} € 
          </span>
          

          <!-- Modifier la quantité d'un article -->
          <div class="d-flex mb-2">
            <button @click="cart.removeArticleQuantity(cartitem.id)" class="btn btn-danger">-</button>
            <input v-model="cartitem.quantity" type="number" id="quantity" name="quantity" min="1" class="form-control w-25 mx-2">
            <button @click="cart.addArticleQuantity(cartitem.id)" class="btn btn-success">+</button>  
          </div>
        </li>
      </ul>

      <!-- Résumé du pannier -->
      <div class="container border-top">
        <p class="fs-6 fw-bold mt-3">
          Prix total: <span class="text-secondary">{{ cart.getCartTotalPrice() }} €</span>
        </p>
        <p class="fs-6 fw-bold">
          Nombre d'article: Prix total: <span class="text-secondary">{{ cart.getCartTotalQuantity() }}</span>
        </p>
        <button class="btn btn-primary w-100">Aller au pannier</button>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
