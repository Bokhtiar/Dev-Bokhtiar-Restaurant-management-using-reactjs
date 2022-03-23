import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from '../../Service/Category';
import { getCategoryProduct } from '../../Service/Product';
import {  useParams } from 'react-router-dom'

export default function List() {
    const {id} = useParams()
	const [categories , setCategories] = useState([''])
	const [products, setProducts] = useState([''])
    
	useEffect(()=>{
		CategoryLit();
		CategoryProductList();
	},[]);

	const CategoryLit =async()=>{
		let CategoriesServiceList = await getCategory();
		setCategories(CategoriesServiceList)
	};
	const CategoryProductList = async()=>{
		let CategoryProductServiceList = await getCategoryProduct(id);
		setProducts(CategoryProductServiceList)
	};
    console.log('pro', products);


    return (
        <section className='container my-4'>
			<div className="row">
				<div className="col-sm-12 col-md-3 col-lg-3 col-12">
					<h4 className='text-center horizontal-category'><span>Categories</span></h4>
					<div className="border-category container py-3">
						
						{
							categories.map((category, index)=>
								<p><Link className='form-inline h6' to={`/category/product/${category.category_id}`}> <img className='zoom' height={20} width={20} src="./user/assets/img/specials-3.png" alt="" /> &nbsp; 
								{category.category_name} &nbsp;&nbsp; (20)
								</Link> </p>
							)
						}
						
					</div>
				</div> 
				{/* category list end  */}
				<div className="col-sm-12 col-md-9 col-lg-9 col-12">
				<h4 className='text-center horizontal-meuns-line'> <span>Our Menu's</span></h4>
						<section>
							<div className="row">
								{
									products.map((product, index)=>
										<div className="col-6 col-sm-6 col-md-3 col-lg-3 my-2">
											<div className='card' style={{width: '12rem', background:'black'}}>
												<img className="card-img-top container zoom" src="../user/assets/img/specials-3.png" alt="Card image cap"/>
												<div className="card-body text-center">
												<a href="#"> {product.product_name}</a> <br />
													<a href="#" className="btn btn-sm btn-outline-dark text-light">
													<i class="bx bxl-twitter"></i>
														</a> <a href="" className='btn btn-sm btn-outline-dark text-light'><i class="bx bxl-twitter"></i></a> <a href="" className='btn btn-sm btn-outline-dark text-light'><i class="bx bxl-twitter"></i></a>
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
