import { Menu, MenuProps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DesktopNav: React.FC<{
  routeOnMount: string;
}> = ({ routeOnMount }) => {
  const navigate = useNavigate();

  const items: MenuProps['items'] = [
    // {
    //   label: 'Portfolio',
    //   key: 'portfolio'
    // },
    // {
    //   label: 'Contact and About Us',
    //   key: 'contact-about'
    // },
    // {
    //   label: 'Careers',
    //   key: 'careers'
    // },
    // {
    //   label: 'Pricing',
    //   key: 'pricing'
    // }
  ];

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
    ></Menu>
  );
};

export default DesktopNav;
