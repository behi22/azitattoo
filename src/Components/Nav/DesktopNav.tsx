import { Menu, MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { items } from './AntNav';

const styling = {
  fontSize: '1.175em',
  borderBottom: 'none',
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

const DesktopNav: React.FC<{
  routeOnMount: string;
}> = ({ routeOnMount }) => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    const route = e.key;
    navigate(route);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[routeOnMount]}
      mode='horizontal'
      items={items}
      style={styling}
      className='desktopMenu'
    ></Menu>
  );
};

export default DesktopNav;
