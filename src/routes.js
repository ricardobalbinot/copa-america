import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Resultado from './pages/Resultado';


const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Jogos',
      },
    },
    Cadastro: {
      screen: Cadastro,
      navigationOptions: {
        header: null,
      },
    },
    Resultado: {
      screen: Resultado,
      navigationOptions: {
        title: 'Resultado',
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#22DF22',
      headerStyle: {
        backgroundColor: '#F8F220',
      },
    },
  })
);

export default Routes;