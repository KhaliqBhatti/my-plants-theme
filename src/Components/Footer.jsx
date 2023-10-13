import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-5 border-2">
        <div className=" px-5 py-5 ">
          <div className="Logo_div  mb-3">
            <div className="flex gap-2 py-1  ">
              <div className="w-7 h-7 rounded-tr-[10px] rounded-bl-[10px] bg-[#75C32C]  "></div>
              <div className="w-7 h-7 rounded-tl-[10px] rounded-br-[10px] bg-[#75C32C]  "></div>
            </div>
            <div className="flex gap-2 py-1">
              <div className="w-7 h-7 rounded-tl-[10px] rounded-br-[10px] bg-[#75C32C]  "></div>
              <div className="w-7 h-7 rounded-tr-[10px] rounded-bl-[10px] bg-[#75C32C]  "></div>
            </div>
          </div>
          <div className="Natural-div text-2xl md:text-3xl font-semibold text-[#5D6167] mb-4">
            <h1>Simply Natural</h1>
          </div>
          <div className="Social-Div flex justify-between items-center gap-x-4 w-1/2">
            <i className="fa-brands fa-facebook-f px-3 py-[10px] hover:cursor-pointer bg-[#5D6167] text-[17px] text-white duration-300 hover:bg-[#75C32C]"></i>
            <i className="fa-brands fa-twitter px-[11px] py-[10px] hover:cursor-pointer bg-[#5D6167] text-[17px] text-white duration-300 hover:bg-[#75C32C]"></i>
            <i className="fa-brands fa-linkedin-in px-[12px] py-[10px] hover:cursor-pointer bg-[#5D6167] text-[17px] text-white duration-300 hover:bg-[#75C32C]"></i>
            <i className="fa-brands fa-instagram px-[12px] py-[10px] hover:cursor-pointer bg-[#5D6167] text-[17px] text-white duration-300 hover:bg-[#75C32C]"></i>
          </div>
        </div>
        <div className="Quick-Links px-5 py-5">
          <h3 className="text-[#45474b] text-2xl font-medium">Quick Links</h3>
          <ul className="Links-ul text-[15px] text-[#5D6167] flex flex-col gap-y-1 mt-4 ">
            <li>Introduction</li>
            <li>know more About Us</li>
            <li>Visit Store</li>
            <li>Let’s Connect</li>
          </ul>
        </div>
        <div className="Quick-Links px-5 py-4">
          <h3 className="text-[#3c3d41] text-2xl font-medium">Important Links</h3>
          <ul className="Links-ul text-[15px] text-[#5D6167] flex flex-col gap-y-1 mt-4 ">
            <li>Privacy Policy</li>
            <li>Shipping Details</li>
            <li>Terms & Conditions</li>
            <li>Media Kit</li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-y-4 px-5 md:px-3 lg:px-0 py-4">
            <h2 className="text-2xl lg:text-xl font-medium text-[#3c3e41]">Get In Touch With Us For The Best Quality Plants & Succulents</h2>
            <p className="leading-6 tracking-wide text-[16px] lg:text-[14px] text-[#5D6167]">Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</p>
        </div>
      </div>
      <div className="Copyright_Div sm:flex  justify-between px-5 py-5" >
        <div className="fs-6 text-[#5D6167] mb-3 sm:mb-0"> 
            <h2>Copyright © 2023 Simply Natural</h2>
        </div>
        <div className="fs-6 text-[#5D6167]"> 
            <h2>Powered By Simply Natural</h2>
        </div>
        

      </div>
      </>

    );
  }
}
