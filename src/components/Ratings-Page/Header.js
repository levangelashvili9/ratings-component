import React from "react";
import styled from "styled-components";
import StarSVG from "../../assets/icon-star.svg";

function Header() {
  return (
    <>
      <Star>
        <Img src={StarSVG} alt="star svg" />
      </Star>
      <Heading>How did we do?</Heading>
      <Paragraph>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Paragraph>
    </>
  );
}

export default Header;

const Star = styled.div`
  width: 48px;
  height: 48px;
  background-color: hsl(213, 19%, 18%);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  margin-bottom: 30px;

  @media screen and (max-width: 1440px) {
    width: 40px;
    height: 40px;
    margin-bottom: 16px;
  }
`;

const Img = styled.img`
  width: 16.75px;
  height: 16px;

  @media screen and (max-width: 1440px) {
    width: 13.5px;
    height: 13.5px;
  }
`;

const Heading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #ffffff;

  margin-bottom: 15px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 17px;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  line-height: 24px;
  color: #969fad;

  margin-bottom: 24px;

  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
