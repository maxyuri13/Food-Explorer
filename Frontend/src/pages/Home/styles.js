import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer"

  
`
export const Content = styled.div`
  overflow-y: auto;
`


export const Panel = styled.div`
  padding: 26.8rem auto 0;
`
