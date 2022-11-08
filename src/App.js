import { useState } from "react";
import styled from "styled-components";
import RatingsPage from "./components//Ratings-Page/RatingsPage";
import SubmitPage from "./components/Submit-Page/SubmitPage";
import "./app.css";

function App() {
  const [rating, setRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Container>
      {isSubmitted ? (
        <SubmitPage rating={rating} />
      ) : (
        <RatingsPage
          rating={rating}
          setRating={setRating}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: hsl(213, 19%, 18%);
  width: 412px;
  height: 416px;

  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 25px;

  @media screen and (max-width: 1440px) {
    width: 327px;
    height: 360px;
  }
`;
