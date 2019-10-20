import axios from 'axios'

const intance = axios.create({
    baseURL: 'https://adi-wather-app.firebaseio.com/'
})

export default intance