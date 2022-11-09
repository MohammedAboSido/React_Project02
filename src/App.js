import React from "react";
import CreativeSpeakers from "./design-system/components/CreativeSpeakers";
import speakerData from "./design-system/components/CreativeSpeakers/Data";
import "./design-system/main.css";

function App() {
  const speakerList = speakerData.map((item) => {
    return (
      <CreativeSpeakers
        img={item.img}
        alt={item.alt}
        job={item.job}
        name={item.name}
        key={item.id}
      />
    );
  });
  return <div style={{ display: "flex" }}>{speakerList}</div>;
}

export default App;

// import Overview from "./design-system/components/Overview";
// import overviewData from "./design-system/components/Overview/Data";

// const overviewList = overviewData.map((item) => {
//   return (
//     <Overview
//       title={item.title}
//       icon={item.icon}
//       description={item.description}
//       key={item.id}
//     />
//   );
// });
