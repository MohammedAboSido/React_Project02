import React from "react";
import {
  DescriptionRegister,
  DescriptionRegisterTwo,
  FormWrapper,
  HereSpan,
  RegisterButton,
  RegisterContainer,
  RegisterSpan,
  RegisterWrapper,
  ResigerInput,
} from "./style";

export default function Register() {
  return (
    <RegisterWrapper>
      <div className="container">
        <RegisterContainer>
          <div style={{ width: "60%" }}>
            <RegisterSpan>Register</RegisterSpan>
            <HereSpan>Here</HereSpan>
            <DescriptionRegister>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </DescriptionRegister>
            <DescriptionRegisterTwo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            </DescriptionRegisterTwo>
          </div>
          <FormWrapper style={{ width: "35%" }}>
            <ResigerInput type="text" placeholder="First Name"></ResigerInput>
            <ResigerInput type="text" placeholder="Last Name"></ResigerInput>
            <ResigerInput
              type="number"
              placeholder="Phone Number"
            ></ResigerInput>
            <ResigerInput
              type="email"
              placeholder="Email Address"
            ></ResigerInput>
            <RegisterButton>Register</RegisterButton>
          </FormWrapper>
        </RegisterContainer>
      </div>
    </RegisterWrapper>
  );
}
