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

const auth = useAuthStore();

async function handleLogin () {
  const {error} =  await auth.login(form.value)
}

</script>

<template>
  <form @submit.prevent="handleLogin">
    <label>
      Email
      <input type="email" name="email" v-model="form.email">
    </label>
    <label>
      Password
      <input type="password" name="password" v-model="form.password">
    </label>
    <button type="submit">Connexion</button>
  </form>
</template>

<style scoped></style>
