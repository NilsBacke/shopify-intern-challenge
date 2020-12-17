import { Movie } from '../types'

const API_URL = 'http://www.omdbapi.com/?apikey=4501579e&type=movie&s='
const LIMIT = 5

export const searchMovies = async (searchText: string): Promise<Movie[]> => {
  try {
    const response = await fetch(API_URL + searchText, {
      method: 'GET',
    })
    const responseJson = await response.json()
    console.log(responseJson)

    return responseJson.Search.slice(0, LIMIT).map((json: any) => ({
      title: json.Title,
      year: json.Year,
    }))
  } catch (error) {
    console.log(error)
    return []
  }
}
