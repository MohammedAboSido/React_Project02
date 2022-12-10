import {
  faBehance,
  faDribbble,
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { DescriptionFooter, FooterWord, FooterWrapper, Li, Ul } from "./style";

export default function Footer() {
  return (
    <FooterWrapper>
      <DescriptionFooter>
        Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022 Your
        Company | Design:{" "}
      </DescriptionFooter>
      <FooterWord>Mohammed Abo Sido</FooterWord>
      <Ul>
        <Li>
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
        </Li>
        <Li>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </Li>
        <Li>
          <FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon>
        </Li>
        <Li>
          <FontAwesomeIcon icon={faBehance}></FontAwesomeIcon>
        </Li>
        <Li>
          <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
        </Li>
      </Ul>
    </FooterWrapper>
  );
}
