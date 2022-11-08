import React from "react";
import styled from "styled-components";

function Submit({ rating, setIsSubmitted }) {
  const handleClick = () => {
    rating && setIsSubmitted(true);
  };

  return <Button onClick={handleClick}>Submit</Button>;
}

export default Submit;

const Button = styled.button`
  background: #fc7614;
  border-radius: 22.5px;
  border: none;

  width: 341px;
  height: 45px;

  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;

  padding: 11px 137px;

  transition: all 0.3s;

  &:hover {
    background: #ffffff;
    color: #fc7614;
    cursor: pointer;
  }

  @media screen and (max-width: 1440px) {
    width: 279px;

    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.86667px;

    padding: 12px 108.5px 15px;
  }
`;
