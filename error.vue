<template>
  <div
    class="error w-screen h-screen bg-[#1c1c1c] flex items-center justify-center flex-col gap-4 pb-20"
  >
    <div class="text font-semibold flex items-center justify-center text-4xl">
      Error
    </div>

    <div class="flex items-center justify-center flex-col">
      <h1 class="text-5xl font-bold text-[#2F2F37]">
        {{ props.error.statusCode }}
      </h1>
    </div>

    <div class="flex items-center justify-center">
      <p class="text text-lg font-semibold">{{ props.error.message }}</p>
    </div>
    <NuxtLink @click="$router.go(-1)" rel="noopener">
      <Button class="text text-lg font-semibold" severity="secondary">
        Voltar
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Error",
  description: "Error page",
  layout: "default",
});

const props = defineProps<{
  error: {
    message: string;
    statusCode: number;
  };
}>();
</script>

<style scoped>
.error {
  background: url("/assets/images/error.png") no-repeat center center;
  background-size: 75%;
}

.error::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: var(--primary-color);

  background-image: linear-gradient(rgb(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 55px 55px;
  opacity: 1;
  background-size: 30px 30px;
  background-position: -5px -5px;
}

.text {
  color: var(--text-color);
}
</style>
