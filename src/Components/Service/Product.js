import axios from "axios";

export const getProduct = async() =>{
    let product = [];
    await axios.get('/product/list')
    .then(response => {
        product = response.data.products
    })
    return product
}

export const getCategoryProduct = async(props)=> {
    console.log('s', props)
    let categoryProduct =[];
    await axios.get(`category/product/${props}`)
    .then(response =>{
        categoryProduct = response.data.products
        console.log('category_product',categoryProduct)
    })
    return categoryProduct;

}

