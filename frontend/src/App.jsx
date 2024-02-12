import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <div className='d-flex flex-column side-allPage min-width'>
   <ToastContainer position='bottom-center' limit={1}/>
   <Header></Header>
      <main>
        <Container className='mt-3'>
          <Routes>
           
          </Routes>
        </Container>
      </main>
      <Footer/>
   </div>
   </BrowserRouter>
  )
}

export default App
