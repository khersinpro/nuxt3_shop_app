<script lang="ts" setup>
import { useAuthStore } from '../stores/useAuthStore';

const auth = useAuthStore()

const handleLogout = async () => {
  await auth.logout()
}
</script>

<template>
  <header id="header px-2">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Nuxt Shop App</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/"><i class="fa-solid fa-house me-2"></i>Accueil</NuxtLink>
            </li>
            <li class="nav-item" v-if="!auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/register"><i class="fa-solid fa-address-card me-2"></i>Inscription</NuxtLink>
            </li>
            <li class="nav-item" v-if="!auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/login"> <i class="fa-solid fa-door-open me-2"></i>Connexion</NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isLoggedIn">
              <NuxtLink class="nav-link" to="/profile"> <i class="fa-solid fa-user me-2"></i>profil</NuxtLink>
            </li>
            <li class="nav-item" v-if="auth.isLoggedIn">
              <a class="nav-link" href="#" @click="handleLogout"><i class="fa-solid fa-right-from-bracket me-2"></i> Déconnexion</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

</style>
