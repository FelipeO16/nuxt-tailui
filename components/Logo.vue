<template>
  <svg
    v-if="props.type === 'text'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 630 430"
    class="svg-logo"
    width="630"
    height="430"
    style="height: auto"
  >
    <g
      data-element="wrapper"
      transform="translate(-425.2500000000029 -278.500000000002) scale(2.3500000000000094)"
    >
      <g>
        <text
          transform="translate(226.53125 237)"
          class="text-color"
          font-family="Pacifico"
          font-size="64"
          data-element="company-name"
          dx="0 1.5 1.5 1.5 1.5 1.5 1.5"
        >
          tail-ui
        </text>
      </g>
    </g>
  </svg>
  <img
    v-else-if="props.type === 'img'"
    src="/assets/image/logo.png"
    alt="Tail UI"
    class="img-logo"
    style="height: auto"
  />
  <Icon
    v-else
    name="mdi:theme-light-dark"
    color="var(--primary-color)"
    class="icon-logo w-full h-full"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  type: "text" | "img" | "icon";
}>();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
.text-color {
  fill: var(--primary-color);
}
</style>
