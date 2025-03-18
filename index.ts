import { registerRootComponent } from 'expo';
import App from './App'; // Ensure path is correct
import './firebase'; // Ensure firebase initializes

registerRootComponent(App);