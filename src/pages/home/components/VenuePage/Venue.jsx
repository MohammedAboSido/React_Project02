import React from "react";
import { DescriptionVenue, P, VenueSpan, VenueWrapper } from "./style";

export default function Venue() {
  return (
    <VenueWrapper>
      <div className="container">
        <VenueSpan>Venue</VenueSpan>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </P>
        <DescriptionVenue>Lorem ipsum dolor sit</DescriptionVenue>
        <DescriptionVenue>Lorem ipsum dolor sit</DescriptionVenue>
        <DescriptionVenue>Lorem ipsum dolor sit</DescriptionVenue>
        <DescriptionVenue>Lorem ipsum dolor sit</DescriptionVenue>
      </div>
    </VenueWrapper>
  );
}
