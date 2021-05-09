import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import ConvertForm from './ConvertForm/ConvertForm';
import Footer from './Footer/Footer';
import store from './dummyStore';
import FashionFitsContext from './FashionFitsContext';

class App extends Component {
  state = {
    profileTypes: [],
    letterSizes: [],
    regions: [],
    profiles: [],
    userProfile: [],
    selectedSize: 0
  };

  directToConvertForm = () => {
    const { history } = this.props;
    if (history) history.push('/convert-form');
  };

  resetSelectedSize = () => {
    this.setState({
      selectedSize: 0
    })
  }

  handleSelectedProfile = (profileType, region) => {
    this.setState({
      userProfile: {
        profileId: profileType,
        regionId: region
      }
    })
  }

  handleChangeSize = (size) => {
    this.setState({
      selectedSize: size
    })
  }

  handleSubmitUserProfile = () => {
    this.directToConvertForm()
  }

  componentDidMount() {
    this.setState({
      letterSizes: store.letterSizes
    })
    this.setState({
      profileTypes: store.profileTypes
    })
    this.setState({
      regions: store.regions
    })
    this.setState({
      profiles: store.profiles
    })
  }

  render() {
    const contextValue = {
      profileTypes: this.state.profileTypes,
      regions: this.state.regions,
      profiles: this.state.profiles,
      letterSizes: this.state.letterSizes,
      userProfile: this.state.userProfile,
      selectedSize: this.state.selectedSize,
      changeSize: this.handleChangeSize,
      selectedProfile: this.handleSelectedProfile,
      submitUserProfile: this.handleSubmitUserProfile,
      resetSelectedSize: this.resetSelectedSize
    }

    return (
      <FashionFitsContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/convert-form' component={ConvertForm} />
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
