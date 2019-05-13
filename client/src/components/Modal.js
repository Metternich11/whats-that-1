import React, { useEffect, useState } from "react";

// Component & Container Imports
import Button from "../components/Button";

// Library Imports
import styled from "styled-components";

const Container = styled.div`
  background-color: #472c81;
  border-radius: 3px;
  color: #fff;
  height: 200px;
  width: 200px;
  padding: 20px;
`;

const Modal = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!isVisible);
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    props.visible();
  };
  return (
    <>
    {console.log('THIIIIIIIIIIIIIIIIIIS', props)}
      {isVisible && (
        <Container>
          <p>Please enter a valid Game ID!</p>
          <Button small onClick={closeModal}>
            x
          </Button>
        </Container>
      )}
    </>
  );
};

export default Modal;
