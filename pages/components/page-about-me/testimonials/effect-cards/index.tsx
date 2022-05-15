import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import Testimonial from "../../../default/testimonial";
import PageTitle from "../../../default/page-title";

export default function TestimonialsEffectCards() {

  interface mock{
    name: String,
      profession: String,
      testimonial: String,
  }

  const mock : Array<mock> = [
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },

    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
    {
      name: "Nome da pessoa",
      profession: "CO da Google",
      testimonial: "Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectetLorem ipsum dolor sit amet, consectet"
    },
  ]

  return (
    <div style={{margin: '50px 0'}}>
      <PageTitle overTitle="Depoiments"/>
      <div className="d-flex j-c-center j-c-c-center">
        <Swiper
          id="testimonials-effects-cards"
          style={{margin: '25px'}}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
          }}
        >
            {
              mock.map((item, index) => {
                return(
                  <SwiperSlide key={index}>
                    <div className="d-flex j-c-c-center">
                      <div>
                        <Testimonial testimonial={"Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor "}/>
                        <div className="d-flex j-c-c-center about-witness">
                          <div>
                            <div className="d-flex j-c-c-center">
                              <div className="img-perfil">
                                <img src="http://placeimg.com/640/480/fashion" alt="" />
                              </div>
                            </div>
                            <div >
                              <div>
                                <strong>{item?.name}</strong> 
                                <small className="f-w-200">, TechLead</small> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </div>
    </div>
  );
}
