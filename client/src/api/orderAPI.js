import {API} from '../config'

export const getOrders = () =>{
    return fetch(`${API}/orders`)
    .then( res => {
        return res.json();
    })
    .catch( err =>{
        console.log(err)
    })    

}