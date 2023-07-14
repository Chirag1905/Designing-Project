import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';

const Footer = () => {
     return (
          <>
               <div className='row-top'>
               <div className="innerRowTop">
               <div>
                         <h3 className='title'>For Latest News & Updates</h3>
                         <input className='emailinput' type='email' placeholder='Your email address' />
                         <button className='signupbutton'>SIGN UP</button>
                    </div>
                    <div>
                         <h3>Follow Social Accounts For Latest Post</h3>
                         <div className="l">
                              <i className="fa-brands fa-facebook-f fa-lg"/>
                              <i className="fa-brands fa-instagram fa-lg"/>
                              <i className="fa-brands fa-twitter fa-lg"/>
                              <i className="fa-brands fa-pinterest fa-lg"/>
                         </div>
                    </div>
               </div>
               </div>

               <div className="rowCenter">
                    <div>
                         <h3 style={{marginTop:"60px", marginBottom:"10px"}}>PAYMENT METHODS</h3>
                         <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/240-by-97-2nd.jpg" alt="" />
                    </div>
                    <div>
                         <h3 style={{marginTop:"60px", marginBottom:"10px"}}>COURIER PARTNERS</h3>
                         <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/240-by-97.jpg" alt="" />
                    </div>
                    <div>
                         <h3 style={{marginTop:"60px", marginBottom:"10px"}}>SECURE SHOPPING</h3>
                         <img src="https://mnfurnitures.co.uk/wp-content/uploads/2022/09/240-BY-97-FINAL.jpg" alt="" />
                    </div>
                    <div>
                         <h3 style={{marginTop:"60px", marginBottom:"10px"}}>COMPANY DETAILS</h3>
                        <div className='r-left'>
                         <p>MN FURNITURE LIMITED</p>
                         <p><b>Company number:</b> 12307072</p>
                         <p><b>VAT number:</b> GB 341671020</p>
                        </div>
                    </div>
               </div>
               <div className="foot-panel1">
                    <ul>
                         <p>MN Furnitures is a pioneer of furniture</p>
                         <p>manufacturers In the UK who deliver elegant</p>
                         <p>and stylish furniture for your house and</p>
                         <p>offices at affordable rates all over the UK.</p>
                         <span> <i className="fa-solid fa-phone" style={{ padding: "8px" }} /> CALL US</span>
                         <span> <i className="fa-solid fa-envelope" style={{ padding: "8px" }} />E-MAIL</span>
                    </ul>
                    <ul>
                         <h3>Customer Service</h3>
                         <p className='foot1'><MdKeyboardArrowRight />  Money Back Guarantee.</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Live chat Support</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Free Delivery all over the UK</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Care and Maintenance of Furniture</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Interest Free Credit Option</p>
                    </ul>
                    <ul>
                         <h3>Assembly Guideline</h3>
                         <p className='foot1'><MdKeyboardArrowRight />  Assembly Instructions</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Assembly Instructions For Bed</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Assembly Instructions for Wardrobes</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Assembly Guideline for Sofa or Sofa Bed</p>
                         <p className='foot1'><MdKeyboardArrowRight />  Terms & Conditions</p>
                    </ul>
               </div>
               <div className="foot-panel2">
                    <div className="pages">
                         <p>SHOP ON MN FURNITURE</p>
                         <p>RETURNS POLICY</p>
                         <p>PRIVACY POLICY</p>
                         <p>TERMS AND CONDITIONS</p>
                         <p>TERMS AND CONDITIONS</p>
                         <p>MY ACCOUNT</p>
                         <p>BLOG</p>
                    </div>
                    <div className="copyright">
                         Copyright 2023 © MN Furniture
                    </div>
               </div>
          </>
     )
}

export default Footer