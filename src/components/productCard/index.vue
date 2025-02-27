<template>
  <q-card :class="customClass" class="product-card">
    <q-card-section @click="goToProduct(name)" class="cursor-pointer">
      <q-img
        v-if="isValidImage"
        :src="image"
        alt="logo"
        fit="contain"
        @error="() => errorImage()"
        class="product-image"
      />
      <q-img v-else :src="noImageSrc" alt="logo" fit="contain" class="product-image" />
    </q-card-section>

    <q-card-section @click="goToProduct(name)" class="cursor-pointer">
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
          label="Adicionar ao carrinho"
          class="full-width q-pa-sm q-px-md button-add-to-cart"
          dense
          @click="addProductToCart({ name, price: String(price), detail })"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'pinia'
import { useCartStore } from 'src/stores/cart'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import noImageCard from 'src/assets/no_image.jpg'

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
  data() {
    const isValidImage: boolean = true

    return {
      isValidImage,
      noImageSrc: noImageCard,
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addProductToCart']),
    errorImage() {
      this.isValidImage = false
    },
    goToProduct(product_name: string) {
      this.$router.push({
        name: 'product',
        params: {
          product_name,
        },
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.product-image {
  width: 100%;
  height: 300px;
}
.q-card-section {
  flex-grow: 1;
}
.card-footer {
  margin-top: auto;
}
.button-add-to-cart {
  background-color: $red-digi;
  color: #fff;
}
</style>
