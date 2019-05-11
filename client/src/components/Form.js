import styled from "styled-components";

const Form = styled.form`
  align-items: flex-start;
  background-color: rgba(71, 44, 129, 0.5);
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default Form;
