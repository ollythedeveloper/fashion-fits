import React, { useContext } from 'react';
import FashionFitsContext from '../FashionFitsContext';

export default function Reults(props) {
    const convertProfile = props.convertProfile;
    const { selectedSize } = useContext(FashionFitsContext)
    return (
        <div className='Results'>
            <section>
                <h2>Your size in {convertProfile.results} is {convertProfile.numberSizes[selectedSize]}.</h2>
                <h3>Measurements:</h3>
                <p>Bust:33-34 inches</p>
                <p>Waist:25.5-27 inches</p>
                <p>Hips:34.5-36 inches</p>
            </section>
        </div>
    )
}