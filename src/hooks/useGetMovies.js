import { API_URL } from '../services/settings'

export function useGetMovies() {
    return ({ id }) => {
        const apiUrl = `${API_URL}&page=${id}`
        return fetch(apiUrl).then((result) => result.json());
    }
}