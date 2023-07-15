<script lang="ts" setup>
import { useCartStore } from '../stores/useCartStore';

const props = defineProps(['cart'])

const cart = useCartStore()

watch(cart.cart, () => {

})
</script>

<template>
  <!-- Canva -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    
    <!-- Pannier -->
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Panier</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column">
      <h5 class="text-secondary fs-5">Mes articles :</h5>

      <!-- Liste des articles -->
      <ul class="list-group list-group-flush flex-fill">
        <li class="list-group-item" v-for="cartitem in cart.cart" :key="cartitem.id" >
          {{ cartitem.id }}
          {{ cartitem.name }}
          {{ cartitem.price }}
          {{ cartitem.quantity }}
        </li>
      </ul>

      <!-- Résumé du pannier -->
      <div class="container border-top">
        <p class="fs-6 fw-bold mt-2">
          Prix total: 
          <span> 19,99€</span>
        </p>
        <p class="fs-6 fw-bold">
          Nombre d'article: 
          <span> 19,99€</span>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped></style>
