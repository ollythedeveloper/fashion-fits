import React from 'react';

export default function Home() {
    return (
        <div className='Home'>
            <section className="Header">
                <h1>Fashion Fits</h1>
            </section>
            <section className="Intro">
                <h2>Find your size anywhere!</h2>
                <p>Online shopping...</p>
                <p>Overseas...</p>
                <p>Letter to numbers...</p>
            </section>
            <section className="Form">
                <form className="Gender-Region-Form">
                    <div className="Gender-select">
                        <label for="gender">Gender: </label>
                        <select name="gender" id="gender">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div className="Region-select">
                        <label for="region">Region: </label>
                        <select name="region" id="region">
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <div className="Button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}