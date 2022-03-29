import React from 'react'
import CartList from '../Cart/CartList'

export default function Order() {
	let name = localStorage.getItem('user_id')
	let email = localStorage.getItem('email')
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
							<form>
								<input className='form-control my-2' value={name} type="text" placeholder="Display Name"/>
								<input className='form-control my-2' value={email} type="text" placeholder="User Name"/>
								<input className='form-control my-2' type="number" value={'0198329232'} placeholder="phone"/>
							</form>
						</div>
					</div>
					<div class="col-sm-5 clearfix">
						<div class="bill-to">
							<p>Reciver To</p>
							<div class="form-one">
								<form>
									<input className='form-control my-2' type="text" placeholder="First Name *"/>
									<input className='form-control my-2' type="text" placeholder="Middle Name"/>
									<input className='form-control my-2' type="text" placeholder="Last Name *"/>
									<input className='form-control my-2' type="text" placeholder="Email*"/>
									<input className='form-control my-2' type="number" placeholder="phone"/>
									<input className='form-control my-2' type="text" placeholder="Address 1 *"/>
									<input className='form-control my-2' type="text" placeholder="Address 2"/>
								</form>
							</div>
						
						</div>
					</div>
					<div class="col-sm-4">
						<div class="order-message">
							<p>Shipping Order</p>
							<textarea className='form-control my-2' name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="12"></textarea>
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
