import React, { Component } from 'react';
import { View, Text } from 'react-native';
import request from '../api/request';

import { MonoText } from '../components/StyledText';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Foods'
  }
  state = { foods: [] }
  async componentDidMount() {
    const { foods } = await request('food');
    // console.warn(res);
    this.setState({ foods });
  }
  render() {
    return (
      <View>
        {
          this.state.foods.map(food => (
            <View key={food.id}>
              <Text>{food.name}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}

export default HomeScreen;
