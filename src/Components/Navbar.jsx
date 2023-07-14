import "../Styles/Navbar.css";
import { BsBagCheck } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="top">
                    <p><i className="fa-solid fa-star"></i>REVIEWS.io</p>
                    <p>FREE Delivery in UK (Excluding Ireland)</p>
                    <span className="top2">
                    <p> <i className="fa-solid fa-envelope"></i>info@mnfurnitures.co.uk</p>
                    <p> <i className="fa-solid fa-phone"></i> 02036330786</p>
                    </span>
                </div>
                <div className="navbar1">
                    <div className="left">
                        <div className="nav-logo">
                            {/* <div className="logo"></div> */}
                            <img className="logo" src="https://mnfurnitures.co.uk/wp-content/uploads/2023/04/mnfurniture-logo-jpg-01-1400x358.jpg" alt="" />
                        </div>
                    </div>
                    <div className="center">
                        <div className="nav-search">
                            <input className="search-input" placeholder="Search..." />
                            <div className="search-icon">
                                <i className="fa-solid fa-magnifying-glass" color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="nav-cart">
                            CART/£0.00  
                            <BsBagCheck style={{ marginLeft:"8px", fontSize:"20px"}}/>
                        </div>
                    </div>
                </div>
                <div className="panel1">
                    <div className="panel-ops">
                        <p><i className="fa-solid fa-truck-fast fa-lg"></i><b>FREE UK SHIPPING*</b></p>
                        <p><i className="fa-solid fa-hand-holding-dollar fa-lg"></i><b>FINANCE AVAILABLE</b></p>
                        <p><i className="fa-solid fa-shield-halved fa-lg"></i><b>100% SECURE PAYMENT</b></p>
                        <p><i className="fa-regular fa-square-check fa-lg"></i><b>QUALITY ASSURANCE</b></p>
                    </div>
                </div>
                <div className="panel">
                    <div className="panel-ops">
                        <p><b> WARDROBES <RiArrowDownSLine/></b></p>
                        <p><b>SOFA BEDS <RiArrowDownSLine/></b></p>
                        <p><b>SOFAS <RiArrowDownSLine/></b></p>
                        <p><b>BEDROOM SET <RiArrowDownSLine/></b></p>
                        <p><b>OUTDOOR&amp;GARDEN </b></p>
                        <p><b>BEDS AND MATTERS <RiArrowDownSLine/></b></p>
                        <p><b>LIVING ROOM <RiArrowDownSLine/></b></p>
                    </div>
                </div>
            </div>
    );
}
export default Navbar
{/* &amp; &apos;   &lsquo; &#39; &rsquo; */ }