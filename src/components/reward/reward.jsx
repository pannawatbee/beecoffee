import'./reward.css';
import img1 from '../../assets/images/logo image.png';
import {Link} from 'react-router-dom'
function Rewardcomponent() {
    return (
        <div class="logincontainer">
        <div class="logocontainer">
            <img class="imglogo" src={img1} alt=""/>
            <p id="pimglogo">BEE COFFEE</p>
            <p id="pimglogo2">REWARDS</p>
        </div>
        <div class="signupcontainer">
            <p id="signup">Signing up is easy and fast
            </p>
            <div id="buttonsignin">
            <button id="joinnow"><Link to="/Register"  >JOIN NOW</Link></button>
            <button id="signin"><Link to="/Signin" >SIGN IN</Link></button>
        </div>
        </div>
    </div>)
}

export default Rewardcomponent