import axios from "axios";

export const getCart = async(user_id) =>{

    let carts = [];
	await axios.get('/cart/list', {
			params: {
			id: localStorage.getItem('user_id')
			}
		})
		.then(function (response) {
			console.log(response.data.carts)
            carts = response.data.carts
		})
        console.log('cartsssss', carts)
		
    return carts
    
}