import './order.css';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"

import {
  useParams
} from "react-router-dom"
function Ordercomponent() {
  const { ListTitle } = useParams();
  const [idUsers, setIdUsers] = useState();
  const [idList, setIdList] = useState();
  const [Price, setPrice] = useState(50); // get frombackend
  const [amount, setAmount] = useState([]);


  const handleorder = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/order`, {
      amount: amount,
      totalBaht: Price * amount,
      idList: idList,
      idUsers: idUsers
    }).then(res => {
      window.location = '/'
      console.log(res.data)
    })

    alert("Thank you for support")
    window.location = '/'

  }


  useEffect(() => {

    const token = localStorage.getItem('token')
    axios.all([
      axios.get(`http://localhost:8080/price?ListTitle=${ListTitle}`),
      axios.post(`http://localhost:8080/idUsers`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      })
    ])
      .then(responseArr => {
        const [{ idUsers: idUsers }] = responseArr[1].data.results;
        setIdUsers(idUsers);
        console.log(responseArr[0].data.results)
        const [{ Price: Price, idList: idList }] = responseArr[0].data.results

        setIdList(idList)
        setPrice(Price)
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {

          })

      });


  }, []);





  const handleamount = (event) => {
    setAmount(event.target.value)
  }
  return (<>
    <h1 id="ordertitle">ORDER List</h1>
    <form action="">
      <table>
        <tr>
          <th id="beveragetitle">Beverage Title</th>
          <th id="amounttitle">Amount</th>
          <th id="pricetitle">Price</th>
          <th id="totalpricetitle">Total Price</th>
        </tr>
        <tr>
          <td>{ListTitle}</td>
          <td><input id="amountinput" type="text" onChange={handleamount} /></td>
          <td>{Price}</td>
          <td>{amount * Price}</td>
        </tr>

      </table>
      <button id="order" onClick={handleorder}>Order</button>
    </form>

  </>)
}
export default Ordercomponent