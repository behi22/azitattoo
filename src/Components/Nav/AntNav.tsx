import React from 'react';
import { Button, Col, Image, MenuProps, Row, Switch } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useAppSelector } from '../../Redux/hooks';
import { changeRoute } from '../../Redux/features/app/app-slice';
import { useDispatch } from 'react-redux';

export const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/'
  },
  {
    label: 'Services',
    key: 'services',
    children: [
      {
        label: 'Micro Blading',
        key: '/microblading'
      },
      {
        label: 'Lip Blush',
        key: '/lipblush'
      },
      {
        label: 'Tattoo',
        key: '/tattoo'
      }
    ]
  },
  {
    label: 'About',
    key: '/about'
  },
  {
    label: 'Contact',
    key: '/contact'
  }
];

const AntNav: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRoute = useAppSelector((state) => state.app.route);
  return (
    <Row
      justify={'space-between'}
      align='middle'
      style={{
        borderBottom: '1px solid lightgray',
        height: '120px'
      }}
    >
      {/* LOGO */}
      <Col
        xs={{ span: 8, order: 2 }}
        sm={{ span: 8, order: 2 }}
        md={{ span: 4, order: 1 }}
      >
        <Row justify={'center'}>
          <Link
            to={'/'}
            onClick={() => {
              dispatch(changeRoute('/'));
            }}
          >
            <Image
              width={100}
              src='./assets/logo.png'
              preview={false}
              style={{ borderRadius: '100%' }}
            />
          </Link>
        </Row>
      </Col>
      {/* NAV */}
      <Col
        xs={{ span: 8, order: 1 }}
        sm={{ order: 1 }}
        md={{ span: 16, order: 2 }}
      >
        <Row align={'middle'} justify={'space-evenly'}>
          {/* MOBILE NAV */}
          <Col sm={23} md={1}>
            <MobileNav routeOnMount={currentRoute} />
          </Col>
          {/* Desktop NAV */}
          <Col sm={1} md={23}>
            <Row justify={'center'}>
              <DesktopNav routeOnMount={currentRoute} />
            </Row>
          </Col>
        </Row>
      </Col>
      {/* book button */}
      <Col
        xs={{ span: 8, order: 3 }}
        sm={{ span: 8, order: 3 }}
        md={{ span: 4, order: 3 }}
      >
        <Row justify={'center'}>
          <Button
            type='primary'
            onClick={() => {
              navigate('/booking');
            }}
            size='middle'
          >
            Book Now
          </Button>
        </Row>
      </Col>
    </Row>
  );
};

export default AntNav;
