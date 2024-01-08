import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Row, Col, Button, Image } from 'antd';
import useScreenSize from '../../Hooks/screenSize';

const Bio: React.FC<{ imgSource: string }> = ({ imgSource }) => {
  const { width } = useScreenSize();
  return (
    <>
      <br />
      <Row
        justify='center'
        gutter={{ xs: 5, md: 30 }}
        style={{ width: '100%' }}
      >
        <Col offset={1} xs={18} lg={10}>
          <Row
            justify={width < 992 ? 'start' : 'center'}
            style={{ width: '100%' }}
          >
            <Image
              alt='Azita'
              preview={false}
              height={width <= 1200 ? '100%' : '400px'}
              width={width < 992 ? '100%' : '80%'}
              style={{
                objectFit: 'cover',
                textAlign: 'center',
                borderRadius: '10px'
              }}
              src={imgSource}
            />
          </Row>
        </Col>
        <Col xs={18} lg={12}>
          <br />
          <span style={{ fontSize: '1.7em', fontFamily: 'serif' }}>
            MASTERING THE ART OF BEAUTY IN DOWNTOWN VANCOUVER AND BURNABY
          </span>
          <br />
          <br />
          <p style={{ fontSize: '1.2em', lineHeight: '2em' }}>
            Meet Azita, a Vancouver based certified Beauty Artist with
            Microblading, LipBlush and Tattoo certifications. At AziTattoo
            Beauty, we blend precision with passion, offering results that stand
            out. Immerse yourself in a transformative beauty journey with us,
            where eyeliner artistry, lip blush techniques, and meticulous
            eyelash extensions come to life, all delivered with an unparalleled
            focus on detail.
          </p>
          <ScrollLink to='services-section' smooth={true} duration={500}>
            <Button shape='round' type='primary' size='large'>
              Discover Our Beauty Services
            </Button>
          </ScrollLink>
        </Col>
      </Row>
    </>
  );
};

export default Bio;
