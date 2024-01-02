import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Treatment from '../Components/Treatment';
import { tattooTreatment } from '../Util/constants';

const Tattoo: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/tattoo'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Treatment treatment={tattooTreatment} />
      <br />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
    </div>
  );
};

export default Tattoo;
