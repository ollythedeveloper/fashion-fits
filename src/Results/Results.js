import React, { useContext } from 'react';
import FashionFitsContext from '../FashionFitsContext';
import { findProfileType } from '../fit-helpers';

export default function Reults(props) {
    const convertProfile = props.convertProfile;
    const { selectedSize, userProfile, profileTypes } = useContext(FashionFitsContext)
    const userId = userProfile.profileId
    const userProfileType = findProfileType(profileTypes, userId)
    
    return (
        <div className='Results'>
            <section>
                <h2>Your size in {convertProfile.results} is {convertProfile.numberSizes[selectedSize]}.</h2>
                <h3>Measurements:</h3>
                <p>Bust: {userProfileType.bust[selectedSize]}</p>
                <p>Waist: {userProfileType.waist[selectedSize]}</p>
                <p>Hips: {userProfileType.hips[selectedSize]}</p>
            </section>
        </div>
    )
}