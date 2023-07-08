import { defineStore } from "pinia";


// Déclaration des modèles
type User = {
    id: number,
    name: string,
    email: string
}

type Credentials = {
    email: string,
    password: string
}

export const useAuthStore = defineStore('auth', () => {
    // Déclaration des constantes
    const user = ref<User | null>(null)
    const isLoggedIn = computed(() => !!user.value)

    // Récupération de l'utilisateur puis on le set dans l'utilsateur
    async function fetchUser() {
        const { data , error} = await useApiFetch("/user/check")
        console.log(error);
        
        user.value = data.value as User
    }

    // Fonction permettant de se connecter et de stocker l'utilsiateur
    async function login(credentials: Credentials) {
        // Récupération du cookie csrf quand la fonctionnalité en back sera présente
        // await useApiFetch("/csrf-token");
      
       const login = await useApiFetch("/user/signin", {
          method: "POST",
          body: credentials,
        })
      
        await fetchUser()

        return login
    }

    async function logout () {
        await useApiFetch('/user/logout')
        user.value = null
        navigateTo('/login')
    }

    // Retour des fonctions et données du store
    return {user, login, isLoggedIn, fetchUser, logout}
})