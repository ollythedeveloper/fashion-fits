import React, { useContext } from "react";
import FashionFitsContext from "../FashionFitsContext";
import { findProfileType } from "../fit-helpers";

export default function Reults(props) {
    //prop takes convertProfile from the ConvertForm
    const convertProfile = props.convertProfile;
    const { selectedSize, userProfile, profileTypes } = useContext(FashionFitsContext)
    const userId = userProfile.profiletype_id

    //findProfileType helper function finds the profiletype based off the userId
    const userProfileType = findProfileType(profileTypes, parseInt(userId))
    
    return (
        <div className="Results">
            <section>
                <h2>Your size in {convertProfile.results} is {convertProfile.number_sizes[selectedSize]}.</h2>
                <h3>Measurements:</h3>
                {userProfileType && <p>Bust: {userProfileType.bust[selectedSize]} | Waist: {userProfileType.waist[selectedSize]} | Hips: {userProfileType.hips[selectedSize]} </p>}
            </section>
        </div>
    )
}