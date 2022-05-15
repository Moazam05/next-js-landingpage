import Banner from '../Banner';
import HeroSection from '../HeroSection';
import FeatureCard from './FeatureCard';

let cardDate = [
  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20243.png',
    title: 'Case Initiation',
    paragraph:
      ' Accident details such as date, time, exact location, level of injury can be added after a case is initiated.',
  },
  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20241.png',
    title: 'Insurance Information',
    paragraph:
      'If a patient is covered by insurance, all relevant details of insurance and adjuster can be added.',
  },

  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20242.png',
    title: 'Appointments Scheduling',
    paragraph:
      'If a patient is covered by insurance, all relevant details of insurance and adjuster can be added',
  },
  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20244.png',
    title: 'Digital Signatures',
    paragraph:
      'Attorneys and paralegals can digitally sign documents and share with each other',
  },
  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20245.png',
    title: 'Accident details',
    paragraph:
      'Accident details such as date, time, exact location, level of injury can be added after a case is initiated.',
  },
  {
    img: 'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20241.png',
    title: 'Document Sharing',
    paragraph:
      'Medical records, accident documents, clinical notes can be shared between legal team and health providers',
  },
];

function Feature() {
  console.log(cardDate);
  return (
    <>
      <div className='feature-wrap'>
        <HeroSection
          heading={'Practice Base Features'}
          description={
            'With some of the crucial features practice base allows it’s users to seamlessly perform hard to manage tasks!'
          }
          buttonName={'Get a Demo !'}
          imgSrc={
            'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Group%20rob.png'
          }
        />

        <div className='background-f'>
          <div className='card-f'>
            <div className='container'>
              <div className='row'>
                {cardDate.map((item, index) => {
                  return (
                    <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
                      <div className='feat-feature'>
                        <div className='center-card-f'>
                          <FeatureCard
                            title={item.title}
                            paragraph={item.paragraph}
                            imgName={item.img}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Banner
          title={
            'Try our Demo today to see how Practice base will help you to clear cases faster'
          }
          buttonText={'Get a Demo !'}
        />
      </div>
    </>
  );
}
export default Feature;
