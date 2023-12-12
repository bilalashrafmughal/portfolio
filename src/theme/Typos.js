import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 5.5rem;
  @media (max-width: 320px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;
export const H1Gradient = styled.h1`
  font-weight: 700;
  font-size: 5.5rem;
  background: -webkit-${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 320px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 2.6rem;
  margin-bottom: 4rem;
`;
export const H4 = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.third};
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 2.6rem;
`;
export const P1 = styled.p`
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 4rem;
  color: ${({ theme }) => theme.colors.secondary};
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
export const P3 = styled.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const P4 = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.6rem;
`;
export const P4UB = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.third};
`;
export const P5 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.primary};
  white-space: pre;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const P6 = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.8rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.fourth};
`;
