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