import { Button, Col, Result, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmedBooking: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Row style={{ minHeight: '100vh', marginTop: '50px' }}>
      <Col span={24}>
        <Result
          status='success'
          title='Successfully Booked Your Appointment!'
          subTitle={
            <>
              <p>
                Thank you for booking an appointment with us! We look forward to
                seeing you soon!
              </p>
              <p>
                If you wish to cancel your appointment, we kindly ask you to do
                so at least 24 hours before your appointment.
              </p>
            </>
          }
          extra={[
            <Button
              type='primary'
              key='homepage'
              onClick={() => {
                navigate('/');
              }}
            >
              Back to Homepage
            </Button>,
            <Button
              key='booking'
              onClick={() => {
                navigate('/booking');
              }}
            >
              Book more Appointments
            </Button>
          ]}
        />
      </Col>
    </Row>
  );
};

export default ConfirmedBooking;
