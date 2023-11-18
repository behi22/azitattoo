import {
  DislikeOutlined,
  LikeOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Col, Result, Row, Spin } from 'antd';
import React from 'react';
import { deleteDocument } from '../Util/util';

const CancelBooking: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [deleted, setDeleted] = React.useState(false);
  React.useEffect(() => {
    const effect = async () => {
      const url = window.location.href;
      const id = url?.split('?')?.pop();
      try {
        await deleteDocument('bookings', id);
        setDeleted(true);
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
