import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import WomensForm from './WomensForm/WomensForm';
import MensForm from './MensForm/MensForm';
import Footer from './Footer/Footer';
import store from './dummyStore';
import FashionFitsContext from './FashionFitsContext';

class App extends Component {
  state = {
    profiles: [],
    regions: [],
    womens: [],
    mens: []
  };

  directToFemaleForm = () => {
    const { history } = this.props;
    if (history) history.push('/womens-form');
  };

  directToMaleForm = () => {
    const { history } = this.props;
    if (history) history.push('/mens-form');
  };

  handleSubmitUserProfile = () => {
    this.directToFemaleForm()
  }

  componentDidMount() {
    this.setState({
      womens: store.womens
    });
    this.setState({
      mens: store.mens
    });
    this.setState({
      profiles: store.profiles
    })
    this.setState({
      regions: store.regions
    })
  }

  render() {
    const contextValue = {
      profiles: this.state.profiles,
      regions: this.state.regions,
      womens: this.state.womens,
      mens: this.state.mens,
      submitUserProfile: this.handleSubmitUserProfile
    }

    // console.log(this.state.mens)
    // console.log(this.state.womens)

    return (
      <FashionFitsContext.Provider value={contextValue}>
        <div className="App">
          <nav className="App__nav">
            <Nav />
          </nav>
          <main className="App__main">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/womens-form' component={WomensForm} />
              <Route path='/mens-form' component={MensForm} />
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
