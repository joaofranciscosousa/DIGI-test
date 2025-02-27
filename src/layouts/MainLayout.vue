<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Loja Digital DIGI </q-toolbar-title>
        {{ getCart }}
        <div>
          <q-btn flat rounded icon="shopping_cart" style="width: 100px" size="16px">
            <q-menu fit>
              <q-list style="min-width: 100px">
                <q-item v-if="getCart.length === 0">
                  <q-item-section> Nenhum produto adicionado </q-item-section>
                </q-item>
                <q-item v-for="(item, index) in getCart" :key="index">
                  <q-item-section>
                    {{ item.product.name }} - {{ item.quantity }} x {{ item.product.price }}
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
  data() {
    return { menuVisible: false }
  },
  computed: {
    ...mapState(useCartStore, ['getCart']),
  },
  methods: {
    ...mapActions(useCartStore, ['getTotal']),
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    },
  },
})
</script>
