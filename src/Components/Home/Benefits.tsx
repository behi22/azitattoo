import React from 'react';
import { BenefitsProps } from '../../Util/types';
import { Row, Col } from 'antd';

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <>
      <Row align='middle' justify='center' style={{ textAlign: 'center' }}>
        <Col span={6} />
        <Col span={12}>
          <h2>PLACE YOUR CONFIDENCE IN THE HANDS OF OUR BEAUTY EXPEDITION</h2>
        </Col>
        <Col span={6} />
      </Row>
      <Row align='middle' justify='center' style={{ textAlign: 'center' }}>
        <Col span={6} />
        <Col span={12}>
          <h3>
            INDULGE IN NOTHING BUT THE BEST, DELIVERED WITH PASSION BY AZITA
          </h3>
        </Col>
        <Col span={6} />
      </Row>
      <Row
        justify='space-evenly'
        align='top'
        style={{ textAlign: 'center' }}
        gutter={[30, 30]}
      >
        {benefits.map((benefit) => (
          <Col xs={20} md={5} key={benefit.id}>
            <div>
              <Col span={4} />
              <div>
                <img width={'50%'} src={benefit.icon}></img>
                <h4>{benefit.title}</h4>
                <p>{benefit.text}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Benefits;
