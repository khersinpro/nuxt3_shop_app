type Article = {
    id: number,
    name: string,
    description: string,
    price: number
}

type CartArticle = {
    id: number,
    name: string,
    price: number,
    quantity: number
}

type Cart = CartArticle[] | []


