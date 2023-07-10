import React from 'react'
import "./Rewards.css"
import rewards from "../../../assets/VectorRewards.svg"
import greenOrder from "../../../assets/VectorGreenOrder.svg"

export default function Rewards (props) {
    return (
        <div className='rewards_container'>
            <div>
                <img className='rewards_image' src={rewards} alt=''></img>
                <div className='rewards_text1'>
                    <p className='rewards_title_font'>Reward program as a heartfelt thank you.</p>
                    <p className='rewards_text_font'>We are excited to introduce our new rewards program, designed to reward our loyal customers who share our commitment to sustainability. As a member of our program, you can earn points toward discounts and exclusive offers by making purchases, referring friends, and engaging with us on social media. Join us in our mission to make a positive impact on the environment, and start earning rewards today.</p>
                </div>
            </div>
            <div>
                <div className='rewards_text'>
                    <p className='rewards_title_font'>Every order grows a tree!</p>
                    <p className='rewards_text_font'>Our foundation is rooted in adoration for nature and a dream for a kinder world. We take care to have a minimal impact on the environment and are committed to providing significant support for indigenous wildlife and land restoration . We contribute no less that 10% of our profits to environmental groups and, in collaboration with Trees For Life, a tree is planted with each purchase.</p>
                </div>
                <img className='rewards_image' src={greenOrder} alt=''></img>
            </div>
        </div>
    )
}