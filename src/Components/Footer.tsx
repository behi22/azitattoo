import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useAppSelector } from '../Redux/hooks';

const Footer: React.FC = () => {
  return (
    <Row align={'middle'}>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Typography.Text>Copyright Azi Tattoo Beauty 2023</Typography.Text>
      </Col>
    </Row>
  );
};

export default Footer;
