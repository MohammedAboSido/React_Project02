import React from "react";
import { Div, P, Span, SubTitle, WatchVideoWrapper } from "./style";

export default function WatchVideo() {
  return (
    <div className="container">
      <WatchVideoWrapper>
        <Div>
          <Span>Watch Video</Span>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quae, ex natus earum inventore vitae excepturi unde libero
            iste molestias expedita tenetur esse molestiae delectus!
          </SubTitle>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quae, ex natus earum inventore vitae excepturi unde libero
            iste molestias expedita tenetur esse molestiae delectus!
          </P>
        </Div>

        <Div>
          <iframe
            src="https://www.youtube.com/embed/eI4an8aSsgw"
            width="100%"
            height="350px"
            frameBorder="0"
          ></iframe>
        </Div>
      </WatchVideoWrapper>
    </div>
  );
}
