import React from 'react';
import { useRouter } from 'next/router';

const Banner = ({ title, buttonText }) => {
  const router = useRouter();

  return (
    <>
      <div className='back-of'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-2 col-lg-2'></div>
            <div className='col-sm-8 col-lg-8'>
              <div className='demo-of'>
                <div className='w-banner'>{title}</div>
              </div>
            </div>
            <div className='col-sm-2 col-lg-2'></div>

            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
              <div className='button-get-of'>
                <button
                  type='button'
                  class='btn btn-primary btn-lg px-4 me-md-2'
                  onClick={() => router.push('/demo')}
                >
                  {buttonText}
                </button>
              </div>
            </div>
            <div className='col-sm-3'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
