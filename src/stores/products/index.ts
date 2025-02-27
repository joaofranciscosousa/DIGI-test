import { defineStore } from 'pinia'
// import { Notify } from 'quasar';
import products from '../../constants/products.json'

export const useProductsStore = defineStore('products', {
  state: () => ({
    Products: products,
  }),
  getters: {
    getProducts: (state) => state.Products,
  },
  actions: {},
})
