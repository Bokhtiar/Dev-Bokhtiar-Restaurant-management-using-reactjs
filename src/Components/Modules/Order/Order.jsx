import React, { useState } from 'react'
import CartList from '../Cart/CartList'

export default function Order() {
	let name = localStorage.getItem('user_id')
	let email = localStorage.getItem('email')

	const [orderInput, setOrder]= useState({
		'name' : '',
		'email' : '',
		'phone' : '',
		'rec_name' : '',
		'rec_email' : '',
		'rec_phone' : '',
		'rec_address_1' : '',
		'rec_address_2' : '',
		'message' : '',
	})

	const handleInput = (e)=>{
        e.persist();
        setOrder({...orderInput,[e.target.name]: e.target.value})
    }

  return (
    <div>
		<br />
      <section id="cart_items my-5 mt-3">
		<div class="container my-5">
			<div class="register-req">
				<p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
			</div>

			<div class="shopper-informations">
				<div class="row">
					<div class="col-sm-3">
						<div class="shopper-info">
							<p>Shopper Information</p>
								<input onChange={handleInput} value={orderInput.name} name="name" className='form-control my-2'  type="text" placeholder="Display Name"/>
								<input onChange={handleInput} value={orderInput.email} name="email" className='form-control my-2' type="text" placeholder="User Name"/>
								<input onChange={handleInput} value={orderInput.phone} name="phone" className='form-control my-2' type="number" placeholder="phone"/>
							
						</div>
					</div>
					<div class="col-sm-5 clearfix">
						<div class="bill-to">
							<p>Reciver To</p>
							<div class="form-one">
								
									<input onChange={handleInput} value={orderInput.rec_name} name="rec_name"  className='form-control my-2' type="text" placeholder="Full Name *"/>
									<input onChange={handleInput} value={orderInput.rec_email} name="rec_email" className='form-control my-2' type="text" placeholder="Email*"/>
									<input onChange={handleInput} value={orderInput.rec_phone} name="rec_phone" className='form-control my-2' type="number" placeholder="phone"/>
									<input onChange={handleInput} value={orderInput.rec_address_1} name="rec_address_1" className='form-control my-2' type="text" placeholder="Address 1 *"/>
									<input onChange={handleInput} value={orderInput.rec_address_2} name="rec_address_2" className='form-control my-2' type="text" placeholder="Address 2"/>
								
							</div>
						
						</div>
					</div>
					<div class="col-sm-4">
						<div class="order-message">
							<p>Shipping Order</p>
							<textarea onChange={handleInput} value={orderInput.message} name="message" className='form-control my-2'  placeholder="Notes about your order, Special Notes for Delivery" rows="12"></textarea>
						</div>	
					</div>	
								
				</div>
			</div>
			<div class="review-payment">
				<h2> Payment</h2>
			</div>

			

            <CartList/>
		</div>
	</section>
    </div>
  )
}
