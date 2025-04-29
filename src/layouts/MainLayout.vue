<template>
  <q-layout>
    <q-header elevated class="bg-digi q-pa-md header">
      <q-toolbar>
        <q-toolbar-title @click="goToHome" class="cursor-pointer"
          >Loja Digital DIGI</q-toolbar-title
        >
        <div>
          <q-btn flat round icon="shopping_cart" size="16px">
            <q-menu fit>
              <q-list v-if="getCart.length === 0" class="list-item">
                <q-item>
                  <q-item-section class="text-menu text-gray-8 fnt-size-15 fnt-weight-500">
                    Carrinho de compras vazio
                  </q-item-section>
                </q-item>
              </q-list>
              <q-list v-else class="list-item">
                <q-item v-for="(item, index) in getCart" :key="index" class="list-item-section">
                  <q-item-section class="row q-col-gutter-sm">
                    <div class="flex justify-between items-center">
                      <div>
                        <div class="fnt-size-14 fnt-weight-600 text-gray-10">
                          {{ item.product.name }}
                        </div>
                        <div class="fnt-size-12 fnt-weight-400 text-gray-8">
                          {{ item.product.detail.slice(0, 20) }} ...
                        </div>
                      </div>
                      <div>
                        <q-btn
                          flat
                          round
                          icon="delete"
                          size="10px"
                          class="q-ml-sm"
                          @click="
                            updateItemQuantity(
                              {
                                name: item.product.name,
                                detail: item.product.detail,
                                price: item.product.price,
                              },
                              0,
                            )
                          "
                        />
                      </div>
                    </div>

                    <div class="flex justify-between items-center">
                      <div>
                        <q-btn
                          flat
                          round
                          icon="remove"
                          size="7px"
                          class="q-mr-sm"
                          @click="
                            removeProductFromCart(
                              {
                                name: item.product.name,
                                detail: item.product.detail,
                                price: item.product.price,
                              },
                              1,
                            )
                          "
                        />
                        <span>Qtd {{ item.quantity }}</span>
                        <q-btn
                          flat
                          round
                          icon="add"
                          size="7px"
                          class="q-ml-sm"
                          @click="
                            addProductToCart({
                              name: item.product.name,
                              detail: item.product.detail,
                              price: item.product.price,
                            })
                          "
                        />
                      </div>

                      <div>R$ {{ (item.quantity * Number(item.product.price)).toFixed(2) }}</div>
                    </div>
                  </q-item-section>
                </q-item>
                <q-item class="q-mt-sm">
                  <q-item-section>
                    <q-btn
                      outline
                      label="Limpar carrinho"
                      class="full-width button-clean-cart"
                      @click="clearCart"
                    />
                    <div class="text-menu text-gray-9 fnt-size-18 fnt-weight-500 q-mt-md">
                      Total: {{ getTotal().toFixed(2) }}
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { useCartStore } from 'src/stores/cart'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  computed: {
    ...mapState(useCartStore, ['getCart']),
  },
  methods: {
    ...mapActions(useCartStore, [
      'getTotal',
      'clearCart',
      'removeProductFromCart',
      'addProductToCart',
      'updateItemQuantity',
    ]),
    goToHome() {
      this.$router.push({ name: 'index' })
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 1;
}
.text-menu {
  text-align: center;
}
.list-item {
  min-width: 200px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.list-item-section {
  border-bottom: 1px solid #e0e0e0;
  padding: 8px 0;
}
.button-clean-cart {
  color: $red-digi;
}
</style>
