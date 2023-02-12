import React from 'react';
import './App.css';
import Landingpage from './landingpage';
import {BrowserRouter,Routes,Route, Outlet} from "react-router-dom"
import Postview from './postview';
import PostForm from './form';
import Header from './header'; 

function App() {
  return (
    <>
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Landingpage/></>}/>
            <Route Path='/header' element={<><Header/><Outlet/></>}>
            <Route path='/postview' element={<><Postview/></>}/>
            <Route path='/post' element={<><PostForm/></>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
    
  );
}
 
export default App;
