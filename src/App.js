import React from "react";
import ourProgramsData from "./design-system/components/OurPrograms/Data";
import OurPrograms from "./design-system/components/OurPrograms/OurPrograms";
import "./design-system/main.css";

function App() {
  const programsList = ourProgramsData.map((item) => {
    return (
      <OurPrograms
        img={item.img}
        alt={item.alt}
        description={item.description}
        name={item.name}
        time={item.time}
        title={item.title}
        roomNumber={item.roomNumber}
        key={item.id}
      />
    );
  });
  return <>{programsList}</>;
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

// const speakerList = speakerData.map((item) => {
//   return (
//     <CreativeSpeakers
//       img={item.img}
//       alt={item.alt}
//       job={item.job}
//       name={item.name}
//       key={item.id}
//     />
//   );
// });
