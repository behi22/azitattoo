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

export const microBladingWork = {
  title: 'WITNESS THE BROW TRANSFORMATION',
  txt: 'Step into our gallery and feel the transformative journey of our clients. Through the meticulous PhiBrows technique at AziTattoo Beauty, everyday brows in Vancouver are not just enhanced – they become heartfelt stories of renewed confidence, beauty, and self-expression. Witness these touching transformations and imagine the possibilities for yourself.',
  pics: [
    '/assets/Pics/MicroBlading.png',
    '/assets/Pics/LipBlush.png',
    '/assets/Pics/Tattoo.png',
    '/assets/Pics/MicroBlading.png'
  ]
};

export const microBladingJourney = [
  "Your journey begins with a consultation. In a cozy one-on-one session, Azita listens to your brow aspirations, discussing shape, shade, and any unique preferences you might have. Together, we sketch your dream brows, ensuring you're thrilled with the vision before we dive into it.",
  'As you relax in our treatment room, we gently apply a numbing cream to ensure a seamless experience. Using the unique PhiBrows technique, Azita personally ensures each stroke is a testament to precision, crafting brows that feel authentically yours.',
  'Taking care of your new brows post-procedure is essential for optimal results. We guide you through the aftercare process, from avoiding water contact to the importance of not picking at the brows, ensuring your brows heal perfectly and last longer.'
];

export const microBladingTreatment = {
  title: 'MICROBLADING',
  titleUnderline: 'Refining Authentic Brows through Natural Techniques',
  bannerTxt:
    '$350 plus taxes | 90 minutes\n\nMicroblading is a semi-permanent makeup technique designed to recreate natural-looking eyebrows. Using fine needles to deposit pigment into the skin, microblading mimics the appearance of individual brow hairs, filling in sparse areas and creating a fuller, more defined shape.\n\nWhether you have faced hair loss, over-plucking, or simply desire a more defined look, our microblading at AziTattoo Beauty offers a solution tailored to your unique facial features. Your stress-free brow transformation starts here!',
  bannerPic: '/assets/Pics/MicroBlading.png',
  infoTitle: 'Trust Your Brows With Azita',
  infoTxt:
    'As a Beauty Artist in Vancouver, Azita with her years of experience and a keen eye for detail ensures each stroke is precise, creating brows that not only look natural but also enhance your overall facial aesthetics.\n\nHer commitment to quality, hygiene, and client satisfaction sets us apart, making us a trusted choice for microblading in Vancouver.',
  infoPic: '/assets/Pics/MicroBlading.png',
  journey: microBladingJourney,
  pastWork: microBladingWork
};

export const tattooJourney = [
  'Explore tattoo possibilities with a complimentary consultation at AziTattoo Beauty. Azita listens to your ideas, ensuring your inked vision aligns seamlessly with your unique style – all at no cost to you!',
  "Experience the precision of Azita's work. Using top-quality techniques, we bring your vision to life with every stroke. Whether it's bold statements, intricate details, or symbolic designs, our commitment to excellence ensures stunning and lasting results.",
  "Extend the life of your tattoo with AziTattoo Beauty's dedicated aftercare. Our simple instructions guide you through the steps of cleaning, moisturizing, and protecting your new ink. We're here beyond the procedure, supporting you in maintaining your vibrant, self-expressive tattoo for years to come."
];

export const tattooTreatment = {
  title: 'TATTOO',
  titleUnderline:
    'Customized Tattoo Services for a Natural and Long-Lasting Expression',
  bannerTxt:
    'Price and duration depends on your needs. You can book a free consultation for pricing and time.\n\nOur tattoo services go beyond skin deep, offering the mastery of permanent ink to bring your vision to life. Whether you seek bold statements, intricate designs, or meaningful symbols, our skilled artists at AziTattoo Beauty specialize in creating personalized tattoos tailored to your unique style and preferences. Unveil the canvas of your self-expression and embark on a transformative tattoo experience with us.',
  bannerPic: '/assets/Pics/Tattoo.png',
  infoTitle:
    'Amplify Your Aesthetic with Tattoo Services for Lasting Impressions',
  infoTxt:
    'Experience unparalleled artistry at AziTattoo Beauty. Our skilled and passionate tattoo artists transform your visions into captivating, permanent masterpieces. From bold designs to intricate, personalized artwork, we specialize in crafting tattoos that tell your unique story. Dive into the world of ink with us, where every tattoo is a testament to our commitment to excellence.',
  infoPic: '/assets/Pics/Tattoo.png',
  journey: tattooJourney
};

export const lipBlushJourney = [
  'Every lip is unique, and so is our approach. Azita takes the time to understand your desires, helping you select the ideal shade and shape for your lips.',
  'With a steady hand and an eye for detail, Azita meticulously applies the pigment, ensuring each stroke is perfect and tailored to enhance your lips’ natural beauty.',
  'Your journey doesn’t end after the treatment. We provide comprehensive aftercare instructions and support, ensuring your lips heal beautifully and reveal their full potential.'
];

export const lipBlushTreatment = {
  title: 'LIP BLUSH',
  titleUnderline: 'Natural, Long-Lasting Lip Color Tailored for You',
  bannerTxt:
    '$400 plus taxes | 90 minutes\n\nStruggling with uneven or faded lip color? Transform your beauty journey with Azita’s PhiContour Lip Blush at our Vancouver clinic. As a certified Phi-Academy artist, Azita masterfully enhances your lips, providing a burst of color, defining shape, and ensuring symmetry. Say farewell to constant touch-ups and embrace a vibrant, lasting hue tailored just for you.\n\nForget the hassle of daily lip makeup; enjoy a vibrant, long-lasting hue that’s exclusively yours. This is your moment to shine, to carry confidence in your smile, and to feel fabulous every single day. Ready to fall in love with your lips?',
  bannerPic: '/assets/Pics/LipBlush.png',
  infoTitle: 'Enhance Your Lips with Phi-Contour Lip Blush',
  infoTxt:
    "Struggling with uneven lip color, faded edges, or just dreaming of a fuller pout? You're not alone. Many turn to daily makeup routines, but there’s a better way. Azita’s PhiContour Lip Blush addresses these common concerns with precision, delivering vibrant, defined lips tailored to your unique features.\n\nEvery stroke is a step towards perfection, as we tailor the experience to your unique features, ensuring results that are both stunning and natural.",
  infoPic: '/assets/Pics/LipBlush.png',
  journey: lipBlushJourney
};
