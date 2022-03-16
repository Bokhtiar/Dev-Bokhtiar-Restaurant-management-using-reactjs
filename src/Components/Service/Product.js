import axios from "axios";

export const getProduct = async() =>{
    let product = [];
    await axios.get('https://fakestoreapi.com/products')
    .then(response => {
        product = response.data
    })
    return product
}

export const getSingleProduct = async(props)=> {
    console.log('s', props)
    let productsingle =[];
    await axios.get(`https://fakestoreapi.com/products/${props}`)
    .then(response =>{
        productsingle = response.data
        console.log('ProductDetail',productsingle)
    })
    return productsingle;

}

