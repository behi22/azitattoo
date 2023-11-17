import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NoPage: React.FC<{ overrideText?: string }> = ({ overrideText }) => {
  const navigate = useNavigate();
  return (
    <Result
      status='404'
      title='404'
      subTitle={overrideText || 'Sorry, the page you visited does not exist.'}
      extra={
        <Button
          type='primary'
          onClick={() => {
            navigate('/');
          }}
        >
          Go To Home Page
        </Button>
      }
    />
  );
};

export default NoPage;
