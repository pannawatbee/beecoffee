import'./banner.css';

import img1 from '../../assets/images/BANNER MENU RECOMMEND.png'; 
import img2 from '../../assets/images/BANNER2.png'; 
import img3 from '../../assets/images/BANNER3ABOUTUS.png'; 
function Bannercomponent() {

    return (
        <div class="container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="item active">
                        <img id="imgbanner" src={img1} alt="Los Angeles"  />
                    </div>
                    <div class="item">
                        <img src={img2}alt="Chicago"  />
                    </div>
                    <div class="item">
                        <img src={img3}alt="New york"  />
                    </div>
                </div>
                <a id="leftcarousel" class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a id="leftcarousel" class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default Bannercomponent