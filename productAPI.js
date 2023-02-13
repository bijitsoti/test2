import {API} from "./config"

export const getAllProduct = () => {
    return fetch(`${API}/getallproducts`)
    .then(res=>res.json())
    .catch(err=>console.log(err))  
}
