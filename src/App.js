import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import WomensForm from './WomensForm/WomensForm';
import MensForm from './MensForm/MensForm';
import Footer from './Footer/Footer';

class App extends Component {

  directToFemaleForm = () => {
    const { history } = this.props;
    if (history) history.push('/womens-form');
  };

  directToMaleForm = () => {
    const { history } = this.props;
    if (history) history.push('/mens-form');
  };
  
  render() {

    return (
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
    );
  }
}

export default withRouter(App);
