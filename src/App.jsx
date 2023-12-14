import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/App.css'

function App() {

  return (
    <div className='container-fluid vh-100'>
      <Header />
      <main className='row'>
        <Outlet />
        <Footer />
      </main>
      
    </div>
  )
}

export default App;
