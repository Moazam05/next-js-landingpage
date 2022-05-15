import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout title='About Personal Injury'>
      <div className='row'>
        <div className='col-sm-12'>
          <div
            className='my-5'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItem: 'center',
            }}
          >
            <lottie-player
              src='https://assets1.lottiefiles.com/packages/lf20_6x3nzzab.json'
              background='transparent'
              speed='1'
              loop
              style={{ width: '400px', height: '400px' }}
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
