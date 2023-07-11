<script lang="ts" setup>
import {definePageMeta} from '#imports';

definePageMeta({
  middleware: ["admin"]
})

const roles =  await useApiFetch('/user')

console.log(roles);
</script>

<template>
  <div>
    Page: admin
  </div>
</template>

<style scoped></style>
