import Header from './Header/Header'
import './herosection.css'
import React from 'react'
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import {motion} from 'framer-motion'
export default function Herosection() {
    const transition={type:'spring', duration:3}
  return (
    <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left">
            <Header/>
        {/* The best add */}
            <div className="thebest">
                <motion.div initial={{left:'230px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}>
                    
                </motion.div>
                <span>The best fitness club in the town</span>
            </div>

            {/* Hero section heading */}
            <div className="hero-text">
                <div><span className='stroke-text' >Shape </span>Your<span></span></div>
                <div><span>Ideal body</span></div>
                <div >
                    <span>In here we will help you to shape and build your ideal body and
                    live up your life to fullest</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>+110</span>
                    <span>Expert coachs</span>
                </div>
                <div>
                    <span>+674</span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness programs</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className="btns">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right">
            <button className='btn' >Join Now</button>
            <motion.div initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            {/* hero images */}
            <img src={hero_image}alt="" className='hero-image' />
            <motion.img initial={{right:'15rem'}}
            whileInView={{right:'24rem'}}
            transition={transition}
            src={hero_image_back} alt=""className='hero-image-back' />
            {/* calories */}

            <motion.div initial={{right:'47rem'}}
            whileInView={{right:'32rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories Burned </span>
                <span>220 Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}
