// import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js';
import Login from './component/Login';
import Register from './component/Register';
import Forgot from './component/Forgot';
import Reset from './component/Reset';
import Gallary from './component/Gallary';
import Events from './component/Events';
import Contact from './component/Contact';
import Event from './component/Events';
import Wedding from './component/Wedding';
import Deatail from './component/Deatail';
import Birthday from './component/Birthday';
import Category from './component/Category';
import Sport from './component/Sport';
import Hooks from './component/Hooks';
import Admin from './Admin.js';
import Sidebar from './Sidebar.js';
import Userlist from './Userlist.js';
import Eventpost from './Eventpost.js';
import Bookedevent from './Bookedevents.js';
import Postcategory from './Postcategory.js';
import Logout from './Logout.js';



function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {["/", "/home"].map((e, i) =>
            <Route path={e} key={i} element={<Home />} />
          )}
          <Route  path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/Reset' element={<Reset />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/events' element={<Events />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/hooks' element={<Hooks />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/sidebar' element={<Sidebar />} />\
          <Route path='/userlist' element={<Userlist />} />
          <Route path='/eventpost' element={<Eventpost />} />
          <Route path='/bookedevent' element={<Bookedevent />} />
          <Route path='/postcategory' element={<Postcategory />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/event/' element={<Event />}>



            <Route path='wedding' element={<Wedding />} />
            <Route path='birthday' element={<Birthday />} />
            <Route path='sport' element={<Sport />} />
            <Route path='category' element={<Category />} />
            <Route path='deatail' element={<Deatail />} />

          </Route>
          <Route path='/deatail' element={<Deatail />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
