import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Spiner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 25000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;
    const randomView = () => {
      if (loading) {
        return <Spiner />;
      } else if (error) {
        return <ErrorIndicator />;
      } else {
        return <PlanetView planet={planet} />;
      }
    };

    return (
      <div className="random-planet jumbotron rounded">{randomView()}</div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
