<script lang="ts" setup>
import {definePageMeta} from "#imports";
import { useAuthStore } from "../stores/useAuthStore";

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
})

definePageMeta({
  middleware: ["guest"]
})

const auth = useAuthStore();

async function handleRegister() {
  const { error } = await auth.register(form.value)

  if (!error.value) {
    navigateTo('/login')
  } else {
    // affichage de message d'erreur
  }
}


</script>

<template>
  <section class="my-5 container loggin-section">
    <h1 class="mb-3 h2">Inscription</h1>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="firstName" class="form-label">Prénom</label>
        <input type="firstName" class="form-control" id="firstName" v-model="form.firstName">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Nom</label>
        <input type="lastName" class="form-control" id="lastName" v-model="form.lastName">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="form.email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password" v-model="form.password">
      </div>
      <button class="btn btn-primary" type="submit">Connexion</button>
    </form>
  </section>
</template>

<style scoped></style>
