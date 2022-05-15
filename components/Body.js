import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const heading1 = process.env.BODY_HEADING_ONE;
const para1 = process.env.BODY_PARA_ONE;
const para2 = process.env.BODY_PARA_TWO;
const link1 = process.env.BODY_LINK_ONE;
const img1 = process.env.BODY_IMAGE_ONE;

const heading2 = process.env.BODY_HEADING_TWO;
const Secpara2 = process.env.BODY_SECTION_TWO_PARA_ONE;
const link2 = process.env.BODY_LINK_TWO;
const img2 = process.env.BODY_IMAGE_TWO;

function Body({
  heading,
  description,
  descriptiontwo,
  link,
  image,
  rowReverse,
  background,
}) {
  // let heroElements = [
  //   {
  //     heading: heading1,
  //     description: para1,
  //     descriptiontwo: para2,
  //     link: link1,
  //     image: img1,
  //     rowReverse: false,
  //   },
  //   {
  //     heading: heading2,
  //     description: Secpara2,
  //     link: link2,
  //     image: img2,
  //     rowReverse: true,
  //   },
  //   {
  //     heading: 'Get cases with proper details',
  //     description:
  //       'Attorneys can get detailed information of the case including location, people involved and description of the incident.',
  //     descriptiontwo:
  //       'This will help the attorneys to know exatly what type of action are they dealing with.',
  //     link: 'What features allows you to add informative details',
  //     image:
  //       'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Screenshot%202021-07-28%20at%204.26.23%20PM.png',
  //     rowReverse: false,
  //   },
  //   {
  //     heading: 'Manage your firm from home',
  //     description:
  //       'You can now manage your firm with little to no effort in the comfort of your home.',
  //     descriptiontwo:
  //       'The automated facilities provided by practice base makes the process effortless for both attorney and doctor.',
  //     link: 'Firm managing features',
  //     image:
  //       'https://new-bucket-6632d21c.s3.us-east-2.amazonaws.com/Screenshot%202021-07-28%20at%204.26.23%20PM.png',
  //     rowReverse: true,
  //   },
  // ];
  console.log('ajhsdbjahsd', rowReverse);
  return (
    <>
      <div className='bodyWrap'>
        {/* Desktop Show Div */}
        <div className='desk-show-body'>
          <div className='background-body' style={{ background: background }}>
            <div class='container col-xxl-8 px-4 py-5'>
              {/* {heroElements.map((ele, index) => ( */}
              <div
                // class='row flex-lg-row-reverse align-items-center g-5 py-5'
                class='row align-items-center g-5 py-5 mar-by'
                style={{
                  flexDirection: rowReverse ? '' : 'row-reverse',
                  // , background:"orange", color:"white"
                }}
              >
                {/* <div class='col-10 col-sm-8 col-lg-6'> */}
                <div class='col-12 col-sm-8 col-lg-6'>
                  <img
                    src={image}
                    class='d-block mx-lg-auto img-fluid'
                    alt='Bootstrap Themes'
                    width='700'
                    height='500'
                    loading='lazy'
                  />
                </div>
                <div class='col-lg-6'>
                  {/* <h1 class='display-5 fw-bold lh-1 mb-3'>{ele.heading}</h1> */}
                  <h2>{heading}</h2>
                  {/* <p class='lead'>{description}</p>
                  <p class='lead'>{descriptiontwo}</p> */}
                  <p class='.paragraph-our-feat'>{description}</p>
                  <p class='.paragraph-our-feat'>{descriptiontwo}</p>
                  <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
                    <a
                      href='#'
                      class='icon-link'
                      // style={{fontSize:"18px"}}
                    >
                      {link}
                      <ArrowForwardIosIcon />
                    </a>
                    {/* <div className='link'>
                      <Link href='/'>{ele.link}</Link>
                      <ArrowForwardIosIcon fontSize='small' />
                    </div> */}
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
        {/* Mobile show Div */}
        <div class='mbl-show-body'>
          <div class='container col-xxl-8 px-4 py-5'>
            {/* {heroElements.map((ele, index) => ( */}
            <div class='row align-items-center g-5 py-5 mar-by'>
              {/* <div class='col-10 col-sm-8 col-lg-6'> */}
              <div class='col-12 col-sm-8 col-lg-6'>
                <img
                  src={image}
                  class='d-block mx-lg-auto img-fluid'
                  alt='Bootstrap Themes'
                  width='700'
                  height='500'
                  loading='lazy'
                />
              </div>
              <div class='col-lg-6'>
                {/* <h1 class='display-5 fw-bold lh-1 mb-3'>{ele.heading}</h1> */}
                <h2>{heading}</h2>
                <p class='.paragraph-our-feat'>{description}</p>
                <p class='.paragraph-our-feat'>{descriptiontwo}</p>
                <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
                  <a href='#' class='icon-link'>
                    {link}
                    <ArrowForwardIosIcon />
                  </a>
                  {/* <div className='link'>
                      <Link href='/'>{ele.link}</Link>
                      <ArrowForwardIosIcon fontSize='small' />
                    </div> */}
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
