import Ordercomponent from '../components/order/order'
import { useEffect } from 'react'
function Orderpage() {
    useEffect(() => {

        const token =localStorage.getItem('token')

        fetch('http://localhost:8080/authen',{
            method:'POST',
            headers:{
             'Content-Type':'application/json',
             'Authorization':'Bearer '+token
            },
           })
            .then(response => response.json())
            .then(data=>{
          if(data.status=='ok'){ 
           alert('authen success')
        //    localStorage.setItem('token',data.token)
        }else{
        alert('authen failed')
        localStorage.removeItem('token');
        window.location ='/Signin'  
        }
        })
        .catch((error)=>{
          console.log('Error:',error);
        })       
         
          }, [])
    return(
    
        <>
        <Ordercomponent/>
        </>
    
    
    )}
    
    export default Orderpage