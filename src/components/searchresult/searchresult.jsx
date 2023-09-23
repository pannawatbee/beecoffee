import img1 from '../../assets/images/CAPU.png';
import { useContext } from "react"
// import {SearchContext} from "./components/App.js"
import { SearchContext } from "../../App.js"
import { UserContext } from '../../UserContext'
import './searchresult.css';
function Searchresultcomponent() {
    const { search, setSearch, nameList, setNameList } = useContext(UserContext);
    // const nameList = useContext(SearchContext);
    // const search = useContext(SearchContext);
    return (<>
        <div id="containermenu">
            <div id="leftside">
                <select name="" id="leftsidebar">
                    <option value="">Beverage</option>
                    <option value="">Cappuccino</option>
                    <option value="">Late</option>
                    <option value="">Black coffee</option>
                </select>
                <select name="" id="leftsidebar">
                    <option value="">Food</option>
                    <option value="">Soup and Pasta</option>
                    <option value="">Bakery</option>
                    <option value="">Salad and Yogurt</option>
                </select>
                <select name="" id="leftsidebar">
                    <option value="">Vegetarian Menu</option>
                </select>
            </div>
            <div id="rightside-searchresult" >

                {nameList.filter((item => {
                    if (search === "") {
                        return item
                    }
                    else if
                        (item.ListTitle.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                })).map((item => {
                    return (
                        <>
                            <div class="card-searchresult">
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body-beverage">
                                    <h5 class="card-title-beverage">{item.ListTitle}</h5>
                                    <p class="card-text-beverage">{item.ListText}</p>
                                    <a href="#" class="card-botton-searchresult">ORDER</a>
                                </div>
                            </div>
                        </>

                    )
                }))}

                {/* 
                
                <div class="card-searchresult">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body-beverage">
                        <h5 class="card-title-beverage">Capu2</h5>
                        <p class="card-text-beverage">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                        <a href="#" class="card-botton-searchresult">ORDER</a>
                    </div>
                </div>
                <div class="card-searchresult">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body-beverage">
                        <h5 class="card-title-beverage">Capu2</h5>
                        <p class="card-text-beverage">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                            <a href="#" class="card-botton-searchresult">ORDER</a>
                    </div>
                </div>
                <div class="card-searchresult">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body-beverage">
                        <h5 class="card-title-beverage">Capu2</h5>
                        <p class="card-text-beverage">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                            <a href="#" class="card-botton-searchresult">ORDER</a>
                    </div>
                </div>
                <div class="card-searchresult">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body-beverage">
                        <h5 class="card-title-beverage">Capu2</h5>
                        <p class="card-text-beverage">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                            <a href="#" class="card-botton-searchresult">ORDER</a>
                    </div>
                </div>
                <div class="card-searchresult">
                    <img src={img1} class="card-img-top" alt="..." />
                    <div class="card-body-beverage">
                        <h5 class="card-title-beverage">Capu2</h5>
                        <p class="card-text-beverage">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                            <a href="#" class="card-botton-searchresult">ORDER</a>
                    </div>
                </div> */}


            </div>
        </div>


    </>)

}
export default Searchresultcomponent