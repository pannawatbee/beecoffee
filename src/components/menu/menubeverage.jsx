import React, { Component } from "react";
import { useEffect } from 'react';
import { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/CAPU.png';
import img2 from '../../assets/images/BLACK COFFEE.png';
import img3 from '../../assets/images/LATE.png';
import img4 from '../../assets/images/strawberry.png';
import img5 from '../../assets/images/GREENTEA.png';
import img6 from '../../assets/images/chocolate.png';

import './menubeverage.css';
import axios from "axios";
function Menubeverage() {
  const navigate = useNavigate()
  const [beverage, setBeverage] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  useEffect(() => {
    axios.get('http://localhost:8080/beverage')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setBeverage(response.data.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);




  // const handleOrder = (event) => {
  //   // const i=; 
  //   console.log(event)
  //   // window.location = `/Order`

  //   navigate("/order",{state:{LisTitle : beverage}})
  //   // navigate("/order")

   
  // }



  return (
    <div>
      {/* <h2> Multiple items </h2> */}
      <Slider {...settings}>
        {beverage.map((beverage) =>

          <>
            <div class="card-content-beverage">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body-beverage">
                <h5 class="card-title-beverage">{beverage.ListTitle}</h5>
                <p class="card-text-beverage">{beverage.ListText}</p>
                <Link to ={`/Order/${beverage.ListTitle}`} class="card-botton" > 
                ORDER
                {/* <a  class="card-botton" onClick={handleOrder}>ORDER</a> */}
                </Link>
              </div>
            </div>

          </>
        )
        }
        {/* <div class="card-content-beverage">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton" onClick={handleOrder}>ORDER</a>
            </div>
          </div> */}
        {/* <div class="card-content-beverage">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> */}
        {/* <div class="card-content-beverage">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>  */}
        {/* <div class="card-content-beverage">
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> */}
        {/* <div class="card-content-beverage">
            <img src={img5} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>  */}
        {/* <div class="card-content-beverage">
            <img src={img6} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> */}
      </Slider>
    </div>
  );
}
export default Menubeverage