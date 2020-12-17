import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  min-width: calc(50% - 30px);
  margin: 12px 12px 0px 0px;
  padding: 12px;
`

export const TitleText = styled.p`
  font-size: 20px;
  margin: 4px;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
