import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  background-color: #472c81;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default Form;
