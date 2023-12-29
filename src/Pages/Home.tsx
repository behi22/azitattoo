import React from 'react';
import { changeRoute } from '../Redux/features/app/app-slice';
import { useDispatch } from 'react-redux';
import { FloatButton } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import Banner from '../Components/Home/Banner';
import Benefits from '../Components/Home/Benefits';
import { fullBenefits } from '../Util/constants';
import Bio from '../Components/Home/Bio';
import Services from '../Components/Services';
import { fullServices } from '../Util/constants';
import LocationHours from '../Components/LocationHours';
import { location1, location2 } from '../Util/constants';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(changeRoute('/'));
  }, []);
  return (
    <div style={{ minHeight: '100vh' }}>
      <Banner />
      <br />
      <Benefits benefits={fullBenefits} />
      <br />
      <Bio />
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

export default Home;
