<template>
  <div
    class="error w-screen h-screen bg-[#1c1c1c] flex items-center justify-center flex-col"
  >
    <Card class="p-8">
      <template #header>
        <div class="font-semibold flex items-center justify-center text-4xl">
          Error
        </div>
      </template>
      <template #content>
        <div class="flex items-center justify-center flex-col">
          <h1 class="text-5xl font-bold text-[#ff4d4f]">
            {{ props.error.statusCode }}
          </h1>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-center">
          <p class="text-lg font-semibold">{{ props.error.message }}</p>
        </div>
      </template>
    </Card>
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
  background: url("assets/image/error.png") no-repeat center center;
}
</style>
