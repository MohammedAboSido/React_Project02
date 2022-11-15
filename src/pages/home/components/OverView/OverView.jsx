import React from "react";
import overviewData from "../../../../design-system/components/Overview/Data";
import OverviewComponent from "../../../../design-system/components/Overview/Overview";
import { OverviewContainer, OverviewWrapper } from "./style";

export default function OverView() {
  return (
    <OverviewWrapper>
      <div className="container">
        <OverviewContainer>
          {overviewData.map((item) => {
            return (
              <OverviewComponent
                key={item.id}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            );
          })}
        </OverviewContainer>
      </div>
    </OverviewWrapper>
  );
}
