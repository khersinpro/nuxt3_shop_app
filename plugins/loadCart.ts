import { useCartStore } from "../stores/useCartStore"

export default defineNuxtPlugin(async (nuxtApp) => {
    const cart = useCartStore();
    cart.getCartFromLocaleStorage()
})
