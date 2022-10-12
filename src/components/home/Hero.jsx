import React from "react";
import { Carousel } from "antd";
import { Button } from 'antd';

const items = [
  {
    key: "1",
    title: "web and moblie payment for developers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    key: "2",
    title: "web and moblie payment for developers",
    content:
      "An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.",
  },
  {
    key: "3",
    title: "web and moblie payment for developers",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  }
];
function Hero() {
  return (
    <div className="heroBlock">
      <Carousel>
        {items.map(item => {
            return (
                <div className="container-fluid" key={item.key}>
                    <div className="content">
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                        <div className="btnholder">
                            <Button type="primary" size="large">Learn More</Button>
                            <Button size="large"><i className="fas fa-desktop"></i>Watch a Demo</Button>
                        </div>
                    </div>
                </div>
            )
        })}
      </Carousel>
    </div>
  );
}

export default Hero;
