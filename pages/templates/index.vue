<script setup>
definePageMeta({
  title: "Templates",
  description: "Templates page",
  layout: "component",
});

let templates = [
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
  {
    name: "Hud",
    description: "Hud completa para o player e carro",
    img: "https://i.imgur.com/OyGX7I1.png",
    path: "templates/hud",
  },
];
</script>

<template>
  <div class="flex p-4 flex-col">
    <h1 class="text-2xl font-bold text-[var(--text-color)]">Templates</h1>
    <div class="text-lg text-[var(--secondary-color)]">
      Aqui você encontrará todas as interfaces para seu servidor
    </div>
    <div class="flex flex-wrap w-full h-full gap-4 mt-8">
      <Card
        v-for="template in templates"
        :key="template.name"
        style="width: 25rem; overflow: hidden"
      >
        <template #header>
          <img alt="user header" :src="template.img" />
        </template>
        <template #title>{{ template.name }}</template>
        <template #subtitle>{{ template.description }}</template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <NuxtLink :to="template.path" class="w-full">
              <Button label="Ver Template" severity="primary" class="w-full" />
            </NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
