import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import { location1, location2 } from '../Util/constants';
import LocationHours from '../Components/LocationHours';

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/contact'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <LocationHours locations={[location1, location2]}></LocationHours>
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
    </div>
  );
};

export default Contact;
