import React from 'react'
import './Testimonial.css'

function Testimonial({image,avatar,name,review,testimonial,setTestimonial}) {
    return (
        <div className="testimonial">
            <div className="testimonial-img">
                <img src={image} alt="trip-photo" />
            </div>
            <div className="testimonial-content">
                <div className="testimonial-person">
                    <img src={avatar} alt="avatar" />
                    <h2>{name}</h2>
                </div>
                <p>{review}</p>
                <div className="testimonial-btns">
                    <button onClick={()=>{if(testimonial===0){setTestimonial(3)}
                                            else{setTestimonial(testimonial-1)}}}>Prev</button>
                    <button onClick={()=>{if(testimonial===3){setTestimonial(0)}
                                            else{setTestimonial(testimonial+1)}}}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
