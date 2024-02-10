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
              <div class="flex justify-center gap-2">
                <!-- <NuxtLink to="/" rel="noopener"> -->
                <Button @click="signInWithOAuth">
                  <div class="font-semibold">
                    <Icon name="material-symbols:person-check-rounded" />
                    Login
                  </div>
                </Button>
                <Button @click="signOut" outlined v-if="user">
                  <div class="font-semibold">
                    <Icon name="material-symbols:person-check-rounded" />
                    Logout
                  </div>
                </Button>
                <!-- </NuxtLink> -->
              </div>
            </template>
          </Card>
        </form>
      </div>
      <div class="absolute top-2 left-2 flex gap-4">
        <ThemeConfig class="cursor-pointer" :type="'icon'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");

const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(() => {
  // Can be uncommented in next nuxt version when https://github.com/nuxt/nuxt/issues/21841 is fixed
  if (user.value) {
    console.log("navigate to / !");
    console.log(user.value);
    // return navigateTo('/')
  }
});

const signInWithOAuth = async () => {
  const { error, data } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/",
    },
  });
  alert(JSON.stringify(data));
  if (error) {
    console.log(error);
  }
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
};

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
