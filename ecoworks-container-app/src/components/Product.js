import React from 'react';
import ecoworksFavouriteIcon from "../assets/VectorFavorite.svg"
import ecoworksShoppingBagIcon from "../assets/VectorShoppingBag.svg"
import tempProduct from "../assets/tempProduct.svg"
import "./Product.css"

export default function Product(props) {
    return (
        <div className='container'>
            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p className='product_price_text'>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>

            <div className='product'>
                <img className='product_image' src = {tempProduct} alt=''/>
                <p className='product_text'>Recycled notebook Light Grey A5</p>
                <div className='product_price'>
                    <p>$20202</p>
                    <div className='product_icons'>
                        <img className='product_icon' src = {ecoworksFavouriteIcon} alt='' />
                        <img className='product_icon' src = {ecoworksShoppingBagIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}