import { Card, InputAdornment, TextField } from '@material-ui/core'
import React, { useCallback, useState } from 'react'
import {
  Container,
  ContentWrapper,
  Header,
  SearchWrapper,
  StyledContentCard,
  TwoCardWrapper,
} from './AppStyles'
import Search from '@material-ui/icons/Search'
import { Movie } from './types'
import { searchMovies } from './api/searchMovies'
import { debounce } from 'lodash'
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'

const DEBOUNCE_TIMER = 750 // in ms

const App: React.FC = () => {
  const [isSearchLoading, setIsSearchLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState<Movie[]>([])
  const [nominations, setNominations] = useState<Movie[]>([])

  const onChangeSearch = (text: string) => {
    setIsSearchLoading(true)
    setSearchText(text)
    debouncedSearch(text)
  }

  const debouncedSearch = useCallback(
    debounce((text) => {
      searchMovies(text).then((movies) => {
        setResults(movies)
        setIsSearchLoading(false)
      })
    }, DEBOUNCE_TIMER),
    []
  )

  const addNomination = (movie: Movie) => {
    setNominations([...nominations, movie])
  }

  const removeNomination = (movie: Movie) => {
    setNominations(
      nominations.filter(
        (n) => n.title !== movie.title && n.year !== movie.year
      )
    )
  }

  return (
    <Container>
      <ContentWrapper>
        <Header>The Shoppies</Header>
        {nominations.length === 5 && (
          <Alert severity="success" style={{ marginBottom: 16 }}>
            <AlertTitle>You're all set</AlertTitle>
            Thank you for selecting your 5 nominations.
          </Alert>
        )}
        <Card variant="outlined">
          <SearchWrapper>
            <TextField
              label="Movie Title"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              value={searchText}
              onChange={(e) => onChangeSearch(e.target.value)}
            />
          </SearchWrapper>
        </Card>
        <TwoCardWrapper>
          <StyledContentCard
            title={'Results for ' + searchText}
            items={results}
            buttonText="Nominate"
            onPressButton={addNomination}
            isButtonDisabled={(movie: Movie) =>
              nominations.includes(movie) || nominations.length === 5
            }
            isLoading={isSearchLoading}
          />
          <StyledContentCard
            title="Nominations"
            items={nominations}
            buttonText="Remove"
            onPressButton={removeNomination}
            isButtonDisabled={() => false}
          />
        </TwoCardWrapper>
      </ContentWrapper>
    </Container>
  )
}

export default App
