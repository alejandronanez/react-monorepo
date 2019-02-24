import React from 'react';
import { View, Text, Button } from 'react-native';

const Counter = ({ incrementCounter, decrementCounter, counter }) => {
  return (
    <View className="Counter">
      <View className="Counter__buttons">
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} />
      </View>
      <Text>Total: {counter}</Text>
    </View>
  );
};

export default Counter;
