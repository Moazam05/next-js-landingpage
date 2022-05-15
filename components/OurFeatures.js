import Link from 'next/link';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Banner from './Banner';

function OurFeatures() {
  return (
    <>
      <div class='container px-4 py-5' id='hanging-icons'>
        <div className='heading-of'>{'Check out our features'}</div>
        <div className='para-of'>
          {'These are some important features that we provide'}
        </div>
        <div class='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div class='col d-flex align-items-start'>
            <div class='icon-square text-dark flex-shrink-0 me-3'>
              <img
                src='https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/home.png'
                alt='home-icon'
              />
            </div>
            <div>
              <h3>{'Appointments Scheduling'}</h3>
              <p className='paragraph-our-feat'>
                {
                  'If a patient is covered by insurance, all relevant details of insurance and adjuster can be added.'
                }
              </p>
              <a href='/feature' class='icon-link'>
                {'Read more'}
                <ArrowForwardIosIcon />
              </a>
            </div>
          </div>
          <div class='col d-flex align-items-start'>
            <div class='icon-square  text-dark flex-shrink-0 me-3'>
              <img
                src='https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/accident.png'
                alt='accident-icon'
              />{' '}
            </div>
            <div>
              <h3>{'Accident details'}</h3>
              <p className='paragraph-our-feat'>
                {
                  'Accident details such as date, time, exact location, level of injury can be added after a case is initiated.'
                }
              </p>
              <a href='/feature' class='icon-link'>
                {'Read more'}
                <ArrowForwardIosIcon />
              </a>
            </div>
          </div>
          <div class='col d-flex align-items-start'>
            <div class='icon-square text-dark flex-shrink-0 me-3'>
              <img
                src='https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/insurance.png'
                alt='insurance-icon'
              />
            </div>
            <div>
              <h3>{'Insurance Information'}</h3>
              <p className='paragraph-our-feat'>
                {
                  ' If a patient is covered by insurance, all relevant details of insurance and adjuster can be added.'
                }
              </p>
              <a href='/feature' class='icon-link'>
                {'Read more'}
                <ArrowForwardIosIcon />
              </a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='button-of'>
              <Link href='/feature'>{'View All Features'}</Link>
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
    </>
  );
}

export default OurFeatures;
