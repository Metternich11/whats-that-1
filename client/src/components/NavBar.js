import styled from "styled-components";

const NavBar = styled.nav`
  align-items: center;
  background: #472c81;
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
  box-sizing: none;
  color: white;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0.5em 1em;
  width: 100%;

  .logo {
    font-size: 1rem;
    letter-spacing: 2px;
    padding-top: 5px;
    text-transform: uppercase;
    width: 50%;
  }
  .nav-content {
    text-align: right;
    width: 50%;
  }

  @media (min-width: 1024px) {
    padding: 0 20vw;

    .logo {
      font-size: 1.8rem;
    }
  }
`;

export default NavBar;
