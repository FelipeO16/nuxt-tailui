<template>
  <div>
    <Menubar :model="items" class="w-full flex">
      <template #start>
        <div class="w-1/3">
          <Logo type="text" class="w-24" />
        </div>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
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
        </a>
      </template>
      <template #end>
        <ThemeConfig type="icon" class="w-10 h-10"></ThemeConfig>
      </template>
    </Menubar>
    <slot></slot>
  </div>
  <Teste />
</template>

<script setup lang="ts">
const items = ref([
  {
    label: "Home",
    icon: "material-symbols:other-houses-outline",
  },
  {
    label: "Features",
    icon: "material-symbols:featured-play-list-rounded",
  },
  {
    label: "Projects",
    icon: "material-symbols:list-alt-rounded",
    items: [
      {
        label: "Components",
        icon: "icon-park-twotone:components",
      },
      {
        label: "Blocks",
        icon: "material-symbols:code-blocks-rounded",
      },
      {
        label: "UI Kit",
        icon: "formkit:group",
      },
      {
        label: "Templates",
        icon: "jam:template",
        items: [
          {
            label: "Apollo",
            icon: "simple-icons:apollographql",
          },
          {
            label: "Ultima",
            icon: "arcticons:ultimate-software",
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "ri:contacts-book-2-fill",
  },
]);
</script>
