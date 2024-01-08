import React, { useState, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Row, Col, Button, Typography, Image, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import useScreenSize from '../Hooks/screenSize';
import { TreatmentProps } from '../Util/types';
import Services from './Services';
import { fullServices } from '../Util/constants';
import LocationHours from './LocationHours';
import { location1, location2 } from '../Util/constants';

const Treatment: React.FC<TreatmentProps> = ({ treatment }) => {
  const contentStyle: React.CSSProperties = {
    height: '100%',
    backgroundPosition: 'center',
    textAlign: 'center'
  };

  const scSize = useScreenSize();

  const { Text } = Typography;

  const { width } = useScreenSize();

  const [previewIndex, setPreviewIndex] = useState(0);

  const showPreview = (index: number) => {
    setPreviewIndex(index);
  };

  const carouselRef = useRef(null);

  return (
    <>
      <div>
        <Row
          justify='center'
          style={{ width: '100%', marginTop: '50px' }}
          gutter={[25, 25]}
        >
          <Col xs={{ order: 2, span: 21 }} xl={{ order: 1, span: 11 }}>
            <Text strong style={{ whiteSpace: 'pre-wrap' }}>
              <span
                style={{
                  color: 'black',
                  fontSize: scSize.width >= 1200 ? '2.9em' : '1.8em'
                }}
              >
                {treatment.title}
              </span>
              <br />
              <span style={{ color: 'black', fontSize: '1.3em' }}>
                {treatment.titleUnderline}
              </span>
            </Text>
            <br />
            <br />
            <Text style={{ whiteSpace: 'pre-wrap' }}>
              <span style={{ color: 'black', fontSize: '1.3em' }}>
                {treatment.bannerTxt}
              </span>
            </Text>
            <br />
            <br />
            <Row>
              <Col xs={21} xl={22}>
                <Row
                  justify='start'
                  gutter={[15, 15]}
                  style={{ width: '100%' }}
                >
                  <Col>
                    <a href='/booking'>
                      <Button shape='round' type='primary' size='large'>
                        Book Now
                      </Button>
                    </a>
                  </Col>
                  <Col>
                    <ScrollLink
                      to='services-section'
                      smooth={true}
                      duration={500}
                    >
                      <Button shape='round' size='large'>
                        Explore Other Services
                      </Button>
                    </ScrollLink>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={{ order: 1, span: 21 }} xl={{ order: 2, span: 11 }}>
            <Image
              alt={treatment.title}
              preview={false}
              height={
                scSize.width > 1200
                  ? '100%'
                  : scSize.width > 600
                    ? '350px'
                    : '200px'
              }
              width={'100%'}
              style={{
                objectFit: 'cover',
                textAlign: 'center',
                borderRadius: '10px'
              }}
              src={treatment.bannerPic}
            />
          </Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Row
        justify='center'
        gutter={{ xs: 5, md: 50 }}
        style={{ width: '100%' }}
      >
        <Col xs={21} lg={8}>
          <Image
            alt={treatment.infoTitle}
            preview={false}
            height={scSize.width > 1180 ? '350px' : '100%'}
            style={{
              objectFit: 'cover',
              textAlign: 'center',
              borderRadius: '10px'
            }}
            src={treatment.infoPic}
          />
        </Col>
        <Col xs={21} lg={12}>
          <br />
          <span style={{ fontSize: '1.7em', fontFamily: 'serif' }}>
            {treatment.infoTitle}
          </span>
          <br />
          <br />
          <p style={{ fontSize: '1.2em', lineHeight: '2em' }}>
            {treatment.infoTxt}
          </p>
          <a href='/booking'>
            <Button shape='round' type='primary' size='large'>
              Book Your Session
            </Button>
          </a>
        </Col>
      </Row>
      <br />
      <br />
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
            YOUR {treatment.title} JOURNEY AT AZITATTOO BEAUTY
          </Typography.Text>
        </Col>
        <Col span={6} />
      </Row>
      <br />
      <Row align='middle' justify='center' style={{ textAlign: 'center' }}>
        <Col span={6} />
        <Col xs={21} lg={12}>
          <Typography.Text style={{ fontSize: '1.2em' }}>
            Crafting a Tailored Experience from Initial Stroke to Memorable
            Impressions.
          </Typography.Text>
        </Col>
        <Col span={6} />
      </Row>
      <br />
      <Row justify={'center'}>
        <Col span={21}>
          <Row
            justify='space-evenly'
            align='top'
            style={{ textAlign: 'center', width: '100%' }}
            gutter={[width > 767 ? 25 : 0, 5]}
          >
            <Col xs={24} lg={8}>
              <div>
                <Col span={4} />
                <div>
                  <img
                    width={'75px'}
                    height={'75px'}
                    src={'/assets/Pics/journey3.png'}
                  ></img>
                  <h3 style={{ fontSize: '1.5em', fontFamily: 'serif' }}>
                    Consultation
                  </h3>
                  <p
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '2em',
                      textAlign: 'left'
                    }}
                  >
                    {treatment.journey.at(0)}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div>
                <Col span={4} />
                <div>
                  <img
                    width={'75px'}
                    height={'75px'}
                    src={'/assets/Pics/journey2.png'}
                  ></img>
                  <h3 style={{ fontSize: '1.5em', fontFamily: 'serif' }}>
                    Procedure
                  </h3>
                  <p
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '2em',
                      textAlign: 'left'
                    }}
                  >
                    {treatment.journey.at(1)}
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <div>
                <Col span={4} />
                <div>
                  <img
                    width={'75px'}
                    height={'75px'}
                    src={'/assets/Pics/journey1.png'}
                  ></img>
                  <h3 style={{ fontSize: '1.5em', fontFamily: 'serif' }}>
                    Aftercare
                  </h3>
                  <p
                    style={{
                      fontSize: '1.2em',
                      lineHeight: '2em',
                      textAlign: 'left'
                    }}
                  >
                    {treatment.journey.at(2)}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      {treatment.pastWork && (
        <div>
          <Row justify='center'>
            <Col span={18}>
              <h1>{treatment.pastWork.title}</h1>
            </Col>
          </Row>
          <Row justify='center'>
            <Col span={18}>
              <Typography.Text style={{ fontSize: '1.2em' }}>
                {treatment.pastWork.txt}
              </Typography.Text>
            </Col>
          </Row>
          <br />
          <br />
          <Row justify='center'>
            <Col span={18}>
              <div style={contentStyle}>
                <Carousel
                  autoplay
                  waitForAnimate
                  dots={false}
                  speed={850}
                  ref={carouselRef}
                >
                  {treatment.pastWork.pics.map((pic, index) => (
                    <div key={index} onClick={() => showPreview(index)}>
                      <Image
                        src={pic}
                        style={{ width: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
          <br />
          <Row justify='center' style={{ textAlign: 'center' }}>
            <Col span={18}>
              <Button
                shape='circle'
                icon={<LeftOutlined />}
                onClick={() => carouselRef.current.prev()}
                style={{ marginRight: '10px' }}
              />
              <Button
                shape='circle'
                icon={<RightOutlined />}
                onClick={() => carouselRef.current.next()}
              />
            </Col>
          </Row>
        </div>
      )}
      <br />
      <br />
      <div id='services-section'>
        <Services services={fullServices} />
      </div>
      <br />
      <br />
      <br />
      <LocationHours locations={[location1, location2]} />
      <br />
    </>
  );
};

export default Treatment;
