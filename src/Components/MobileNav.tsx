import React from 'react';
import {
  BookOutlined,
  DollarOutlined,
  HomeOutlined,
  MenuOutlined,
  SolutionOutlined,
  TrademarkCircleFilled
} from '@ant-design/icons';
import { Button, Drawer, MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const MobileNav: React.FC<{
  routeOnMount: string;
}> = ({ routeOnMount }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const getItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
      type
    } as MenuItem;
  };

  const items: MenuProps['items'] = [
    getItem(
      'Pages',
      'grp',
      null,
      [
        getItem('Home', '/', <HomeOutlined />),
        getItem('Portfolio', 'portfolio', <BookOutlined />),
        getItem('Pricing', 'pricing', <DollarOutlined />),
        getItem('Careers', 'careers', <SolutionOutlined />)
      ],
      'group'
    ),
    getItem('Contact and About Us', 'contact-about', <TrademarkCircleFilled />)
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    const route = e.key;
    setOpen(false);
    navigate(route);
  };

  return (
    <div className='mobile-nav-content'>
      <Button
        type='primary'
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        placement='left'
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <Menu
          onClick={onClick}
          style={{ width: '100%' }}
          selectedKeys={[routeOnMount]}
          mode='inline'
          items={items}
        />
      </Drawer>
    </div>
  );
};

export default MobileNav;
