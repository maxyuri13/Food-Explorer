import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 104px;
  width: 100%;

  display: flex;
  align-items: center;

  padding: 24px 123px;
  gap: 32px;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`

export const Logo = styled.div`
  min-width: 185px;
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme}) => theme.COLORS.CAKE_100};
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme}) => theme.COLORS.LIGHT_100};
  }
`

export const Search = styled.div`
  flex: 1;
  min-width: 310px;

`

export const Order = styled.button`
  
  border: none;
  background: none;

  button {
    min-width: 230px;
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    
    svg {
      width: 32px;
      height: 32px;
      color: ${({ theme}) => theme.COLORS.LIGHT_100};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};;
  }
`