<template>
  <q-card :class="customClass" class="product-card">
    <q-img :src="image" fit="cover" />

    <q-card-section>
      <div class="text-h6 text-gray-10">{{ name }}</div>
      <div class="text-subtitle2 text-gray-8">{{ hero }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none fnt-size-14 text-gray-10">
      <span class="fnt-size-16 fnt-weight-600">Descrição:</span> {{ detail }}
      <div class="fnt-size-14 fnt-weight-600">{{ info }}</div>
    </q-card-section>

    <q-card-section class="card-footer q-pt-md flex justify-between items-center text-gray-10">
      <div>
        <div class="fnt-size-12 text-gray-9">{{ offer }}</div>
        <div class="fnt-size-22 fnt-weight-700">R$ {{ Number(price).toFixed(2) }}</div>
      </div>

      <div>
        <q-btn
          push
          icon="add"
          color="primary"
          label="Adicionar ao carrinho"
          class="full-width q-pa-sm q-px-md"
          dense
          @click="addProductToCart({ name, price })"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useCartStore } from 'src/stores/cart'

export default defineComponent({
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
    info: {
      type: String,
      default: '',
    },
    hero: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    offer: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapActions(useCartStore, ['addProductToCart']),
  },
})
</script>

<style lang="scss" scoped>
.text-gray-10 {
  color: $grey-10;
}
.text-gray-9 {
  color: $grey-9;
}
.text-gray-8 {
  color: $grey-8;
}
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.product-card img {
  width: 100%;
  height: 200px;
}
.q-card-section {
  flex-grow: 1;
}
.card-footer {
  margin-top: auto;
}
</style>
