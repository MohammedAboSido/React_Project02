import styled from "@emotion/styled";
import theme from "../../config";

export const SpeakersWrapper = styled("div")`
  label: SpeakersWrapper;
  width: 285px;
  text-align: center;
  color: ${theme.gray};
`;

export const Name = styled("h2")`
  label: Name;
  color: ${theme.black};
  font-weight: bold;
  font-size: 1.2rem;
  padding-top: 15px;
`;

export const Jobs = styled("span")`
  label: Jobs;
  color: ${theme.gray};
  font-size: 0.9rem;
`;
