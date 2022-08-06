import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-5'>
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            {/* <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} /> */}
            {/* <Route path='/' element={<HomeScreen />} /> */}
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
