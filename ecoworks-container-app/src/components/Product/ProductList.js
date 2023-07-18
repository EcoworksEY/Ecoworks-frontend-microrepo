import React, { useEffect, useState } from "react";
import "./ProductList.css";
import Product from "./Product";
import NoteProductTypeIcons from "./NoteProductTypeIcons";
import NavIcons from "./NavIcons";

import temp from "../../assets/tempProduct.svg";
import tempProduct2 from "../../assets/tempProduct2.svg";
import productImage from "../../assets/SampleProduct/Image3.svg";
import productImage3 from "../../assets/SampleProduct/Image2.svg";

import sugProd1 from "../../assets/SampleProduct/suggestedProd1.svg";
import meadProd from "../../assets/SampleProduct/meadProd.svg";
// import listProducts from '../middleware/bff_service';

import axios from "axios";
import FilterSidebar from "./FilterSidebar/FilterSidebar";

const BFF_IP = "http://localhost:4000/bff";

// this is a dummy list of products which should be populated by running the query each time page is reloaded
var productsDummy = [
  {
    id: 1223561735867137,
    images: [temp, tempProduct2],
    title: "Dot Grit Notebooks",
    price: "10.99",
    category: "A5",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867138,
    images: [temp, tempProduct2],
    title: "Dot Grit Notebooks - A4",
    price: "12.99",
    category: "A4",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867139,
    images: [sugProd1, tempProduct2],
    title: "Lined Notebook Black Marble ",
    price: "18.89",
    category: "A5",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867140,
    images: [meadProd, tempProduct2],
    title: "Recycled Notebook Dark Green",
    price: "10.99",
    category: "A5",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867141,
    images: [productImage, productImage3],
    title: "Recycled Paper Cover Notebook",
    price: "15.89",
    category: "A5",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
  {
    id: 1223561735867142,
    images: [tempProduct2, tempProduct2],
    title: "Recycled Lined Notebook Bright Yellow",
    price: "20.89",
    category: "A5",
    colors: [
      { code: "#0E2C77", name: "Blue" },
      { code: "#000000", name: "Black" },
      { code: "#B8B3B3", name: "Light Grey" },
      { code: "#304043", name: "Dark Grey" },
    ],
  },
];

export default function ProductList(props) {
  // UseState
  const [products, setProducts] = useState({});
  const [filterBarVisible, setFilterBarVisible] = useState(true);

  // Use Effect for async function definition and fetching via BFF
  useEffect(() => {
    // Function for handling graphql access specifically for procut listing
    const listProducts = async () => {
      const options = {
        method: "POST",
        url: BFF_IP,
        headers: {
          "content-type": "application/json",
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
                    }`,
        },
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
    };

    // Actually invoke the function now
    listProducts();
  }, []);

  console.log(`Products is: ${JSON.stringify(products)}`);

  var index = 0;
  while (index < products.length) {
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
  };
  const handleFilterClose = () => {
    setFilterBarVisible(false);
  };
  return (
    <div>
      <NoteProductTypeIcons />
      <NavIcons handleFilterClick={handleFilterClick} />
      <p className="title_text"> Notebooks for you!</p>
      <div className="container_products">
        {productsDummy.map((data, index) => (
          <Product
            key={data.id}
            id={data.id}
            images={data.images}
            title={data.title}
            price={data.price}
            category={data.category}
            colours={data.colors}
          />
        ))}
      </div>
      <FilterSidebar
        displayed={filterBarVisible}
        onClickClose={handleFilterClose}
      />
    </div>
  );
}
