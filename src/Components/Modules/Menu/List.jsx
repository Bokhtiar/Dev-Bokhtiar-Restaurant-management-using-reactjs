import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from '../../Service/Category';
import { getProduct } from '../../Service/Product';

export default function List() {

	const [categories , setCategories] = useState([''])
	useEffect(()=>{
		CategoryLit()
	},[]);

	const CategoryLit =async()=>{
		let CategoriesServiceList = await getCategory();
		setCategories(CategoriesServiceList)
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
				<div className="col-sm-12 col-md-9 col-lg-9 col-12">
wew
				</div>
				
			</div>
		</section>
    )
}
