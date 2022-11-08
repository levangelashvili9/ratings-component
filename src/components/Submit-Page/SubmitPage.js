import React from "react";
import styled from "styled-components";
import ThankYouSVG from "../../assets/illustration-thank-you.svg";

function SubmitPage({ rating }) {
  return (
    <Container>
      <SVG src={ThankYouSVG} alt="thank you svg" />
      <Score>You selected {rating} out of 5</Score>
      <MessageHeading>Thank you!</MessageHeading>
      <Paragraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Paragraph>
    </Container>
  );
}

export default SubmitPage;

const Container = styled.div`
  padding: 45px 40px 45px 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1440px) {
    padding: 34px 24px 37px;
  }
`;

const SVG = styled.img`
  width: 162px;
  height: 108px;

  margin-bottom: 32px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 24px;

    width: 144px;
    height: 96px;
  }
`;

const Score = styled.h2`
  background: #262e38;
  border-radius: 22.5px;

  padding: 4px 20px;

  margin-bottom: 36px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;

  color: #fc7614;

  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
`;

const MessageHeading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;

  color: #ffffff;

  margin-bottom: 15px;

  @media screen and (max-width: 1440px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;

  text-align: center;
  color: #969fad;

  @media screen and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
