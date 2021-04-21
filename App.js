import React from 'react';
import { StatusBar,LogBox  } from 'react-native';
import RootNavigator from './src/Navigation/RootNavigator';
LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <>
      <RootNavigator />
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
      />
    </>
  );
};
export default App;
