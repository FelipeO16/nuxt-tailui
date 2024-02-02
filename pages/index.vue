<template>
  <div class="card flex justify-content-center gap-4">
    <div class="flex flex-col">
      <label for="search">Nome / Matrícula</label>
      <InputText v-model="username" placeholder="digite" id="search" />
    </div>
    <Button class="bg-primary-normal text-white border-none text-sm"
      >Buscar</Button
    >
    <Button
      class="border border-primary-normal bg-transparent text-primary-normal text-sm"
      >Limpar</Button
    >
  </div>
</template>
