import React,{useState} from 'react'
import './Testimonials.css'
import Testimonial from './Testimonial';
import Data from '../Data/Data';

function Testimonials() {
    const [testimonial,setTestimonial] = useState(0);
    return (
        <div className="testimonials-container">
           <Testimonial image={Data[testimonial].image} avatar={Data[testimonial].avatar} name={Data[testimonial].name} review={Data[testimonial].review} testimonial={testimonial} setTestimonial={setTestimonial} />
        </div>
    )
}

export default Testimonials
