<script lang="ts" setup>
import { useAuthStore } from '../stores/useAuthStore';
import { useCartStore } from '../stores/useCartStore';

const auth = useAuthStore()
const cart = useCartStore()

const handleLogout = async () => {
  await auth.logout()
}

</script>

<template>
  <header id="header px-2">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Nuxt Shop App</NuxtLink>

        <!-- Burger Menu -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">

            <!-- Menu -->
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-house me-2 fs-5"></i>Accueil</NuxtLink>
            </li>
            <li class="nav-item" v-if="!auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/register"><i class="fa-solid fa-address-card me-2 fs-5"></i>Inscription</NuxtLink>
            </li>
            <li class="nav-item" v-if="!auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/login"> <i class="fa-solid fa-door-open me-2 fs-5"></i>Connexion</NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/profile"> <i class="fa-solid fa-user me-2 fs-5"></i>profil</NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isLoggedIn && auth.isAdmin">
              <NuxtLink class="nav-link" to="/admin"> <i class="fa-solid fa-user-gear me-2 fs-5"></i>Administration</NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isLoggedIn">
              <a class="nav-link" href="#" @click="handleLogout"><i class="fa-solid fa-right-from-bracket me-2 fs-5"></i> Déconnexion</a>
            </li>

            <!-- Pannier & Canva -->
            <li class="nav-item dropdown">
              <a href="#" aria-labelledby="cart" class="nav-link position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i class="fa-solid fa-cart-shopping fs-5"></i>
                <span 
                  class="rounded-circle bg-primary fw-bold text-light d-flex align-items-center justify-content-center position-absolute top-0 end-0" 
                  style="font-size: 12px;height: 20px; width: 20px;"
                >{{ cart.cart.length }}</span>
              </a>
              <CartCanva :cart="cart.cart"/>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
