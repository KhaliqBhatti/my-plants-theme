import React, { Component } from "react";

export default class Collection extends Component {
  render() {
    return (
      <div className=" Collection-div py-5 flex justify-center  h-[80vh] lg:h-[100vh]">
        <div className="text-center w-full px-5 lg:py-16 "> 
        
          <div className="w-100 flex  md:w-[70%]  ">
            <h3 className="text-[25px] m-auto w-[95%] sm:w-[80%] md:w-[100%] md:text-[28px] lg:text-[32px] font-semibold mt-3 text-black mb-3 leading-[50px] tracking-wider">
            Interested? Shop This Plant Collection!
            </h3>
            
          </div>
          <div className="text-center text-[#5D6167] text-[14px] leading-6 tracking-wide sm:w-[80%] md:w-[70%] m-auto">
            <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>

          </div>
          <div className="btn-div flex justify-center w-full mt-5">
            <button className="px-[40px] py-[9px] bg-[#FC5F5F] text-white duration-300 hover:bg-[#75C32C] rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}
