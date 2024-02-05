<template>
  <div class="bg h-screen w-screen flex flex-col bg-opacity-5 relative">
    <Menubar :model="items" class="w-full flex fixed z-10">
      <template #start>
        <div class="w-1/3">
          <Logo type="text" class="w-24" />
        </div>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink
          class="flex align-items-center"
          v-bind="props.action"
          :to="item.target"
        >
          <Icon :name="item.icon ?? ''" color="var(--primary-color)" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span
            v-if="item.shortcut"
            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <Icon v-if="hasSubmenu" name="uil:angle-down" class="ml-2" />
        </NuxtLink>
      </template>
      <template #end>
        <ThemeConfig type="icon" class="w-10 h-10"></ThemeConfig>
      </template>
    </Menubar>
    <div class="h-full">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: "Home",
    icon: "material-symbols:other-houses-outline",
    target: "/",
  },
  {
    label: "Features",
    icon: "material-symbols:featured-play-list-rounded",
    target: "#feat",
  },
  {
    label: "Projects",
    icon: "material-symbols:list-alt-rounded",
    items: [
      {
        label: "Components",
        icon: "icon-park-twotone:components",
        target: "/components",
      },

      {
        label: "Templates",
        icon: "jam:template",
      },
    ],
  },
  {
    label: "Contact",
    icon: "ri:contacts-book-2-fill",
  },
]);
</script>

<style scoped>
.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-color: var(--surface-color);
  background-image: linear-gradient(var(--primary-color) 1px, transparent 1px);
  background-size: 55px 55px;
  opacity: 0.2;
  background-size: 30px 30px;
  background-position: -5px -5px;
}
</style>
