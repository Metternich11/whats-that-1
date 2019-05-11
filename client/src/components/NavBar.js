import styled from "styled-components";

const NavBar = styled.nav`
  background: #472c81;
  height: 40px;
  width: 100%;
  color: white;
  display: flex;
  padding: 0.5em 1em;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.2);

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
