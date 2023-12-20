import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Typography } from 'antd';

const Banner: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    position: 'relative',
    minHeight: '100vh',
    background: 'url("/assets/Pics/Banner.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const { Text } = Typography;

  return (
    <div style={bannerStyle}>
      <Row justify='start' style={{ width: '100%' }}>
        <Col offset={3} span={13}>
          <Text strong style={{ whiteSpace: 'pre-wrap' }}>
            <h3>Unrestrained Beauty Beyond Limits</h3>
          </Text>
        </Col>
      </Row>
      <Row justify='start' style={{ width: '100%' }}>
        <Col offset={3} xs={12} sm={15} md={8}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            <h5>
              Explore our certified beauty services in Microblading, Lip Blush,
              and Tattoo, available at our convenient locations in Vancouver and
              Burnaby.
            </h5>
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify='start' gutter={[15, 15]} style={{ width: '100%' }}>
        <Col offset={3} xs={21} md={2}>
          <Link to='/Services.tsx'>
            <Button shape='round' type='primary'>
              See Beauty Services
            </Button>
          </Link>
        </Col>
        <Col offset={3}>
          <a href='/Contact'>
            <Button shape='round'>Get In Touch</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
