import './App.css'
import { Inicio } from './components/Inicio'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { CreateUser } from './components/CreateUser'
import { Movie } from './components/Movie'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const client = new ApolloClient( {
    cache: new InMemoryCache(),
    uri:"http://localhost:3000/"
  })
 
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route index element={<Inicio/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/movie' element={<Movie/>}></Route>
          <Route path='/create-user' element={<CreateUser/>}></Route>
        </Routes>
      </ApolloProvider>
    </Router>
  )
}

export default App
