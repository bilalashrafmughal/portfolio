import styled from "styled-components";

export default function Paper({ children, ...props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16rem;
  @media (max-width: 768px) {
    padding: 0 6rem;
  }
  @media (max-width: 320px) {
    padding: 0 2rem;
  }
`;
