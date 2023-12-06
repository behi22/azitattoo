import React from 'react';
import { ServicesProps } from '../../Util/types';
import { Button, Col, Row } from 'antd';

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Row justify='center'>
        <Col span={1}></Col>
        <Col span={22}>
          <h2>Uncover Our Variety of Services</h2>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row justify='center'>
        <Col span={1}></Col>
        <Col span={22}>
          <h3>
            Experience our customized precision beauty treatments designed
            exclusively for you.
          </h3>
        </Col>
        <Col span={1}></Col>
      </Row>
      <Row justify='space-evenly' align='top' gutter={[30, 30]}>
        {services.map((service) => (
          <Col xs={21} md={7} key={service.id}>
            <div>
              <Col span={3}></Col>
              <div>
                <a href={service.link}>
                  <img width={'75%'} src={service.img}></img>
                </a>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Button type='primary' href={service.link}>
                  {service.button}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
