interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  cart: CartItem[]
}
