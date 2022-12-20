import styled from "styled-components";

export default function NavPaper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16rem;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  @media (max-width: 320px) {
    padding: 0 2rem;
  }
`;
