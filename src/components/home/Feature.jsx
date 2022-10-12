import React from "react";

import Image1 from '../../assets/images/modern-design.jpg';
import Image2 from '../../assets/images/clean-design.jpg';
import Image3 from '../../assets/images/great-support.jpg';
import Image4 from '../../assets/images/easy-customise.jpg';
import Image5 from '../../assets/images/unlimited-features.jpg';
import Image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col } from "antd";
import { Card } from "antd";
const { Meta } = Card;

function Feature() {
  return (
    <div className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
            <h2>Key Features And Benefits</h2>
            <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="modern-design" src={Image1}/>}
            >
              <Meta title="Modern Design "/>
            </Card>
          </Col> 
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="clean-design" src={Image2}/>}
            >
              <Meta title="Clean Design "/>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="great-support" src={Image3}/>}
            >
              <Meta title="Great Support "/>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="easy-customise" src={Image4}/>}
            >
              <Meta title="Easy Customise "/>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="unlimited-features" src={Image5}/>}
            >
              <Meta title="Unlimited Features "/>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="advanced-option" src={Image6}/>}
            >
              <Meta title="Advanced Option "/>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Feature;
