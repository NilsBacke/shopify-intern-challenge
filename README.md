# Shopify Intern Challenge

## Decisions

- I initially decided that I was going to use redux to be able to access my state easily in any component, but I realized that this project was simple enough where I could just use component state with callback functions
- I also made use of debounced search, to only search when the user doesn't type anything for a small period of time (750 ms in this case)
- I also made use of typescript, which made development a lot easier with minimal setup/boilerplate

## Future Additions

- Show message when no results were found from query
- Error handling
- Store API key as an environment variable
- Save nominations to a database
