import React from 'react';
import { withDetails } from '../hoc-helper';
import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPlanetImage,
  getPersonImage,
  getStarshipImage,
} = new SwapiService();

const recordPerson = [
  <Record field="gender" label="Gender" key={1} />,
  <Record field="birthYear" label="Birth Year" key={2} />,
  <Record field="eyeColor" label="Eye Color" key={3} />,
];
const recordPlanet = [
  <Record field="population" label="Population" key={1} />,
  <Record field="rotationPeriod" label="Rotation Period" key={2} />,
  <Record field="diameter" label="Diameter" key={3} />,
];
const recordStarship = [
  <Record field="model" label="Model" key={1} />,
  <Record field="length" label="Length" key={2} />,
  <Record field="passengers" label="Passengers" key={3} />,
];

const itemWrapedFunction = (Wraped, Iner) => {
  return props => {
    return <Wraped {...props}>{Iner}</Wraped>;
  };
};

const PersonDetails = withDetails(
  itemWrapedFunction(ItemDetails, recordPerson),
  getPerson,
  getPersonImage
);
const PlanetDetails = withDetails(
  itemWrapedFunction(ItemDetails, recordPlanet),
  getPlanet,
  getPlanetImage
);
const StarshipDetails = withDetails(
  itemWrapedFunction(ItemDetails, recordStarship),
  getStarship,
  getStarshipImage
);
export { PersonDetails, PlanetDetails, StarshipDetails };
