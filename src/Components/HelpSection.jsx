import React, { Component } from "react";

export default class HelpSection extends Component {
  render() {
    return (
      <div className="px-4 py-8 w-full  border-b-2  md:flex gap-2 justify-between items-center ">
        <div className=" py-3  px-2 md:w-[80vw]">
          <h1 className="text-xl md:text-2xl  font-semibold mb-4 w-100">
            Need help in choosing the right plants?
          </h1>
          <div className="text-sm  text-[#FC5F5F] hover:cursor-pointer hover:text-[#5D6167] tracking-wider gap-2 w-[fit-content]">
            <i className="fa-solid fa-phone-flip"></i> Ask For Help
          </div>
        </div>
        <div className=" text-[#5D6167] text-[14px] leading-7 md:ml-8 py-10 md:py-0 px-3">
          <p className="">
            Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
            primis eget maecenas sedurna malesuada consectetuer.
          </p>
          <p className="mt-3">
            Ornare integer commodo mauris et ligula purus, praesent cubilia
            laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
            fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
            tempor quis, turpis luctus dolor sapien vivamus.
          </p>
        </div>
      </div>
    );
  }
}
