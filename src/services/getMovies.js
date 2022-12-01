import { API_URL } from './settings'

export const getMovies = ({id}) => {
  const apiUrl = `${API_URL}&page=${id}`
  return fetch(apiUrl).then((result) => result.json());
}