import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Row, Col, Button, Typography } from 'antd';
import useScreenSize from '../../Hooks/screenSize';
import { colors } from '../../Util/constants';

const Banner: React.FC = () => {
  const bannerStyle: React.CSSProperties = {
    position: 'relative',
    height: '575px',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const scSize = useScreenSize();

  const { Text } = Typography;

  return (
    <div style={bannerStyle} className='home_banner'>
      <Row justify='start' style={{ width: '100%' }}>
        <Col offset={3} xs={21} lg={10}>
          <Text strong style={{ whiteSpace: 'pre-wrap' }}>
            <span style={{ color: 'white', fontSize: '3.5em' }}>
              Beauty <span style={{ color: colors.gold }}>Beyond</span> Limits
            </span>
          </Text>
        </Col>
      </Row>
      <br />
      <Row justify='start' style={{ width: '100%' }}>
        <Col offset={3} xs={15} md={8}>
          <Text style={{ whiteSpace: 'pre-wrap' }}>
            <span style={{ color: 'white', fontSize: '1.3em' }}>
              Explore our certified beauty services in Microblading, Lip Blush,
              and Tattoo, available at our convenient locations in Vancouver and
              Burnaby.
            </span>
          </Text>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row justify='start' gutter={[15, 15]} style={{ width: '100%' }}>
        <Col offset={3}>
          <a href='/booking'>
            <Button type='primary' shape='round' size='large'>
              Book Now
            </Button>
          </a>
        </Col>
        <Col offset={scSize.width > 404 ? 0 : 3}>
          <ScrollLink to='services-section' smooth={true} duration={500}>
            <Button shape='round' size='large'>
              See Beauty Services
            </Button>
          </ScrollLink>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
