

import Menubeverage from '../menu/menubeverage';
import MenuFood from '../menu/menufood';
import MenuVeg from '../menu/menuveg.jsx';
function MenuContainercomponent() {
return(  <div id="containermenu">
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
        <div id="rightside" >
            <p id="menu">Beverage</p>
            <p>Highlight Beverage</p>
            <Menubeverage/>
             <p>Food</p>
            <p>Highlight Food</p>
            <MenuFood/> 
             <p>Vegetarian Menu</p>
            <p>Highlight Vegetarian</p>
            <MenuVeg/> 
            </div>
</div>)

}
export default MenuContainercomponent