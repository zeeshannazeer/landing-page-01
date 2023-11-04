import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import FooterMenus, { FooterMenuData } from './components/FooterMenus';

const App: React.FC = () => {
  const data = [
    {
      h1: "Welcome to Mike Koen Realty",
      content: "With over 25+ Years of Experience as a Realtor  and Licensed Builder, Mike offers a Wide Variety of Realty Services.",
      Image: "./logo.png",
      reverse: false,
    },
  ]
  const child1Images = './Frame 13.png';
  const child2Image = './Frame.png';

  const footMenus: FooterMenuData[] = [
    {
      p0: "Buyer",
      p: "Property Listings",
      p1: "Interactive Map",
      p2: "Monmouth Ocean MLS",
      p3: "Garden State MLS",
      p4: "Bright MLS",
      p5: "Forms",
    },
    {
      p0: "Seller",
      p: "Forms",
      p1: "Checklists",
      p2: "Selling Resources",
      p3: "Listing Photography",
      p4: "Sellers Disclosure Form",
      p5: ''
    },
    {
      p0: "Investor",
      p: "Investor Resources",
      p1: "501c3 Information",
      p2: "Donating a Property",
      p3: "Property Management ",
      p4: "Tax Attorney",
      p5: "Blog Articles",
    },
    {
      p0: "Information",
      p: "Testimonials",
      p1: "Contact Us",
      p2: "Careers",
      p3: "Agents ",
      p4: "About Us",
      p5: "Search",
    },

  ];
  const underlineStyle = {
    textDecoration: 'underline',
  };

  return (
    < >

      <div className="bg">
        <div className="parent"   style={{ position: "sticky", top: "0" ,backgroundColor:'black'}}>
          <div>
            <img src="/abbas.png" alt=""  />
          </div>
          <nav className="navbar navbar-expand-md navbar-light " style={{ display: "flex", flexWrap: 'wrap' }} >
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div style={{ display: "flex" }}>
                      <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Buyer</a>
                      <img src="/Icon1.png" alt="" style={{ width:'30px',height:'30px ',marginTop:'6px'}} />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div style={{ display: "flex" }}>
                      <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Seller</a>
                      <img src="/Icon1.png" alt="" style={{ width:'30px',height:'30px ',marginTop:'6px'}} />
                    </div>
                  </li>
                  <li className="nav-item">
                    <div style={{ display: "flex" }}>
                      <a className="nav-link" href="#" style={{ color: 'white' }}>Investors</a>
                      <img src="/Icon1.png" alt=""  style={{ width:'30px',height:'30px ',marginTop:'6px'}}/>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div style={{ display: "flex" }}>
                      <a className="nav-link" href="#" style={{ color: 'white' }}>Property Management</a>
                      <img src="/Icon1.png" alt="" style={{ width:'30px',height:'30px ',marginTop:'6px'}} />
                      <svg width="31" height="23" viewBox="0 0 31 23" fill="none" style={{ marginTop: '10px', marginLeft: '20px' }} xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_208_584)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7072 13.6365C17.7884 13.5552 17.8849 13.4906 17.9912 13.4466C18.0974 13.4025 18.2112 13.3799 18.3262 13.3799C18.4412 13.3799 18.5551 13.4025 18.6613 13.4466C18.7675 13.4906 18.864 13.5552 18.9453 13.6365L22.314 17.0053C22.4782 17.1693 22.5705 17.3919 22.5706 17.624C22.5707 17.8561 22.4785 18.0788 22.3145 18.2429C22.1504 18.4071 21.9278 18.4994 21.6957 18.4995C21.4636 18.4996 21.241 18.4075 21.0768 18.2434L17.708 14.8746C17.6267 14.7934 17.5621 14.6969 17.5181 14.5906C17.4741 14.4844 17.4514 14.3706 17.4514 14.2556C17.4514 14.1406 17.4741 14.0267 17.5181 13.9205C17.5621 13.8143 17.6267 13.7178 17.708 13.6365H17.7072Z" fill="white" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2578 15C14.8898 15 15.5156 14.8755 16.0995 14.6337C16.6834 14.3918 17.2139 14.0373 17.6608 13.5905C18.1076 13.1436 18.4621 12.613 18.704 12.0292C18.9458 11.4453 19.0703 10.8195 19.0703 10.1875C19.0703 9.55551 18.9458 8.92972 18.704 8.34584C18.4621 7.76196 18.1076 7.23143 17.6608 6.78455C17.2139 6.33767 16.6834 5.98318 16.0995 5.74133C15.5156 5.49948 14.8898 5.375 14.2578 5.375C12.9815 5.375 11.7574 5.88203 10.8549 6.78455C9.95234 7.68707 9.44531 8.91115 9.44531 10.1875C9.44531 11.4639 9.95234 12.6879 10.8549 13.5905C11.7574 14.493 12.9815 15 14.2578 15ZM19.9453 10.1875C19.9453 11.6959 19.3461 13.1426 18.2795 14.2092C17.2129 15.2758 15.7662 15.875 14.2578 15.875C12.7494 15.875 11.3028 15.2758 10.2361 14.2092C9.16953 13.1426 8.57031 11.6959 8.57031 10.1875C8.57031 8.67908 9.16953 7.23244 10.2361 6.16583C11.3028 5.09922 12.7494 4.5 14.2578 4.5C15.7662 4.5 17.2129 5.09922 18.2795 6.16583C19.3461 7.23244 19.9453 8.67908 19.9453 10.1875Z" fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_208_584">
                            <rect width="14" height="14" fill="white" transform="translate(8.57031 4.5)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </li>

                  <li className="nav-item">
                    <div className='about' >
                      <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
                      <img src="/Icon1.png" alt=""  style={{ width:'30px',height:'30px ',marginTop:'6px'}}/>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div style={{ display: "flex", marginLeft: '10px' }}>
                      <a className="nav-link" href="#" style={{ color: 'white' }}>Agents</a>
                    </div>
                  </li>
                </ul>
                <form className="d-flex">
                  <div className='Conects'>
                    <h1> contacts </h1>
                  </div>

                </form>
              </div>
            </div>
          </nav>
        </div>


           <div> 

        <div className='Dream-home'>
          <h2 >Find Your Dream Home</h2>
          <button > Get started </button>
        </div>
        </div>
      </div>
      

      <div className='fixingGap' style={{maxWidth:'100%' ,display:'flex',justifyContent:'center', alignItems:'center',paddingTop:'70px',paddingBottom:'70px'}} >
        {data.map((item, index) => (
          <Section key={index} h1={item.h1} content={item.content} Image={item.Image} />
        ))}
      </div>

      <div style={{maxWidth:'100%' , display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Section1 child1Images={child1Images} child2Image={child2Image} />
      </div>
      <div className='datah1'>
        Specialty Realty Services For Buyers, Sellers, and Investors.
      </div>


       <div className='parent-sectione3'>
        <img src="./Frame1.png" alt="" className='parent-sectione3-1'/>
        <img src="./Frame 16.png" alt=""className='parent-sectione3-2' />
      </div> 

      <div className="row justify-content-center" style={{ maxWidth: '100%',margin:'auto' }}>
        <div className="col-sm-6">
         
            <div className="Finaincing" style={{  maxWidth:'100%', padding: '30px', gap: '5%',display:'flex',  justifyContent:'center',alignContent:'center', }} >
              <div  style={{  width:'700px', textAlign:'center' }}>
                <h5 className='datah2' style={{ width:'650px', fontSize:'30px',fontWeight:'300', textAlign:'center',padding:'10px' }} >Financing & Mortgage Options. </h5>
                <p className="card-text1" style={{ width:'650px', fontSize: '17px', textAlign: 'center',  }} >Every family is unique when it comes to financing. Let us help guide you through the lending process and find the best rate.</p> </div>
              <div style={{  maxWidth:'30%' }} >
                <button type="button" className="btn btn-danger" style={{ borderRadius: '20px', width: '120px', marginTop:"40px"  ,backgroundColor:'#98002E'}}>Chat Now</button></div>

            </div>
          </div>
        </div>
    

      <div>
        <Section2 />
      </div>

      <div className='datah3'>
        Explore The Beautiful Jersey Shore
      </div>

     <div   >
        <img src="videoimg.png" alt="" className='video-img' />
      </div> 
      <div style={{ maxWidth: "100%", display: 'flex', flexWrap:'wrap' ,justifyContent: 'center', alignItems: 'center', paddingTop: '20px', gap: '30px', margin:'auto' }} >
        <div className="text-center">
          <img src="bed.png" className="rounded" alt="..." />
        </div>
        <div className="text-center">
          <img src="straw.png" className="rounded" alt="..." />
        </div>
      </div>

      <div className='MIKE-KOEN'>
        <h1 className='MIKE-KOEN-heading'>MIKE KOEN</h1>
        <h1 className='MIKE-KOEN-text'>New Jersey Licensed Builder.</h1>
      </div>


      <div className='Cards'>

        <div className="Cards-gap" style={{ width: '19rem', textAlign: 'center' }}>

          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '10px'
            }}>Bare Land Development</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '15px',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '10px'
            }}>As a Licensed NJ Builder, Mike has years of experiencing developing land for residential and commercial structures. </p>
          </div>
          <img src="bure.png" className="card-img-top" alt="..." />
        </div>
        <div className="Cards-gap" style={{ width: '19rem', textAlign: 'center' }}>
          <img src="hbd.png" className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>HUD 203k Program</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '15px',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>When it comes to renovating a property, exploring every avenue is Mike’s priority. Learn more about NJs HHUD 203k Program. </p>
          </div>

        </div>

        <div className="Cards-gap" style={{ width: '19rem', textAlign: 'center' }}>

          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '10px'
            }}>Sub Divisons</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '15px',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '10px'
            }}>Whether  a new or existing property, Mike works with the home owners and municipalities to explore every option for sub dividing and variance approvals. </p>
          </div>
          <img src="sub.png" className="card-img-top" alt="..." />
        </div>
      </div>

      <div className='Cards1'>

        <div className="Cards-gap" style={{ maxWidth: '35rem', textAlign: 'center',margin:'auto' }}>
          <div style={{
            maxWidth: '32rem', paddingBottom: '4px',margin:'auto'
          }}>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M71.9719 12.4033C72.1902 12.621 72.3633 12.8796 72.4815 13.1644C72.5997 13.4491 72.6605 13.7544 72.6605 14.0627C72.6605 14.3709 72.5997 14.6762 72.4815 14.9609C72.3633 15.2457 72.1902 15.5043 71.9719 15.722L39.1594 48.5345C38.9417 48.7528 38.6831 48.926 38.3983 49.0441C38.1136 49.1623 37.8083 49.2231 37.5 49.2231C37.1917 49.2231 36.8865 49.1623 36.6018 49.0441C36.317 48.926 36.0584 48.7528 35.8407 48.5345L21.7782 34.472C21.5602 34.2541 21.3874 33.9954 21.2695 33.7107C21.1515 33.426 21.0908 33.1208 21.0908 32.8127C21.0908 32.5045 21.1515 32.1993 21.2695 31.9146C21.3874 31.6299 21.5602 31.3712 21.7782 31.1533C21.9961 30.9354 22.2548 30.7625 22.5395 30.6446C22.8242 30.5266 23.1294 30.466 23.4375 30.466C23.7457 30.466 24.0509 30.5266 24.3356 30.6446C24.6203 30.7625 24.879 30.9354 25.0969 31.1533L37.5 43.5611L68.6532 12.4033C68.8709 12.185 69.1295 12.0119 69.4143 11.8937C69.699 11.7755 70.0042 11.7147 70.3125 11.7147C70.6208 11.7147 70.9261 11.7755 71.2108 11.8937C71.4956 12.0119 71.7542 12.185 71.9719 12.4033Z" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M37.5 11.7187C32.401 11.7187 27.4165 13.2307 23.1767 16.0636C18.937 18.8965 15.6326 22.923 13.6813 27.6339C11.73 32.3448 11.2194 37.5285 12.2142 42.5296C13.2089 47.5307 15.6644 52.1245 19.2699 55.73C22.8755 59.3356 27.4693 61.791 32.4704 62.7858C37.4714 63.7806 42.6552 63.27 47.3661 61.3187C52.077 59.3674 56.1035 56.0629 58.9364 51.8232C61.7693 47.5835 63.2813 42.599 63.2813 37.4999C63.2813 36.8783 63.5282 36.2822 63.9678 35.8426C64.4073 35.4031 65.0034 35.1562 65.625 35.1562C66.2466 35.1562 66.8428 35.4031 67.2823 35.8426C67.7219 36.2822 67.9688 36.8783 67.9688 37.4999C67.9679 44.207 65.754 50.7263 61.6704 56.0469C57.5869 61.3675 51.8618 65.192 45.3831 66.9273C38.9044 68.6626 32.0342 68.2117 25.8379 65.6445C19.6416 63.0774 14.4655 58.5374 11.1124 52.7287C7.7592 46.92 6.41638 40.1672 7.29215 33.5176C8.16791 26.868 11.2133 20.6931 15.9561 15.9507C20.6988 11.2082 26.8739 8.1632 33.5236 7.28787C40.1732 6.41253 46.9259 7.75578 52.7344 11.1093C53.0145 11.2558 53.2621 11.4575 53.4622 11.7022C53.6623 11.9468 53.8109 12.2295 53.899 12.533C53.987 12.8366 54.0128 13.1549 53.9747 13.4687C53.9366 13.7825 53.8354 14.0853 53.6772 14.359C53.519 14.6326 53.3071 14.8715 53.0542 15.0611C52.8013 15.2508 52.5127 15.3873 52.2056 15.4625C51.8986 15.5377 51.5796 15.55 51.2676 15.4987C50.9557 15.4474 50.6574 15.3336 50.3907 15.164C46.473 12.8985 42.0256 11.7098 37.5 11.7187Z" fill="black" />
            </svg></div>

          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E', maxWidth: '32rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '4px'
            }}>Licensed Builder</h5>
             <p className="card-textimp" style={{
              fontSize: '14px', maxWidth: '30rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '4px'
            }}>25+ Years Experience</p>
            <p className="card-text1" style={{
              fontSize: '14px', width: '26rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '2px', textAlign: 'center', marginLeft: '40px'
            }}>As a New Jersey Licensed & Insured Builder, Mike has experience developing from the ground up. Whether you are interested in residential or commercial property, Mike can help guide you through the entire process.</p>
          </div>


        </div>


        <div className="Cards-gap" style={{ maxWidth: '35rem', textAlign: 'center',margin:'auto' }}>
          <div style={{
            maxWidth: '32rem', paddingBottom: '4px',margin:'auto'
          }}>
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.514 9.33281C21.2272 10.4852 16.9682 11.7387 12.7405 13.0922C12.3579 13.2103 12.0164 13.4339 11.7552 13.7374C11.494 14.0409 11.3238 14.4119 11.264 14.8078C8.76554 33.075 14.5312 46.4062 21.4077 55.1859C24.8577 59.5922 28.5937 62.8547 31.7062 64.9969C33.2671 66.0656 34.6405 66.8438 35.7233 67.3406C36.2671 67.5891 36.7077 67.7578 37.0452 67.8562C37.194 67.9041 37.346 67.9417 37.4999 67.9688C37.5327 67.9641 37.678 67.9453 37.9546 67.8609C38.2921 67.7578 38.7327 67.5891 39.2765 67.3406C40.3546 66.8438 41.7374 66.0656 43.2937 64.9969C47.1966 62.2585 50.6678 58.9516 53.5921 55.1859C60.4687 46.4062 66.2343 33.075 63.7359 14.8078C63.6761 14.4119 63.5058 14.0409 63.2446 13.7374C62.9834 13.4339 62.6419 13.2103 62.2593 13.0922C59.3249 12.1547 54.3749 10.6266 49.4859 9.33281C44.489 8.01563 39.8905 7.03125 37.4999 7.03125C35.1093 7.03125 30.5155 8.01563 25.514 9.33281ZM24.314 4.80469C29.203 3.51094 34.3921 2.34375 37.4999 2.34375C40.603 2.34375 45.7968 3.51094 50.6858 4.80469C55.0466 5.97551 59.3791 7.2493 63.6796 8.625C66.1546 9.4125 68.0202 11.5453 68.3812 14.175C71.0671 33.8484 64.8374 48.4266 57.2859 58.0734C54.0678 62.2135 50.2472 65.8476 45.9515 68.8547C44.4578 69.901 42.8788 70.8198 41.2312 71.6016C39.9655 72.1828 38.6155 72.6562 37.4999 72.6562C36.3843 72.6562 35.0343 72.1828 33.7687 71.6016C32.1207 70.8205 30.5416 69.9016 29.0483 68.8547C24.7543 65.8472 20.9353 62.2131 17.7187 58.0734C10.1577 48.4266 3.93272 33.8484 6.61866 14.175C6.79824 12.9003 7.33513 11.7026 8.16718 10.7204C8.99923 9.73818 10.0924 9.01169 11.3202 8.625C15.6208 7.24933 19.9532 5.97554 24.314 4.80469Z" fill="black" />
              <path d="M37.5 10.5469C41.7609 10.5469 52.4438 13.7578 57.4406 15.3375C58.2459 15.5844 58.9635 16.0569 59.5085 16.6991C60.0535 17.3413 60.403 18.1262 60.5156 18.9609C64.3313 49.0734 41.1563 63.2672 37.5 63.2672V10.5469Z" fill="black" />
            </svg>
          </div>

          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E', maxWidth: '32rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '4px'
            }}>Federal Building Inspector</h5>
            <p className="card-textimp" style={{
              fontSize: '14px', maxWidth: '30rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '4px'
            }}>10+ Years Experience</p>
            <p className="card-text1" style={{
              fontSize: '14px', maxWidth: '27rem',
              fontFamily: 'Poppins, sans-serif', paddingBottom: '2px', marginLeft: '40px'
            }}>Mike spent 10+ years as a State Certified NJ Inspector. When it comes to permits, variances, and approvals, he has seen it all. He uses his expertise to help families when navigating home inspections.</p>
          </div>


        </div>
      </div>
      <div className='redblackbg'>
  <div className='redbg'>
    <div className="Cards-gap" style={{ maxWidth: '35rem', textAlign: 'center' }}>
      <div className="">
        <p className="card-textimp2" style={{
          fontSize: '14px', maxWidth: '30rem',
          fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', color: '#fff'
        }}>Our <strong> ipsum </strong> dolor taxes </p>

        <h5 className="card-title" style={{
          fontSize: '45px', color: ' #F8F9FA', maxWidth: '32rem',
          fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', fontWeight: '300'
        }}>Find The Best Rate</h5>

        <p className="card-textimp2" style={{
          fontSize: '14px', maxWidth: '30rem',
          fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', color: '#fff'
        }}>Explore NJ Mortgage Rates</p>
        <div className='Conects1'>
          <h1> Learn More</h1>
        </div>
      </div>
    </div>
  </div>
  <div className='blackbg'>
    <div className="">
      <p className="card-textimp" style={{
        fontSize: '14px', maxWidth: '30rem',
        fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', color: '#fff'
      }}>Our <strong> ipsum </strong> dolor taxes </p>

      <h5 className="card-title" style={{
        fontSize: '45px', color: ' #F8F9FA', maxWidth: '32rem',
        fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', fontWeight: '300'
      }}>Donate a Home</h5>

      <p className="card-textimp" style={{
        fontSize: '12px', maxWidth: '30rem',
        fontFamily: 'Poppins, sans-serif', paddingBottom: '4px', color: '#fff'
      }}>Discover Tax Advantages of Donating a Property.</p>
      <div className='Conects2' style={{
        marginLeft:'80px'
      }} >
        <h1> Find Out How</h1>
      </div>
    </div>
  </div>
