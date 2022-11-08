import React, { useState } from "react";
import styled from "styled-components";

function Ratings({ rating, setRating, setIsSubmitted }) {
  const ratingsArray = [1, 2, 3, 4, 5];

  const [active, setActive] = useState();

  const chooseRating = (number) => {
    setRating(number);
    setActive(number);
  };

  return (
    <Container>
      {ratingsArray.map((number, index) => {
        return (
          <Rating
            key={index}
            onClick={() => chooseRating(number)}
            isActive={active === number ? true : false}
          >
            {number}
          </Rating>
        );
      })}
    </Container>
  );
}

export default Ratings;

const Rating = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.2px;

  color: ${(props) =>
    props.isActive ? "hsl(0, 0%, 100%)" : "hsl(216, 12%, 54%)"};
  background-color: ${(props) =>
    props.isActive ? "hsl(216, 12%, 54%)" : "hsl(213, 19%, 18%)"};

  width: 51px;
  height: 51px;
  border-radius: 50%;
  border: none;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background: hsl(25, 97%, 53%);
    cursor: pointer;
  }

  @media screen and (max-width: 1440px) {
    width: 42px;
    height: 42px;

    font-size: 14px;
    letter-spacing: 0.175px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 21.5px;

  margin-bottom: 32px;

  @media screen and (max-width: 1440px) {
    gap: 18px;
    margin-bottom: 24px;
  }
`;
