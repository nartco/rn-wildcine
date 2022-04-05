import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCarousel} from '../redux/action/homeAction';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Colors from '../constants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import Error from '../components/Error';

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch();
  const refCarousel = useRef();
  const carouselMovies = useSelector(state => state.home.carouselMovies);
  const loader = useSelector(state => state.home.loader);

  useEffect(() => {
    dispatch(getCarousel());
    MaterialIcons.loadFont();

    // return () => {
    //   second
    // }
  }, []);

  const onPressHandler = () => {
    return dispatch(getCarousel());
  };

  if (loader) {
    return <Loader onPressHandler={onPressHandler} />;
  }

  if (carouselMovies && carouselMovies.hasOwnProperty('err')) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Carousel data={carouselMovies} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
});

export default HomeScreen;
