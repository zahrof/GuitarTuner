import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions} from 'react-native';
import CircleButton from './src/components/Circle';

interface ButtonItem {
  id: number;
  label: string;
}

const COLUMNS = 2;
const BUTTON_WIDTH = 60;
const BUTTON_MARGIN = 10;
const CONTAINER_PADDING = 20;

class App extends Component {

  handlePress = () => {
    console.log('Button pressed!');
  };

  buttons: ButtonItem[] = [
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' },
    { id: 6, label: '6' },
  ];
  

  renderItem = ({ item }: { item: ButtonItem }) => (
    <CircleButton onPress={this.handlePress} label={item.label} />
  );

  itemWidth = (Dimensions.get('window').width - 20 - (COLUMNS - 1) * 10) / COLUMNS;

  keyExtractor = (item: ButtonItem) => item.id.toString();

  numButtons = this.buttons.length;
  numRows = Math.ceil(this.numButtons / COLUMNS);
 // containerWidth = COLUMNS * BUTTON_WIDTH + (COLUMNS - 1) * BUTTON_MARGIN + 2 * CONTAINER_PADDING;
 // containerHeight = this.numRows * BUTTON_WIDTH + (this.numRows - 1) * BUTTON_MARGIN + 2 * CONTAINER_PADDING;

  render() {
    return (
     // <View style={[styles.container, { width: this.containerWidth, height: this.containerHeight }]}>
     <View style={[styles.container]}> 
     <FlatList
        data={this.buttons}
        numColumns={2}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        contentContainerStyle={styles.buttonContainer}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'green',
  },
  buttonContainer: {
    paddingTop: 200,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default App;