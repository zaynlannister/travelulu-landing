import styled from "styled-components";

interface Link {
  name: string;
  href: string;
}

interface MobileMenuInterface {
  links?: Link[];
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = (props: MobileMenuInterface) => {
  return (
    <StyledMenu
      className={`bg-dark absolute flex flex-col text-[22px] w-[100%] left-0 bottom-0 right-0 top-[74px] px-4 z-50 ${
        !props.menuOpen ? "" : "hidden-menu"
      }`}
    >
      <div className="flex flex-col">
        <a className="text-[#fff]" href="#home">
          Home
        </a>
        <a className="text-[#fff]" href="#about">
          Services
        </a>
        <a className="text-[#fff]" href="#packages">
          Packages
        </a>
        <a className="text-[#fff]" href="#contact">
          Contact Us
        </a>
        <a className="text-[#fff]" href="#faq">
          Privacy
        </a>
      </div>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  left: -600%;
  transition: 200ms all;
  height: 100vh;
  a {
    font-size: 20px;
    font-weight: bold;
    padding: 30px 30px;
  }
  &.hidden-menu {
    left: 0;
  }
`;

export default MobileMenu;
