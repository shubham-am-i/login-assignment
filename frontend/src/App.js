import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
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
