import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Description, OverviewWrapper, Title } from "./Styles";

export default function Overview({ icon, title, description }) {
  return (
    <OverviewWrapper>
      <div>
        <FontAwesomeIcon color="#f2545f" size="2xl" icon={icon} />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewWrapper>
  );
}
