import React from 'react';
import { ServiceProps } from '../Util/types';
import { Card, Checkbox, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { changeService } from '../Redux/features/booking/booking-slice';
import { useAppSelector } from '../Redux/hooks';

const Service: React.FC<ServiceProps> = ({ mainTitle, title, description }) => {
  const dispatch = useDispatch();
  const storeService = useAppSelector((state) => state.booking.service);
  const checked = storeService === mainTitle;
  React.useEffect(() => {
    window.scrollTo({ behavior: 'instant', top: 0 });
    dispatch(changeService(null));
  }, []);
  return (
    <>
      <Typography.Title level={4}>{mainTitle}</Typography.Title>
      <br />
      <Card
        style={{ background: checked ? 'rgb(249, 249, 249)' : 'white' }}
        className='serviceCard'
        onClick={() => {
          if (!checked) {
            dispatch(changeService(mainTitle));
          } else {
            dispatch(changeService(null));
          }
        }}
        title={title}
        extra={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              const checked = e.target.checked;
              if (checked) {
                dispatch(changeService(mainTitle));
              } else {
                dispatch(changeService(null));
              }
            }}
          />
        }
      >
        <p>{description}</p>
      </Card>
    </>
  );
};

export default Service;
