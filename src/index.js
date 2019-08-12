import './index.css'
import {getUsers} from './api/userApi'

getUsers().then(result => {
    result.forEach(user => {
        console.log(user)
    })
})
