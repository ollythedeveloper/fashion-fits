import React from 'react';
import Results from '../Results/Results';

export default function WomensForm() {
    return (
        <div className='WomensForm'>
            <section className="User_fit">
                <h1>Your Fit: USA - Womens</h1>
            </section>
            <section className="Conversion">
                <form className="Womens-convert-form">
                    <div className="Size-select">
                        <input type="radio" name="size-type" id="size-type" value="letter" checked="checked" />Letter
                        <input type="radio" name="size-type" id="size-type" value="number" />Number
                        {' '}
                        <select name="known-size" id="known-size">
                            <option value="xs">XS</option>
                            <option value="s" selected>S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                            <option value="xxxl">XXXL</option>
                        </select>
                    </div>
                    <div className="Convert-select">
                        <p>Convert to: </p>
                        <label htmlFor="convert_region">Region: </label>
                        <select name="convert_region" id="convert_region">
                            <option value="US">US</option>
                            <option value="UK">UK</option>
                            <option value="Japan" selected>Japan</option>
                        </select>
                    </div>
                    {/* <div className="button-container">
                        <button type="submit">Submit</button>
                    </div> */}
                </form>
            </section>
            <section className="Womens-results">
                <Results />
            </section>
        </div>
    );
}