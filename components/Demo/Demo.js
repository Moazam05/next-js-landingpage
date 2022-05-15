import React from 'react';
import { InlineWidget } from 'react-calendly';

const Demo = () => {
  return (
    <>
      <div className='wrap-demo'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='heading-d'>Request A Free Demo!</div>
            </div>
          </div>
        </div>

        <div className='col-sm-12'>
          <div className='para-d'>
            Book your demo today and experience how you can grow your firm. A
            software <br /> made to make the process of intaking patients to
            resolving settlements a breeze.
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='calender-d'>
              <InlineWidget url='https://calendly.com/abd-ali000777/call-me' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
