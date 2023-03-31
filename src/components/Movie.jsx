import React, { useEffect } from 'react'
import { userState } from '../config/UserState'
import { useNavigate } from "react-router-dom";


export const Movie = () => {

  const navigate = useNavigate()
  const verifySession = userState((state) => state.session)
  console.log('session from movie: ', verifySession)

  useEffect(() => {

    if(!verifySession.isValid) return navigate('/login')
  
  }, [])

  return (
    <div>Movie</div>
  )
}
