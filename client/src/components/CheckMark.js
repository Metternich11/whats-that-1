import React from "react";

// import Background from '../checkMark.png'
const Background = require('../checkMark.png')

const CheckMark = () => {
  return (
    <div 
      style={{
      width: "60px",
      height: "60px",
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>

    </div>
  );
}

export default CheckMark;
