import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const FooterWrapper = styled("footer")`
  label: FooterWrapper;
  text-align: center;
  padding: 2rem 0;
`;

export const DescriptionFooter = styled("span")`
  label: DescriptionFooter;
  color: ${theme.gray};
`;
export const FooterWord = styled("span")`
  label: FooterWord;
  font-weight: bold;
  color: ${theme.primary};
`;

export const Ul = styled("ul")`
  label: Ul;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding-top: 1rem;
`;
export const Li = styled("Li")`
  label: Li;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 1.5rem;
  transition: 0.3s;
  cursor: pointer;
  color: ${theme.gray};
  :hover {
    background-color: ${theme.primary};
    color: ${theme.white};
  }
`;
