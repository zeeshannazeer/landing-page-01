import React from 'react';
import Navbar from './components/Navbar';
import { wrap } from 'module';

const App: React.FC = () => {
  const data = [
    {
      h1: "Buyer",
      image: "/Icon1.png",
    },
    {
      h1: "Seller",
      image: "/Icon1.png",
    },
    {
      h1: "Investors",
      image: "/Icon1.png",
    },
    {
      h1: "Property Management",
      image: "/Icon1.png",
    },
  ];


  const data1 = [
    {
      h1: "About",
      image: "/Icon1.png",
    }
  ];

  return (
    <div className="bg">
    <div className="parent"> 
      <div>
        <img src="/logo.png" alt="" />
      </div>
    
      <div className="flex-container">
        {data.map((item, index) => (
          <Navbar  className="flex-item"
            key={index}
            title={item.h1}
            imageUrl={item.image}
          />
        ))}
      </div>
      
      <div  style={{paddingTop:'12px' }}  >
        <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_134_984)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7069 13.6365C17.7882 13.5552 17.8847 13.4906 17.9909 13.4466C18.0971 13.4025 18.211 13.3799 18.326 13.3799C18.441 13.3799 18.5548 13.4025 18.6611 13.4466C18.7673 13.4906 18.8638 13.5552 18.945 13.6365L22.3138 17.0053C22.478 17.1693 22.5703 17.3919 22.5704 17.624C22.5704 17.8561 22.4783 18.0788 22.3142 18.2429C22.1502 18.4071 21.9276 18.4994 21.6955 18.4995C21.4634 18.4996 21.2407 18.4075 21.0765 18.2434L17.7078 14.8746C17.6264 14.7934 17.5619 14.6969 17.5179 14.5906C17.4738 14.4844 17.4512 14.3706 17.4512 14.2556C17.4512 14.1406 17.4738 14.0267 17.5179 13.9205C17.5619 13.8143 17.6264 13.7178 17.7078 13.6365H17.7069Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2578 15C14.8898 15 15.5156 14.8755 16.0995 14.6337C16.6834 14.3918 17.2139 14.0373 17.6608 13.5905C18.1076 13.1436 18.4621 12.613 18.704 12.0292C18.9458 11.4453 19.0703 10.8195 19.0703 10.1875C19.0703 9.55551 18.9458 8.92972 18.704 8.34584C18.4621 7.76196 18.1076 7.23143 17.6608 6.78455C17.2139 6.33767 16.6834 5.98318 16.0995 5.74133C15.5156 5.49948 14.8898 5.375 14.2578 5.375C12.9815 5.375 11.7574 5.88203 10.8549 6.78455C9.95234 7.68707 9.44531 8.91115 9.44531 10.1875C9.44531 11.4639 9.95234 12.6879 10.8549 13.5905C11.7574 14.493 12.9815 15 14.2578 15ZM19.9453 10.1875C19.9453 11.6959 19.3461 13.1426 18.2795 14.2092C17.2129 15.2758 15.7662 15.875 14.2578 15.875C12.7494 15.875 11.3028 15.2758 10.2361 14.2092C9.16953 13.1426 8.57031 11.6959 8.57031 10.1875C8.57031 8.67908 9.16953 7.23244 10.2361 6.16583C11.3028 5.09922 12.7494 4.5 14.2578 4.5C15.7662 4.5 17.2129 5.09922 18.2795 6.16583C19.3461 7.23244 19.9453 8.67908 19.9453 10.1875Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_134_984">
<rect width="14" height="14" fill="white" transform="translate(8.57031 4.5)"/>
</clipPath>
</defs>
</svg>

        </div>
      <div  style={{display:'flex', gap:'20px'}}>
       
      
        <div className="flex-container">
        {data1.map((item, index) => (
          <Navbar  className="flex-item"
            key={index}
            title={item.h1}
            imageUrl={item.image}
          />
        ))}
      </div>

      <div style={{marginTop:'10px' }} >
        <h1>Agents</h1>
      </div>
      <div className='Conects'>
        <h1> contacts </h1>
      </div>
      </div>
      </div>
     
    </div>
  );
};

export default App;
