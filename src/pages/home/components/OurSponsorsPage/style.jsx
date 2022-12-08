import styled from "@emotion/styled";
import theme from "../../../../design-system/config";

export const SponsorsWrapper = styled("section")`
  label: SponsorsWrapper;
  text-align: center;
  background-color: ${theme.white};
  padding: 0 0 3rem 0;
`;

export const SponsorsFirstWord = styled("span")`
  label: SponsorsFirstWord;
  font-size: 2rem;
  padding-right: 0.5rem;
  font-weight: bold;
  color: ${theme.black};
`;
export const SponsorsSecondWord = styled("span")`
  label: SponsorsSecondWord;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;

export const DescriptionSponsors = styled("p")`
  label: DescriptionSponsors;
  color: ${theme.gray};
`;
export const SponsorContainer = styled("div")`
  label: SponsorContainer;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
