<script lang="ts" setup>
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ["auth"]
})

async function getArticles () {
  const articles = await useApiFetch("/article")
  return articles
}

const articles = getArticles();

console.log(articles);

  
</script>

<template>
  <div>
    Page: foo
  </div>
</template>

<style scoped></style>
