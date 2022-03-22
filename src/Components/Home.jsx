import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategory } from './Service/Category';
import { getProduct } from './Service/Product';

export default function App() {

    const [categories, setCategory] = useState(['']);
    const [products, setProduct] = useState(['']);

    useEffect(() => {
        categoryList();
        productList();
      }, []);

      const categoryList = async()=>{
        let CategoryServiceList = await getCategory();
        setCategory(CategoryServiceList)
      }

      const productList = async() => {
        let ProductServiceList = await getProduct();
        setProduct(ProductServiceList)
      }

      console.log('product', products)
  return (
    <div>
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8">
                    <h1>Welcome to <span>Restaurantly</span></h1>
                    <h2>Delivering great food for more than 18 years!</h2>

                    <div className="btns">
                        <Link to={'/menu'} className="btn-menu animated fadeInUp scrollto">Our Menu</Link>
                        <Link to={'/table/book'} className="btn-book animated fadeInUp scrollto">Book a Table</Link>
                    </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                    <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
                    </div>
                </div>
            </div>
        </section>
        {/* SLIDER SECTION */}

        <main id="main">
            <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                    <div className="about-img">
                    <img src="./user/assets/img/about.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                    <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    </p>
                    <ul>
                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                </div>

            </div>
            </section>
            {/* <!-- End About Section -->

            <!-- ======= Why Us Section ======= --> */}
            <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Why Us</h2>
                <p>Why Choose Our Restaurant</p>
                </div>

                <div className="row">

                <div className="col-lg-4">
                    <div className="box" data-aos="zoom-in" data-aos-delay="100">
                    <span>01</span>
                    <h4>Lorem Ipsum</h4>
                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box" data-aos="zoom-in" data-aos-delay="200">
                    <span>02</span>
                    <h4>Repellat Nihil</h4>
                    <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                    <div className="box" data-aos="zoom-in" data-aos-delay="300">
                    <span>03</span>
                    <h4> Ad ad velit qui</h4>
                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                    </div>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Why Us Section -->

            <!-- ======= Menu Section ======= --> */}
           

           <section id="menu" class="menu section-bg">
            <div class="container" data-aos="fade-up">

                <div class="section-title">
                <h2>Menu</h2>
                <p>Check Our Tasty Menu</p>
                </div>

                <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                    <ul id="menu-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    {
                        categories.map((category, index)=>
                            <li data-filter={"."+(category.category_id)} title={"category " + (category.category_id)}>{category.category_name}</li>
                        )
                    }
                    </ul>
                </div>
                </div>

                <div class="row menu-container" data-aos="fade-up" data-aos-delay="200">
                    {
                        products.map((product, index)=>
                        <div className={"col-lg-6 menu-item"+(product.category_id)}>
                            <img src="./user/assets/img/menu/lobster-bisque.jpg" class="menu-img" alt=""/>
                            <div class="menu-content">
                            <a href="#">{product.product_name}</a><span>${product.price}</span>
                            </div>
                            <div class="menu-ingredients">
                                { product.description }
                            </div>
                        </div> 
                        )
                    }
                   
                </div>

      </div>
    </section>


            {/* <!-- End Menu Section -->
            <!-- ======= Events Section ======= --> */}
            <section id="events" className="events">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Events</h2>
                <p>Organize Your Events in our Restaurant</p>
                </div>

                <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                    <div className="row event-item">
                        <div className="col-lg-6">
                        <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Birthday Parties</h3>
                        <div className="price">
                            <p><span>$189</span></p>
                        </div>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="row event-item">
                        <div className="col-lg-6">
                        <img src="./user/assets/img/event-private.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Private Parties</h3>
                        <div className="price">
                            <p><span>$290</span></p>
                        </div>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="row event-item">
                        <div className="col-lg-6">
                        <img src="./user/assets/img/event-custom.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Custom Parties</h3>
                        <div className="price">
                            <p><span>$99</span></p>
                        </div>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        </ul>
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur
                        </p>
                        </div>
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                </div>
                <div className="swiper-pagination"><Link to={'/event'} className=' btn book-a-table-btn'>View All Event's</Link></div>
                </div>

            </div>
            </section>
            {/* <!-- End Events Section -->

            <!-- ======= Book A Table Section ======= --> */}


            <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Reservation</h2>
                <p>Book a Table</p>
                </div>

                <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-4 col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                    <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                    <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                    <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                    <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                    <div className="validate"></div>
                    </div>
                    <div className="col-lg-4 col-md-6 form-group mt-3">
                    <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
                    <div className="validate"></div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                    <div className="validate"></div>
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Book a Table</button></div>
                </form>

            </div>
            </section>
            {/* <!-- End Book A Table Section -->

            

            <!-- ======= Gallery Section ======= --> */}
            <section id="gallery" className="gallery">

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Gallery</h2>
                <p>Some photos from Our Restaurant</p>
                </div>
            </div>

            <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

                <div className="row g-0">

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/ssets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                        <img src="./user/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                    </a>
                    </div>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Gallery Section -->

            <!-- ======= Chefs Section ======= --> */}
            <section id="chefs" className="chefs">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Chefs</h2>
                <p>Our Proffesional Chefs</p>
                </div>

                <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="member" data-aos="zoom-in" data-aos-delay="100">
                    <img src="./user/assets/img/chefs/chefs-1.jpg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Master Chef</span>
                        </div>
                        <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="member" data-aos="zoom-in" data-aos-delay="200">
                    <img src="./user/assets/img/chefs/chefs-2.jpg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Patissier</span>
                        </div>
                        <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="member" data-aos="zoom-in" data-aos-delay="300">
                    <img src="./user/assets/img/chefs/chefs-3.jpg" className="img-fluid" alt=""/>
                    <div className="member-info">
                        <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>Cook</span>
                        </div>
                        <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                </div>

            </div>
            </section>
            {/* <!-- End Chefs Section -->

            <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
                </div>
            </div>

            <div data-aos="fade-up">
                {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
            </div>

            <div className="container" data-aos="fade-up">

                <div className="row mt-5">

                <div className="col-lg-4">
                    <div className="info">
                    <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>

                    <div className="open-hours">
                        <i className="bi bi-clock"></i>
                        <h4>Open Hours:</h4>
                        <p>
                        Monday-Saturday:<br/>
                        11:00 AM - 2300 PM
                        </p>
                    </div>

                    <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>info@example.com</p>
                    </div>

                    <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+1 5589 55488 55s</p>
                    </div>

                    </div>

                </div>

                <div className="col-lg-8 mt-5 mt-lg-0">

                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>

                </div>

                </div>

            </div>
            </section>


        </main>
    </div>

  )
}

