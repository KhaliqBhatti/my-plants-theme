import React, { Component } from "react";

export default class TestimonialsCard extends Component {
  render() {
    return (
        <div className="py-8   md:flex items-center  gap-2 ">
        <div className="Img-Div  overflow-hidden">
          <img
            src={this.props.img}
            alt=""
            className=" rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] w-[100vw]  h-[70vh]  sm:h-[60vh] "
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
    );
  }
}
