<template>
  <q-page class="q-pa-lg" style="background-color: #f0f0f0">
    <header-back-handler title="Produtos" />
    <div v-for="(product, indexProduct) in getProducts" :key="indexProduct">
      <product-card :name="product.name" :detail="product.detail" :image="product.image" />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBackHandler from 'src/components/header/HeaderBackHandler.vue'
import ProductCard from 'src/components/productCard/index.vue'
import { mapState } from 'pinia'
import { useProductsStore } from 'src/stores/products'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderBackHandler,
    ProductCard,
  },
  data() {},
  computed: {
    ...mapState(useProductsStore, ['getProducts']),
  },
})
</script>
