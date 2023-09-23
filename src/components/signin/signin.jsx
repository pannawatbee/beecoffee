import './signin.css';
import { useState } from 'react';
import axios from 'axios';

function Signin() {

    const  [email, setEmail] = useState([]);
    const  [password, setPassword] = useState([]);
        const handleSubmit= (event) => {
        event.preventDefault();


        axios.post('http://localhost:8080/login', {
            email: email,
            password: password
          })
          .then((response) => {
            if(response.data.status=='ok'){
                alert('login success')
                localStorage.setItem('token',response.data.token)
                window.location='/'
            }
            console.log(response);
            console.log(response.data);
            
          }, (error) => {
            console.log(error);
          });


    }
   
       const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword= (event) => {
        setPassword(event.target.value)
    }
 const handleRegister=()=>{
    window.location='/Register'
 }
    return (
        <div id="containersignin">
            <div id="leftside">Sign in</div>
            <div id="rightsidesigin">
                <form action="/action_page.php" method="post" onSubmit={handleSubmit}>
                    <div class="containeremail">
                        <div>
                            <label for="email" id="emailnew">Email</label>
                            <input name='email' id="emailform" type="text" placeholder="Enter Email"  onChange={handleEmail} required />
                        </div>
                        <div id="passcon">
                            <label for="password" id="passwordsigin" >Password</label>
                            <input name='password' id="passwordformsignin" type="password" placeholder="Enter Password" onChange={handlePassword} required />
                        </div>
                    </div>
                    <button id="loginbutton" type="submit" >Login</button>
                    <button id="registerbutton" type="submit" onClick={handleRegister} >Register</button>
                </form>

            </div>
        </div>

    )

}


export default Signin