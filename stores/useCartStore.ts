import { defineStore } from "pinia";
import nuxtStorage from 'nuxt-storage'

export const useCartStore = defineStore('cart', () => {
    // Déclaration des constantes
    const cart = ref<CartArticle[] | []>(nuxtStorage.localStorage.getData('cart') ? nuxtStorage.localStorage.getData('cart') : [])

    function storeCartToLocaleStorage () {
        nuxtStorage.localStorage.setData('cart', cart.value, 1, 'd');
    }

    function getCartFromLocaleStorage () {
        if (nuxtStorage.localStorage.getData('cart')) cart.value = nuxtStorage.localStorage.getData('cart')
    }
    
    function addArticle (articleId: number, articleName: string, articlePrice: number, articleQuantity: number = 1) {

        const findedArticle = cart.value.find(article => article.id === articleId)

        if (findedArticle) 
        {
            findedArticle.quantity = findedArticle.quantity + articleQuantity
        } 
        else 
        {
            const newArticle: CartArticle = {id: articleId, name: articleName, price: articlePrice, quantity: articleQuantity}
            cart.value = ([...cart.value, newArticle])
        }

        storeCartToLocaleStorage()
    }

    function removeArticleQuantity (articleId: number) {
        const findedArticle = cart.value.find(article => article.id === articleId)

        if (findedArticle)
        {
            if (findedArticle.quantity > 1)
            {
                findedArticle.quantity--
            }
            else
            {
                cart.value = cart.value.filter(article => article.id !== articleId)
            }
        }

        storeCartToLocaleStorage()
    }

    function addArticleQuantity (articleId: number) {
        const findedArticle = cart.value.find(article => article.id === articleId)

        if (findedArticle)
        {
            findedArticle.quantity++
        }

        storeCartToLocaleStorage()
    }

    function removeArticle (articleId: number) {
        cart.value = cart.value.filter(article => article.id !== articleId)
        storeCartToLocaleStorage()
    }

    function clearCart () {
        cart.value = []
        storeCartToLocaleStorage()
    }

    function getCartTotalPrice () {
        let totalPrice = 0
        cart.value.forEach(article => {
            totalPrice += article.price * article.quantity
        })
        return totalPrice.toFixed(2)
    }

    function getCartTotalQuantity () {
        let totalQuantity = 0
        cart.value.forEach(article => {
            totalQuantity += article.quantity
        })
        return totalQuantity
    }


    // Retour des fonctions et données du store
    return {addArticle, getCartTotalQuantity, addArticleQuantity, getCartTotalPrice, removeArticleQuantity, cart, getCartFromLocaleStorage}
})