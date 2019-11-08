import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Resultado from './pages/Resultado';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
    Cadastro,
    Resultado
  })
);

export default Routes;