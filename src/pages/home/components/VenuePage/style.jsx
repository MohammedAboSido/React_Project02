import styled from "@emotion/styled";
import Venuebg from "images/ourPrograms/venue-bg.jpg";
import theme from "../../../../design-system/config";

export const VenueWrapper = styled("section")`
  label: VenueWrapper;
  height: 450px;
  padding: 3rem 0;
  margin: 5rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${Venuebg}) fixed;
`;

export const VenueSpan = styled("span")`
  label: VenueSpan;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;

export const P = styled("p")`
  label: P;
  width: 50%;
  line-height: 1.7;
  margin: 2rem 0;
  color: ${theme.gray};
`;
export const DescriptionVenue = styled("p")`
  label: DescriptionVenue;
  color: ${theme.black};
  font-weight: bold;
`;