</div>

      <div className='MIKE-KOEN'>
        <h1 className='MIKE-KOEN-heading1'>Featured Articles</h1>

      </div>
      <div className='Cards2'>


        <div className="Cards-gap" style={{ width: '14rem', textAlign: 'center' }}>
          <img src="x1.png" className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>Blog Post Title</h5>
            <h5 className="card-title" style={{
              fontSize: '10px', color:'#454545',fontWeight:'300',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>june 11 2023</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '-15px',
              fontFamily: 'Poppins, sans-serif', paddingTop: '5px'
            }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

        </div>
        <div className="Cards-gap" style={{ width: '14rem', textAlign: 'center' }}>
          <img src="x2.png" className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>Blog Post Title</h5>
            <h5 className="card-title" style={{
              fontSize: '10px',color:'#454545',fontWeight:'300', 
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>june 11 2023</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '-15px',
              fontFamily: 'Poppins, sans-serif', paddingTop: '5px'
            }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

        </div>
        <div className="Cards-gap" style={{ width: '14rem', textAlign: 'center' }}>
          <img src="x3.png" className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>Blog Post Title</h5>
             <h5 className="card-title" style={{
              fontSize: '10px', color:'#454545',fontWeight:'300',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>june 11 2023</h5>
            <p className="card-text" style={{
              fontSize: '10px', width: '16rem', marginLeft: '-15px',
              fontFamily: 'Poppins, sans-serif', paddingTop: '5px'
            }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

        </div>
        <div className="Cards-gap" style={{ width: '14rem', textAlign: 'center' }}>
          <img src="x4.png" className="card-img-top" alt="..." />
          <div className="">
            <h5 className="card-title" style={{
              fontSize: '22px', color: '#98002E',
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>Blog Post Title</h5>
          <h5 className="card-title" style={{
              fontSize: '10px',color:'#454545',fontWeight:'300', 
              fontFamily: 'Poppins, sans-serif', paddingTop: '10px'
            }}>june 11 2023</h5>
            <p className="card-text" style={{
              fontSize: '14px', width: '16rem', marginLeft: '-15px',
              fontFamily: 'Poppins, sans-serif', paddingTop: '5px'
            }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>

        </div>



      </div>
     <div style={{
        maxWidth: '90%', display: 'flex', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
     margin:'auto' }}>

        <div className='stay-connected'>

          <div className="classname">
            <h5 className="classname-header">Let’s Stay Connected</h5>
            <div className="classname-body">
              <p className="classname-text">Join our newsletter today & receive  <span style={underlineStyle}><strong>monthly</strong></span> updates!</p>
            </div>
            <div style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'center', gap:'10px',  }}>
              <div className="mb-3" style={{borderRadius: '20px' }}>
                <input type="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder='Enter your email..' />
              </div>
              <div >
                <button type="button" className="btn btn" style={{ borderRadius: '20px', width: '100px', border:'1px solid white', color:'white', backgroundColor:'none' }}>Sign Up </button></div>
            </div>
          </div>

        </div>
        </div> 

     <FooterMenus footMenus={footMenus} /> 

    </>
  );
};

export default App;






