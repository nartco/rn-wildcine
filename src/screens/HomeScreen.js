import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCarousel} from '../redux/action/homeAction';

import Colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import Error from '../components/Error';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const refCarousel = useRef();
  const carouselMovies = useSelector(state => state.home.carouselMovies);
  const loader = useSelector(state => state.home.loader);

  useEffect(() => {
    dispatch(getCarousel(['top_rated', 'popular', 'upcoming']));
    MaterialIcons.loadFont();

    // return () => {
    //   second
    // }
  }, []);

  const onPressHandler = () => {
    return dispatch(getCarousel(['top_rated', 'popular', 'upcoming']));
  };

  if (loader) {
    return <Loader onPressHandler={onPressHandler} />;
  }

  if (carouselMovies && carouselMovies.hasOwnProperty('err')) {
    return <Error />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top Rated</Text>
      </View>
      <Carousel
        data={carouselMovies.top_rated}
        navigation={navigation}
        autoplay={true}
        loop={true}
        firstItem={1}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Upcoming</Text>
      </View>
      <Carousel
        data={carouselMovies.upcoming}
        navigation={navigation}
        autoplay={false}
        loop={false}
        firstItem={2}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Popular</Text>
      </View>
      <Carousel
        data={carouselMovies.popular}
        navigation={navigation}
        autoplay={false}
        loop={false}
        firstItem={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
    fontFamily: 'Metamorphous',
    padding: 10,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: Colors.primary,
    borderRadius: 10,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
});

export default HomeScreen;
