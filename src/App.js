import * as icons from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Overview from "./design-system/components/Overview";

function App() {
  return (
    <>
      <Overview icon={icons.faUserGroup} title="650 Participants">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.
      </Overview>
    </>
  );
}

export default App;

// <Overview icon={icons.faClock} title="24 Programs">
//   Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's standard dummy.
// </Overview>

// <Overview icon={icons.faMicrophone} title="11 Speakers">
//   Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's standard dummy.
// </Overview>
