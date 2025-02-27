<template>
  <q-page class="q-pa-lg" style="background-color: #f0f0f0">
    <header-back-handler title="Destaque do mês" :customTitleClass="'fnt-size-28 fnt-weight-700'" />
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <product-card
          customClass="full-width"
          :name="getHeroProduct?.name ?? ''"
          :detail="getHeroProduct?.detail ?? ''"
          :info="getHeroProduct?.info ?? ''"
          :hero="getHeroProduct?.hero ?? ''"
          :price="Number(getHeroProduct?.price)"
          :offer="getHeroProduct?.offer ?? ''"
          :image="getHeroProduct?.image ?? ''"
        />
      </div>
    </div>

    <header-back-handler title="Produtos" />
    <div class="row q-col-gutter-md">
      <div
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        v-for="(product, indexProduct) in getProducts"
        :key="indexProduct"
      >
        <product-card
          customClass="full-width"
          :name="product.name"
          :detail="product.detail"
          :info="product?.info ?? ''"
          :hero="product?.hero ?? ''"
          :price="Number(product.price)"
          :offer="product?.offer ?? ''"
          :image="product.image"
        />
      </div>
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
    ...mapState(useProductsStore, ['getProducts', 'getHeroProduct']),
  },
})
</script>
