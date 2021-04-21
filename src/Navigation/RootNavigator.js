
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from '../Packages/react-navigation-stack';
import HomeScreen from '../Screens/HomeScreen/Home';

const Navigator = createStackNavigator({
  HomeScreen:
  {
    screen: HomeScreen,
    navigationOptions:
    {
      header: null,
    },
  },
 
});
export default createAppContainer(Navigator);
