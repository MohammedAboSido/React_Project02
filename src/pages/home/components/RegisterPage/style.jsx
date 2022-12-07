import styled from "@emotion/styled";
import registerbg from "images/ourPrograms/register-bg.jpg";
import theme from "../../../../design-system/config";

export const RegisterWrapper = styled("section")`
  label: RegisterWrapper;
  height: 450px;
  padding: 3rem 0;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${registerbg}) fixed;
`;
export const RegisterContainer = styled("div")`
  label: RegisterContainer;
  display: flex;
  justify-content: space-between;
`;

export const RegisterSpan = styled("span")`
  label: Register;
  font-size: 2rem;
  padding-right: 0.5rem;
  font-weight: bold;
  color: ${theme.white};
`;
export const HereSpan = styled("span")`
  label: Here;
  font-size: 2rem;
  font-weight: bold;
  color: ${theme.primary};
`;

export const DescriptionRegister = styled("p")`
  label: DescriptionRegister;
  color: ${theme.white};
  font-weight: bold;
`;
export const DescriptionRegisterTwo = styled("p")`
  label: DescriptionRegister;
  color: ${theme.gray};
`;
export const FormWrapper = styled("div")`
  label: FormWrapper;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ResigerInput = styled("input")`
  label: ResigerInput;
  padding: 0.6rem;
  border-radius: 5px;
  border: 2px solid ${theme.white};
  background-color: transparent;
  color: ${theme.white};
  ::placeholder {
    font-size: 1rem;
  }
`;

export const RegisterButton = styled("button")`
  label: RegisterButton;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.7rem 2.5rem;
  border-radius: 5px;
  color: ${theme.white};
  background: ${theme.primary};
  border: 2px solid ${theme.primary};
  transition: all 0.3s;
  width: fit-content;
  align-self: flex-end;
  :hover {
    color: ${theme.secondary};
    background: ${theme.white};
    border: 2px solid ${theme.white};
  }
`;
