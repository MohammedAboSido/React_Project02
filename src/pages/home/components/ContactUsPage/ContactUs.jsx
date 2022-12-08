import React from "react";
import {
  ContactUsContainer,
  ContactUsInput,
  ContactUsWrapper,
  DescriptionContactUs,
  DownloadButton,
  EventSpan,
  FormContactUsWrapper,
  NewSpan,
  SendButton,
  TextArea,
} from "./style";

export default function ContactUs() {
  return (
    <ContactUsWrapper>
      <div className="container">
        <ContactUsContainer>
          <div style={{ width: "60%" }}>
            <NewSpan>New</NewSpan>
            <EventSpan>Event</EventSpan>
            <DescriptionContactUs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </DescriptionContactUs>
            <DescriptionContactUs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </DescriptionContactUs>
            <DescriptionContactUs>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </DescriptionContactUs>
            <DownloadButton>Download Now</DownloadButton>
          </div>
          <FormContactUsWrapper style={{ width: "35%" }}>
            <div>
              <NewSpan>Keep In</NewSpan>
              <EventSpan>Touch</EventSpan>
            </div>
            <ContactUsInput type="text" placeholder="Name"></ContactUsInput>
            <ContactUsInput type="email" placeholder="Email"></ContactUsInput>
            <TextArea placeholder="Message"></TextArea>
            <SendButton>Send</SendButton>
          </FormContactUsWrapper>
        </ContactUsContainer>
      </div>
    </ContactUsWrapper>
  );
}
