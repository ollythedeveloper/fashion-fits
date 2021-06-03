import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import FashionFitsContext from '../FashionFitsContext';
import ConvertForm from './ConvertForm';

const state = {
  profileTypes: [],
  letterSizes: [],
  numberSizes: [],
  regions: [],
  profiles: [],
  userProfile: [],
  userSelectedPro: {
    id: 100,
    profiletype_id: '200',
    region_id: '300',
    fit: 'The Fit',
    category: 'The Category',
    number_sizes: ['1', '2', '3', '4', '5', '6', '7'],
    results: 'the results',
  },
  selectedSize: 0,
};

const contextValue = {
  profileTypes: state.profileTypes,
  regions: state.regions,
  profiles: state.profiles,
  letterSizes: state.letterSizes,
  numberSizes: state.numberSizes,
  userProfile: state.userProfile,
  userSelectedPro: state.userSelectedPro,
  selectedSize: state.selectedSize,
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
        <BrowserRouter>
        <FashionFitsContext.Provider value={contextValue}>
            <ConvertForm />
        </FashionFitsContext.Provider>
        </BrowserRouter>,
        div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
