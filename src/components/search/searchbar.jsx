import './searchbar.css';

import img1 from '../../assets/images/search.png';
// import { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import {useContext} from 'react';
import {SearchContext} from "../../App.js"
import { UserContext } from '../../UserContext';
function Searchcomponent() {
    const {search,setSearch,nameList,setNameList} =useContext(UserContext);
//     const [nameList,setNameList]= useState([]);
//    const  [search, setSearch] = useState("");

    const navigate= useNavigate();
    

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const handleSearchSubmit = (event) => {
       
        event.preventDefault();
        
        axios.get(`http://localhost:8080/all?search=${search}`).then((response) => {
            if(search!==""){
           console.log(response.data.results)
           setNameList(response.data.results)
           navigate("/searchAll")
            }
           else {
            navigate("/")
        }
        });
     }
   
    return (
        <>
            <form id="searchbarform" onSubmit={handleSearchSubmit}>
                <input id="searchinputbar" type="text" name="search" onChange={handleSearch} />
                <button id="buttonsearch" type="submit"><img id="searchicon" src={img1} alt="" /></button>
            </form>
            {/* {nameList.filter((item=>{
                if(search===""){
                    return item
                }
                else if 
                (item.BeverageTitle.toLowerCase().includes(search.toLowerCase())){
                    return item
                }
            })).map((item=>{
                return <h4>{item.BeverageTitle}</h4>
            }))} */}
        </>
    )


}
export default Searchcomponent