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
    mens: [],
    userProfile: []
  };

  directToConvertForm = () => {
    const { history } = this.props;
    if (history) history.push('/convert-form');
  };

  directToMaleForm = () => {
    const { history } = this.props;
    if (history) history.push('/mens-form');
  };

  handleSelectedProfile = (profileType, region) => {
    this.setState({
      userProfile: {
        profileId: profileType,
        regionId: region
      }
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
      selectedProfile: this.handleSelectedProfile,
      submitUserProfile: this.handleSubmitUserProfile
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
