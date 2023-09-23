import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/green tea veg.png';
import img2 from '../../assets/images/coconut.png';
import img3 from '../../assets/images/strawberry juice.png';
import img4 from '../../assets/images/orange juice.png';
import img5 from '../../assets/images/sweet potato.png';
import img6 from '../../assets/images/yogurt.png';
import './menuveg.css';
export default class Menueveg extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div>
        {/* <h2> Multiple items </h2> */}
        <Slider {...settings}>
          <div class="card-content-beverage">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>
          <div class="card-content-beverage">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div>
          <div class="card-content-beverage">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> <div class="card-content-beverage">
            <img src={img4} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> <div class="card-content-beverage">
            <img src={img5} class="card-img-top" alt="..." />
            <div class="card-body-beverage">
              <h5 class="card-title-beverage">Capu2</h5>
              <p class="card-text-beverage">Some quick example text to build on the card title and make up
                the bulk of the card's content.</p>
              <a href="#" class="card-botton">ORDER</a>
            </div>
          </div> <div class="card-content-beverage">
            <img src={img6} class="card-img-top" alt="..." />
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