import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import CreativeSpeakersComponent from "./components/CreativeSpeakers/CreativeSpeakers";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import OverView from "./components/OverView/OverView";
import WatchVideo from "./components/WatchVideo/WatchVideo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <OverView />
      <WatchVideo />
      <CreativeSpeakersComponent />
    </>
  );
}
