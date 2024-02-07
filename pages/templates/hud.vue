<template>
  <div class="hud flex flex-col gap-4 h-full">
    <TabMenu
      :model="items"
      @tabChange="teste"
      class="w-full h-16"
      v-model:index="index"
    >
      <template #itemicon="{ item }">
        <Icon :name="item.icon" class="mr-2" />
      </template>
    </TabMenu>

    <div class="w-full h-full flex" v-if="index == 0">
      <div class="w-1/4 h-full flex flex-col text-lg p-8 gap-1 justify-between">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-1">
            <icon
              name="material-symbols:location-on-outline"
              color="var(--primary-color)"
            />
            <span class="text-sm text-(var(--secondary-color))"
              >Tuscarora Avenue - Random Square</span
            >
          </div>
          <div class="flex items-center gap-1">
            <icon
              name="material-symbols:nest-clock-farsight-analog-outline-rounded"
              color="var(--primary-color)"
            />
            <span class="text-sm text-(var(--secondary-color))"
              >{{ hours }} - {{ date }}</span
            >
          </div>
        </div>
        <Avatar
          image="https://www.igta5.com/images/960x540/gtav-map-satellite-huge.jpg"
          size="xlarge"
          shape="circle"
          class="h-40 w-40 border-4 border-[var(--primary-color)]"
        ></Avatar>
      </div>
      <div class="w-2/4 flex justify-center h-full items-start">
        <Logo type="text" class="w-2/12" />
      </div>
      <div class="w-1/4">
        <div class="flex flex-col gap-4 items-end p-8">
          <div class="flex flex-col gap-1 w-1/6">
            <span class="text-sm text-(var(--secondary-color))">Ping</span>
            <span class="text-lg text-(var(--primary-color))"
              ><Icon name="material-symbols:perm-data-setting-outline" />
              15ms</span
            >
          </div>
          <div class="flex flex-col gap-1 w-1/6">
            <span class="text-sm text-(var(--secondary-color))">Fps</span>
            <span class="text-lg text-(var(--primary-color))"
              ><Icon name="material-symbols:screenshot-monitor-outline" />
              152</span
            >
          </div>
          <!-- 
          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">Health</span>
            <span class="text-lg text-(var(--primary-color))">100%</span>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">Armor</span>
            <span class="text-lg text-(var(--primary-color))">100%</span>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">Stamina</span>
            <span class="text-lg text-(var(--primary-color))">100%</span>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">Oxygen</span>
            <span class="text-lg text-(var(--primary-color))">100%</span>
          </div> -->

          <!-- <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))"
              >Experience</span
            >
            <span class="text-lg text-(var(--primary-color))">100%</span>
          </div> -->

          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">Ping</span>
            <span class="text-lg text-(var(--primary-color))">100</span>
          </div>

          <div class="flex flex-col gap-1">
            <span class="text-sm text-(var(--secondary-color))">FPS</span>
            <span class="text-lg text-(var(--primary-color))">100</span>
          </div>
        </div>
      </div>
    </div>
    <Teste></Teste>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

definePageMeta({
  title: "Components",
  description: "Components page",
  layout: "component",
});

let index = ref(0);

function teste(event) {
  index.value = event.index;
}

//function to get time in hh:mm:ss format and update every second
function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

//function to get date in dd/mm/yyyy format
function getDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${day}/${month}/${year}`;
}

let hours = ref("");
let date = ref("");
function timer() {
  setInterval(() => {
    hours.value = getTime();
    date.value = getDate();
  }, 1000);
}

timer();

const items = ref([
  { label: "Player", icon: "material-symbols:person-rounded" },
  { label: "Carro", icon: "material-symbols:directions-car-rounded" },
]);
</script>
