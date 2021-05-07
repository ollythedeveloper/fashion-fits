import React from 'react';

const FashionFitsContext = React.createContext({
    profileTypes: [],
    regions: [],
    profiles: [],
    letterSizes: [],
    userProfile: [],
    selectedProfile: () => {},
    submitUserProfile: () => {}

})

export default FashionFitsContext