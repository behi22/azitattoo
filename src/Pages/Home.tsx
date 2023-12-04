import React from 'react';
import { changeRoute } from '../Redux/features/app/app-slice';
import { useDispatch } from 'react-redux';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Services from '../Components/BookingParts/Services';

// 3 services for testing purposes
const SER_SAMPLE = [
  {
    id: 0,
    img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'MicroBlading',
    button: 'Perfect Brows Awaits',
    description:
      'Revitalize your look with Microblading! Our expert technique crafts natural, long-lasting eyebrows tailored to your features. Effortlessly redefine your beauty with precision and personalized perfection.',
    link: '/MicroBlading'
  },
  {
    id: 1,
    img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'LipBlush',
    button: 'Luscious Lips Awaits',
    description:
      'Revel in radiant lips with our Lip Blush services. Our skilled artists enhance your natural lip color, providing a subtle yet stunning, semi-permanent enhancement tailored to your unique style.',
    link: '/LipBlush'
  },
  {
    id: 2,
    img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'Tattoo',
    button: 'Ink Your Vision',
    description:
      'Elevate your style with our Tattoo services. Our skilled artists create personalized, lasting designs, bringing your vision to life with precision and expert craftsmanship.',
    link: '/Tattoo'
  }
];

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Services
        // adding the services here
        services={SER_SAMPLE}
      />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
      Hello World.
    </div>
  );
};

export default Home;
