import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
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
