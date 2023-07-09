<script lang="ts" setup>
import {definePageMeta} from "#imports";
import { useAuthStore } from "../stores/useAuthStore";

definePageMeta({
  middleware: ["auth"]
})

const auth = useAuthStore();
</script>
<template>
  <section class=" my-5 container profile">
    <h1 class="mb-3 h2">
        Bievenue sur votre profile : {{ auth.fullname() }}
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        Nom : {{ auth.user.lastName }}
      </li>
      <li class="list-group-item">
        Prénom : {{ auth.user.firstName }}
      </li>
      <li class="list-group-item">
        Email : {{ auth.user.email }}
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
