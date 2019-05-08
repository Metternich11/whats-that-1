import styled from "styled-components";

const InputField = styled.input`
  border: 0;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  height: 25px;

  &:active,
  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.4);
  }
`;

export default InputField;
