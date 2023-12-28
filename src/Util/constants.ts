export const times = ['11:00 am', '1:00 pm', '3:00 pm'];

export const consultTimes = [
  '10:00 am',
  '10:30 am',
  '4:00 pm',
  '4:30 pm',
  '5:00 pm'
];

export const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const location1 = {
  id: 1,
  name: 'Vancouver',
  lat: 49.27747,
  lng: -123.1296,
  hours: [
    'Monday      11:00 A.M. - 6:00 P.M.',
    'Tuesday     11:00 A.M. - 6:00 P.M.',
    'Wednesday   11:00 A.M. - 6:00 P.M.'
  ],
  address: '642 - 1281 Hornby Street, Vancouver, BC, V6Z 1W4',
  link: 'https://maps.app.goo.gl/6H1hUCD28pLzsogy9?g_st=iw'
};

export const location2 = {
  id: 2,
  name: 'Burnaby',
  lat: 49.28108,
  lng: -123.01763,
  hours: [
    'Thursday    11:00 A.M. - 6:00 P.M.',
    'Friday      11:00 A.M. - 6:00 P.M.',
    'Saturday    11:00 A.M. - 6:00 P.M.'
  ],
  address: '105 - 3939 Hastings Street, Burnaby, BC, V5C 2H8',
  link: 'https://maps.app.goo.gl/HpNLyZTNzw8UmZXd6?g_st=iw'
};

export const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

export const initialCenter = {
  lat: location1.lat,
  lng: location1.lng
};

export const initialZoom = {
  num: 13
};
export const fullServices = [
  {
    id: 0,
    img: '/assets/Pics/MicroBlading.png',
    title: 'MicroBlading',
    button: 'Perfect Brows Awaits',
    description:
      'Revitalize your look with Microblading! Our expert technique crafts natural, long-lasting eyebrows tailored to your features. Effortlessly redefine your beauty with precision and personalized perfection.',
    link: '/MicroBlading'
  },
  {
    id: 1,
    img: '/assets/Pics/LipBlush.png',
    title: 'LipBlush',
    button: 'Luscious Lips Awaits',
    description:
      'Revel in radiant lips with our Lip Blush services. Our skilled artists enhance your natural lip color, providing a subtle yet stunning, semi-permanent enhancement tailored to your unique style.',
    link: '/LipBlush'
  },
  {
    id: 2,
    img: '/assets/Pics/Tattoo.png',
    title: 'Tattoo',
    button: 'Ink Your Vision',
    description:
      'Elevate your style with our Tattoo services. Our skilled artists create personalized, lasting designs, bringing your vision to life with precision and expert craftsmanship.',
    link: '/Tattoo'
  }
];

export const fullBenefits = [
  {
    id: 1,
    title: 'PHI-ACADEMY CERTIFIED EXPERTISE',
    text: 'Discover beauty with confidence. Our Phi-Academy certification ensures you are in expert hands.',
    icon: '/assets/Pics/Cert.png'
  },
  {
    id: 2,
    title: 'FREE CONSULTATION & A PLAN MADE JUST FOR YOU',
    text: 'Have questions? Get clarity in a free consultation with Azita. It is personal, it is about you.',
    icon: '/assets/Pics/Consultation.png'
  },
  {
    id: 3,
    title: 'CUTTING-EDGE TECHNOLOGY',
    text: 'We offer Candela™ GentleMax Pro systems for our laser treatments. Beyond cutting-edge technology, we tailor treatments to celebrate your unique beauty.',
    icon: '/assets/Pics/Tech.png'
  },
  {
    id: 4,
    title: 'PROLONG YOUR BEAUTY WITH TOUCH UPS',
    text: 'In addition to our personalzied after-care plans, our touch-up treatments ensure your permanent makeup lasts longer with you as the first day.',
    icon: '/assets/Pics/Beauty.png'
  }
];
