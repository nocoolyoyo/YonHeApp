import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/pages/home/home'
import Myzone from './src/pages/myzone'



const App = StackNavigator({
    Home: {
        screen: Home,
    },
    Myzone: {
        screen: Myzone,
    },
});
AppRegistry.registerComponent('YonHeApp', () => App);
