import { gql } from '@apollo/client'

export const GET_MOVIE = gql `

query getMovies{
    getMovies{
        _id
        title
        description
        likes
        image
        releasedate
  }
}
`

export const LOGIN = gql `

query login($email:String, $password:String){
    login(email:$email, password:$password){
      name
  }
}
`