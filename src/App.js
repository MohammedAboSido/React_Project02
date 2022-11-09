import React from "react";
import ourSponsorsData from "./design-system/components/OurSponsors/Data";
import OurSponsors from "./design-system/components/OurSponsors/OurSponsors";
import "./design-system/main.css";

function App() {
  const sponsorsList = ourSponsorsData.map((item) => {
    return <OurSponsors img={item.img} alt={item.alt} key={item.id} />;
  });
  return <div style={{ display: "flex", gap: "1rem" }}>{sponsorsList}</div>;
}

export default App;
