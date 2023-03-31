import React from "react";
import { userState } from "../config/UserState";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()
  const getUserSession = userState( ( state) => state.session)
  console.log('current session ', getUserSession)

  const destroyUserSession = userState( (state) => state.removeSession)

  return (
    <nav className=" 
    bg-slate-900 border-gray-900 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 pb-8">
      <div className=" container flex justify-between">
        <a href="" className="flex items-center">
          <img
            src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            className="h-6 mr-3 sm:h-9 pr-4"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex pr-4">
          {getUserSession.isValid &&
          <>
          <form className="flex items-center pr-4">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-900 border border-gray-500 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>
          <button 
            onClick={async (e) => {

              destroyUserSession()
              navigate('/')

            }}
            type="button" 
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
            focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Logout
          </button>
          </>
          }
          {!getUserSession.isValid &&
          <button 
            onClick={async (e) => {

              navigate('/login')

            }}
            type="button" 
            className="pl-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
            focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Sign in 
          </button>
          }
        </div>
      </div>
    </nav>
  );
};
