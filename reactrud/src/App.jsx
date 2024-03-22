
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Edit from './components/Edit';
import {Route,Routes} from 'react-router-dom'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Read/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </>
  )
}

export default App
