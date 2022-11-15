import styled from "@emotion/styled";
import Header from "images/ourPrograms/intro-bg.jpg";
import theme from "../../../../design-system/config";
export const HeaderWrapper = styled("section")`
  label: HeaderWrapper;
  height: 100vh;
  padding: 20% 0;
  background: url(${Header}) fixed;
  background-size: cover;
  text-align: center;
  background-repeat: no-repeat;
`;
export const H3 = styled("h3")`
  label: H3;
  color: ${theme.white};
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 3.5rem;
`;
export const Title = styled("h1")`
  label: Title;
  color: ${theme.white};
  font-size: 3.5rem;
`;

export const LearnMore = styled("button")`
  label: LearnMore;
  text-transform: uppercase;
  padding: 0.7rem 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  color: ${theme.white};
  background: transparent;
  border: 2px solid ${theme.white};
  transition: all 0.3s;
  margin-right: 3rem;
  margin-top: 2rem;
  :hover {
    color: ${theme.white};
    background: ${theme.primary};
    border: 2px solid ${theme.primary};
  }
`;
export const Register = styled("button")`
  label: Register;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.7rem 2.5rem;
  border-radius: 5px;
  color: ${theme.white};
  background: ${theme.primary};
  border: 2px solid ${theme.primary};
  transition: all 0.3s;
  :hover {
    color: ${theme.secondary};
    background: ${theme.white};
    border: 2px solid ${theme.white};
  }
`;
