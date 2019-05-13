import styled, { css } from "styled-components/macro";

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin: 0 20vw 5vh 20vw;
  min-height: 100vh;

  text-align: center;

  @media (max-width: 1024px) {
    margin: 0 0 5vh 0;
  }

  ${props =>
    props.ComponentsCatalogue &&
    css`
      align-items: flex-start;
      padding: 0 5vw;
      text-align: left;

      .components {
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        margin-bottom: 5vh;
        padding: 2vw;
        padding-left: 5vw;
        width: 100%;
      }

      .divider {
        margin: 100px 0;
        width: 100%;
        border: 2px solid;
        border-color: #764ad7;
      }

      h1 {
        color: #472c81;
        font-size: 3rem;
      }
      h2 {
        color: #472c81;
        font-size: 2.2rem;
      }

      .large {
        font-size: 1.4rem;
      }

      h4 {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding-bottom: 5px;
      }
    `};
`;

export default Wrapper;
