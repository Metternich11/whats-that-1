import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 20vw 5vh 20vw;
  background-color: rgba(255, 255, 255, 0.1);

  @media (max-width: 1024px) {
    margin: 0 0 5vh 0;
  }
`;

export default Wrapper;
