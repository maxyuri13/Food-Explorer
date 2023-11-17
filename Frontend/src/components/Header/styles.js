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

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};;
  }
`