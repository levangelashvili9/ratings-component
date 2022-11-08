import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Ratings from "./Ratings";
import Submit from "./Submit";

function RatingsPage({ rating, setRating, setIsSubmitted }) {
  return (
    <Container>
      <Header />
      <Ratings rating={rating} setRating={setRating} />
      <Submit rating={rating} setIsSubmitted={setIsSubmitted} />
    </Container>
  );
}

export default RatingsPage;

const Container = styled.div`
  padding: 32px 40px 32px 32px;

  @media screen and (max-width: 1440px) {
    padding: 24px 22px 0px 24px;
  }
`;
