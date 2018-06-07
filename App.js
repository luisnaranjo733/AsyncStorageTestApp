import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

const STORAGE_KEY = "SAMPLE_ASYNC_STORAGE_ITEM";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: undefined
    };
    
  }

  componentDidMount() {
    this.getItem();
  }

  getItem = () => {
    AsyncStorage.getItem(STORAGE_KEY).then(value => this.setState({value}));
  }

  setItem = () => {
    AsyncStorage.setItem(STORAGE_KEY, "HELLO").then(ignore => this.getItem());
  }

  removeItem = () => {
    AsyncStorage.removeItem(STORAGE_KEY).then(ignore => this.getItem());
  }

  clear = () => {
    AsyncStorage.clear().then(ignore => this.getItem());
  }

  getAllKeys = () => {
    AsyncStorage.getAllKeys().then(keys => keys.forEach(key => console.warn(`Key: ${key}`)));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Storage value: {this.state.value}</Text>
        <Button title={"get item"} onPress={this.getItem}/>
        <Button title={"set item"} onPress={this.setItem}/>
        <Button title={"remove item"} onPress={this.removeItem}/>
        <Button title={"clear"} onPress={this.clear}/>
        <Button title={"get all keys"} onPress={this.getAllKeys}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    
  }
});
