import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TableBook() {

    const [categoryInput, setCategory] = useState({
        'name' : '',
        'email' : '',
        'phone' : '',
        'date' : '',
        'time' : '',
        'people' : '',
        'message' : ''
    });

    const handleInput = (e)=>{
        e.persist();
        setCategory({...categoryInput,[e.target.name]: e.target.value})
    }

    const submitBooking =(e)=>{
        e.preventDefault();
        axios.post('/booking/store', {
            'name' : categoryInput.name,
            'email' : categoryInput.email,
            'phone' : categoryInput.phone,
            'date' : categoryInput.date,
            'time' : categoryInput.time,
            'people' : categoryInput.people,
            'message' : categoryInput.message,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        // axios.post('/booking/store').then((response)=>{
        //     console.log(response);
        // })
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

        <section className="inner-page">
            <div className="container">
                <section id="book-a-table" className="book-a-table">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Book a Table</p>
                        </div>
                        <form onSubmit={submitBooking}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 form-group">
                                <input onChange={handleInput} value={categoryInput.name} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div className="validate"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input onChange={handleInput} value={categoryInput.email} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                                <div className="validate"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                                <input onChange={handleInput} value={categoryInput.phone} type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div className="validate"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input onChange={handleInput} value={categoryInput.date} type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div className="validate"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input onChange={handleInput} value={categoryInput.time} type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div className="validate"></div>
                                </div>
                                <div className="col-lg-4 col-md-6 form-group mt-3">
                                <input onChange={handleInput} value={categoryInput.people} type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
                                <div className="validate"></div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea onChange={handleInput} value={categoryInput.message}  className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                                <div className="validate"></div>
                            </div>

                            <div className="text-center"><button type="submit" className='btn btn-success'>Book a Table</button></div>
                        </form>

                    </div>
                </section>
            </div>
        </section>
    </div>
  )
}
