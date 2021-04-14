import gql from 'graphql-tag'

export const ME = gql`
  query me{ 
    user(login: "TheQuasarS50014p81") {
      name
      avatarUrl
    }
  }
`