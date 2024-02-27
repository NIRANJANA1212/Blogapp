import logo from './logo.svg';
import './App.css';
// import Login from './componenets/Login';
import Navbar from './componenets/Navbar';
import AddBlog from './componenets/AddBlog';
import Dashboard from './componenets/Dashboard';

import { Routes,Route } from 'react-router-dom';
function Blog() {
  return (
    <div className="Blog">
      <Navbar/>
      <Routes>
        <Route path='/' element={<AddBlog/>}></Route>
        <Route path='/sign' element={<Dashboard/>}></Route>
    
      </Routes>

    
      
    </div>
  );
}

export default Blog;
