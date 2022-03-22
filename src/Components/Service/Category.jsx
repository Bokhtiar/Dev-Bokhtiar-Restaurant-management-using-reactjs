import axios from "axios";

export const getCategory = async() =>{
    let categories = [];

    await axios.get('/category/list')
    .then(response => {
        categories = response.data.categorires
    })
    return categories
}