import React from "react";
import styled from "styled-components";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import MobileMenu from "../BurgerMenu/MobileMenu";

const HeaderSection = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.classList.remove("menu-open");
    } else {
      document.body.classList.add("menu-open");
    }
  };
  return (
    <StyledHeaderSection>
      <MobileMenu menuOpen={open} toggleMenu={toggleMenu} />
      <div className="header">
        <div className="header-container py-4">
          <div className="flex items-center justify-between">
            <p className="text-default font-bold text-[35px] header-logo">
              Travelulu
            </p>
            <div className="header-nav flex items-center gap-6">
              <a className="custom-link" href="#home">
                Home
              </a>
              <a className="custom-link" href="#about">
                About
              </a>
              <a className="custom-link" href="#contact">
                Contact
              </a>
              <a className="custom-link" href="#contact">
                Privacy
              </a>
            </div>
            <div className="header-burger hidden">
              <BurgerMenu menuOpen={open} toggleMenu={toggleMenu} />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-content py-[200px]">
          <p className="text-[50px] header-text font-bold w-[500px]">
            Plan your next big trip overseas.
          </p>
          <div className="flex gap-6 mt-4 header-content__buttons">
            <button className="default-button">Begin plans</button>
            <button className="default-button">Review plans</button>
          </div>
        </div>
      </div>
    </StyledHeaderSection>
  );
};

const StyledHeaderSection = styled.div`
  background-image: url("/assets/img/Boarding.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;

  .header {
    border-bottom: 1px solid #d9dbe9;
    transition: 200ms all;
  }

  @media (max-width: 780px) {
    .header-nav {
      display: none;
    }

    .header-text {
      font-size: 40px;
      width: 100%;
    }
    .header-content {
      padding: 100px 0 200px 0;
    }
    .header-burger {
      display: block;
    }

    background-size: cover;
    background-image: url("/assets/img/Boarding-mob.png");
  }

  @media (max-width: 580px) {
    .header-content__buttons {
      margin-top: 40px;
      flex-direction: column;
    }
  }
`;

export default HeaderSection;
