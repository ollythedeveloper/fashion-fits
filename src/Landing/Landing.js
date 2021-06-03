import React from 'react';
import { useHistory } from 'react-router-dom';
import travel from './travel2.png';
import hooray from './happyShop.png';
import './Landing.css';

export default function Landing() {
  const history = useHistory();

  // directs user to homepage on button click
  const handleStart = (e) => {
    e.preventDefault();
    history.push('/home');
  };

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
                    <div className="item">
                        <header>
                            <h2>Skip the Confusion!</h2>
                        </header>
                        <p>Shopping for clothes online or in another country can be frustrating!</p>
                        <p>Simplify the experience by converting your clothing size in seconds.</p>
                        <p>That's where <b>Fashion Fits</b> comes in!</p>
                    </div>
                </div>
            </section>
            <section className="Solution">
                <h2>HOW IT WORKS:</h2>
                <div className="group">
                    <div className="item">
                        <img src={travel} alt="Passport" />
                    </div>
                    <div className="item">
                        <ol>
                            <li>Select your size profile and region.</li>
                            <li>Select the size and the country you want to convert it to.</li>
                            <li>Receive the converted number size,
                                as well as the measurements in inches.</li>
                        </ol>
                        <p>HAPPY SHOPPING!!!</p>
                    </div>
                    <div className="item">
                        <img src={hooray} alt="Excited Shopper" />
                    </div>
                </div>
            </section>
            <button type="submit" onClick={handleStart}>Start</button>
        </div>
  );
}
