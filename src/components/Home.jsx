import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_MOVIE } from "../graphql/Queries"
import { Link } from "react-router-dom"
import { userState } from "../config/UserState"
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate()
  const [searchMovie, { data, error }] = useLazyQuery(GET_MOVIE)


  const verifySession = userState((state) => state.session)
  console.log('session from home: ', verifySession)

  useEffect(() => {

    if(!verifySession.isValid) return navigate('/login')
      
      searchMovie()
  
  }, [])

  if( data ) {
    console.log(data)
  }

  if(error) return <h1>Error: {error}</h1>
  

  return (

      <div className="grid gap-7 grid-cols-5 grid-rows-3 pl-8">
        {data &&
          data.getMovies.map(( { _id, title, description, likes, image, releasedate }) =>(
        <Link
          to="/movie"
          state={{ _id, title, description, likes, image, releasedate}}
          className="max-w-sm bg-slate-900 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          
          <a href="#">
            <img
              className="rounded-t-lg h-80 w-64"
              src={image}
              alt
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h6 className="mb-2 font-bold tracking-tight text-white dark:text-white">
                {title}
              </h6>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <label htmlFor="" className="inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
              </svg>
              {likes} 
              </label>
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
              </svg>
            </a>
      </div>
      </Link>
      ))}
      </div>
  )
}
