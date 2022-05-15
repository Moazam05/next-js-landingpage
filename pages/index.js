import Body from '../components/Body';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import OurFeatures from '../components/OurFeatures';

export default function Home() {
  let heroSectionData = [
    {
      h1: 'Personal Injury Case Management System',
      d: 'Practice base provides a simple solution for managing personal injury cases though with a push of a button.',
      bN: 'Get a Demo !',
      iS: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/large_hero_Img_398552563a.png',
      id: 1,
    },
  ];

  let allBodyData = [
    {
      h1: 'Stay up to date with your cases',
      p1: 'The software provides notifications to the user to be updated with any new updates of the current case.',
      p2: 'This will allow the user to take actions that will affect the state of the case and help the attorney or doctor to take informed decisions.',
      l1: 'Learn more about types of notification',
      img1: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/large_body_Img_One_0802351b8c.png',
      id: 1,
      rowReverse: false,
      background: '#fff',
    },
    {
      h1: 'Stay up to date with your cases',
      p1: 'Features of this application is available on any device where you can easily view your firm informations, catch up on any notifications and manage cases with a click of a button.',
      l1: 'What types of feature will be provided on mobile',
      img1: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/large_mobile_49abd0ce32.png',
      id: 2,
      rowReverse: true,
      background: '#ECF0F5',
    },
    {
      h1: 'Get cases with proper details',
      p1: 'Attorneys can get detailed information of the case including location, people involved and description of the incident.',
      p2: 'This will help the attorneys to know exactly what type of action are they dealing with.',
      l1: 'What features allows you to add informative details',
      img1: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/large_third_3f374a121f.png',
      id: 3,
      rowReverse: false,
      background: '#fff',
    },
    {
      h1: 'Manage your firm from home',
      p1: 'You can now manage your firm with little to no effort in the comfort of your home.',
      p2: 'The automated facilities provided by practice base makes the process effortless for both attorney and doctor.',
      l1: 'Learn more about types of notification',
      img1: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/large_third_3f374a121f.png',
      id: 4,
      rowReverse: true,
      background: '#ECF0F5',
    },
  ];

  return (
    <Layout>
      {heroSectionData.map((ele) => (
        <div key={ele.id}>
          <HeroSection
            heading={ele.h1}
            description={ele.d}
            buttonName={ele.bN}
            imgSrc={ele.iS}
          />
        </div>
      ))}

      {allBodyData.map((ele, index) => (
        <div key={index}>
          <Body
            heading={ele.h1}
            description={ele.p1}
            descriptiontwo={ele.p2}
            link={ele.l1}
            image={ele.img1}
            rowReverse={ele.rowReverse}
            background={ele.background}
          />
        </div>
      ))}

      <OurFeatures />
    </Layout>
  );
}
