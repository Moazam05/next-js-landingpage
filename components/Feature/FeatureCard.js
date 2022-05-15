import React from 'react';

const FeatureCard = ({ imgName, title, paragraph }) => {
  return (
    <>
      <div class='card'>
        <div class='card-body'>
          <div className='img-f'>
            <img src={imgName} alt='not found' />
          </div>
          <div className='title-f'>{title}</div>
          <div className='text-f'>{paragraph}</div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
