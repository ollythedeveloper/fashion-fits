import React, { useContext, useState } from 'react';
import FashionFitsContext from '../FashionFitsContext';

export default function Home() {
    const { profileTypes, regions, submitUserProfile, selectedProfile } = useContext(FashionFitsContext)

    const [selectProfile, setSelectProfile] = useState('')
    const [selectRegion, setSelectRegion] = useState('')

    const profileOpts = profileTypes.map(
        (profileType, i) => <option value={profileType.id} key={i}>{profileType.name}</option>
    );

    const regionOpts = regions.map(
        (region, i) => <option value={region.id} key={i}>{region.country}</option>
    );

    const handleSubmit = e => {
        e.preventDefault();
        selectedProfile(selectProfile, selectRegion);
        submitUserProfile();
    }

    const handleChangeRegion = e => {
        setSelectRegion(e.target.value)
    }
    const handleChangeProfile = e => {
        setSelectProfile(e.target.value)
    }

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
                <form className="Gender-Region-Form" onSubmit={handleSubmit}>
                    <div className="Gender-select">
                        <label htmlFor="gender">Gender: </label>
                        <select name="gender" id="gender" onChange={handleChangeProfile} required>
                            <option value=''>Select</option>
                            {profileOpts}
                        </select>
                    </div>
                    <div className="Region-select">
                        <label htmlFor="region">Region: </label>
                        <select name="region" id="region" onChange={handleChangeRegion} required>
                            <option value=''>Select</option>
                            {regionOpts}
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