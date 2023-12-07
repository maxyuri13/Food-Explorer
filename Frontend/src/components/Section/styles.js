import styled from "styled-components";

export const Container = styled.div`
  margin: 4.7rem 0;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    padding-bottom: 2.3rem;
  }

`