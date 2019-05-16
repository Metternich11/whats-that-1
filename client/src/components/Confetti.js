import React, {useEffect, useState} from 'react';
import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 45,
  startVelocity: "72",
  elementCount: "83",
  dragFriction: 0.1,
  duration: "6240",
  delay: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]

};
const WinConfetti = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() =>  setActive(true), 500);
  }, []);

  return (<Confetti active={active} config={config} />)
}

export default WinConfetti;
