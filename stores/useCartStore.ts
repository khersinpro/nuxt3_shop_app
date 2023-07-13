import { defineStore } from "pinia";


export const useCartStore = defineStore('cart', () => {
    // Déclaration des constantes
    const cart = ref([])

    function getArticle (articleId, articleName, articlePrice) {

        const findedArticle = cart.value.find(article => article.id === articleId)

        if (findedArticle) 
        {
            cart.value.forEach(article => {
                if (article.id === articleId) 
                {
                    article.quantity++       
                }  
            })
        } 
        else 
        {
            cart.value.push({id: articleId, name: articleName, price: articlePrice, quantity: 1})
        }
    }

    // Retour des fonctions et données du store
    return {getArticle, cart}
})