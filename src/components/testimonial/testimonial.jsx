import React from "react";
import "./testimonials.css";
import IMG from "../../assets/portfolio1.jpg";
import AV1 from "../../assets/portfolio2.jpg";
import AV2 from "../../assets/portfolio3.jpg";
import AV3 from "../../assets/portfolio4.jpg";
import AV4 from "../../assets/portfolio5.jpg";
import AV5 from "../../assets/portfolio6.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
        "Aubin was abble to better understand the concepts of react to get an application to his own, identify some problems in the society, and solve them",
      avatar: IMG,
      Cname: "Client 1",
    },
    {
      id: 2,
      testimonial:
        "Laurel was abble to build to his own a buissness that actually helps here take care of herselve as well as many others peoples in the society",
      avatar: AV1,
      Cname: "Client 2",
    },
    {
      id: 3,
      testimonial:
        "Duplex was abble to better understand many concepts about contend creator, and how it works and can helps in today lives",
      avatar: AV2,
      Cname: "Client 3",
    },
    {
      id: 4,
      testimonial:
        "I was abble during my carear to identify and solve problems",
      avatar: AV3,
      Cname: "Client 4",
    },
    {
      id: 5,
      testimonial:
        "I was abble to learn more about real live chanllenges",
      avatar: AV5,
      Cname: "Client 5",
    },
    {
      id: 6,
      testimonial:
        "I hav face many difficulty that helps me today to better understand things as well as provide a quite solution.",
      avatar: AV4,
      Cname: "Client 6",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;

