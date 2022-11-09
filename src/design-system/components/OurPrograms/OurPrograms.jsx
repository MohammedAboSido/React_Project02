import * as icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconWrapper, Image, ImageWrapper, OurProgramsWrapper } from "./Styles";
export default function OurPrograms({img,alt,time, roomNumber,title,name,description}) {
  return (
    <OurProgramsWrapper>
        <ImageWrapper>
          <Image src={img} alt={alt}/>
        </ImageWrapper>
  <div>
    <IconWrapper>
        <div>
          <FontAwesomeIcon size="xs" icon={icons.faClock} /> {time}
        </div>

        <div>
          <FontAwesomeIcon size="xs" icon={icons.faMapMarker} /> <span>Room</span> {roomNumber}
        </div>
    </IconWrapper>
    <h2 style={{fontWeight: "bold"}}>{title}</h2>
    <span>{name}</span>
    <p>{description}</p>
  </div>
    </OurProgramsWrapper>

  );
}
