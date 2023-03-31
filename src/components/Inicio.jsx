import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Inicio = () => {

  const navigate = useNavigate()

  return (
    <div className='text-white'>
      <div className='flex justify-center'>
        <section className='items-center'>
          <img 
            src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
            className="h-80 "
            alt="Disney logo"
          />
          <div className='flex justify-center'>
           <button 
           onClick={async (e) => {

            navigate('/create-user')

          }}
          type="button" 
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          h-12 w-64 ">
          Sign up
          </button>
          <button 
          onClick={async (e) => {

            navigate('/create-user')

          }}
          type="button" 
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          h-12 w-64 ">
          Sign up
          </button>
          </div>
        </section>

        <section>
         
        </section>
      </div>
    </div>
  )
}
