import React from 'react';
import Results from '../Results/Results';

export default function MensForm() {
    return (
        <div className='MensForm'>
            <section className="User_fit">
                <h1>Your Fit: USA - Mens</h1>
                <p>T-shirts, Jackets, and Tank Tops</p>
            </section>
            <section className="Conversion">
                <form className="Mens-convert-form">
                    <div className="Size-select">
                        <input type="radio" name="size-type" id="size-type" value="letter" checked="checked" />Letter
                        <input type="radio" name="size-type" id="size-type" value="number" />Number
                        {' '}
                        <select name="known-size" id="known-size">
                            <option value="xs">XS</option>
                            <option value="s">S</option>
                            <option value="m" selected>M</option>
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
                            <option value="UK" selected>UK</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    {/* <div className="button-container">
                        <button type="submit">Submit</button>
                    </div> */}

                </form>
            </section>
            <section className="Mens-results">
                <Results />
            </section>
        </div>
    );
}