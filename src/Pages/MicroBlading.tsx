import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Treatment from '../Components/Treatment';
import { microBladingTreatment } from '../Util/constants';

const MicroBlading: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/microblading'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Treatment treatment={microBladingTreatment} />
      <br />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
    </div>
  );
};

export default MicroBlading;
