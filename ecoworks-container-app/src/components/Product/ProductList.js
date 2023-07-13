import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Product from './Product';
import NoteProductTypeIcons from "./NoteProductTypeIcons";
import NavIcons from "./NavIcons";

import temp from '../../assets/tempProduct.svg'
import tempProduct2 from '../../assets/tempProduct2.svg'
import productImage from "../../assets/SampleProduct/Image3.svg";
import productImage3 from "../../assets/SampleProduct/Image2.svg";

import sugProd1 from "../../assets/SampleProduct/suggestedProd1.svg";
import meadProd from "../../assets/SampleProduct/meadProd.svg"
// import listProducts from '../middleware/bff_service';

import axios from 'axios';
import FilterSidebar from './FilterSidebar/FilterSidebar';

const BFF_IP = 'http://localhost:4000/bff';


// this is a dummy list of products which should be populated by running the query each time page is reloaded
var productsDummy = [
    {
        id: 1223561735867137,
        image: [temp, tempProduct2],
        title: "Dot Grit Notebooks",
        price: "10.99",
        category: "A5",
        colors: ["#B8B3B3","#E8966D", "#000000", "#304043"]
    },
    {
        id: 1223561735867138,
        image: [temp, tempProduct2],
        title: "Dot Grit Notebooks - A4",
        price: "12.99",
        category: "A4",
        colors: ["#B8B3B3", "#E8966D", "#000000", "#304043"]
    },
    {
        id: 1223561735867139,
        image: [sugProd1,tempProduct2],
        title: "Lined Notebook Black Marble ",
        price: "18.89",
        category: "A5",
        colors: ["#000000", "#6C6940"]
    },
    {
        id: 1223561735867140,
        image: [meadProd,tempProduct2],
        title: "Recycled Notebook Dark Green",
        price: "10.99",
        category: "A5",
        colors: ["#304043","#E8966D", "#000000", "#B8B3B3"]
    },
    {
        id: 1223561735867141,
        image: [productImage,productImage3],
        title: "Recycled Paper Cover Notebook",
        price: "15.89",
        category: "A5",
        colors: ["#0E2C77", "#000000", "#B8B3B3", "#304043"]
    },
    {
        id: 1223561735867142,
        image: [tempProduct2,tempProduct2],
        title: "Recycled Lined Notebook Bright Yellow",
        price: "20.89",
        category: "A5",
        colors: ["#F6D324"]
    },
    
]

export default function ProductList(props) {

    // UseState
    const [products, setProducts] = useState({});
    const [filterBarVisible, setFilterBarVisible] = useState(true); 

    // Use Effect for async function definition and fetching via BFF
    useEffect( () => {

        // Function for handling graphql access specifically for procut listing
        const listProducts = async () => {
            const options = {
                method: 'POST',
                url: BFF_IP,
                headers: {
                    'content-type': 'application/json'
                },
                data: {
                    query: `{
                        productList {
                            product_id
                            name
                            description
                            price
                            sku_units
                        }
                    }`
                }
            };
            // axios
            // 	.request(options)
            // 	.then(function (response) {
            // 		console.log(response.data); // Response
            //         return response.data;
            // 	})
            // 	.catch(function (error) {
            // 		console.error('Axios error: ',error);
            // 	});
            try {
                // HAVE to await here. Otherwise it does not work.
                // Also, maybe think about inserting a loading thingy.

                const response = await axios.request(options);
                setProducts(response.data.data.productList);
                //return response;
            } catch (error) {
                console.error("Axios error: ", error);
                return error;
            }
            }

            // Actually invoke the function now
            listProducts();           
        }, []);

    console.log(`Products is: ${JSON.stringify(products)}`);
    
    var index = 0;
    while(index < products.length) {
        // append to the productsData
        var productItem = products[index];
        console.log(`We have producItem = ${JSON.stringify(productItem)}`);
        productsDummy[index].id = productItem.product_id;
        productsDummy[index].title = productItem.name;
        productsDummy[index].price = productItem.price;
        
        index += 1;
    }

    const handleFilterClick = () => {
        setFilterBarVisible(true);
    }
    const handleFilterClose = () => {
        setFilterBarVisible(false);
    }
    return (
        <div>
            <NoteProductTypeIcons />
            <NavIcons handleFilterClick = {handleFilterClick}/>
            <p className='title_text'> Notebooks for you!</p>
            <div className='container_products'>
                {productsDummy.map ((data, index) => ( 
                    <Product 
                        key = {data.id}
                        id = {data.id}
                        image = {data.image}
                        title = {data.title}
                        price = {data.price}
                        category = {data.category}
                        colors = {data.colors}
                    />
                ))}
            </div>
            <FilterSidebar displayed = {filterBarVisible} onClickClose = {handleFilterClose}/>
        </div>
    )

}