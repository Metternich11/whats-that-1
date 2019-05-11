import styled from "styled-components";

const NavBar = styled.nav`
  align-items: center;
  background: #472c81;
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0.5em 1em;
  position: fixed;
  top: 0;
  width: 100%;

  .logo {
    font-family: "Kalam", cursive;
    font-size: 1rem;
    padding-top: 5px;
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
