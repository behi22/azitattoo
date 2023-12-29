import React from 'react';
import { ServicesProps } from '../Util/types';
import { Button, Col, Row, Typography } from 'antd';

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    // fixed redundancy issue by removing div with styling!
    <>
      <Row justify='center'>
        <Col span={21}>
          <h1>Uncover Our Variety of Services</h1>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={21}>
          <Typography.Text style={{ fontSize: '1.2em' }}>
            Experience our customized precision beauty treatments designed
            exclusively for you.
          </Typography.Text>
        </Col>
      </Row>
      <br />
      <br />
      <Row justify={'center'}>
        <Col span={21}>
          <Row justify='space-evenly' align='top' gutter={[10, 30]}>
            {services.map((service) => (
              <Col xs={21} md={7} key={service.id}>
                <div>
                  <a href={service.link}>
                    <img
                      width={'75%'}
                      src={service.img}
                      style={{ borderRadius: '10px' }}
                    ></img>
                  </a>
                  <h3>{service.title}</h3>
                  <p style={{ fontSize: '1.1em' }}>{service.description}</p>
                  <Button type='primary' href={service.link}>
                    {service.button}
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Services;
