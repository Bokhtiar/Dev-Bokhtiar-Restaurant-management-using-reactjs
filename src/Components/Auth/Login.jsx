import axios from 'axios'
import React, { useState } from 'react'
import { Link,Redirect } from 'react-router-dom'




export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const formSubmit=(e)=>{
        e.preventDefault();

        axios.post('/login', {
            email: email,
            password: password,
          })
          .then((response) =>{
              console.log(response)
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user_id', response.data.user.id);
            localStorage.setItem('email', response.data.user.email);
            if(localStorage.getItem('token')){
                console.log('success');
               
            }else{
               
            }
            
          })
          .catch( (error)=> {
            console.log(error);
          });
    }
    
//do something...

    return (
        <div>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h7>LOGIN</h7>
                        <ol>
                            <li><Link to={'/'} >Home</Link></li>
                            <li>Login</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* breadcrumbs end here */}

            <section className="inner-page">
                <div className="container">
                    <section id="contact" className="contact">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>Login</h2>
                                <p>Join-Us</p>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                        </div>

                        <div className="container" data-aos="fade-up">

                            <section>
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <form onSubmit={formSubmit}>
                                            <h2 className='text-center mb-4'>Login Form</h2>
                                            <div className="form-group">
                                                <label htmlFor="">Enter Your E-mail</label>
                                                <input className='form-control' onChange={(e)=>{setEmail(e.target.value)}} placeholder='enter your name' type="email" name="email" id="" />
                                            </div>
                                            <div className="form-group my-3">
                                                <label htmlFor="">Enter Your Password</label>
                                                <input className='form-control' onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='enter your password' name="password" id="" />
                                            </div>
                                            <div className="mt-2">
                                                <div className="text-center"><button className='btn btn-success' type="submit">Login</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}
