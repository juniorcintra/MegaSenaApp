import React, {Component} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import Numero from './Numero';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = (qtde) => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <Numero key={Math.random()} num={num} />;
    });
  };

  gerarNumeros = () => {
    const {qtdeNumeros} = this.state;
    const numeros = [];

    for (let i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n);
    }

    numeros.sort((a, b) => a - b);
    this.setState({numeros});
  };

  render() {
    return (
      <>
        <Text style={style.titulo}>Gerador de MegaSena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={style.input}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View style={style.exibicao}>{this.exibirNumeros()}</View>
      </>
    );
  }
}

const style = StyleSheet.create({
  exibicao: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
  },
  input: {borderBottomWidth: 1, marginVertical: 15},
});
