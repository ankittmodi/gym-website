import './header.css'
import Logo from '../../assets/logo.png'
const Header=()=>{
    return(
        <div className="header">
            <img src={Logo} alt="" />
            <div >
                <ul className="list">
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why Us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;