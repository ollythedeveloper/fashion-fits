import React from 'react';

const FashionFitsContext = React.createContext({
  profileTypes: [],
  regions: [],
  profiles: [],
  letterSizes: [],
  userProfile: [],
  userSelectedPro: {},
  selectedSize: Number,
  selectedProfile: () => {},
  selectedPro: () => {},
  submitUserProfile: () => {},
  changeSize: () => {},
  userNumberSizes: () => {},
  resetSelectedSize: () => {},
});

export default FashionFitsContext;
