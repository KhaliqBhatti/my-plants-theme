import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        {" "}
        <div className=" container-fluid  h-screen md:h-[80vh] relative Header rounded-bl-[60px] rounded-br-[60px] overflow-hidden">
          <div className="w-[90vw] m-auto  h-[15vh] flex justify-between  relative">
            <div className="logo-div w-[50vw] md:w-[40vw] lg:w-[25vw]   flex gap-2 items-center h-100">
              <span className="w-1/3 h-100 ">
                <div>
                  <div className="flex gap-2 py-1  ">
                    <div className="w-7 h-7 rounded-tr-[10px] rounded-bl-[10px] bg-[#75C32C]  "></div>
                    <div className="w-7 h-7 rounded-tl-[10px] rounded-br-[10px] bg-[#75C32C]  "></div>
                  </div>
                  <div className="flex gap-2 py-1">
                    <div className="w-7 h-7 rounded-tl-[10px] rounded-br-[10px] bg-[#75C32C]  "></div>
                    <div className="w-7 h-7 rounded-tr-[10px] rounded-bl-[10px] bg-[#75C32C]  "></div>
                  </div>
                </div>
              </span>
              <h3 className=" text-lg md:text-xl lg:text-2xl">
                Simply Natural
              </h3>
            </div>

            <div className="flex gap-x-3  relative ">
              <div className="ul-div  justify-between w-[45vw]  hidden lg:flex">
                <ul className="flex justify-between items-center w-100 h-100">
                  <li className="text-[#FC5F5F] hover:cursor-pointer ">Home</li>
                  <li className="relative h-full dropdown-store flex gap-2 hover:text-[#FC5F5F] items-center -300 ">
                    Store
                    <i className="fa-solid fa-angle-down hover:text-[#FC5F5F]"></i>
                    <ul className="absolute dropdown top-[60px] px-2 py-2 bg-white border-t-2 border-[#FC5F5F] shadow-lg rounded  w-[20vw]  hidden ">
                      <li className="w-full text-black  hover:text-[#FC5F5F] hover:cursor-pointer  py-1">
                        Plants
                      </li>
                      <li className="w-full text-black  hover:text-[#FC5F5F] hover:cursor-pointer py-1">
                        Cactus
                      </li>
                    </ul>
                  </li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>My Account</li>
                </ul>
              </div>
              {/* <div className="flex justify-center items-center  border-4 w-full">
              <i class="fa-solid fa-bars block lg:hidden text-black text-3xl "></i>
              </div> */}
              {/* <Menu className="border border-danger absolute mx-1 mt-[80px] bg-white flex flex-col gap-y-[20px]  h-[40vh] ">
                <a id="home" className="menu-item mb-2 px-2 py-2" href="/">
                  Home
                </a>
                <a id="about" className="menu-item mb-2 px-2 py-2" href="/about">
                  About
                </a>
                <a id="contact" className="menu-item mb-2 px-2 py-2" href="/contact">
                  Contact
                </a>
                <a
                  onClick={this.showSettings}
                  className="menu-item--small  mb-2 px-2 py-2"
                  href=""
                >
                  Settings
                </a>
              </Menu> */}
            </div>

            <div className="cart-div   w-[20vw] sm:w-[15vw] md:w-[12vw] lg:w-[9vw] flex justify-evenly items-center flex-row gap-x-3 ">
              <p className="text-[#FC5F5F] text-md  w-[fit-content]  relative">
                $0.00
                <span className="bg-[#FC5F5F] -mt-2 -right-2 w-4 h-4 rounded-full absolute text-center text-white text-[11px]">
                  0
                </span>
              </p>
              <i className="fa-solid fa-user text-black"></i>
            </div>
          </div>
          <div className=" w-[100%]  bg-cover  flex ">
            <div className="w-full sm:w-[85%] md:w-[70%] lg:w-[55%]   py-5  flex flex-col  items-center px-3">
              <div className="w-full flex justify-start">
                <h3 className="text-xl md:text-2xl text-black mb-3 text-start ">
                  Best Quality Plants
                </h3>
              </div>
              <div className="w-100 flex justify-start md:w-[70%] ">
                <h3 className="text-[36px] w-[95%] sm:w-[80%] md:w-[100%] md:text-[40px] lg:text-[45px] font-semibold mt-3 text-black mb-3 leading-[50px] tracking-wider">
                  Amazing Variety Of Plants Starting Just $6
                </h3>
              </div>
              <div className="btn-div flex justify-start w-full mt-5">
                <button className="px-[40px] py-[9px] bg-[#FC5F5F] text-white duration-300 hover:bg-[#75C32C] rounded-3xl">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
