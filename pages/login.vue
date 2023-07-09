<script lang="ts" setup>
import {definePageMeta} from "#imports";
import { useAuthStore } from '../stores/useAuthStore';

definePageMeta({
  middleware: ["guest"]
})

const form = ref({
  email: "",
  password: ""
})

const auth = useAuthStore()

async function handleLogin () {
  const { error } =  await auth.login(form.value)
  
  if (!error.value) {
    navigateTo('/')
  }
}

</script>

<template>
  <section class="my-5 container loggin-section">
    <h1 class="mb-3 h2">Connexion à l'espace utilisateur</h1>
    <form @submit.prevent="handleLogin">
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
