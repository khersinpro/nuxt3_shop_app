<script lang="ts" setup>
import { useAuthStore } from '../stores/useAuthStore';

const auth = useAuthStore();

const handleLogout = async () => {
  await auth.logout();
}
</script>

<template>
  <div>
    <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>
    <pre>{{ auth.user }}</pre>
    <ul>
      <li v-if="auth.isLoggedIn">
        <NuxtLink   to="/">Home</NuxtLink>
      </li>
      <li v-if="!auth.isLoggedIn">
        <NuxtLink to="/register">Register</NuxtLink>
      </li>
      <li v-if="!auth.isLoggedIn">
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <li v-if="auth.isLoggedIn">
        <NuxtLink to="/auth-only">Auth only</NuxtLink>
      </li>
      <li v-if="!auth.isLoggedIn">
        <NuxtLink to="/guest-only">Guest only</NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
