
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getEvent } from '../../Service/Event';

export default function EventList() {
    const [events, setEventList] = useState([''])
    useEffect(() => {
        EventList();
      },[]);

      const EventList = async() =>{
         let EventServiceList = await getEvent();
         setEventList(EventServiceList)
      }
    
  return (
    <div>
      <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                <h7>EVENT</h7>
                <ol>
                    <li><Link to={'/'} >Home</Link></li>
                    <li>Event List</li>
                </ol>
                </div>

            </div>
        </section> 
   

        <section className="inner-page">
        <div className="container">

        <section id="events" className="events">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Events</h2>
                <p>Organize Your Events in our Restaurant</p>
                </div>


                
  



                <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    

                {
                    events.map((item, index)=>
                        <div className="swiper-wrapper my-5">
                        <div className="swiper-slide">
                            <div className="row event-item">
                                <div className="col-lg-6">
                                <img src="./user/assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                <h3>{item.title}</h3>
                                <div className="price">
                                    <p><span>${item.price}</span></p>
                                </div>
                                <p className="fst-italic">
                                    {item.description}.
                                </p>
                                
                                </div>
                            </div>
                        </div>
                        </div>
                    )
                }
                    
                    
            
                    <div className="swiper-pagination"></div>
                </div>

            </div>
            </section>

            <section>
                          
                
            </section>


   
        </div>
        </section>
    </div>
  )
}
