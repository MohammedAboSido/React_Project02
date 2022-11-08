import React from "react";
import Overview from "./design-system/components/Overview";
import overviewData from "./design-system/Data";

function App() {
  const overviewList = overviewData.map((item) => {
    return (
      <Overview
        title={item.title}
        icon={item.icon}
        description={item.description}
        key={item.id}
      />
    );
  });
  return <div style={{ display: " flex " }}>{overviewList}</div>;
}

export default App;
