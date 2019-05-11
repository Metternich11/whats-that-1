import styled, { css } from "styled-components";

const CanvasFooterItem = styled.div`
  width: 50%;
  text-align: left;

  ${props =>
    props.right &&
    css`
      text-align: right;
    `};

  @media (max-width: 1024px) {
    padding: 0 2vw;
  }
`;

export default CanvasFooterItem;
