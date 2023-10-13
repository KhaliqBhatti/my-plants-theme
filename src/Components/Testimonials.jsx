import React, { Component } from "react";
import TestimonialsCard from "./TestimonialsCard";
import GirlImg from "./images/user1-free-img.jpg";
import GirlImg2 from "./images/user3-free-img.jpg";
import GirlImg3 from "./images/testimonial-2.jpg";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="py-9 bo px-4 w-full  ">
        <div className="w-full Heading_Div  lg:flex gap-3 ">
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-3">Testimonials</h1>
            <p className="text-[14px] text-[#5D6167] mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className=" lg:py-32  h-[fit-content]">
              <div className="py-8   sm:flex items-center ">
                <div className="Img-Div    overflow-hidden">
                  <img
                    src={GirlImg}
                    alt=""
                    className="w-full rounded-tl-[30px] sm:w-[100vw] md:w-[70vw] lg:w-[100vw] h-[70vh]  sm:h-[60vh] rounded-tr-[30px] rounded-br-[30px]"
                  />
                </div>
                <div className="info_div px-3 py-4 ">
                  <p className="text-[#5D6167] text-[15px] leading-relaxed tracking-wide  ">
                    Neque porro quisquam est, qui dolore ipsum quia dolor sit
                    amet, consectetur adipisci velit, sed quia non numquam eius
                    modi tempora incidunt.{" "}
                  </p>
                  <h2 className="font-semibold mt-4">Sarah Jones</h2>
                  <p className="text-[#5D6167]  text-[14px] mt-1">
                    Interior Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div className="  gap-3 ">
                <TestimonialsCard
                  name="Jessica Foxx"
                  info="Student"
                  img={GirlImg2}
                />
                <TestimonialsCard
                  name="Briana Luke"
                  info="Student"
                  img={GirlImg3}
                />
              </div>
              </div>
        </div>
      </div>
    );
  }
}
