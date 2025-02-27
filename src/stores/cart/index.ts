import { defineStore } from 'pinia'
// import { Notify } from 'quasar';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    getCart: (state) => state.cart,
  },
  actions: {},
})
