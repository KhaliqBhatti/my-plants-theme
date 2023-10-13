import React, { Component } from "react";
import FeaturedPlantsCard from "./FeaturedPlantsCard";
import Plant1 from "./images/plant3-free-img-768x768.jpg";
import Plant2 from "./images/cactus2-free-img-300x300.jpg";
import Plant3 from "./images/plant5-free-img-300x300.jpg";
import Plant4 from "./images/plant1-free-img-300x300.jpg";
import Plant5 from "./images/cactus6-free-img-300x300.jpg";
import Plant6 from "./images/plant4-free-img-300x300.jpg";
import Plant7 from "./images/plant6-free-img-300x300.jpg";
import Plant8 from "./images/cactus4-free-img-300x300.jpg";



export default class FeaturedPlants extends Component {
  render() {
    return (
      <div className="py-9  px-4">
        <div className="w-full Heading_Div text-center">
          <h1 className="text-4xl font-semibold mb-3"> Featured Plants</h1>
          <p className="text-[14px] text-[#5D6167] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="PlantsCardsSmall w-full  lg:w-[95%] xl:w-[90%] m-auto grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 py-16 px-1    gap-x-5  gap-y-5">
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant1} name='Plants' price='$34.00'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant2} name='Plants' price='$28.00' price2='$25.00' sale='Sale!'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant3} name='Plants' price='$34.00'  price2='$54.00' sale='Sale!'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant4} name='Plants' price='$20.00'  price2='$23.00' sale='Sale!'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant5} name='Plants' price='$12.00'  price2='$15.00' sale='Sale!'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant6} name='Plants' price='$32.00'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant7} name='Plants' price='$45.00'/>
          <FeaturedPlantsCard title='Boncellensis Secullant' img={Plant8} name='Plants' price='$30.00'  price2='$34.00' sale='Sale!'/>
        </div>
      </div>
    );
  }
}
