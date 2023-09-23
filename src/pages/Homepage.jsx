import Bannercomponent from '../components/banner/banner'
import Searchcomponent from '../components/search/searchbar'
import MenuContainercomponent from '../components/menucontainer/menucontainer'
import { useEffect } from 'react'
// import Bannercomponent from '..banner/components/banner/banner';
// import Searchcomponent from '..searchbar/components/search/searchbar';
// import MenuContainercomponent from '.meucontainer./components/menucontainer/menucontainer';

function Homepage() {
 
    return (
        <><Bannercomponent /><Searchcomponent /><MenuContainercomponent /></>
    )
}
export default Homepage