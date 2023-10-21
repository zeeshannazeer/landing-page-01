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
    <div className='datah1'>{props.h1}
    </div>
    <div className='datacontainer'>
       {props.content}
       </div>
       </div>
    </div>


   
    </>
  );
};

export default Section;

