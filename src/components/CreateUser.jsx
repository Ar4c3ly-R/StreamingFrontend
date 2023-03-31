import React from 'react'
import { userState } from '../config/UserState'
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {

  const navigate = useNavigate()
  const verifySession = userState((state) => state.session)
  console.log('session from createUser: ', verifySession)


  return (

    <div>Create User </div>
  )
}
