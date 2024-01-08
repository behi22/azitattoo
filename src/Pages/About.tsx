import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRoute } from '../Redux/features/app/app-slice';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import BioParagraph from '../Components/BioParagraph';
import Bio from '../Components/Home/Bio';
import Services from '../Components/Services';
import { fullServices } from '../Util/constants';
import LocationHours from '../Components/LocationHours';
import { location1, location2 } from '../Util/constants';

const About: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/about'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <BioParagraph />
      <br />
      <br />
      <Bio imgSource='/assets/Pics/azi.jpeg' />
      <br />
      <br />
      <div id='services-section'>
        <Services services={fullServices} />
      </div>
      <br />
      <br />
      <br />
      <LocationHours locations={[location1, location2]} />
      <br />
      <FloatButton.BackTop
        style={{ insetInlineStart: '3%', bottom: 25, left: 35 }}
        icon={<UpOutlined style={{ color: 'white' }} />}
      />
    </div>
  );
};

export default About;
