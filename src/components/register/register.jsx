import './register.css';
import { useState } from 'react';

import axios from 'axios';function Register() {

    const  [name, setName] = useState([]);
    const  [email, setEmail] = useState([]);
    const  [password, setPassword] = useState([]);
    const handleName = (event) => {
       
        setName(event.target.value)
    }

    const handleEmail = (event) => {
       
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
       
        setPassword(event.target.value)
    }

    const handleSubmit= (event) => {
        event.preventDefault();


        axios.post('http://localhost:8080/register', {
            email:email,
            name: name,
            password:password   
           
          })
          .then((response) => {
            if(response.data.status==='ok'){
                alert('register success')
                window.location='/Signin'
               
            }
                   
          }, (error) => {
            console.log(error);
          });


    }

    return (
        <div id="containerregister">
            <div id="leftside">Create an account</div>
            <div id="rightsideregister">
                <form action="/action_page.php" method="post" onSubmit={handleSubmit}>

                    <div class="containeremail">
                        <div id="subcontaineremail">   
                        <label for="name" id="emailnew">Name</label>
                        <input id="emailformregister1" type="text" placeholder="Enter Name" name="name" required onChange={handleName}/>
                        </div>  
                        <div  id="subcontaineremail"> 
                        <label for="email" id="emailnew">Email</label>
                        <input id="emailformregister2" type="text" placeholder="Enter Email" name="email" required  onChange={handleEmail}/>
                        </div>
                        <div  id="subcontaineremail"> 
                        <label for="password" id="emailnew">Password</label>
                        <input id="emailformregister3" type="password" placeholder="Enter Email" name="password" required onChange={handlePassword}/>
                        </div>

                    </div>

                    <div class="container-register" >

                    </div>
                    <button id="loginbutton" type="submit">Create Account</button>
                </form>

            </div>
        </div>)
}

export default Register