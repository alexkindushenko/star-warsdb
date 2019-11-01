import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage,
} from '../pages';
import ErrorBoundery from '../error-boundery';
import { StarshipDetails } from '../sw-components';

import './app.css';

class App extends React.Component {
  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundery>
        <Router>
          <Header />
          <RandomPlanet />
          <Switch>
            <Route path="/" render={() => <h2>Star Wars Project</h2>} exact />
            <Route path="/people" component={PeoplePage} exact />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} exact />
            <Route path="/planets/:id" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />
            <Route
              path="/secret"
              render={() => <SecretPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/login"
              render={() => (
                <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
              )}
            />
            <Route render={() => <h2>Page not found.</h2>} />
          </Switch>
        </Router>
      </ErrorBoundery>
    );
  }
}

export default App;
