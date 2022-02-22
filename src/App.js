//import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';


import Home from './Pages/Home' ;
import AddUser from './Pages/AddUser';
import EditUser from './Pages/EditUser';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Home/>} ></Route>
    <Route exact path="/addUser" element={<AddUser/>} ></Route>
    <Route exact path="/editUser/:id" element={<EditUser/>} ></Route>
    </Routes>
    </div>
  );
}

export default App;

//switch is replaced by routes
//component is replaced by element
//{} is replaced by {<../>}
//useHistory is replaced by useNavigate()