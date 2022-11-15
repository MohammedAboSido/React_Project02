import about from "images/ourPrograms/about-us.jpg";
import React from "react";
import { AboutUsWrapper, Div, P, Span } from "./style";
export default function AboutUs() {
  return (
    <div className="container">
      <AboutUsWrapper>
        <Div>
          <Span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quae, ex natus earum inventore vitae excepturi unde libero
            iste molestias expedita tenetur esse molestiae delectus!
          </Span>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quae, ex natus earum inventore vitae excepturi unde libero
            iste molestias expedita tenetur esse molestiae delectus!
          </P>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dicta quae, ex natus earum inventore vitae excepturi unde libero
            iste molestias expedita tenetur esse molestiae delectus!
          </P>
        </Div>

        <Div>
          <img width="100%" src={about} alt="about-us" />
        </Div>
      </AboutUsWrapper>
    </div>
  );
}
