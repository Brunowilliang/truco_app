import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '~/screens/Home';

const createRootNavigator = () =>
  createAppContainer(
    createStackNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            headerShown: false,
          },
        },
      },
      {
        initialRouteName: 'Home',
        headerMode: 'screen',
      }
    )
  );

export default createRootNavigator;
