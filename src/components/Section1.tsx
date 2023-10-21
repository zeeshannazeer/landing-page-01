import React from 'react';

interface SectionProps {
  child1Images: string;
  child2Image: string;
}


const Section: React.FC<SectionProps> = ({ child1Images, child2Image }) => {
  return (
    <div className="parent-Section1">
      <div className="child1">
         <img src={child1Images} alt="Child1 Image" className="child1-1" />
      </div>
      <div className="child2">
        <img src={child2Image} alt="Child2 Image" className="child2-1"/>
      </div>
    </div>
  );
};

export default Section;
