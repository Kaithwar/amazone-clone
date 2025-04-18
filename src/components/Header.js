import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
    const [{ basket, user, drawer }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
          auth.signOut();
        }
      };

  return (
    <div className='header'>
        <Link to="/"><img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
        
        <div className="header_search">
            <input className='header_serachInput' type="text" />
            <SearchIcon className='header_serachIcon'/>
        </div>
        <div className="header_nav">
            <Link to={!user && "/login"}>
                <div className="header_option" onClick={handleAuthentication}>
                    <span className="header_optionLineOne">
                    Hello {user ?  user.email : "Guest"}
                    </span>
                    <span className="header_optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                    </span>
                </div>
            </Link>
            <div className="header_option">
                <span className="header_optionLineOne">Return</span>
                <span className="header_optionLineTwo">& Orders</span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout">
                <div className="header_basket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
            </Link>
            
        </div>
    </div>
    
  )
}

export default Header