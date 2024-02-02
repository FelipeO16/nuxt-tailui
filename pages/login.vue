<template>
  <div class="h-screen flex items-center bg-[#1c1c1c]">
    <div
      class="left-side lg:flex justify-center items-center hidden lg:w-1/2 h-full"
    ></div>
    <div
      class="w-full lg:w-1/2 h-full flex justify-center items-center relative"
    >
      <div class="flex justify-center items-center login-form">
        <form>
          <Card class="p-8">
            <template #title>Login</template>

            <template #subtitle>
              <span>Fake credentials, only test</span>
            </template>

            <template #content>
              <div class="mb-3">
                <InputText
                  class="w-full"
                  v-model="username"
                  placeholder="Username"
                />
              </div>
              <div class="mb-3">
                <Password
                  placeholder="Password"
                  class="w-full"
                  v-model="password"
                  toggleMask
                />
              </div>
            </template>
            <template #footer>
              <div class="flex justify-center">
                <NuxtLink to="/docs" rel="noopener">
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
      <Teste class="absolute top-2 left-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");
</script>

<style scoped>
.left-side {
  background: #92b296 url("/assets/images/bg.png") no-repeat center center;
  background-size: 100%;
}
</style>
