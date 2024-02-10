<template>
  <div class="hud flex flex-col gap-4 h-full">
    <TabMenu
      :model="items"
      @tabChange="index = $event.index"
      class="w-full h-16"
      v-model:index="index"
    >
      <template #itemicon="{ item }">
        <Icon :name="item.icon ?? ''" class="mr-2" />
      </template>
    </TabMenu>

    <div class="player w-full h-full flex flex-wrap" v-if="index == 0">
      <Card v-for="profile in profiles" :key="profile.id">
        <template #header>
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-2">
              <span>{{ profile.first_name }}</span>
            </div>
          </div>
        </template>
        <template #content>
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-row items-center gap-2">
              <span>{{ profile.first_name }} {{ profile.last_name }}</span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProfileCard from "@/interfaces/profile-card";
let { profiles }: { profiles: ProfileCard[] } = await $fetch("/api/libraries");
console.log(profiles as ProfileCard[]);
const user = useSupabaseUser();

definePageMeta({
  title: "Components",
  description: "Components page",
  layout: "component",
});

const items = ref([
  { label: "Player", icon: "material-symbols:person-rounded" },
] as { label: string; icon: string }[]);
let index = ref(0);
</script>
