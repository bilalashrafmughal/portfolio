import styled from "styled-components";

export default function Paper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 41px 177px;
  background-color: ${({ theme }) => theme.colors.background};
`;
