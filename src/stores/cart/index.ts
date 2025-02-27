import { defineStore } from 'pinia'
// import { Notify } from 'quasar';

interface Product {
  name: string
  price: number
}
interface CartItem {
  product: Product
  quantity: number
}

// Definindo a tipagem para o estado
interface CartState {
  cart: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    cart: [],
  }),
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
      console.log('this.cart', this.cart)
    },
    removeProductFromCart(item: CartItem) {
      this.cart = this.cart.filter((product) => product.product.name !== item.product.name)
    },
    updateItemQuantity(item: CartItem, quantity: number) {
      const cartItem = this.cart.find((product) => product.product.name === item.product.name)
      if (cartItem) {
        item.quantity = quantity
        if (item.quantity <= 0) {
          this.removeProductFromCart(item)
        }
      }
    },
    clearCart() {
      this.cart = []
    },
    getTotal() {
      return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0)
    },
  },
})
