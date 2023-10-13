import React, { Component } from "react";

export default class Shipping_Cards extends Component {
  render() {
    return (
      <div className="  grid grid-cols-1 md:grid-cols-3 py-[50px]  gap-y-8">
        <div className="Card_div py-2   flex flex-col justify-center items-center">
          <i className="fa-brands fa-pagelines text-[#75C32C] text-xl mb-4 mt-2"></i>
          <h3 className="font-medium text-[20px] mb-1">Plants Collection</h3>
          <p className="tracking-wide text-[#5D6167]">
            Any plants for your space
          </p>
        </div>
        <div className="Card_div py-2   flex flex-col justify-center items-center">
          <i className="fa-solid fa-gift text-[#75C32C] text-xl mb-4 mt-2"></i>
          <h3 className="font-medium text-[20px] mb-1">Plants Collection</h3>
          <p className="tracking-wide text-[#5D6167]">
            Any plants for your space
          </p>
        </div>
        <div className="Card_div py-2  flex flex-col justify-center items-center">
          <i className="fa-solid fa-rotate text-[#75C32C] text-xl mb-4 mt-2"></i>
          <h3 className="font-medium text-[20px] mb-1">Plants Collection</h3>
          <p className="tracking-wide text-[#5D6167]">
            Any plants for your space
          </p>
        </div>
       
      </div>
    );
  }
}
