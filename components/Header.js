import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <>
      <nav class='navbar fixed-top navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid' style={{ padding: '0px 20px' }}>
          <Link class='navbar-brand' href='/'>
            <div className='branding-h'>
              <img
                src='https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Logo.png'
                alt=''
                width='30'
                height='24'
                class='d-inline-block align-text-top'
              />
              <span class='pract-h'>Practice</span>
              <span className='base-h'>Base</span>
            </div>
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item f'>
                <Link class='nav-link' href='/'>
                  Home
                </Link>
              </li>
              <li class='nav-item s'>
                <Link class='nav-link' href='/feature'>
                  Features
                </Link>
              </li>
              <li class='nav-item t'>
                <Link class='nav-link' href='/contact'>
                  Contact
                </Link>
              </li>
              <li class='nav-item t'>
                <Link class='nav-link' href='/about'>
                  About
                </Link>
              </li>
            </ul>

            {/* <button
                  type='button'
                  class='btn btn-primary btn-lg px-4 me-md-2 hs'
                  onClick={() => router.push('/demo')}
                >
              Get a Demo !
                </button> */}
            <button
              class='btn btn-outline-success'
              onClick={() => router.push('/demo')}
              type='submit'
            >
              Get a Demo !
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
