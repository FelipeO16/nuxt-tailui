<template>
  <div class="card flex justify-center">
    {{ selectedTheme }}
    <CascadeSelect
      v-model="selectedTheme"
      :options="themes"
      optionLabel="cname"
      optionGroupLabel="name"
      :optionGroupChildren="['colors', 'modes', 'name']"
      style="min-width: 14rem"
      placeholder="Selecione um tema"
    >
      <template #option="slotProps">
        <div class="flex items-center">
          <img
            v-if="slotProps.option.colors"
            :alt="slotProps.option.name"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
            style="width: 18px"
          />
          <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
          <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
          <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
        </div>
      </template>
    </CascadeSelect>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { usePrimeVue } from "primevue/config";
const PrimeVue = usePrimeVue();

const selectedTheme = ref({ cname: "Amber", link: "aura-dark-amber" });

const themes = ref([
  {
    name: "Material Design",
    code: "md",
    colors: [
      {
        name: "Indigo",
        modes: [
          { cname: "Dark", link: "md-dark-indigo" },
          { cname: "Light", link: "md-light-indigo" },
        ],
      },
      {
        name: "Deep Purple",
        modes: [
          { cname: "Dark", link: "md-dark-deeppurple" },
          { cname: "Light", link: "md-light-deeppurple" },
        ],
      },
    ],
  },
  {
    name: "Material Design Compact",
    code: "mdc",
    colors: [
      {
        name: "Indigo",
        modes: [
          { cname: "Dark", link: "mdc-dark-indigo" },
          { cname: "Light", link: "mdc-light-indigo" },
        ],
      },
      {
        name: "Deep Purple",
        modes: [
          { cname: "Dark", link: "mdc-dark-deeppurple" },
          { cname: "Light", link: "mdc-light-deeppurple" },
        ],
      },
    ],
  },
  {
    name: "Fluent",
    code: "fluent",
    colors: [
      {
        name: "Light",
        modes: [{ cname: "Light", link: "fluent-light" }],
      },
    ],
  },
  {
    name: "Aura",
    code: "aura",
    colors: [
      {
        name: "Light",
        modes: [
          { cname: "Blue", link: "aura-light-blue" },
          { cname: "Indigo", link: "aura-light-indigo" },
          { cname: "Purple", link: "aura-light-purple" },
          { cname: "Teal", link: "aura-light-teal" },
          { cname: "Green", link: "aura-light-green" },
          { cname: "Amber", link: "aura-light-amber" },
          { cname: "Cyan", link: "aura-light-cyan" },
          { cname: "Pink", link: "aura-light-pink" },
          { cname: "Lime", link: "aura-light-lime" },
          { cname: "Noir", link: "aura-light-noir" },
        ],
      },
      {
        name: "Dark",
        modes: [
          { cname: "Blue", link: "aura-dark-blue" },
          { cname: "Indigo", link: "aura-dark-indigo" },
          { cname: "Purple", link: "aura-dark-purple" },
          { cname: "Teal", link: "aura-dark-teal" },
          { cname: "Green", link: "aura-dark-green" },
          { cname: "Amber", link: "aura-dark-amber" },
          { cname: "Cyan", link: "aura-dark-cyan" },
          { cname: "Pink", link: "aura-dark-pink" },
          { cname: "Lime", link: "aura-dark-lime" },
          { cname: "Noir", link: "aura-dark-noir" },
        ],
      },
    ],
  },
  {
    name: "Lara",
    code: "lara",
    colors: [
      {
        name: "Light",
        modes: [
          { cname: "Blue", link: "lara-light-blue" },
          { cname: "Indigo", link: "lara-light-indigo" },
          { cname: "Purple", link: "lara-light-purple" },
          { cname: "Teal", link: "lara-light-teal" },
          { cname: "Green", link: "lara-light-green" },
          { cname: "Amber", link: "lara-light-amber" },
          { cname: "Cyan", link: "lara-light-cyan" },
          { cname: "Pink", link: "lara-light-pink" },
        ],
      },
      {
        name: "Dark",
        modes: [
          { cname: "Blue", link: "lara-dark-blue" },
          { cname: "Indigo", link: "lara-dark-indigo" },
          { cname: "Purple", link: "lara-dark-purple" },
          { cname: "Teal", link: "lara-dark-teal" },
          { cname: "Green", link: "lara-dark-green" },
          { cname: "Amber", link: "lara-dark-amber" },
          { cname: "Cyan", link: "lara-dark-cyan" },
          { cname: "Pink", link: "lara-dark-pink" },
        ],
      },
    ],
  },
  {
    name: "Soho",
    code: "soho",
    colors: [
      {
        name: "Light",
        modes: [{ cname: "Light", link: "soho-light" }],
      },
      {
        name: "Dark",
        modes: [{ cname: "Dark", link: "soho-dark" }],
      },
    ],
  },
  {
    name: "Viva",
    code: "viva",
    colors: [
      {
        name: "Light",
        modes: [{ cname: "Light", link: "viva-light" }],
      },
      {
        name: "Dark",
        modes: [{ cname: "Dark", link: "viva-dark" }],
      },
    ],
  },
  {
    name: "Mira",
    code: "mira",
    colors: [
      {
        name: "Light",
        modes: [{ cname: "Light", link: "mira" }],
      },
    ],
  },
  {
    name: "Nano",
    code: "nano",
    colors: [
      {
        name: "Light",
        modes: [{ cname: "Light", link: "nano" }],
      },
    ],
  },
  {
    name: "Saga",
    code: "saga",
    colors: [
      {
        name: "Blue",
        modes: [{ cname: "Blue", link: "saga-blue" }],
      },
      {
        name: "Green",
        modes: [{ cname: "Green", link: "saga-green" }],
      },
      {
        name: "Orange",
        modes: [{ cname: "Orange", link: "saga-orange" }],
      },
      {
        name: "Purple",
        modes: [{ cname: "Purple", link: "saga-purple" }],
      },
    ],
  },
  {
    name: "Vela",
    code: "vela",
    colors: [
      {
        name: "Blue",
        modes: [{ cname: "Blue", link: "vela-blue" }],
      },
      {
        name: "Green",
        modes: [{ cname: "Green", link: "vela-green" }],
      },
      {
        name: "Orange",
        modes: [{ cname: "Orange", link: "vela-orange" }],
      },
      {
        name: "Purple",
        modes: [{ cname: "Purple", link: "vela-purple" }],
      },
    ],
  },
  {
    name: "Arya",
    code: "arya",
    colors: [
      {
        name: "Blue",
        modes: [{ cname: "Blue", link: "arya-blue" }],
      },
      {
        name: "Green",
        modes: [{ cname: "Green", link: "arya-green" }],
      },
      {
        name: "Orange",
        modes: [{ cname: "Orange", link: "arya-orange" }],
      },
      {
        name: "Purple",
        modes: [{ cname: "Purple", link: "arya-purple" }],
      },
    ],
  },
  {
    name: "Bootstrap",
    code: "bootstrap4",
    colors: [
      {
        name: "Blue",
        modes: [
          { cname: "Dark", link: "bootstrap4-dark-blue" },
          { cname: "Light", link: "bootstrap4-light-blue" },
        ],
      },
      {
        name: "Purple",
        modes: [
          { cname: "Dark", link: "bootstrap4-dark-purple" },
          { cname: "Light", link: "bootstrap4-light-purple" },
        ],
      },
    ],
  },
]);
// function toggleTheme() {
//   const index = themeList.findIndex((t) => t.id === currentTheme.value);
//   const nextIndex = index === themeList.length - 1 ? 0 : index + 1;
//   const nextTheme = themeList[nextIndex];
//   PrimeVue.changeTheme(currentTheme.value, nextTheme.id, "theme-link", () => {
//     console.log("Theme changed");
//   });
//   currentTheme.value = nextTheme.id;
// }

watch(
  () => selectedTheme.value,
  (value, oldValue) => {
    PrimeVue.changeTheme(oldValue.link, value.link, "theme-link", () => {
      console.log("Theme changed", oldValue.link, value.link);
    });
  }
);
</script>
