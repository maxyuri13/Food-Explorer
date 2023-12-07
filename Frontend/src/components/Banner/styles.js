import styled from "styled-components";

export const Container = styled.div`

  .bannerCard {
    width: 112rem;
   
    height: 26rem;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;

    border-radius: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 4rem;
      font-weight: 500;
      line-height: 56px;

      padding-right: 10rem;
        
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 16px;

      padding-top: .8rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    img {
      width: 63.2rem;
      height: 40.6rem;
      position: absolute;
      flex-shrink: 0;
      
      top: -146px;
      left: -56px;
      opacity: 0.8;
    }
  }
  
`