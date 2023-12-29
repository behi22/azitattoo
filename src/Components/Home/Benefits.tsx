import React from 'react';
import { BenefitsProps } from '../../Util/types';
import { Row, Col, Typography } from 'antd';
import useScreenSize from '../../Hooks/screenSize';

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  const { width } = useScreenSize();
  return (
    <>
      <Row align='middle' justify='center' style={{ textAlign: 'center' }}>
        <Col span={6} />
        <Col
          span={22}
          style={{ paddingBottom: '10px', borderBottom: '1.5px solid black' }}
        >
          <Typography.Text
            style={{
              fontSize: '2em'
            }}
          >
            PLACE YOUR CONFIDENCE IN OUR BEAUTY EXPEDITION
          </Typography.Text>
        </Col>
        <Col span={6} />
      </Row>
      <br />
      <Row align='middle' justify='center' style={{ textAlign: 'center' }}>
        <Col span={6} />
        <Col xs={21} lg={12}>
          <Typography.Text style={{ fontSize: '1.2em' }}>
            INDULGE IN NOTHING BUT THE BEST, DELIVERED WITH PASSION BY AZITA
          </Typography.Text>
        </Col>
        <Col span={6} />
      </Row>
      <Row justify={'center'}>
        <Col span={21}>
          <Row
            justify='space-evenly'
            align='top'
            style={{ textAlign: 'center', width: '100%' }}
            gutter={[width > 767 ? 25 : 0, 5]}
          >
            {benefits.map((benefit) => (
              <Col xs={24} lg={6} key={benefit.id}>
                <div>
                  <Col span={4} />
                  <div>
                    <img
                      width={'150px'}
                      height={'150px'}
                      src={benefit.icon}
                    ></img>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Benefits;
