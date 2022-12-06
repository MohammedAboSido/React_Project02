import React from "react";
import {
  Description,
  Our,
  OurProgramsWrapper,
  Programs,
  TabsWrapper,
} from "./style";
import Tabs from "./Tabs";

export default function OurPrograms() {
  return (
    <div className="container">
      <OurProgramsWrapper>
        <div>
          <Our>Our</Our>
          <Programs>Programs</Programs>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          </Description>
        </div>
        <TabsWrapper>
          <Tabs />
        </TabsWrapper>
      </OurProgramsWrapper>
    </div>
  );
}
