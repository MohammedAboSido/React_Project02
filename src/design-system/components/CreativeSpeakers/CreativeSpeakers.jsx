import React from "react";
import { SpeakersWrapper } from "./Styles";

export default function CreativeSpeakers({img , alt , name ,  job}) {
  return (
    <SpeakersWrapper>
      <img src={img} alt={alt} width="100%" />
      <h2>{name}</h2>
      <span>{job}</span>  
    </SpeakersWrapper>
  );

}
