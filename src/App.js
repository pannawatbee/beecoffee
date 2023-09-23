import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbarcomponent from './components/navbar/navbar';
import Bannercomponent from './components/banner/banner';
import Searchcomponent from './components/search/searchbar';
// import Axios from 'axios ';

import MenuContainercomponent from './components/menucontainer/menucontainer';
// import { } from 'react-router';
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Merchandisepage from './pages/Merchandisepage';
import Rewardpage from './pages/Rewardpage';
import Registerpage from './pages/Registerpage';
import Signinpage from './pages/Signinpage';
import Searchpage from './pages/Searchpage';
import Orderpage from './pages/Orderpage';
// import x from './component/navbar/navbar'
// import nameList from './component/search/searchbar'
import React from 'react';
import {UserContext} from "./UserContext"
import { useState } from 'react';
function App() {
  const [nameList,setNameList]= useState([]);
  const  [search, setSearch] = useState("");
  // const  [var, setVar] = useState("");
  return (
    <div >
      <UserContext.Provider value={{search,setSearch,nameList,setNameList}}>
      <Navbarcomponent />
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/Merchandise" element={<Merchandisepage />} />
        <Route path="/Reward" element={<Rewardpage/>}/>
        <Route path="/Register" element={<Registerpage/>}/>
        <Route path="/Signin" element={<Signinpage/>}/>
        <Route path="/searchAll" element={<Searchpage />}/>
        <Route path= "/Order/:ListTitle" element={<Orderpage />}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
