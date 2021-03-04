import React from 'react';
import {View, StyleSheet} from 'react-native';
import Mega from './components/Mega';

function App() {
  return (
    <View style={style.App}>
      <Mega qtdeNumeros={8} />
    </View>
  );
}

export default App;

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
