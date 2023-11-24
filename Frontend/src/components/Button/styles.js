import styled from 'styled-components';

export const Container = styled.button`
  
  background-color: ${({ theme}) => theme.COLORS.TOMATO_100};
  color: ${({ theme}) => theme.COLORS.LIGHT_100};

  height: 56px;
  border: 0;
  padding: 1.2em 3.2rem;
  border-radius: .5rem;
  gap: 8px;

  font-weight: 500;

  &:disabled {
    background-color: ${({ theme}) => theme.COLORS.TOMATO_400};
  }

  &:hover {
    background-color: ${({ theme}) => theme.COLORS.TOMATO_200};
  }
`