import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import img6 from '../../assets/images/mer6.png';
import img7 from '../../assets/images/mer7.png';
import img8 from '../../assets/images/mer8.png';
// import img3 from '../../assets/images/mer4.png';
// import img4 from '../../assets/images/mer5.png';

import './menuaccessorie.css';
export default class Menuaccessorie extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
      
    };
    return (
      <div>
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings}>
        <div class="card-content-beverage">
            <img src={img6} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>
          <div class="card-content-beverage">
            <img src={img7} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>
          <div class="card-content-beverage">
            <img src={img8} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}