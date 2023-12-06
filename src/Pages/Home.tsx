import React from 'react';
import { changeRoute } from '../Redux/features/app/app-slice';
import { useDispatch } from 'react-redux';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Services from '../Components/BookingParts/Services';
import { fullServices } from '../Util/constants';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Services services={fullServices} />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
      Hello World.
    </div>
  );
};

export default Home;
