import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: (): CartState => {
    const storedCart = localStorage.getItem('cart')
    return {
      cart: storedCart ? JSON.parse(storedCart) : [],
    }
  },
  getters: {
    getCart: (state) => state.cart,
  },
  actions: {
    addProductToCart(item: Product) {
      const existingItem = this.cart.find((product) => product.product.name === item.name)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.cart.push({ product: item, quantity: 1 })
      }
      this.saveCartToLocalStorage()
    },
    removeProductFromCart(item: Product, quantity: number) {
      const cartItem = this.cart.find((product) => product.product.name === item.name)

      if (cartItem) {
        cartItem.quantity -= quantity

        if (cartItem.quantity <= 0) {
          this.cart = this.cart.filter((product) => product.product.name !== item.name)
        }
      }

      this.saveCartToLocalStorage()
    },
    updateItemQuantity(item: Product, quantity: number) {
      const cartItem = this.cart.find((product) => product.product.name === item.name)
      if (cartItem) {
        cartItem.quantity = quantity
        if (cartItem.quantity <= 0) {
          this.removeProductFromCart(item, 1)
        }
      }
      this.saveCartToLocalStorage()
    },
    clearCart() {
      this.cart = []
      this.saveCartToLocalStorage()
    },
    getTotal() {
      return this.cart.reduce(
        (total, item) => total + Number(item.product.price) * item.quantity,
        0,
      )
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
})
