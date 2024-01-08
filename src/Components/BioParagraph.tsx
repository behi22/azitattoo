import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Row, Col, Button } from 'antd';

const BioParagraph: React.FC = () => {
  return (
    <>
      <br />
      <Row
        justify='center'
        gutter={{ xs: 5, md: 30 }}
        style={{ width: '100%' }}
      >
        <Col span={18}>
          <br />
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.7em', fontFamily: 'serif' }}>
              ABOUT AZITATTOO BEAUTY
            </span>
            <br />
            <br />
            <span style={{ fontSize: '1.4em', fontFamily: 'serif' }}>
              Premier Beauty Hub Serving Vancouver and Burnaby
            </span>
          </div>
          <br />
          <p style={{ fontSize: '1.2em', lineHeight: '2em' }}>
            Located in Downtown Vancouver and Burnaby Heights, Azitattoo
            Beauty's two locations provide stellar service at each one. Clients
            come to experience their beauty dreams come to life. Azitattoo
            Beauty is a sanctuary led by the incredible and friendly artist,
            Azita, certified at Phi-Academy. This beauty clinic celebrates and
            brings out the best side of everyone's unique beauty. Azita's
            journey in the beauty world is nothing short of awe-inspiring, with
            her hands skilled in the arts of tattoo, lip blush, and
            microblading. She creates a space where every stroke, every color,
            and every treatment is a step towards embracing your best self.
            Azitatoo Beauty is not just a beauty clinic, it's a beauty hub
            offering a kaleidoscope of treatments from microblading and
            permanent makeup to the revolutionary laser hair removal. Imagine a
            place where the latest in beauty technology meets Azita's artistic
            touch – that’s us! Experience modern beauty technology with our FDA
            and TGA-approved laser systems, ensuring you get nothing but the
            best, most effective, and yes, comfortable treatments in town. We’re
            all about that good energy and pain-free experience! So, are you
            ready to dive into a world of beauty, artistry, and innovation?
            Azitatoo Beauty is your go-to spot in both Vancouver and Burnaby,
            where every visit is a step closer to unveiling your radiant self.
          </p>
          <ScrollLink to='services-section' smooth={true} duration={500}>
            <Button shape='round' size='large'>
              Explore Our Range of Beauty Options
            </Button>
          </ScrollLink>
        </Col>
      </Row>
    </>
  );
};

export default BioParagraph;
