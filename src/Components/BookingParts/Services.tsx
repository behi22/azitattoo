import React from 'react';
import { ServicesProps } from '../../Util/types';
import { Button, Col, Row } from 'antd';

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Row justify='center'>
        <Col span={3}></Col>
        <Col span={18}>
          <h2>Uncover Our Variety of Services</h2>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row justify='center'>
        <Col span={3}></Col>
        <Col span={18}>
          <h3>
            Experience our customized precision beauty treatments designed
            exclusively for you.
          </h3>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row justify='space-around' align='top' gutter={[20, 20]}>
        <Col span={3}></Col>
        {services.map((service) => (
          <Col flex='25%'>
            <div></div>
            <div key={service.id}>
              <a href={service.link}>
                <img width={200} src={service.img}></img>
              </a>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <Button type='primary' href={service.link}>
                {service.button}
              </Button>
            </div>
          </Col>
        ))}
        <Col span={3}></Col>
      </Row>
    </div>
  );
};

export default Services;
