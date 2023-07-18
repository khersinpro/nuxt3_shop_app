import { useCartStore } from "../stores/useCartStore"
import nuxtStorage from 'nuxt-storage'
export default defineNuxtPlugin(async (nuxtApp) => {
    const cart = useCartStore();
    if (!cart.value) {
        cart.getCartFromLocaleStorage();
    }
})
