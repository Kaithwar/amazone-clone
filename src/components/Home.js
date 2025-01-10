import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home-img' src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PD23/ACQ/hero/v2/PC_Hero_3000x1200_2X_EN._CB600991698_.jpg" alt="" />
        </div>
        <div className="home_row">
            <Product id={124536} title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses+Zero to One:" price={29.99} image="https://m.media-amazon.com/images/I/81vvgZqCskL._SL1500_.jpg" rating={3} />
            <Product id={126536} title="Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution (Black)" price={50} image="https://m.media-amazon.com/images/I/61S9aVnRZDL._SL1500_.jpg" rating={5} />
        </div>
        <div className="home_row">
            <Product id={124539} title="Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage" price={200} image="https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg" rating={4} />
            <Product id={124536} title="Redmi A2 (Aqua Blue, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor |" price={53} image="https://m.media-amazon.com/images/I/81RR0TAz+5L._SL1500_.jpg" rating={3} />
            <Product id={124530} title="Panasonic 8 Kg Wifi  Fully-Automatic Top Loading Smart Washing Machine" price={150} image="https://m.media-amazon.com/images/I/71cUS-x12-L._SL1500_.jpg" rating={2} />
        </div>
        <div className="home_row">
            <Product id={124506} title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)" price={300} image="https://m.media-amazon.com/images/I/71a4ZQNqTiL._SL1500_.jpg" rating={5} />
        </div>
    </div>
  )
}

export default Home
