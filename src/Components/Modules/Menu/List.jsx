import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from '../../Service/Category';
import { getProduct } from '../../Service/Product';

export default function List() {

	const [categories , setCategories] = useState([''])
	const [products, setProducts] = useState([''])
	useEffect(()=>{
		CategoryLit();
		ProductList();
	},[]);

	const CategoryLit =async()=>{
		let CategoriesServiceList = await getCategory();
		setCategories(CategoriesServiceList)
	}
	const ProductList = async()=>{
		let ProductServiceList = await getProduct();
		setProducts(ProductServiceList)
	}

	console.log(categories)

    return (
        <section className='container my-4'>
			<div className="row">
				<div className="col-sm-12 col-md-3 col-lg-3 col-12">
					<h4 className='text-center'>Categories Menu</h4>
					<div className="border container py-3">
						
						{
							categories.map((category, index)=>
								<p><a className='form-inline h6 '  href=""> <img height={20} width={20} src="./user/assets/img/gallery/gallery-1.jpg" alt="" /> &nbsp; 
								{category.category_name} &nbsp;&nbsp; (20)
								</a> </p>
							)
						}
						
					</div>
				</div> 
				{/* category list end  */}
				<div className="col-sm-12 col-md-9 col-lg-9 col-12">
				<h4 className='text-center'>Our Menu's</h4>
						<section>
							<div className="row">
								{
									products.map((product, index)=>
										<div className="col-12 col-sm-6 col-md-3 col-lg-3 my-2">
											<div className='card' style={{width: '12rem', background:'black'}}>
												<img className="card-img-top container" src="./user/assets/img/specials-3.png" alt="Card image cap"/>
												<div className="card-body text-center">
												<a href="#"> {product.product_name}</a> <br />
													<a href="#" className="btn btn-sm btn-primary">
													<i class="bx bxl-twitter"></i>
														</a> <a href="" className='btn btn-sm btn-info'><i class="bx bxl-twitter"></i></a> <a href="" className='btn btn-sm btn-danger'><i class="bx bxl-twitter"></i></a>
												</div>
											</div>
										</div>
									)
									
								}
								

							</div>
						</section>
				</div>
				
			</div>
		</section>
    )
}
