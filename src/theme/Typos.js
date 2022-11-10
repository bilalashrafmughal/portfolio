import styled from "styled-components";

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
`;
export const H1Gradient = styled.h1`
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  background: -webkit-${({ theme }) => theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 26px;
  margin-bottom: 40px;
  margin-top: 30px;
`;
export const H4 = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const H5 = styled.h5`
  color: ${({ theme }) => theme.colors.third};
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
`;
export const P1 = styled.p`
  font-weight: 400;
  font-size: 32px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const P3 = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const P4 = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
`;
export const P4UB = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.third};
`;
export const P5 = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const P6 = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.fourth};
`;
