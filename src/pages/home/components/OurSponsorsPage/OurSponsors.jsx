import React from "react";
import ourSponsorsData from "../../../../design-system/components/OurSponsors/Data";
import OurSponsorsComponent from "../../../../design-system/components/OurSponsors/OurSponsorsComponent";
import {
  DescriptionSponsors,
  SponsorContainer,
  SponsorsFirstWord,
  SponsorsSecondWord,
  SponsorsWrapper,
} from "./style";

export default function OurSponsors() {
  return (
    <div className="container">
      <SponsorsWrapper>
        <SponsorsFirstWord>Our</SponsorsFirstWord>
        <SponsorsSecondWord>Sponsors</SponsorsSecondWord>
        <DescriptionSponsors>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        </DescriptionSponsors>
      </SponsorsWrapper>
      <SponsorContainer>
        {ourSponsorsData.map((item) => {
          return (
            <OurSponsorsComponent img={item.img} alt={item.alt} key={item.id} />
          );
        })}
      </SponsorContainer>
    </div>
  );
}
