import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 77px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 123px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  h1 {
    
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme}) => theme.COLORS.LIGHT_200};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme}) => theme.COLORS.LIGHT_700};
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme}) => theme.COLORS.LIGHT_700};
  }
`