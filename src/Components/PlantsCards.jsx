import React, { Component } from "react";
import PlantsImg from "./images/plant6-free-img.jpg";
import PlantsImg2 from "./images/cactus2-free-img.jpg";
import PlantsImg3 from "./images/plant4-free-img.jpg";
import PlantsCard1 from "./PlantsCard1";

export default class PlantsCards extends Component {
  render() {
    return (
      <div className="py-[50px]   grid grid-cols-1 md:grid-cols-3   px-4 gap-4 justify-center"> 
       <PlantsCard1 title='Beautiful Plant Varieties' img={PlantsImg} text="Luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
       <PlantsCard1 title='Trendy Cactus Varieties' img={PlantsImg2} text="Luctus nec ullamcorper mattis, pulvinar dapibus leo"/>
       <PlantsCard1 title='Gardening Accessories' img={PlantsImg3} text="Luctus nec ullamcorper mattis, pulvinar dapibus leo."/>
       
      </div>
    );
  }
}
