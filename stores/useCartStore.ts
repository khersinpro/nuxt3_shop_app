import { defineStore } from "pinia";
import nuxtStorage from 'nuxt-storage';

export const useCartStore = defineStore('cart', () => {
    // Déclaration des constantes
    const cart = ref<CartArticle[] | []>(nuxtStorage.localStorage.getData('cart') ? nuxtStorage.localStorage.getData('cart') : [])

    function storeCartToLocaleStorage () {
        nuxtStorage.localStorage.setData('cart', cart.value, 1, 'd');
    }

    function getCartFromLocaleStorage () {
        if (nuxtStorage.localStorage.getData('cart')) cart.value = nuxtStorage.localStorage.getData('cart')
    }
    
    function getArticle (articleId: number, articleName: string, articlePrice: number) {

        const findedArticle = cart.value.find(article => article.id === articleId)

        if (findedArticle) 
        {
            findedArticle.quantity++
        } 
        else 
        {
            const newArticle: CartArticle = {id: articleId, name: articleName, price: articlePrice, quantity: 1}
            cart.value = ([...cart.value, newArticle])
        }

        storeCartToLocaleStorage()
    }

    // Retour des fonctions et données du store
    return {getArticle, cart, getCartFromLocaleStorage}
})