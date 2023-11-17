import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const LipBlush: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/lipblush'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
      LipBlush
    </div>
  );
};

export default LipBlush;
