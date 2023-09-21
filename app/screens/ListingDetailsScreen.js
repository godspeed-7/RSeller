import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from '../components/Text';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")}/>
      <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
          <View style={styles.userContainer}>
              <ListItem
              image={require("../assets/me.jpeg")}
              title="Ankit"
              subTitle="5 Listings"
              />
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
     color: colors.secondary,
     fontWeight: 'bold',
     fontSize: 20,
     marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 40
    }
});