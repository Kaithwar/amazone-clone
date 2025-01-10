import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function Product({id,title,image,price,rating}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log("This is the basket>>", basket)
    const addToBasket = () => {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            image,
            price,
            rating,
          },
        });
        // toast("Added item to basket!");
      };
  return (
    <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
                
            </div>
        </div>
        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product