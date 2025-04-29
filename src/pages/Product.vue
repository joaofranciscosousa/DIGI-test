<template>
  <q-page class="q-pa-lg" style="background-color: #f0f0f0">
    <header-back-handler
      :title="`Produto - ${product.name}`"
      :customTitleClass="'fnt-size-28 fnt-weight-700'"
      :backhandler="true"
      :backHandlerPath="''"
    />
    <div class="row q-col-gutter-md q-mb-lg justify-center">
      <div class="col-12">
        <q-card class="product-card">
          <q-card-section>
            <q-img
              v-if="isValidImage"
              :src="product.image"
              alt="logo"
              fit="contain"
              @error="() => errorImage()"
              class="product-image"
            />
            <q-img v-else :src="noImageSrc" alt="logo" fit="contain" class="product-image" />
          </q-card-section>

          <q-card-section>
            <div class="text-h6 text-gray-10">{{ product.name }}</div>
            <div class="text-subtitle2 text-gray-8">{{ product.hero }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none fnt-size-14 text-gray-10">
            <span class="fnt-size-16 fnt-weight-600">Descrição:</span> {{ product.detail }}
            <div class="fnt-size-14 fnt-weight-600">{{ product.info }}</div>
          </q-card-section>

          <q-card-section
            class="card-footer q-pt-md flex justify-between items-center text-gray-10"
          >
            <div>
              <div class="fnt-size-12 text-gray-9">{{ product.offer }}</div>
              <div class="fnt-size-22 fnt-weight-700">
                R$ {{ Number(product.price).toFixed(2) }}
              </div>
            </div>

            <div>
              <q-btn
                push
                icon="add"
                label="Adicionar ao carrinho"
                class="full-width q-pa-sm q-px-md button-add-to-cart"
                dense
                @click="
                  addProductToCart({
                    name: product.name,
                    price: String(product.price),
                    detail: product.detail,
                  })
                "
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBackHandler from 'src/components/header/HeaderBackHandler.vue'
import { mapActions, mapState } from 'pinia'
import { useProductsStore } from 'src/stores/products'
import { Notify } from 'quasar'
import { useCartStore } from 'src/stores/cart'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import noImageCard from 'src/assets/no_image.jpg'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderBackHandler,
  },
  data() {
    const product: Product = {
      name: '',
      detail: '',
      price: '',
      hero: '',
      info: '',
      offer: '',
      image: '',
    }
    const isValidImage: boolean = true

    return {
      product,
      isValidImage,
      noImageSrc: noImageCard,
    }
  },
  computed: {
    ...mapState(useProductsStore, ['getProducts', 'getHeroProduct']),
  },
  created() {
    const foundProduct = this.getProducts.find(
      (item) => item.name === this.$route.params.product_name,
    )
    if (foundProduct) {
      this.product = { ...foundProduct }
    } else {
      Notify.create('Produto não encontrado')
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addProductToCart']),
    errorImage() {
      this.isValidImage = false
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
  height: 350px;
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
