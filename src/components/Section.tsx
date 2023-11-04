import React from 'react';

interface SectionProps {
  h1: string ;
  Image:string;
  content: string;
}



const Section: React.FC<SectionProps> = ( props ) => {



  return (
    <>
    <div className='dataparent'>
      <div className='dataparent1'>
    <div ><img src={props.Image} alt="ERROR"  className='dataparent1-1' /></div> </div>
    <div className='dataparent2' >
    
    <h2 style={{fontSize:'32px',fontWeight:'300',color:' #454545',}}>{props.h1}</h2>
    
 
       <p style={{fontSize:'16.2px'}}>{props.content}</p>
     
       </div>
    </div>


   
    </>
  );
};

export default Section;

