import {
  View,
  Text,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Colors from '../constants/colors';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width / 2,
          height: height / 3,
          shadowColor: Colors.primary,
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 20,
          zIndex: 99,
          borderWidth: Platform.OS === 'android' ? 1 : 0,
          borderColor: rgb(38, 196, 133),
        }}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Text numberOfLines={1} style={styles.text}>
        {item.original_title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width, alignItems: 'center'},
  text: {
    marginTop: 10,
    fontSize: width * 0.04,
    color: Colors.primary,
    fontFamily: 'Metamorphous',
    textAlign: 'center',
  },
});

export default CarouselItem;
