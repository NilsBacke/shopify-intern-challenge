import styled from 'styled-components'
import { ContentCard } from './components/ContentCard'

export const Container = styled.div`
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 70%;
`

export const Header = styled.p`
  font-size: 38px;
  font-weight: bold;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding 16px;
`

export const TwoCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const StyledContentCard = styled(ContentCard)`
  padding: 12px;
  margin: 6px:
`
