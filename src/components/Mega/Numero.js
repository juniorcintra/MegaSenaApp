import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Numero = ({num}) => {
  const {container, numero} = styles;
  return (
    <View style={container}>
      <Text style={numero}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    color: '#fff',
  },
});
export default Numero;
