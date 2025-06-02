import "./plans.css"
import tick from "../../assets/tick.png"
import { FaArrowRight } from "react-icons/fa";
import { GiHeartPlus } from "react-icons/gi";
import { FaRupeeSign } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { FaChessKing } from "react-icons/fa";
const Plans=()=>{
    return(
        <div className="plans">
        <div className="blur plans-blur1"></div>
        <div className="blur plans-blur2"></div>
            <div className="program-header" style={{gap:"2rem"}}>
                <span className="stroke-text">READY TO START </span>
                <span>YOUR JOURNEY </span>
                <span className="stroke-text">NOW WITH US</span>
            </div>

            {/* plans card */}
            <div className="plan-cards">
                <div className="plan-card">
                    <div className="icon"><GiHeartPlus /></div>
                    <p>BASIC PLAN</p>
                    <h2><FaRupeeSign /> 399</h2>
                    <div className="plan-text"><img src={tick} alt="" /> 2 hours of excersies</div>
                    <div className="plan-text"><img src={tick} alt="" /> Free consultation to coaches</div>
                    <div className="plan-text"><img src={tick} alt="" /> Access to The Community</div>
                    <p className="item-join">See more benefits <FaArrowRight /></p>
                    <button className="btn">Join now</button>
                </div>
                <div className="plan-card">
                    <div className="icon" style={{color:"white"}}><FaChessKing /></div>
                    <p>PREMIUM PLAN</p>
                    <h2><FaRupeeSign /> 450</h2>
                    <div className="plan-text"><img src={tick} alt="" /> <p>5 hours of excersies</p></div>
                    <div className="plan-text"><img src={tick} alt="" /> <p>Free consultation to coaches</p></div>
                    <div className="plan-text"><img src={tick} alt="" /> <p>Access to The minibar</p></div>
                    <p className="item-join">See more benefits <FaArrowRight /></p>
                    <button className="btn" style={{color:"orange"}}>Join now</button>
                </div>
                <div className="plan-card">
                    <div className="icon"><LuDumbbell /></div>
                    <p>PRO PLAN</p>
                    <h2><FaRupeeSign /> 499</h2>
                    <div className="plan-text"><img src={tick} alt="" /> 8 hours of excersies</div>
                    <div className="plan-text"><img src={tick} alt="" /> consultation of private coach</div>
                    <div className="plan-text"><img src={tick} alt="" /> Free Fitness Merchandises</div>
                    <p className="item-join">See more benefits <FaArrowRight /></p>
                    <button className="btn">Join now</button>
                </div>
            </div>
        </div>
    )
}
export default Plans;