import { UseFetchOptions } from "nuxt/app"

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};

  const token = useCookie("XSRF-TOKEN");

    if (token.value) {
      headers['X-XSRF-TOKEN'] = token.value as string;
    }
  

    return useFetch("http://localhost:4200/api" + path, {
      watch: false,           // pour eviter que le form s'envoie a chaque changement
      credentials: "include", // pour stocker le cookie
      ...options,
      ...headers
    });
  
}
