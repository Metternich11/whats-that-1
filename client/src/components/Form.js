import styled from "styled-components/macro";

const Form = styled.form`
  align-items: center;
  background-color: rgba(71, 44, 129, 0.5);
  display: flex;
  flex-direction: column;
  padding: 20px 20px 60px 20px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 100vh;
  }
`;

export default Form;
