
import './App.css';
import Header from './Layouts/Header';
import Notes from './page/Notes';
import { Route, Routes } from 'react-router-dom';
import Note from './page/Note';
import Admin from './Components/Admin';

function App() {
  return (
    <>
    <div className='container'>

      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' index element={<Notes />} />
          <Route path='/adminPanel'  element={<Admin />} />
          <Route path='/note/:id' element={<Note />} />
        </Routes>
      </div>
    </div>

    </>
  );
}

export default App;
