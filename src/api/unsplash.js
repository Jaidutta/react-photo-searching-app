import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a4836d189f2fe8b67053c78ef871a1e5a60b37282755f9d8f721e755ce5f61bf'
  }
})

