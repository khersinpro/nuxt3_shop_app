import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
    // Déclaration des constantes
    const cart = ref<CartArticle[] | []>([])

    function getArticle (articleId: number, articleName: string, articlePrice: number) {

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
            const newArticle: CartArticle = {id: articleId, name: articleName, price: articlePrice, quantity: 1}
            cart.value = ([...cart.value, newArticle])
        }
    }

    // Retour des fonctions et données du store
    return {getArticle, cart}
})