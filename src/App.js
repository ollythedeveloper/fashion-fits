import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import Home from './Home/Home';
import ConvertForm from './ConvertForm/ConvertForm';
import Footer from './Footer/Footer';
import store from './dummyStore';
import FashionFitsContext from './FashionFitsContext';
import config from './config';
import './App.css';

class App extends Component {
  state = {
    profileTypes: [],
    letterSizes: [],
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

  directToConvertForm = () => {
    const { history } = this.props;
    if (history) history.push('/convert-form');
  };

  resetSelectedSize = () => {
    this.setState({
      selectedSize: 0,
    });
  };

  // creates userProfile variable from the region and profiletype selected by the user
  handleSelectedProfile = (profileType, region) => {
    this.setState({
      userProfile: {
        profiletype_id: profileType,
        region_id: region,
      },
    });
  };

  handleSelectedPro = (profile) => {
    this.setState({
      userSelectedPro: profile,
    });
  };

  handleChangeSize = (size) => {
    this.setState({
      selectedSize: size,
    });
  };

  handleSubmitUserProfile = () => {
    this.directToConvertForm();
  };

  handleUserNumberSizes = (sizes) => {
    this.setState({
      numberSizes: sizes,
    });
  };

  // GET requests to Fashion Fits API
  // the data populates the profileTypes, regions and profiles arrays in the state
  // the letterSize array is populated from the store
  componentDidMount() {
    this.setState({
      letterSizes: store.letterSizes,
    });
    Promise.all([
      fetch(`${config.API_PROFILE_TYPES_URL}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.API_KEY}`,
        },
      }),
      fetch(`${config.API_REGIONS_URL}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.API_KEY}`,
        },
      }),
      fetch(`${config.API_PROFILES_URL}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${config.API_KEY}`,
        },
      }),
    ])
      .then(([profileTypesRes, regionsRes, profilesRes]) => {
        if (!profileTypesRes.ok)
          return profileTypesRes.json().then(e => Promise.reject(e));
        if (!regionsRes.ok)
          return regionsRes.json().then(e => Promise.reject(e));
        if (!profilesRes.ok)
          return profilesRes.json().then(e => Promise.reject(e));

        return Promise.all([profileTypesRes.json(), regionsRes.json(), profilesRes.json()]);
      })
      .then(([profileTypes, regions, profiles]) => {
        this.setState({ profileTypes, regions, profiles });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  render() {
    const contextValue = {
      profileTypes: this.state.profileTypes,
      regions: this.state.regions,
      profiles: this.state.profiles,
      letterSizes: this.state.letterSizes,
      userProfile: this.state.userProfile,
      userSelectedPro: this.state.userSelectedPro,
      selectedSize: this.state.selectedSize,
      changeSize: this.handleChangeSize,
      selectedProfile: this.handleSelectedProfile,
      selectedPro: this.handleSelectedPro,
      submitUserProfile: this.handleSubmitUserProfile,
      userNumberSizes: this.handleUserNumberSizes,
      resetSelectedSize: this.resetSelectedSize,
    };

    return (

      <FashionFitsContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/home" component={Home} />
              <Route path="/convert-form" component={ConvertForm} />
            </Switch>
          </main>
          <footer className="App__footer">
            <Footer />
          </footer>
        </div>
      </FashionFitsContext.Provider>
    );
  }
}

export default withRouter(App);
