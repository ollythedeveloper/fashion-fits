import React from "react";
import { useHistory } from "react-router-dom";
import huh from "./confused2.png";
import travel from "./travel1.png";
import hooray from "./happyShop.png";
import "./Landing.css";

export default function Landing() {
    const history = useHistory();

    //directs user to homepage on button click
    const handleStart = e => {
        e.preventDefault();
        history.push("/home");
    }

    return (
        <div className="Landing">
            <header className="LP-Header">
                <div className="group">
                    <div className="item">
                        <h1>Fashion Fits</h1>
                    </div>
                </div>
            </header>
            <section className="Confusion">
                <div className="group">
                    {/* <div className="item">
                        <img src={travel} alt="Passport" />
                    </div> */}
                    <div className="item">
                        <img src={huh} alt="Confused Face" />
                    </div>
                    <div className="item">
                        <header>
                            <h2>Skip the Confusion!</h2>
                        </header>
                        <p>Shopping for clothes online or in another country can be very difficult!</p>
                    </div>
                    {/* <div className="item">
                        <img src={travel} alt="Passport" />
                    </div> */}
                </div>
            </section>
            <section className="Solution">
                <div className="group">
                    <div className="item">
                        <img src={travel} alt="Passport" />
                    </div>
                    <div className="item">
                        <img src={hooray} alt="Excited Shopper" />
                    </div>
                </div>
            </section>
            <button type="submit" onClick={handleStart}>Start</button>
        </div>
    )
}