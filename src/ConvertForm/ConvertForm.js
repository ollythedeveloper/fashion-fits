import React, { useContext } from 'react';
import FashionFitsContext from '../FashionFitsContext';
import { findProfile } from '../fit-helpers';
import Results from '../Results/Results';

export default function ConvertForm() {
    const { userProfile, profiles, letterSizes, regions } = useContext(FashionFitsContext)

    const userId = userProfile.profileId
    const userRegion = userProfile.regionId
    const userSelectedProfile = findProfile(profiles, userId, userRegion)

    const numberOpts = userSelectedProfile.numberSizes.map(
        (numberSize, i) => <option value={i} key={i}>{numberSize}</option>
    )
    
    const letterOpts = letterSizes.map(
        (letterSize, i) => <option value={i} key={i}>{letterSize}</option>
    )

    const regionOpts = regions.map(
        (region, i) => <option value={region.id} key={i}>{region.country}</option>
    );

    return (
        <div className='WomensForm'>
            <section className="User_fit">
                <h1>Your Fit: {userSelectedProfile.fit}</h1>
                <p>{userSelectedProfile.category}</p>
            </section>
            <section className="Conversion">
                <form className="Womens-convert-form">
                    <div className="Size-select">
                        <input type="radio" name="size-type" id="size-type" value="letter" checked="checked" />Letter
                        <input type="radio" name="size-type" id="size-type" value="number" />Number
                        {' '}
                        <select name="known-size" id="known-size">
                            {letterOpts}
                            {numberOpts}
                        </select>
                    </div>
                    <div className="Convert-select">
                        <p>Convert to: </p>
                        <label htmlFor="convert_region">Region: </label>
                        <select name="convert_region" id="convert_region">
                            {regionOpts}
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