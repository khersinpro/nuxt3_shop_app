<script lang="ts" setup>
import { useCartStore } from '../../stores/useCartStore';
const cart = useCartStore()


</script>

<template>
  <div class="container" id="pannier">
    Votre pannier :
    <ul v-for="cartItem in cart.cart" class="list-group-item">
      <li class="list-item">
        <h3>
          {{ cartItem.name }}
        </h3>
        <p>
          quantité : {{ cartItem.quantity }}
        </p>
        <p>
          prix : {{ cartItem.price }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
