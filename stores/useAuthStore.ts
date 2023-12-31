import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
    // Déclaration des constantes
    const user = ref<User | null>(null)
    const isLoggedIn = computed(() => !!user.value)
    const isAdmin = computed(() => !!(user.value?.role_name === "ROLE_ADMIN"))

    // Empeche les modifications depuis le navigateur client
    watch([isLoggedIn, isAdmin], () => {
        fetchUser();
    })

    // Récupération de l'utilisateur puis on le set dans l'utilsateur
    async function fetchUser() {
        const { data , error} = await useApiFetch("/user/check")
        if (user.value !== data.value)
        {
            user.value = data.value as User
        }
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

    // Fonction pour gérer l'inscription
    async function register(registerinfo: RegisterInfo) {
        const register = await useApiFetch("/user/signup", {
            method: "POST",
            body: registerinfo
        })

        return register;
    }

    // Déconnexion
    async function logout () {
        await useApiFetch('/user/logout')
        user.value = null
        navigateTo('/login')
    }

    // Récupération du nom complet de l'utilisateur connecté
    function fullname() {
        return user.value?.firstName + " " + user.value?.lastName
    }

    // Retour des fonctions et données du store
    return {user, login, isLoggedIn, fetchUser, logout, register, fullname, isAdmin}
})