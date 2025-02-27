import { defineStore } from 'pinia'
// import { Notify } from 'quasar';
import products from '../../constants/products.json'

export const useProductsStore = defineStore('products', {
  state: () => ({
    Products: products,
  }),
  getters: {
    getProducts: (state) => state.Products,
    getHeroProduct: (state) => state.Products.find(({ hero }) => typeof hero !== 'undefined'),
  },
  actions: {},
})
