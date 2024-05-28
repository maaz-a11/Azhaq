import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path = '/' element = {<HomePage/>}  />
      <Route path = '/all' element = {<AllUsers/>}  />
      <Route path = '/add' element = {<AddUser/>}  /> 
      <Route path = '/edit/:id' element = {<EditUser/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
