import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/se331-2022/passengerdb',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getPassengers(perPage, page) {
    return apiClient.get('/passenger?_page=' + page + ' &_limit=' + perPage)
  },
  //Added new call
  getPassenger(id) {
    return apiClient.get('/passenger/' + id)
  },
  getAirline(id) {
    return apiClient.get('/airline/' + id)
  }
}
