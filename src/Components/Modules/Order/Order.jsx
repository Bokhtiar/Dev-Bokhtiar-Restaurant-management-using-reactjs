import React from 'react'
import CartList from '../Cart/CartList'

export default function Order() {
  return (
    <div>
      <section id="cart_items my-5">
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
								<input className='form-control my-2' type="text" placeholder="Display Name"/>
								<input className='form-control my-2' type="text" placeholder="User Name"/>
								<input className='form-control my-2' type="password" placeholder="Password"/>
								<input className='form-control my-2' type="password" placeholder="Confirm password"/>
							</form>
							<a class="btn btn-primary" href="">Get Quotes</a>
							<a class="btn btn-primary" href="">Continue</a>
						</div>
					</div>
					<div class="col-sm-5 clearfix">
						<div class="bill-to">
							<p>Bill To</p>
							<div class="form-one">
								<form>
									<input className='form-control my-2' type="text" placeholder="Company Name"/>
									<input className='form-control my-2' type="text" placeholder="Email*"/>
									<input className='form-control my-2' type="text" placeholder="Title"/>
									<input className='form-control my-2' type="text" placeholder="First Name *"/>
									<input className='form-control my-2' type="text" placeholder="Middle Name"/>
									<input className='form-control my-2' type="text" placeholder="Last Name *"/>
									<input className='form-control my-2' type="text" placeholder="Address 1 *"/>
									<input className='form-control my-2' type="text" placeholder="Address 2"/>
								</form>
							</div>
							<div class="form-two">
								<form>
									<input className='form-control my-2' type="text" placeholder="Zip / Postal Code *"/>
									<select className='form-control my-2'>
										<option>-- Country --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<select className='form-control my-2'>
										<option>-- State / Province / Region --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<input className='form-control my-2' type="password" placeholder="Confirm password"/>
									<input className='form-control my-2' type="text" placeholder="Phone *"/>
									<input className='form-control my-2' type="text" placeholder="Mobile Phone"/>
									<input className='form-control my-2' type="text" placeholder="Fax"/>
								</form>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="order-message">
							<p>Shipping Order</p>
							<textarea className='form-control my-2' name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
							<label><input type="checkbox"/> Shipping to bill address</label>
						</div>	
					</div>					
				</div>
			</div>
			<div class="review-payment">
				<h2>Review & Payment</h2>
			</div>

			

            <CartList/>
		</div>
	</section>
    </div>
  )
}
