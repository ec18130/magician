import { render, screen } from "@testing-library/react";
import Card from "./components/Card";

test("when first run", () => {
  render(
    <Card
      key={`${Math.random()}`}
      handNumber="A"
      handColour="red"
      handIcon="diamond"
      indexValue="5"
      cardNum="13"
      handIndex="3"
    />  
  );

  screen.debug();
});

