import React, { Component } from 'react';
import { View, Picker, FlatList } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import request from '../api/request';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Foods'
  }
  static Food = ({ item: food }) => {
    return (
      <Card style={{ marginBottom: 5, flex: 1 }}>
        <Card.Content style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text>{food.name}</Text>
            <Text>{food.price} AMD</Text>
            {food.isVegan &&
              <Text>Vegan</Text>}
          </View>
          <View style={{ flexDirection: 'column' }}>
            {food.ingredients.map(i => (
              <Text key={i.id}>{i.name}</Text>
            ))}
          </View>
        </Card.Content>
        <Card.Actions>
          <Button disabled={!food.hasEnoughIngredients}>Order</Button>
        </Card.Actions>
      </Card>
    );
  }
  state = {
    foods: [],
    categories: [],
    selectedCategoryId: null,
  }
  async componentDidMount() {
    const { categories } = await request('category');
    this.setState({ categories });
    this.getFoods(this.state.selectedCategoryId);
  }
  changeCategory = async (selectedCategoryId) => {
    this.setState({ selectedCategoryId });
    this.getFoods(selectedCategoryId);
  }
  getFoods = async (categoryId) => {
    const { foods } = await request(`food/byCategory/${categoryId === null ? '' : categoryId}`);
    this.setState({ foods });
  }
  render() {
    const { categories, foods, selectedCategoryId } = this.state;
    return (
      <View>
        <View>
          <Picker
            style={{ margin: 0 }}
            selectedValue={selectedCategoryId}
            onValueChange={this.changeCategory}
          >
            <Picker.Item value={null} label="All" />
            {
              categories.map(c => (
                <Picker.Item key={c.id} label={c.name} value={c.id} />
              ))
            }
          </Picker>
        </View>
        <View>
          <FlatList
            data={foods}
            renderItem={HomeScreen.Food}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
