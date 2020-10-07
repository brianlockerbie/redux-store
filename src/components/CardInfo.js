import React from "react";
import Button from "./reusableComponents/Button";

const CardInfo = ({ shoePrice }) => {
  return (
    <div className="cardInfo">
      <p>${shoePrice}</p>
      <Button />
    </div>
  );
};

export default CardInfo;