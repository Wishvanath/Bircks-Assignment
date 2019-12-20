import {API} from '../config'
export const signin = (data) => {
    // check login form data
    console.log(data);
    return fetch(`${API}/signin`,{
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



// to store logedin user in local storage
export const authenticate =(data, next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt', JSON.stringify(data))
        next()
    }
}


// to logout 
export const signout = (next) => {
    // remove the token form the localstorage
    if(typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next();
        return fetch(`${API}/signout`, {
            method: "GET",
        })
        .then( res => {
            console.log("Signout", res)
        })
        .catch(err => console.log(err))
    }
    // make request to beckend

    // redirect to the page
}

// export const isAuthenticated = () => {
//     if(typeof window == 'undefined') {
//         return false;
//     }
//     if(localStorage.getItem('jwt')){
//         return JSON.parse(localStorage.getItem('jwt'));
//     }else {
//         return false;
//     }
// }