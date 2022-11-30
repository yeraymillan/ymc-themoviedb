import { API_URL } from './settings'

export function getMovies({page}) {
  return fetch(`${API_URL}&page=${page}`).then((result) => result.json());
}