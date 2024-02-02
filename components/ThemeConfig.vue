<template>
  <div class="themes">
    <Logo :type="type" class="w-20" @click="showSidebar = true" />
    <Sidebar v-model:visible="showSidebar" position="right">
      <div class="flex flex-col justify-center items-center gap-8">
        <h1 class="text-xl">Mode:</h1>
        <div class="w-full flex">
          <div class="flex justify-evenly w-full">
            <div class="flex gap-2 items-center">
              Dark
              <button
                class="w-12 h-12 rounded-full text-xl bg-black"
                :class="{
                  'border-4 border-[var(--primary-color)]':
                    selectedTheme.mode == 'dark',
                }"
                @click="selectedTheme.mode = 'dark'"
              >
                <Icon name="material-symbols:dark-mode" color="white"></Icon>
              </button>
            </div>
            <div class="flex gap-2 items-center">
              Light
              <button
                class="w-12 h-12 rounded-full text-xl bg-white"
                :class="{
                  'border-4 border-[var(--primary-color)]':
                    selectedTheme.mode == 'light',
                }"
                @click="selectedTheme.mode = 'light'"
              >
                <Icon name="material-symbols:light-mode" color="black"></Icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-8 mt-10">
        <h1 class="text-xl">Colors:</h1>
        <div class="w-full flex justify-center">
          <div
            class="flex w-full flex-wrap justify-center lg:flex-col lg:flex-nowrap gap-4 lg:w-2/5"
          >
            <div
              class="flex gap-2 items-center justify-end w-2/5 lg:w-auto"
              v-for="color in themeColors"
              :key="color.link"
            >
              <span>{{ color.name }}</span>
              <button
                class="w-12 h-12 rounded-full flex"
                :style="{ backgroundColor: color.hex }"
                :class="{
                  'border-2 border-red-500': selectedTheme.color == color.link,
                }"
                @click="selectedTheme.color = color.link"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<script setup lang="ts">
import { usePrimeVue } from "primevue/config";
const PrimeVue = usePrimeVue();
let showSidebar = ref(false);

let selectedTheme = ref({ mode: "dark", color: "amber" });
let currentTheme = ref("aura-dark-amber");

const props = defineProps<{
  type: "text" | "img" | "icon";
}>();

function changeTheme() {}

watch(
  () => selectedTheme.value,
  (value) => {
    console.log(value);
    let lastTheme = currentTheme.value;
    let current = `aura-${value.mode}-${value.color}`;
    console.log(lastTheme, current);
    PrimeVue.changeTheme(lastTheme, current, "theme-link", () => {
      currentTheme.value = current;
    });
  },
  { deep: true }
);

// blue,indigo,purple,teal,green,amber,cyan,pink,lime,noir

let themeColors = [
  {
    name: "Blue",
    link: "blue",
    hex: "#60a5fa",
  },
  {
    name: "Indigo",
    link: "indigo",
    hex: "#818cf8",
  },
  {
    name: "Purple",
    link: "purple",
    hex: "#a78bfa",
  },
  {
    name: "Teal",
    link: "teal",
    hex: "#2dd4bf",
  },
  {
    name: "Green",
    link: "green",
    hex: "#34d399",
  },
  {
    name: "Amber",
    link: "amber",
    hex: "#fbbf24",
  },
  {
    name: "Cyan",
    link: "cyan",
    hex: "#22d3ee",
  },
  {
    name: "Pink",
    link: "pink",
    hex: "#f472b6",
  },
  {
    name: "Lime",
    link: "lime",
    hex: "#a3e635",
  },
  {
    name: "Noir",
    link: "noir",
    hex: "#c1c1c1",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;500&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
</style>
