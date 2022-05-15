import Link from 'next/link';
// commit 

function Footer() {
  return (
    <>
      <div className='footer-f'>
        {/* <footer class='text-center text-lg-start bg-light text-muted'> */}
        <footer class='text-center text-lg-start text-muted'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='practice-f'>
                  <a class='navbar-brand' href='#'>
                    <img
                      src='https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/b.png'
                      alt=''
                      width='30'
                      height='24'
                      class='d-inline-block align-text-top'
                    />
                    <span class='pract-h f'>Practice</span>
                    <span className='base-h f'>Base</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section class=''>
            <div class='container text-center text-md-start mt-5'>
              <div class='row mt-3'>
                <div class='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <h6 class=' fw-bold mb-4'>About Us</h6>
                  <p>
                    Practice base provides a simple solution for managing
                    personal injury cases though with a push of a button.
                  </p>
                </div>

                <div class='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <div className='link-f'>
                    <h6 class=' fw-bold mb-4'>Product</h6>
                    <p>
                      <Link href='#!' class='text-reset'>
                        Features
                      </Link>
                    </p>
                    <p>
                      <Link href='#!' class='text-reset'>
                        Platform
                      </Link>
                    </p>
                    <p>
                      <Link href='#!' class='text-reset'>
                        Pricing
                      </Link>
                    </p>
                  </div>
                </div>

                <div class='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <div className='link-f'>
                    <h6 class=' fw-bold mb-4'>Account</h6>
                    <p>
                      <Link href='#!' class='text-reset'>
                        My Account
                      </Link>
                    </p>
                    <p>
                      <Link href='#!' class='text-reset'>
                        Create Account
                      </Link>
                    </p>
                  </div>
                </div>

                <div class='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                  <h6 class=' fw-bold mb-4'>Contact us</h6>

                  <p>Practicebase@gmail.com</p>

                  <p>+ 01 234 567 88</p>
                  <h6 class=' fw-bold mb-4'>Links</h6>

                  <p className="spa-f">Terms and Conditions</p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Footer;
