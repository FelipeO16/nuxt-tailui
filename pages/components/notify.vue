<template>
  <div>
    <button
      @click="
        toast.add({
          severity: 'success',
          summary: 'Success',
          detail: 'File created',
        })
      "
    >
      Show
    </button>
    <Teste></Teste>
    <Toast class="" />
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

<style>
.p-toast-message-content {
  @apply border-none;
}
</style>
