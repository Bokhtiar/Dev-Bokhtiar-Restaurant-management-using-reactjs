import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getCart } from '../../Service/Cart';

export default function CartList() {
    let user_id = localStorage.getItem('user_id')
    const [count, setCount] = useState(1)
    const [carts, setCart] = useState([''])

    useEffect(()=>{
        CartList();
    },[])

    const CartList=async()=>{
        let CartServiceList = await getCart(user_id)
        setCart(CartServiceList)
    }
   
    const cartDelete =(id)=>{
        axios.get('/cart/delete', {
			params: {
			id: id
			}
		})
		.then(function (response) {
			return CartList()
		})
    }
    
    const increment =(id)=>{
        
        setCount(count + 1);
    }
    let total = 0;


  return (
    <div>
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h7>ABOUT-RESTAURANTLY</h7>
                <ol>
                    <li><Link to={'/'} >Home</Link></li>
                    <li>About</li>
                </ol>
                </div>

            </div>
        </section> 
        {/* breadcrumbs end here */}
        <section id="cart_items">
            <div className="container">
                <div className="table-responsive cart_info">
                    <table className="table table-condensed">
                        <thead>
                            <tr className="">
                                <td className="text-light">Item</td>
                                <td className="text-light">Product</td>
                                <td className="text-light">Price</td>
                                <td className="text-light">Quantity</td>
                                <td className="text-light">Total</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, index)=>
                                    
                                    <tr>
                                        <td className="cart_product">
                                            <a href=""><img src="./user/assets/img/specials-3.png" height={100} alt=""/></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a href="">{cart.product ? cart.product.product_name : 'no data'}</a></h4>
                                            <p>Web ID: 1089772</p>
                                        </td>
                                        <td className="">
                                            <p className='text-light'>${cart.product ? cart.product. price : 'no data'}</p>
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <button className="cart_quantity_up" onClick={()=>increment(cart.cart_id)}> + </button>
                                                <input className="cart_quantity_input" type="text" name="quantity" value={cart.quantity} autocomplete="off" size="2"/>
                                                <button className="cart_quantity_down" href=""> - </button>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="text-light">${  cart.product ? cart.product. price : '0' *  cart.quantity }</p>
                                        </td>
                                        <td className="cart_delete">
                                            <button onClick={()=>cartDelete(cart.cart_id)} className="cart_quantity_delete" href=""><i className="fa fa-times"></i></button>
                                        </td>
                                        <p style={{display: "none"}} >{total += cart.product ? cart.product. price : '0' *  cart.quantity }</p>
                                    </tr>
                                )
                            }
                            

                       
                        </tbody>
                    </table>
                </div>
            </div>
        </section> 
         

        <div className='container'>
            <div className="row">
                <div className="col-sm-12 col-lg-8 col-md-8"></div>
                <div className="col-sm-12 col-lg-4 col-md-4">
                <table class="table table-sm text-light border">
                    <tbody>
                        <tr>
                            <td className='float-left'>Cart Sub Total</td>
                            <td></td>
                            <td></td>
                            <td className='float-right'>${total}</td>
                        </tr>
                        <tr>
                            <td className='float-left'>Shipping Cost</td>
                            <td></td>
                            <td></td>
                            <td className='float-right'>$5</td>
                        </tr>
                        <tr>
                            <td className='float-left'>Total</td>
                            <td></td>
                            <td></td>
                            <td className='float-right'>${total + 5}</td>
                        </tr>
                    </tbody>
                    </table>
                    <p className='float-right'>
                    <Link className='btn btn-sm btn-primary' to={'/order'}>Order Place</Link> &nbsp;
                    <Link className='btn btn-sm btn-success' to={'/'}>Countine Shoping</Link>
                    </p>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}
