<template>
  <div>
    <button
      @click="
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'File created',
          life: 3000,
        })
      "
    >
      Show
    </button>
    <Toast />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Components",
  description: "Components page",
  layout: "component",
});

import { useToast } from "primevue/usetoast";

const toast = useToast();
</script>

<style scoped>
h1 {
  color: var(--text-color);
}

span {
  color: var(--primary-color);
}
</style>
