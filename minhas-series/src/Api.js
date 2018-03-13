import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'

})

export const loadGenres = () => api.get('genres')
export const newSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)


const apis = {
    loadGenres: loadGenres,
    newSeries: newSeries,
    loadSeriesByGenre: loadSeriesByGenre
}

export default apis