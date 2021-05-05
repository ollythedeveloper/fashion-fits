import React from 'react';

const FashionFitsContext = React.createContext({
    profiles: [],
    regions: [],
    womens: [],
    mens: [],
    submitUserProfile: () => {}

})

export default FashionFitsContext