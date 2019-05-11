import styled, { css } from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin: 0 20vw 5vh 20vw;
  min-height: 100vh;
  padding-top: 100px;
  text-align: center;

  @media (max-width: 1024px) {
    margin: 0 0 5vh 0;
  }

  ${props =>
    props.lessPadding &&
    css`
      padding-top: 45px;
    `};
`;

export default Wrapper;
