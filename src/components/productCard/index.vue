<template>
  <q-card class="my-card">
    <img :src="image" />

    <q-card-section>
      <div class="text-h6">{{ name }}</div>
      <div class="text-subtitle2">by John Doe</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ detail }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
export interface HeaderBackHandlerProps {
  name: boolean
  image: string
  detail: object
}

export default {
  name: 'productCard',
  props: {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    detail: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
