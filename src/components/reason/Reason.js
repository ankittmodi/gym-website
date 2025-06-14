import React from 'react'
import "./reason.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
export default function Reason() {
    return (
    <div className="reasons1" id='reasons'>
        <div className="left1">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right1">
            <span>Some reasons</span>
            <div>
            <span className='stroke-text'>Why </span>
            <span> Choose Us ?</span>
            </div>
            <div className='details'>
                <div >
                    <img src={tick} alt=""/>
                    <span>OVER 130+ EXPERT COACHES</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt=""/>
                    <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>

            <span style={{color:"var(--gray)", fontweight:"normal", fontSize:"1rem"}}>OUR PARTNERS</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
    )
}
