import React, { Component } from 'react'



export default class PlantsCard1 extends Component {
  render() {
    return (
        <div className="bg-[#EEEDF3] h-[80vh]  relative rounded-3xl overflow-hidden duration-200 hover:shadow-2xl ">
        <img src={this.props.img} alt="" className="w-full absolute h-full md:h-[45vh]" />
        <div className="absolute bottom-5 text-black   w-full py-5 px-4">
          <h3 className="text-xl font-bold ">
            {this.props.title}
          </h3>
          <p className="text-[#5D6167] text-[15px] mt-2">{this.props.text}</p>
          <p className="text-[#FC5F5F] text-[14px] duration-300 hover:text-[#5D6167] mt-4 tracking-wider hover:cursor-pointer">See Collection</p>
        </div>
      </div>
    )
  }
}
