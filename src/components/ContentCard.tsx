import React from 'react'
import { getMovieString, Movie } from '../types'
import { Container, LoadingContainer, TitleText } from './ContentCardStyles'
import { Button, CircularProgress } from '@material-ui/core'

interface Props {
  title: string
  items: Movie[]
  buttonText: string
  onPressButton: (movie: Movie) => void
  isButtonDisabled: (movie: Movie) => boolean
  isLoading?: boolean
}

export const ContentCard: React.FC<Props> = (props) => {
  const renderContent = () => {
    return (
      <ul>
        {props.items.map((item, i) => {
          return (
            <li id={String(i)}>
              {getMovieString(item)}{' '}
              <Button
                onClick={() => props.onPressButton(item)}
                variant="contained"
                style={{ padding: 4, margin: 4 }}
                disabled={props.isButtonDisabled(item)}
              >
                {props.buttonText}
              </Button>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <Container>
      <TitleText>{props.title}</TitleText>
      {!props.isLoading && renderContent()}
      {props.isLoading && (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      )}
    </Container>
  )
}
