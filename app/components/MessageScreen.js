import { StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';
import Screen from './Screen';

const messages = [
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
        />
      )}
    />
    </Screen>
  );
}
const styles = StyleSheet.create({
});
