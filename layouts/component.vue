<template>
  <div class="bg h-screen w-screen flex bg-opacity-5 relative">
    <Menu :model="items">
      <template #itemicon="{ item }">
        <Icon
          class="mr-2"
          :name="String(item.icon)"
          color="var(--primary-color)"
        />
      </template>
    </Menu>

    <div class="h-full w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: "Menu",
    items: [
      {
        label: "Home",
        icon: "material-symbols:other-houses-outline",
        shortcut: "/",
      },
      {
        label: "Features",
        icon: "material-symbols:featured-play-list-rounded",
        shortcut: "#feat",
      },
    ],
  },

  {
    label: "Projects",
    items: [
      {
        label: "Components",
        icon: "material-symbols:list-alt-rounded",
        shortcut: "/components",
      },
      {
        label: "Templates",
        icon: "material-symbols:list-alt-rounded",
      },
    ],
  },

  {
    separator: true,
  },
]);
</script>

<style scoped></style>
