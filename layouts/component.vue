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
const router = useRouter();
const items = ref([
  {
    label: "Menu",
    items: [
      {
        label: "Home",
        icon: "material-symbols:other-houses-outline",
        shortcut: "/",
        command: () => {
          router.push("/");
        },
      },
      {
        label: "Features",
        icon: "material-symbols:featured-play-list-rounded",
        shortcut: "#feat",
        command: () => {
          router.push("/features");
        },
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
        command: () => {
          router.push("/components");
        },
      },
      {
        label: "Templates",
        icon: "material-symbols:list-alt-rounded",
        shortcut: "/templates",
        command: () => {
          router.push("/templates");
        },
      },
    ],
  },

  {
    separator: true,
  },
  {
    items: [
      {
        label: "Profile Card",
        icon: "material-symbols:person-search",
        shortcut: "/templates/profile-card",
        command: () => {
          router.push("/templates/profile-card");
        },
      },
      {
        label: "hud",
        icon: "material-symbols:person-rounded",
        shortcut: "/templates/hud",
        command: () => {
          router.push("/templates/hud");
        },
      },
    ],
  },
]);
</script>

<style scoped></style>
