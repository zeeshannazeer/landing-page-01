import React from 'react';

const Section2: React.FC = () => {
  return (
    <div className="Section2-parent">
      <div className="Section2-child1">
        <div className="s2-background-image-1"></div>
        {/* <div className="text-container">
          <p className="text">Buyer
          <button type="button" className="btn btn-light"  style={{marginTop:'100px',marginLeft:'-120px',borderRadius:'50px', color:'red'}}>Buyer’s  Guide</button>
          </p>
        
        </div> */}
      </div>
      <div className="Section2-child2">
        <div className="s2-background-image-2"></div>
        {/* <div className="text-container">
          <p className="text">

          <button type="button" className="btn btn-light"  style={{marginTop:'80px',marginLeft:'-100px',borderRadius:'50px', color:'red'}}>Seller’s  Guide</button>

          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Section2;
