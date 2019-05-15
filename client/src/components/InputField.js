import styled from "styled-components/macro";

const InputField = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 50px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  height: 50px;
  outline: none;
  padding-left: 20px;
  width: 100%;

  &:active,
  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.4);
  }
`;

export default InputField;
