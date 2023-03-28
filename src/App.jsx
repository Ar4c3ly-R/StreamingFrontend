import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Form } from './components/Form'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/create-user' element={<Form/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
