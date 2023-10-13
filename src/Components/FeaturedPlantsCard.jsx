import React, { Component } from "react";

export default class FeaturedPlantsCard extends Component {
  render() {
    return (
      <div className="img-Div  px-0   py-3   hover:shadow-xl duration-300 rounded-xl">
        <div className="relative  h-[23vh]  md:h-[32vh] lg:h-[38vh] ">
          <img
            src={this.props.img}
            alt=""
            className="  absolute w-full h-full "
          />
            <p className="bg-white px-3 text-[13px]  absolute top-3 left-5 text-[#5D6167] rounded-full">{this.props.sale}</p>
          <div className="w-9 h-9 rounded-full cart-icon flex justify-center items-center absolute top-3 right-2 bg-white ">
            <i className="fa-solid fa-bag-shopping "></i>
          </div>
        </div>
        <p className="text-[13px] text-[#5D6167] mt-2  px-1">
          {this.props.name}{" "}
        </p>
        <h2 className="text-[16px] font-medium w-[80%]  px-1">
          {this.props.title}
        </h2>
        <div className="Star-Div flex gap-x-1  text-[12px] mt-1 px-1">
          <i className="fa-regular fa-star hover:text-[#FC5F5F] duration-300"></i>
          <i className="fa-regular fa-star hover:text-[#FC5F5F] duration-300"></i>
          <i className="fa-regular fa-star hover:text-[#FC5F5F] duration-300"></i>
          <i className="fa-regular fa-star hover:text-[#FC5F5F] duration-300"></i>
          <i className="fa-regular fa-star hover:text-[#FC5F5F] duration-300"></i>
        </div>
        <div className="flex gap-x-1 px-1">
          <p className="text-[#5d6167af] text-[13px] font-semibold mt-1 line-through">
            {this.props.price2}
          </p>
          <p className="text-[#4e5156] text-[13px] font-semibold mt-1">
            {this.props.price}
          </p>
        </div>
      </div>
    );
  }
}
