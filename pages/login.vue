<script lang="ts" setup>
const form = ref({
  email: "",
  password: ""
})

async function handleLogin() {
  // Récupération du cookie csrf quand la fonctionnalité en back sera présente
  // await useApiFetch("/csrf-token");

  await useApiFetch("/user/signin", {
    method: "POST",
    body: form.value
  })

  const { data } = await useApiFetch("/user/check");
    
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
