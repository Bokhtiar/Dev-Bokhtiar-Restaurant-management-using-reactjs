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
                                                <input className="cart_quantity_input" type="text" name="quantity" value={count} autocomplete="off" size="2"/>
                                                <button className="cart_quantity_down" href=""> - </button>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="text-light">${cart.product ? cart.product.price : '0' * cart.quantity}</p>
                                        </td>
                                        <td className="cart_delete">
                                            <button onClick={()=>cartDelete(cart.cart_id)} className="cart_quantity_delete" href=""><i className="fa fa-times"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                            

                       
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to={'/order'}>Order Place</Link>
        </section> 
         

        <section id="do_action">
            <div className="container">
                <div className="heading">
                    <h3>What would you like to do next?</h3>
                    <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="chose_area">
                            <ul className="user_option">
                                <li>
                                    <input type="checkbox"/>
                                    <label>Use Coupon Code</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Use Gift Voucher</label>
                                </li>
                                <li>
                                    <input type="checkbox"/>
                                    <label>Estimate Shipping & Taxes</label>
                                </li>
                            </ul>
                            <ul className="user_info">
                                <li className="single_field">
                                    <label>Country:</label>
                                    <select>
                                        <option>United States</option>
                                        <option>Bangladesh</option>
                                        <option>UK</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                        <option>Ucrane</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                    
                                </li>
                                <li className="single_field">
                                    <label>Region / State:</label>
                                    <select>
                                        <option>Select</option>
                                        <option>Dhaka</option>
                                        <option>London</option>
                                        <option>Dillih</option>
                                        <option>Lahore</option>
                                        <option>Alaska</option>
                                        <option>Canada</option>
                                        <option>Dubai</option>
                                    </select>
                                
                                </li>
                                <li className="single_field zip-field">
                                    <label>Zip Code:</label>
                                    <input type="text"/>
                                </li>
                            </ul>
                            <a className="btn btn-default update" href="">Get Quotes</a>
                            <a className="btn btn-default check_out" href="">Continue</a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="total_area">
                            <ul>
                                <li>Cart Sub Total <span>$59</span></li>
                                <li>Eco Tax <span>$2</span></li>
                                <li>Shipping Cost <span>Free</span></li>
                                <li>Total <span>$61</span></li>
                            </ul>
                                <a className="btn btn-default update" href="">Update</a>
                                <a className="btn btn-default check_out" href="">Check Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
