<template>
  <div class="flex flex-col h-full">
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

    <div
      class="player w-full h-full relative flex p-8 gap-4 card"
      v-if="index == 0"
    >
      <div v-for="(profile, index) in profiles" :key="profile.id">
        <Card
          class="p-4 absolute right-4 bottom-4"
          :pt="{
            root: { class: 'bg-[#1c1c1c] bg-opacity-90 border-round-lg' },
          }"
          v-if="index < 1"
        >
          <template #header>
            <div class="flex items-center justify-center w-full">
              <div class="flex flex-col items-center gap-2 justify-center">
                <Avatar
                  :image="profile.avatar_url"
                  size="xlarge"
                  shape="circle"
                />
                <span class="text-[var(--primary-color)]"
                  >{{ profile.first_name }} {{ profile.last_name }}</span
                >
              </div>
            </div>
          </template>
          <template #content>
            <div
              class="flex flex-col items-center justify-between text-zinc-300"
            >
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Idade</span>
                <Divider type="dashed" />
                <span>{{ profile.age }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Sexo</span>
                <Divider type="dashed" />
                <span>{{ profile.sex == "male" ? "M" : "F" }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Passaporte</span>
                <Divider type="dashed" />
                <span>{{ profile.registration }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold w-1/3">Telefone</span>
                <Divider type="dashed" />
                <span class="w-full whitespace-nowrap">{{
                  profile.phone_number
                }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Trabalho</span>
                <Divider type="dashed" />
                <span>{{ profile.role.split(" ")[1] }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Banco</span>
                <Divider type="dashed" />
                <span>${{ (Math.random() * 1000).toFixed(2) }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Carteira</span>
                <Divider type="dashed" />
                <span>${{ (Math.random() * 1000).toFixed(2) }}</span>
              </div>
              <div class="flex items-center justify-between w-full gap-2">
                <span class="font-semibold">Vip</span>
                <Divider type="dashed" />
                <span>Elite</span>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div class="api w-full h-full flex flex-col p-8 gap-10" v-if="index == 1">
      <div class="text-4xl font-bold">
        Sincronizando com <span class="uppercase">{{ script_name }}</span>
      </div>
      <div class="text-xl font-normal text-[var(--primary-color)]">
        Para atualizar {{ script_name }}, você precisa enviar um objeto com os
        seguintes dados:
      </div>
      <div class="p-8 bg-[#1c1c1c]">
        <ContentDoc path="/api/profile-card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ProfileCard from "@/interfaces/profile-card";
let { profiles }: { profiles: ProfileCard[] } = await $fetch("/api/libraries");
console.log(profiles as ProfileCard[]);
const user = useSupabaseUser();
let script_name = "identidade";

definePageMeta({
  title: "Components",
  description: "Components page",
  layout: "component",
});
let index = ref(0);

const items = ref([
  { label: "Player", icon: "material-symbols:person-rounded" },
  { label: "API", icon: "material-symbols:api" },
] as { label: string; icon: string }[]);
</script>

<style scoped>
.card {
  background-image: url("https://i.ytimg.com/vi/ipeBl2T9sDM/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
