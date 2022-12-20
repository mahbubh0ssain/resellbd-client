import React from "react";

import TestimonialCard from "./TestimonialCard";
const TestimonialCards = () => {
  const cardInfo = [
    {
      id: 1,
      img: "https://i.ibb.co/QbGGCYx/people1.png",
      name: "Joseph Buttler",
      place: "California",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      img: "https://i.ibb.co/mJd4qkr/people2.png",
      name: "Andrew Tate",
      place: "Michigan",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      img: "https://i.ibb.co/80s6X8c/people3.png",
      name: "Ben Foaks",
      place: "Derbyshire",
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-8 my-3 mx-auto">
      {cardInfo.map((card) => (
        <TestimonialCard key={card.id} card={card}></TestimonialCard>
      ))}
    </div>
  );
};

export default TestimonialCards;
