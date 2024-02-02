<template>
  <div
    class="error w-screen h-screen bg-[#1c1c1c] flex items-center justify-center flex-col gap-4"
  >
    <div class="font-semibold flex items-center justify-center text-4xl">
      Error
    </div>

    <div class="flex items-center justify-center flex-col">
      <h1 class="text-5xl font-bold text-[#2F2F37]">
        {{ props.error.statusCode }}
      </h1>
    </div>

    <div class="flex items-center justify-center">
      <p class="text-lg font-semibold">{{ props.error.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    message: string;
    statusCode: number;
  };
}>();
</script>

<style scoped>
.error {
  background: #92b296 url("/assets/images/error.png") no-repeat center center;
  background-size: 75%;
}
</style>
