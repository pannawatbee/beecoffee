import './menumerchandise.css';

import Menuhighlight from '../menumerchadise/menumerchandisehighlight';
import Menuclassic from '../menumerchadise/menuclassic';
import Menuaccessorie from '../menumerchadise/menuaccessorie';
function MenumerchandiseContainercomponent() {
    return (<div id="containermenu">
        <div id="leftside">
            <select name="" id="leftsidebar">
                <option value="">Merchandise</option>
                <option value="">Highlight Collection</option>
                <option value="">Classic Collection</option>
                <option value="">Accessories</option>
            </select>
        </div>
        <div id="rightside">
            <p>Merchandise</p>
            <p>Highlight Collection</p>
            < Menuhighlight />
            <p>Classic Collection</p>
            <Menuclassic/>
            <p>Accessories Collection</p>
            < Menuaccessorie/>
        </div>
    </div>)

}
export default MenumerchandiseContainercomponent