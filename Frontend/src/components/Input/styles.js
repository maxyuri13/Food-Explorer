import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: .5rem;

  font-size: 1.6rem;
  font-weight: 400;

  > input {
    width: 100%;
    height: 48px;
    padding: 1.2rem 1.4rem;
    
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    } 
  }

  > svg {
      margin-left: 1.4rem;
    }
`;