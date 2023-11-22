import styled from "styled-components";

export const Container = styled.span`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  height: 24px;
  border: 0;
  padding: .4rem .8rem;
  border-radius: .5rem;

  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  
`