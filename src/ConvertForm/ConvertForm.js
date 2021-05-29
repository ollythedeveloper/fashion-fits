import React, { useContext, useState } from 'react';
import FashionFitsContext from '../FashionFitsContext';
import { findProfile } from '../fit-helpers';
import Results from '../Results/Results';
import './ConvertForm.css';

export default function ConvertForm() {
    const { userProfile, profiles, letterSizes, regions, changeSize } = useContext(FashionFitsContext)
    const [convertRegion, setConvertRegion] = useState(regions[0].id.toString())
    const [selectedRadio, setSelectedRadio] = useState("letter")

    const userId = userProfile.profiletype_id
    const userRegion = userProfile.region_id
    const userSelectedProfile = findProfile(profiles, userId, userRegion)
    const userConvertProfile = findProfile(profiles, userId, convertRegion)

    const numberOpts = userSelectedProfile.number_sizes.map(
        (numberSize, i) => <option value={i} key={i}>{numberSize}</option>
    )

    const letterOpts = letterSizes.map(
        (letterSize, i) => <option value={i} key={i}>{letterSize}</option>
    )

    const regionOpts = regions.map(
        (region, i) => <option value={region.id} key={i}>{region.country}</option>
    );

    const showSizeType = () => {
        if (selectedRadio === 'letter') {
            return letterOpts
        } else {
            return numberOpts
        }
    }

    const sizeOpts = showSizeType();

    const handleConvertRegion = e => {
        setConvertRegion(e.target.value)
    }

    const handleChangeRadio = (e) => {
        setSelectedRadio(e.target.value);
    }

    const handleChangeSize = e => {
        changeSize(e.target.value)
    }

    return (
        <div className='ConvertFormPage'>
            <section className="User_fit">
                <h1>Your Fit: {userSelectedProfile.fit}</h1>
                <p>{userSelectedProfile.category}</p>
            </section>
            <section className="Conversion">
                <form className="Convert-form">
                <div className="scroll-group">
                    <div className="scroll-item">
                    <div className="Size-select">
                        <div className="radio_container">
                            <h2>Size:</h2>
                            <input
                                type="radio"
                                className="toggle_option"
                                name="size-type"
                                id="letter-toggle"
                                value="letter"
                                defaultChecked
                                onChange={handleChangeRadio} />
                            <label htmlFor="letter-toggle">Letter</label>

                            <input
                                type="radio"
                                className="toggle_option"
                                name="size-type"
                                id="number-toggle"
                                value="number"
                                onChange={handleChangeRadio} />
                            <label htmlFor="number-toggle">Number</label>
                        </div>

                        {' '}

                        <select id="size-scroll" size="4" onChange={handleChangeSize}>
                            {sizeOpts}
                        </select>
                    </div>
                    </div>
                    <div className="scroll-item">
                    <div className="Convert-select">
                        <h2>Convert Region: </h2>
                        {/* <label htmlFor="convert_region">Region: </label> */}
                        <select name="convert_region" id="convert_region" size="6" onChange={handleConvertRegion}>
                            {regionOpts}
                        </select>
                    </div>
                    </div>
                    </div>
                </form>
            </section>
            <section className="Convert-results">
                <Results convertProfile={userConvertProfile} />
            </section>
        </div>
    );
}