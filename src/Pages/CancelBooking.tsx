import {
  DislikeOutlined,
  LikeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Col, Result, Row, Spin } from 'antd';
import React from 'react';
import { deleteDocument, fetchSingleDocument, getFullDate } from '../Util/util';
import axios from 'axios';

const CancelBooking: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [deleted, setDeleted] = React.useState(false);
  React.useEffect(() => {
    const effect = async () => {
      const url = window.location.href;
      const id = url?.split('?')?.pop();
      try {
        const doc = (await fetchSingleDocument('bookings', id)).data();
        const { email, service, time, date } = doc;
        const data = {
          email,
          time,
          date: getFullDate(date),
          service,
          name
        };
        await deleteDocument('bookings', id);
        setDeleted(true);
        try {
          axios.post('https://app-acz3khlqkq-uc.a.run.app/sendemail', {
            data,
            type: 'sendgrid',
            appName: 'AZITATTOO_CANCEL'
          });
          axios.post('https://app-acz3khlqkq-uc.a.run.app/sendemail', {
            data: { ...data, useDataEmailTo: true },
            type: 'sendgrid',
            appName: 'AZITATTOO_CANCEL_CLIENT'
          });
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        setDeleted(false);
      } finally {
        setLoading(false);
      }
    };
    effect();
  }, []);
  return loading ? (
    <Spin
      indicator={
        <div
          style={{
            minHeight: '70vh',
            paddingLeft: '47.5vw',
            paddingTop: '30vh'
          }}
        >
          <LoadingOutlined style={{ fontSize: 75 }} spin />
        </div>
      }
    />
  ) : deleted ? (
    <Row style={{ minHeight: '100vh', marginTop: '50px' }}>
      <Col span={24}>
        <Result
          icon={<LikeOutlined />}
          status='info'
          title='Successfully Cancelled Your Appointment!'
        />
      </Col>
    </Row>
  ) : (
    <Row style={{ minHeight: '100vh', marginTop: '50px' }}>
      <Col span={24}>
        <Result
          icon={<DislikeOutlined />}
          status='info'
          title='Failed to Cancel Your Appointment!'
          subTitle={<p>We're sorry, Something went wrong on our side! </p>}
        />
      </Col>
    </Row>
  );
};

export default CancelBooking;
