import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { Button, Col, FloatButton, Row, Steps, Tag, Tooltip } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { ServiceProps } from '../Util/types';
import Service from '../Components/BookingParts/Service';
import { useAppSelector } from '../Redux/hooks';
import { isServiceChosen } from '../Util/util';
import DateAndTime from '../Components/BookingParts/DateAndTime';
import BookingForm from '../Components/BookingParts/BookingForm';

const Booking: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/booking'));
    window.scrollTo({ behavior: 'instant', top: 0 });
  }, []);
  const [currentStep, setCurrentStep] = React.useState(0);
  const booking = useAppSelector((state) => state.booking);
  const { service, date, time } = booking;

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const stepItems = [
    {
      title: 'Service',
      description: (
        <Row gutter={[0, 10]}>
          <Col span={24}>Select Your Service</Col>
          <Col span={24}>
            {currentStep > 0 && service && <Tag>{service}</Tag>}
          </Col>
        </Row>
      )
    },
    {
      title: 'Date and Time',
      description: (
        <Row gutter={[0, 10]}>
          <Col span={24}>Select Date and Time</Col>
          <Col span={24}>
            {currentStep > 1 && date && time && (
              <Tag>
                {date}, {time}
              </Tag>
            )}
          </Col>
        </Row>
      )
    },
    {
      title: 'Details',
      description: 'Enter Your Details'
    }
  ];

  const services: ServiceProps[] = [
    {
      mainTitle: 'Consultation',
      title: 'Free Consultation',
      description:
        '$0 - 15 minutes (We will call you on the date and time specified by you)'
    },
    {
      mainTitle: 'Microblading',
      title: 'Microblading Full Session',
      description: '$350 - 90 minutes'
    },
    {
      mainTitle: 'Lip Blush',
      title: 'Lip Blush Full Session',
      description: '$400 - 90 minutes'
    },
    {
      mainTitle: 'Tattoo',
      title: 'Tattoo Full Session',
      description:
        'Price and duration depends on your needs. You can book a free consultation for pricing and time.'
    }
  ];

  return (
    <div
      style={{ marginBottom: '40px', marginTop: '40px', minHeight: '100vh' }}
    >
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
      <Row justify={'center'} gutter={[0, 50]}>
        <Col xs={24} sm={23} md={20}>
          <Steps current={currentStep} items={stepItems} />
        </Col>
        <Col xs={21} sm={20} md={18} lg={16}>
          <Row justify={'center'}>
            {currentStep === 0 &&
              services.map((service) => (
                <Col span={24} key={service.mainTitle}>
                  <Service
                    mainTitle={service.mainTitle}
                    title={service.title}
                    description={service.description}
                  />
                </Col>
              ))}
            {currentStep === 1 && <DateAndTime />}
            {currentStep == 2 && <BookingForm />}
          </Row>
        </Col>
        <Col xs={21} sm={18}>
          <Row justify={'center'} style={{ width: '100%' }}>
            {currentStep > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Back
              </Button>
            )}
            {currentStep < stepItems.length - 1 && (
              <Tooltip
                title={
                  currentStep === 0
                    ? isServiceChosen([service])
                      ? ''
                      : 'Select option(s) to proceed'
                    : isServiceChosen([date, time])
                      ? ''
                      : 'Select option(s) to proceed'
                }
              >
                <Button
                  type='primary'
                  onClick={() => next()}
                  disabled={
                    currentStep === 0
                      ? !isServiceChosen([service])
                      : !isServiceChosen([date, time])
                  }
                >
                  Continue
                </Button>
              </Tooltip>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Booking;
