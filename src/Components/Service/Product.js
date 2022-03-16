import axios from "axios";

export const getProduct = async() =>{
    let product = [];
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
        product = response.data
    })
    return product
}

