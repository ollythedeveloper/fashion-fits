import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FashionFitsContext from "../FashionFitsContext";
import "./Nav.css";

export default function Nav() {
    //when navigating back to the landing page the selected size is reset for functionality
    const { resetSelectedSize } = useContext(FashionFitsContext)
    return (
        <div className="Nav">
            <Link to="/" onClick={resetSelectedSize}>
                <p>Fashion Fits</p>
            </Link> 
        </div>
    )
}