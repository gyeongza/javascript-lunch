import Button from './components/Button';
import ConvertList from './components/ConvertList';
import FilterList from './components/FilterList';
import Header from './components/Header';
import Modal from './components/Modal';
import AddRestaurant from './components/ModalContents/AddRestaurant';
import RestaurantDetails from './components/ModalContents/RestaurantDetails';
import RestaurantBox from './components/RestaurantBox';
import RestaurantInfo from './components/RestaurantInfo';
import SelectList from './components/SelectList';
import TextInput from './components/TextInput';
import { restaurant } from './domain/restaurant';
import './styles/index.css';
import { $ } from './utils';

restaurant.restaurants = JSON.parse(localStorage.getItem('restaurant') || '[]');
restaurant.addFavorite();

customElements.define('lunch-header', Header);
customElements.define('convert-list', ConvertList);
customElements.define('restaurant-modal', Modal);
customElements.define('add-restaurant', AddRestaurant);
customElements.define('restaurant-details', RestaurantDetails);
customElements.define('filter-list', FilterList);
customElements.define('restaurant-box', RestaurantBox);
customElements.define('restaurant-info', RestaurantInfo);
customElements.define('select-list', SelectList);
customElements.define('text-input', TextInput);
customElements.define('lunch-button', Button);

$('restaurant-box').renderRestaurantList(restaurant.restaurants);
