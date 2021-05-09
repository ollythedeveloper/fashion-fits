import React from 'react';

const FashionFitsContext = React.createContext({
    profileTypes: [],
    regions: [],
    profiles: [],
    letterSizes: [],
    userProfile: [],
    selectedSize: Number,
    selectedProfile: () => {},
    submitUserProfile: () => {},
    changeSize: () => {},
    resetSelectedSize: () => {}
})

export default FashionFitsContext