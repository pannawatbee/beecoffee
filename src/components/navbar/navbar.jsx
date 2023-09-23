import './navbar.css';
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/logo image.png';
import img2 from '../../assets/images/location.png';
import img3 from '../../assets/images/th.png';
import { useRef } from 'react';
import Bannercomponent from '../banner/banner';

import MenuContainercomponent from '../menucontainer/menucontainer';

function Navbarcomponent({ }) {
    const token =localStorage.getItem('token')
    // const ref = useRef(null)
    // const handleClick=()=>{
    //     console.log("test");
    //     ref.current?.scrollIntoView({behavior:;smooth})
    // }

    const clearToken =(event)=>{
        event.preventDefault();
        localStorage.removeItem('token');
        window.location ='/Signin'
    }

    return (
        <header id="header">
            <i class="fa-regular fa-location-smile"></i>
            <div id="logocontainer">
                <a href="">
                    <img id="logo" src={img1} />
                </a>
            </div>
            <div id="mediumheaderbar">
                <ul class="mhbul">
                    <li id="mhb1">
                        <Link to="/" >RECOMMEND</Link>
                        {/* <a href="" lang="en"></a> */}
                    </li>


                    {/* <li id="mhb2">
                    <Link to="/" href="#menu">MENU</Link>
                       
                    </li> */}


                    <li id="mhb3">
                        <Link to="/Merchandise">MERCHANDISE</Link>
                        {/* <a href="">MERCHANDISE</a> */}
                    </li>
                    <li id="mhb4">
                        <Link to="/Reward">REWARD</Link>
                    </li>
                </ul>
            </div>
            <div id="findus">
                {/* <div id="finduscontainer"> */}
                    <ul id="fucl">
                    <li id="fuc0">
                        {token ? (
                            <Link to="/Signin" className="sign" onClick={clearToken}>
                                Signout
                            </Link>
                        ) : (
                            <Link to="/Signin" className="sign">
                                Signin
                            </Link>
                        )}
                         </li>
                        {/* { 
                        if 
                        <li>log out</li>
                        } */}

                        <li id="fuc1">
                            <img id="location" src={img2} alt="" />
                            <a id="location-detail" href="">Find Me</a>
                        </li>
                        <li id="fuc2">
                            <img id="imglang" src={img3} alt="" />
                            <a id="changelang" href="" onclick="myFunction()">ไทย</a>

                        </li>
                    </ul>
                {/* </div> */}
            </div>
        </header>
    )
}
export default Navbarcomponent