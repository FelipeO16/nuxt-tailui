<template>
  <div class="card flex justify-center gap-4 items-center h-full flex-col">
    <div class="container items-center flex justify-center flex-col">
      <h1
        class="text-5xl lg:text-7xl font-bold text-center flex flex-col gap-8"
      >
        Seu servidor como <br />
        <span>Nenhum Outro</span>
      </h1>
    </div>
    <div class="container lg:w-1/2">
      <div class="flex flex-col lg:flex-row gap-4 justify-center">
        <Card class="lg:w-1/2">
          <template #title>
            <span>#</span><b class="text-gray-400"> componentes </b>
          </template>
          <template #subtitle
            ><p>
              Interfaces para servidores de Fivem, com um design único!
            </p></template
          >
          <template #content>
            <p>
              Componentes totalmente personalizáveis, com tudo que você precisa
              em um só lugar.
            </p>
          </template>

          <template #footer>
            <Button class="flex gap-2"
              >Componentes
              <Icon name="mdi:arrow-right" class="w-4 h-4" />
            </Button>
          </template>
        </Card>
        <Card class="lg:w-1/2">
          <template #title>
            <span>#</span><b class="text-gray-400"> templates </b>
          </template>
          <template #subtitle
            ><p>
              Templates prontos para uso, basta adicionar ao seu script e
              sincronizar.
            </p></template
          >
          <template #content>
            <p>
              Templates prontos para uso, basta adicionar ao seu script e
              sincronizar.
            </p>
          </template>

          <template #footer>
            <Button class="flex gap-2"
              >Templates
              <Icon name="mdi:arrow-right" class="w-4 h-4" />
            </Button>
          </template>
        </Card>
      </div>
    </div>
    <div class="container lg:w-1/2">
      <div class="flex">
        <Card class="">
          <template #title>
            <span>#</span><b class="text-gray-400"> documentação </b>
          </template>
          <template #subtitle
            ><p>
              Documentação completa, com exemplos e guias para facilitar o
              desenvolvimento.
            </p></template
          >
          <template #content>
            <p>
              Explore nossa documentação e aprenda a usar nossos componentes e
              templates, com exemplos e guias para facilitar o desenvolvimento e
              integração.
            </p>
          </template>

          <template #footer>
            <Button class="flex gap-2"
              >Documentação
              <Icon name="mdi:arrow-right" class="w-4 h-4" />
            </Button>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  color: var(--text-color);
}

span {
  color: var(--primary-color);
}
</style>
