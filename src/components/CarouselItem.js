import {
  View,
  Text,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import fetchColors from './fetchColors';
import Colors from '../constants/colors';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item, navigation}) => {
  const [textColor, setTextColor] = useState(Colors.primary);
  const uri = `https://image.tmdb.org/t/p/original/${item.poster_path}`;

  useEffect(() => {
    fetchColors(setTextColor, uri);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <View
          style={{
            ...styles.imageContainer,
            ...{
              shadowColor:
                Platform.OS === 'android'
                  ? textColor.vibrant
                  : textColor.secondary,
              borderColor: textColor.vibrant,
            },
          }}>
          <Image
            source={{
              uri,
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </TouchableOpacity>
      {/* <Text numberOfLines={1} style={styles.text}>
        {item.original_title}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width, alignItems: 'center', marginTop: 10},
  imageContainer: {
    width: width / 2,
    height: height / 3,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 2,

    borderWidth: Platform.OS === 'android' ? 0.5 : 0,
    borderColor: 'rgba(38, 196, 133,0.4)',
  },
  text: {
    marginTop: 15,
    fontSize: width * 0.04,
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Varela Round' : 'VarelaRound-Regular',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});

export default CarouselItem;
