import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Row, Col, Button, Image } from 'antd';

const Bio: React.FC = () => {
  return (
    <>
      <br />
      <Row
        justify='center'
        gutter={{ xs: 5, md: 30 }}
        style={{ width: '100%' }}
      >
        <Col
          offset={1}
          xs={18}
          /* we can always remove md if the final picture doesn't look good! */
          md={10}
          lg={8}
          xl={7}
          xxl={6}
        >
          <Image
            alt='Azita'
            preview={false}
            height={'100%'}
            style={{
              objectFit: 'cover',
              textAlign: 'center',
              borderRadius: '10px'
            }}
            src={'/assets/Pics/Banner.png'}
          />
        </Col>
        <Col span={1} />
        <Col xs={18} md={12}>
          <h3 style={{ fontSize: '20px' }}>
            MASTERING THE ART OF BEAUTY IN DOWNTOWN VANCOUVER
          </h3>
          <p style={{ fontSize: '16px' }}>
            Meet Azita, a Vancouver based Phi Academy certified Beauty Artist
            with Phi-Brows, Phi-Contour and Phi-Lash certifications. Experience
            specialized PMU (permanent makeup), Microblading and Candela
            certified Laser Hair Removal Skincare treatments. At AziTattoo
            Beauty, we blend precision with passion, offering results that stand
            out. Dive into a transformative beauty experience with us, where
            eyeliner artistry, lip blush techniques, and meticulous eyelash
            extensions come to life, all with an unmatched attention to detail
          </p>
          <ScrollLink to='services-section' smooth={true} duration={500}>
            <Button shape='round' type='primary'>
              Discover Our Beauty Services
            </Button>
          </ScrollLink>
        </Col>
      </Row>
    </>
  );
};

export default Bio;
