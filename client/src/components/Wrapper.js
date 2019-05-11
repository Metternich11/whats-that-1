import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin: 0 20vw 5vh 20vw;
  min-height: 100vh;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding-top: 100px;

  @media (max-width: 1024px) {
    margin: 0 0 5vh 0;
  }
`;

export default Wrapper;
