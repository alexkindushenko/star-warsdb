import { withData } from '../hoc-helper';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
const { getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const PeopleList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);
export { PeopleList, PlanetList, StarshipList };
