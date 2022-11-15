import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import OverView from "./components/OverView/OverView";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <OverView />
    </>
  );
}
