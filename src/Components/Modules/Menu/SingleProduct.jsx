import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getSingleProduct } from '../../Service/Product'


export default function SingleProduct() {
    const {id} = useParams()
    console.log('id',id);

    const [product, setProduct] = useState([])
    // useEffect(()=>{
    //     ProductDetail();
    // },[])

    // const ProductDetail = async()=>{
    //     const productsingle = await getSingleProduct(id)
    //     setProduct(productsingle)
    // }


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
        <section className="inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                        <img src="https://picsum.photos/200/300" className="" alt=""/>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <span className='mb-4'>{product.title}</span><br/>
                        <span className='mt-3'>{product.category}</span><br/>
                        <span className='mt-3'>${product.price}</span><br/>
                        <span className='mt-5'>{product.description}</span>


                        <div className="mt-5">
                            <a href="" className='btn btn-outline-success '>Add To Cart</a>
                        </div>
                    </div>
                </div>

                <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Recommented Product</h2>
                <p>Category Releted Product</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                       <div className="card">
                       <img class="card-img-top" src="https://picsum.photos/100/100" alt="Card image cap"/>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark">Card title</h5>
                            <a href="#" class="btn btn-primary">Detail</a> &nbsp;
                            <a href="#" class="btn btn-primary">buy</a> &nbsp;
                            <a href="#" class="btn btn-primary">Wishlist</a>
                        </div>
                       </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                       <div className="card">
                       <img class="card-img-top" src="https://picsum.photos/100/100" alt="Card image cap"/>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark">Card title</h5>
                            <a href="#" class="btn btn-primary">Detail</a> &nbsp;
                            <a href="#" class="btn btn-primary">buy</a> &nbsp;
                            <a href="#" class="btn btn-primary">Wishlist</a>
                        </div>
                       </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-3 col-lg-3">
                       <div className="card">
                       <img class="card-img-top" src="https://picsum.photos/100/100" alt="Card image cap"/>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark">Card title</h5>
                            <a href="#" class="btn btn-primary">Detail</a> &nbsp;
                            <a href="#" class="btn btn-primary">buy</a> &nbsp;
                            <a href="#" class="btn btn-primary">Wishlist</a>
                        </div>
                       </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                       <div className="card">
                       <img class="card-img-top" src="https://picsum.photos/100/100" alt="Card image cap"/>
                        <div class="card-body text-center">
                            <h5 class="card-title text-dark">Card title</h5>
                            <a href="#" class="btn btn-primary">Detail</a> &nbsp;
                            <a href="#" class="btn btn-primary">buy</a> &nbsp;
                            <a href="#" class="btn btn-primary">Wishlist</a>
                        </div>
                       </div>
                    </div>

                </div>

            </div>
            </section>
            </div>
        </section>
    </div>
  )
}
