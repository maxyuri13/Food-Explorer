import styled from "styled-components";

export const Container = styled.div`

  .bannerCard {
    width: 112rem;
    height: 26rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;

    padding-right: 1rem;

    
    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    .title {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: end;
    
      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 4rem;
        font-weight: 500;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    img {
      width: 632px;
      height: 406px;
      position: absolute;
      left: 3rem;
      top: 1rem;

      max-height: 13.5rem;
      object-fit: fill;
    }
  }
  
`