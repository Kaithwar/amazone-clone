import React from 'react'
import Subtotal from './Subtotal'
import './Checkout.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user, drawer }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/PD23/PC_1500x180_ft.jpg" alt="" className="checkout_ad" />

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                    id={item.id}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    title={item.title}
                    />
                ))}
            </div>
        </div>
        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout