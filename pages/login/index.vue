<template>
  <div class="h-screen flex items-center bg-[#1c1c1c]">
    <div
      class="left-side lg:flex justify-center items-center hidden lg:w-1/2 h-full"
    ></div>
    <div
      class="w-full lg:w-1/2 h-full flex justify-center items-center relative"
    >
      <div class="flex justify-center items-center login-form w-1/2">
        <form>
          <Card class="p-8">
            <template #title>
              <div class="flex flex-col gap-4 items-center">
                <Logo
                  type="text"
                  class="self-center w-2/5 text-center select-none"
                />
                <h1>Login</h1>
              </div>
            </template>

            <template #subtitle>
              <div class="w-full flex justify-center items-center">
                <span>Fake credentials, only test</span>
              </div>
            </template>

            <template #content>
              <div class="inputs flex flex-col gap-4 items-center">
                <div>
                  <InputText v-model="username" placeholder="Username" />
                </div>
                <div class="mb-4">
                  <Password placeholder="Password" v-model="password" escape />
                </div>
              </div>
            </template>
            <template #footer>
              <div class="flex justify-center">
                <NuxtLink to="/" rel="noopener">
                  <Button>
                    <div class="font-semibold">
                      <Icon name="material-symbols:person-check-rounded" />
                      Login
                    </div>
                  </Button>
                </NuxtLink>
              </div>
            </template>
          </Card>
        </form>
      </div>
      <div class="absolute top-2 left-2 flex gap-4">
        <ThemeConfig class="cursor-pointer" />
      </div>
    </div>
    <Teste />
    <pre>{{ libraries }}</pre>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");

const { libraries } = await $fetch("/api/libraries");

definePageMeta({
  layout: false,
});

let showSidebar = ref(false);
</script>

<style scoped>
.left-side {
  background: #92b296 url("/assets/images/bg.png") no-repeat center center;
  background-size: 100%;
}
</style>
