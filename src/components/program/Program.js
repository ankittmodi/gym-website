import "./program.css"
import { LuDumbbell } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { FaRunning } from "react-icons/fa";
import { FaFireFlameSimple } from "react-icons/fa6";
import { RiHeartPulseLine } from "react-icons/ri";
const Program=()=>{
    return(
        <div className="programs" id="programs">
            {/* Header */}
            <div className="program-header">
                <span className="stroke-text" >Explore our </span>
                <span>Programs </span>
                <span className="stroke-text">to shape you</span>
            </div>

            {/* programs categories */}
            <div className="program-category">
                <div className="items">
                    <div className="icon" ><LuDumbbell /></div>
                    <h2>Strength Training</h2>
                    <p>In this program, you are trained to improve your strength through many excercises.</p>
                    <p className="item-join">Join Now <FaArrowRight /></p>
                </div>
                <div className="items">
                    <div className="icon"><FaRunning /></div>
                    <h2>Cardio Training</h2>
                    <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
                    <p className="item-join">Join Now <FaArrowRight /></p>
                </div>
                <div className="items">
                    <div className="icon"><FaFireFlameSimple /></div>
                    <h2>Fat Burning</h2>
                    <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
                    <p className="item-join">Join Now <FaArrowRight /></p>
                </div>
                <div className="items">
                    <div className="icon"><RiHeartPulseLine/></div>
                    <h2>Health Fitness</h2>
                    <p>This programs is designed for those who excercises only for their body fitness not body building.</p>
                    <p className="item-join" >Join Now <FaArrowRight /></p>
                </div>
            </div>
        </div>
    )
}
export default Program;