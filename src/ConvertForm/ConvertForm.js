import React, { useContext, useState } from 'react';
import FashionFitsContext from '../FashionFitsContext';
import { findProfile } from '../fit-helpers';
import Results from '../Results/Results';
import './ConvertForm.css';

export default function ConvertForm() {
  const {
    userProfile, profiles, letterSizes, regions, changeSize, userSelectedPro,
  } = useContext(FashionFitsContext);
  const [convertRegion, setConvertRegion] = useState('1');
  const [selectedRadio, setSelectedRadio] = useState('letter');

  const userId = userProfile.profiletype_id;

  // findProfile helper funtion finds one profile using the users profiletypeId and region
  const userConvertProfile = findProfile(profiles, userId, convertRegion);

  // creates selection options from the users number sizes, uses index as the value
  const numberOpts = userSelectedPro.number_sizes.map(
    (numberSize, i) => <option value={i} key={i}>{numberSize}</option>,
  );

  // creates selection options from the letter sizes, uses index as the value
  const letterOpts = letterSizes.map(
    (letterSize, i) => <option value={i} key={i}>{letterSize}</option>,
  );

  // creates selection options from the available regions, uses region id as value
  const regionOpts = regions.map(
    (region, i) => <option value={region.id} key={i}>{region.country}</option>,
  );

  // function determines if the letterOpts or numberOpts are returned
  const showSizeType = () => {
    if (selectedRadio === 'letter') {
      return letterOpts;
    }
    return numberOpts;
  };

  // takes output from showSizeType and creates the variable sizeOpts
  const sizeOpts = showSizeType();

  const handleConvertRegion = (e) => {
    setConvertRegion(e.target.value);
  };

  const handleChangeRadio = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleChangeSize = (e) => {
    changeSize(e.target.value);
  };

  return (
        <div className="ConvertFormPage">
            <section className="User_fit">
                <h1>Your Fit: {userSelectedPro.fit}</h1>
                <p>{userSelectedPro.category}</p>
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

                                <select id="size-scroll" onChange={handleChangeSize}>
                                    {sizeOpts}
                                </select>
                            </div>
                        </div>
                        <div className="scroll-item">
                            <div className="Convert-select">
                                <h2>Convert Region: </h2>
                                <select name="convert_region" id="convert_region" onChange={handleConvertRegion}>
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
