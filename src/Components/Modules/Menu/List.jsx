import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../../Service/Product';

export default function List() {

    const [Products, setProduct] = useState([])

    useEffect(() => {
        ProductList();
      }, []);


      const ProductList = async()=>{
        const serviceProduct = await getProduct();
        setProduct(serviceProduct)
      }//get product list from product serveice

    return (
        <div>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                    <h5>ABOUT-RESTAURANTLY</h5>
                    <ol>
                        <li><Link to={'/'} >Home</Link></li>
                        <li>About</li>
                    </ol>
                    </div>

                </div>
            </section> 
            {/* breadcrumbs end here */}

                <section id="menu" className="menu section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>Menu</h2>
                        <p>Check Our Tasty Menu</p>
                        </div>

                        <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="menu-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-starters">Starters</li>
                            <li data-filter=".filter-salads">Salads</li>
                            <li data-filter=".filter-specialty">Specialty</li>
                            </ul>
                        </div>
                        </div>

                        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

                        {
                            Products.map((item, index)=>
                            <div className="col-lg-6 menu-item ">
                            <img src="./user/assets/img/menu/lobster-bisque.jpg" className="menu-img" alt=""/>
                            <div className="menu-content">
                            <a href="#">{item.title}</a><span>$5.95</span>
                            </div>
                            <div className="menu-ingredients">
                            {item.description}
                            </div>
                            </div>
                            )
                        }

                        

                        </div>

                    </div>
                </section>
        </div>
    )
}
