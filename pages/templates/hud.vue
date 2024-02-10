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

    <div class="player w-full h-full flex" v-if="index == 0">
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
      <div class="w-1/4 flex flex-col h-full justify-between pl-4">
        <div class="flex gap-4 items-end justify-end p-8">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-[var(--secondary-color)]"
              >Ping
              <Icon
                name="material-symbols:perm-data-setting-outline"
                color="var(--primary-color)"
            /></span>
            <span class="text-lg text-[var(--primary-color)]">
              15 <span class="text-xs text-gray-400">ms</span></span
            >
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs text-[var(--secondary-color)]"
              >Frames
              <Icon
                name="material-symbols:screenshot-monitor-outline"
                color="var(--primary-color)"
            /></span>
            <span class="text-lg text-[var(--primary-color)]"
              >{{ fps }} <span class="text-xs text-gray-400">fps</span></span
            >
          </div>
        </div>
        <div class="flex flex-col gap-2 p-8">
          <div class="flex gap-2 justify-end w-full">
            <Icon
              name="material-symbols:heart-plus"
              color="var(--primary-color)"
            />
            <ProgressBar
              :value="health"
              style="height: 14px; width: 50%"
              severity="info"
              :pt="{
                value: {
                  style: {
                    background: 'var(--primary-color)',
                  },
                },
              }"
            >
              <div></div>
            </ProgressBar>
          </div>
          <div class="flex gap-2 justify-end w-full">
            <Icon name="mdi:shield-half-full" color="var(--text-color)" />
            <ProgressBar
              :value="armor"
              style="height: 14px; width: 50%"
              :pt="{
                value: {
                  style: {
                    background: 'var(--text-color)',
                  },
                },
              }"
            >
              <div></div>
            </ProgressBar>
          </div>
        </div>
      </div>
    </div>
    <div class="car w-full h-full flex" v-if="index == 1">
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
      <div class="w-1/4 flex flex-col h-full justify-between pl-4">
        <div class="flex gap-4 items-end justify-end p-8">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-[var(--secondary-color)]"
              >Ping
              <Icon
                name="material-symbols:perm-data-setting-outline"
                color="var(--primary-color)"
            /></span>
            <span class="text-lg text-[var(--primary-color)]">
              15 <span class="text-xs text-gray-400">ms</span></span
            >
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs text-[var(--secondary-color)]"
              >Frames
              <Icon
                name="material-symbols:screenshot-monitor-outline"
                color="var(--primary-color)"
            /></span>
            <span class="text-lg text-[var(--primary-color)]"
              >{{ fps }} <span class="text-xs text-gray-400">fps</span></span
            >
          </div>
        </div>
        <div class="flex justify-end items-end p-8">
          <div class="relative">
            <Knob
              v-model="armor"
              readonly
              :max="100"
              size="50"
              valueColor="var(--orange-500)"
              valueTemplate=""
            >
            </Knob>
            <Icon
              name="fluent:gas-pump-24-filled"
              color="var(--orange-500)"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
          </div>
          <Knob v-model="speed" readonly :max="400" valueTemplate="{value}" />

          <div class="relative">
            <Knob
              v-model="armor"
              readonly
              :max="100"
              size="50"
              valueColor="var(--red-500)"
              valueTemplate=""
            >
            </Knob>
            <Icon
              name="material-symbols:directions-car-rounded"
              color="var(--red-500)"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
          </div>
          <div class="flex w-20 h-20 flex-col -rotate-90 justify-end gap-1">
            <div class="flex gap-[2px] items-center">
              <Icon
                name="material-symbols:heart-plus"
                color="var(--primary-color)"
                class="rotate-90"
              />
              <ProgressBar
                class=""
                :value="health"
                style="height: 14px; width: 100%"
                severity="info"
                :pt="{
                  value: {
                    style: {
                      background: 'var(--primary-color)',
                    },
                  },
                }"
              >
                <div></div>
              </ProgressBar>
            </div>
            <div class="flex gap-[2px] items-center">
              <Icon
                name="mdi:shield-half-full"
                color="var(--text-color)"
                class="rotate-90"
              />
              <ProgressBar
                :value="armor"
                style="height: 14px; width: 100%"
                :pt="{
                  value: {
                    style: {
                      background: 'var(--text-color)',
                    },
                  },
                }"
              >
                <div></div>
              </ProgressBar>
            </div>
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

let health = ref(100);
let armor = ref(100);
let index = ref(0);
let fps = ref(152);

let speed = ref(100);

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
    if (health.value > 0) {
      health.value--;
    }

    if (armor.value > 0) {
      armor.value--;
    }

    if (health.value <= 0) {
      health.value = 100;
    }

    if (armor.value <= 0) {
      armor.value = 100;
    }
    fps.value = Math.floor(Math.random() * 100);
  }, 1000);

  setInterval(() => {
    speed.value++;
    if (speed.value > 400) {
      speed.value = 0;
    }
  }, 20);
}

timer();

const items = ref([
  { label: "Player", icon: "material-symbols:person-rounded" },
  { label: "Carro", icon: "material-symbols:directions-car-rounded" },
]);
</script>

<style>
.player,
.car {
  background-image: url("https://i.ytimg.com/vi/ipeBl2T9sDM/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
