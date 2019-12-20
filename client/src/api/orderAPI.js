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

export const newOrders = (data) => {
    // check login form data
    console.log(data);
    return fetch(`${API}/neworder`,{
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    })
    .then( res => {
        return res.json();
    })
    .catch( err =>{
        console.log(err)
    })  
}