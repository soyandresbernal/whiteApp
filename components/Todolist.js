import React from 'react';
import { FlatList, View } from 'react-native-web';
import { todosData } from '../data/todos';
import { FlatList } from 'react-native';
export default function TodoList() {
  return (
    <FlatList
      data={todosData}
      keyExtractor={(item) => <Text>{item.text}</Text>}
    />
  );
}
