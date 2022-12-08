import styled from "@emotion/styled";
import contactbg from "images/ourPrograms/contact-bg.jpg";
import theme from "../../../../design-system/config";

export const ContactUsWrapper = styled("section")`
  label: ContactUsWrapper;
  background: url(${contactbg}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  overflow: hidden;
  padding: 3rem 0;
  margin: 5rem 0;
`;
export const ContactUsContainer = styled("div")`
  label: ContactUsContainer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewSpan = styled("span")`
  label: NewSpan;
  font-size: 2rem;
  padding-right: 0.5rem;
  color: ${theme.black};
`;
export const EventSpan = styled("span")`
  label: EventSpan;
  font-size: 2rem;
  color: ${theme.primary};
`;

export const DescriptionContactUs = styled("p")`
  label: DescriptionContactUs;
  color: ${theme.gray};
`;
export const FormContactUsWrapper = styled("div")`
  label: FormContactUsWrapper;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${theme.white};
  border-radius: 30px;
  padding: 3rem 1.5rem;
`;
export const ContactUsInput = styled("input")`
  label: ContactUsInput;
  padding: 0.3rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${theme.gray};
  background-color: transparent;
  color: ${theme.black};
  ::placeholder {
    font-size: 1rem;
    color: ${theme.gray};
  }
`;
export const TextArea = styled("textarea")`
  label: TextArea;
  padding: 0.3rem;
  height: 100px;
  resize: vertical;
  outline: none;
  border: none;
  border-bottom: 1px solid ${theme.gray};
  background-color: transparent;
  color: ${theme.black};
  ::placeholder {
    font-size: 1rem;
    color: ${theme.gray};
  }
`;

export const DownloadButton = styled("button")`
  label: DownloadButton;
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
  :hover {
    color: ${theme.white};
    background: ${theme.black};
    border: 2px solid ${theme.primary};
  }
`;
export const SendButton = styled(DownloadButton)`
  label: SendButton;
  background: ${theme.black};
  border: 4px solid ${theme.black};
  text-transform: capitalize;
  padding: 0.4rem 1.7rem;
  border-radius: 25px;

  :hover {
    color: ${theme.white};
    background: ${theme.secondary};
    border: 4px solid ${theme.primary};
  }
`;
