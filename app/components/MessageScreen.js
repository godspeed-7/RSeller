import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from './ListItem';
import Screen from './Screen';
import ListItemSeparator from './ListItemSeparator';
import ListItemDeleteAction from './ListItemDeleteAction';
import React, { useState } from 'react';

const initMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../assets/me.jpeg")
    },
    {
        id: 2,
        title: 'T1',
        description: 'D1',
        image: require("../assets/me.jpeg")
    }
]

export default function MessagesScreen(props) {

  const [messages, setMessages] = useState(initMessages);
  const [refreshing, setRefreshing] = useState(false);


  const handleDelete = message => {
    setMessages(messages.filter(m => m.id !== message.id));
  }

  return (
    <Screen>
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => {}}
          renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
        />
      )}
      ItemSeparatorComponent={<ListItemSeparator/>}
      refreshing={refreshing}
      onRefresh={() => {}}
    />
    </Screen>
  );
}
const styles = StyleSheet.create({
});
