import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const Wrapper = styled("section")`
  label: Wrapper;
  padding: 3rem 0;
  text-align: center;
  background-color: ${theme.white};
`;

export const FirstWord = styled("span")`
  label: FirstWord;
  font-size: 2rem;
  padding-right: 0.5rem;
  font-weight: bold;
  color: ${theme.black};
`;
export const SecondWord = styled("span")`
  label: SecondWord;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;

export const DescriptionAccordion = styled("p")`
  label: DescriptionAccordion;
  color: ${theme.gray};
`;
