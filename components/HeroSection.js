import { useRouter } from 'next/router';
import Link from 'next/link';

function HeroSection({ heading, description, buttonName, imgSrc, link }) {
  const router = useRouter();

  return (
    <>
      <div class='heroWrap'>
        <div class='container col-xxl-8 px-4 py-5 mbl'>
          {/* <div class='row flex-lg-row-reverse align-items-center g-5 py-5'> */}
          <div class='row flex-lg-row-reverse align-items-center py-5'>
            <div class='col-12 col-sm-10 col-lg-6'>
              {/* <div class='col-10 col-sm-10 col-lg-6'> */}
              <img
                src={imgSrc}
                class='d-block mx-lg-auto img-fluid'
                alt='not found'
                width='700'
                height='500'
                loading='lazy'
              />
            </div>

            <div class='col-lg-6 mbl-hs'>
              <h1 class='display-5 mb-3'>{heading}</h1>
              {/* <p class='lead'>{description}</p> */}
              <p className='description-hero-sct'>{description}</p>

              <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  class='btn btn-primary btn-lg px-4 me-md-2 hs'
                  onClick={() => router.push('/demo')}
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
